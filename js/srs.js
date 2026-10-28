/*
 * Spaced-repetition engine + persistence.
 *
 * A lightweight SM-2 variant. Every card you rate gets an interval (days until
 * you see it again) and an ease factor. Ratings:
 *   1 Again — forgot it; it comes back later in this same session
 *   2 Hard  — got it, but barely
 *   3 Good  — got it
 *   4 Easy  — knew it instantly
 *
 * All progress is stored in localStorage on this device. Use Settings → Export
 * to move it to another device.
 */
window.SRS = (() => {
  const KEY = 'pa-recall:v1';
  const MASTERED_DAYS = 21;

  const defaults = () => ({
    cards: {}, // id -> { reps, interval, ease, due, lapses, last }
    days: {}, // 'YYYY-MM-DD' -> number of cards reviewed
    daily: null, // { date, queue: [ids], done: [ids], total }
    settings: { dailyGoal: 25, courses: null, theme: 'auto' },
  });

  let state = load();

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return defaults();
      const parsed = JSON.parse(raw);
      const base = defaults();
      return { ...base, ...parsed, settings: { ...base.settings, ...parsed.settings } };
    } catch {
      return defaults();
    }
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      /* storage unavailable (private mode) — progress lasts for this visit only */
    }
  }

  // ---- dates (local calendar days, stored as YYYY-MM-DD) ----
  const pad = (n) => String(n).padStart(2, '0');
  const fmtDate = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const today = () => fmtDate(new Date());
  function addDays(dateStr, n) {
    const [y, m, d] = dateStr.split('-').map(Number);
    return fmtDate(new Date(y, m - 1, d + n));
  }

  // ---- scheduling ----
  function nextInterval(card, rating) {
    const c = card || { reps: 0, interval: 0, ease: 2.5 };
    if (rating === 1) return 0;
    if (c.reps === 0) return [0, 0, 1, 1, 4][rating];
    if (c.reps === 1 && rating === 3) return 3;
    if (rating === 2) return Math.max(1, Math.round(c.interval * 1.2));
    if (rating === 3) return Math.max(c.interval + 1, Math.round(c.interval * c.ease));
    return Math.max(c.interval + 2, Math.round(c.interval * c.ease * 1.3));
  }

  function rate(id, rating) {
    const c = state.cards[id] || { reps: 0, interval: 0, ease: 2.5, lapses: 0 };
    const interval = nextInterval(c, rating);
    const easeDelta = [0, -0.2, -0.15, 0, 0.15][rating];
    c.ease = Math.min(3, Math.max(1.3, c.ease + easeDelta));
    if (rating === 1) {
      if (c.reps > 0) c.lapses += 1;
      c.reps = 0;
    } else {
      c.reps += 1;
    }
    c.interval = interval;
    c.due = addDays(today(), Math.max(interval, rating === 1 ? 0 : 1));
    c.last = today();
    state.cards[id] = c;
    state.days[today()] = (state.days[today()] || 0) + 1;
    save();
  }

  function label(days) {
    if (days <= 0) return 'soon';
    if (days < 30) return `${days}d`;
    if (days < 365) return `${Math.round(days / 30)}mo`;
    return `${(days / 365).toFixed(1)}y`;
  }

  function preview(id) {
    const c = state.cards[id];
    return [1, 2, 3, 4].map((r) => label(nextInterval(c, r)));
  }

  function status(id) {
    const c = state.cards[id];
    if (!c || !c.last) return 'new';
    return c.interval >= MASTERED_DAYS ? 'mastered' : 'learning';
  }

  // ---- daily queue ----
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  /** Build (or reuse) today's queue: due reviews first, then new cards, capped at the daily goal. */
  function daily(allCards, { extra = 0 } = {}) {
    const t = today();
    if (state.daily && state.daily.date === t && !extra) return state.daily;

    const enabled = state.settings.courses;
    const pool = allCards.filter((c) => !enabled || enabled.includes(c.course));
    const already = state.daily && state.daily.date === t ? state.daily : null;
    const seen = new Set(already ? [...already.queue, ...already.done] : []);
    const limit = extra || state.settings.dailyGoal;

    const due = pool
      .filter((c) => state.cards[c.id] && state.cards[c.id].due <= t && !seen.has(c.id))
      .sort((a, b) => state.cards[a.id].due.localeCompare(state.cards[b.id].due));

    // New cards: round-robin across courses so each day mixes all classes.
    const byCourse = {};
    pool
      .filter((c) => !state.cards[c.id] && !seen.has(c.id))
      .forEach((c) => (byCourse[c.course] = byCourse[c.course] || []).push(c));
    const fresh = [];
    const lists = Object.values(byCourse);
    for (let i = 0; lists.some((l) => i < l.length); i++) {
      lists.forEach((l) => l[i] && fresh.push(l[i]));
    }

    const picked = [...due, ...fresh].slice(0, limit).map((c) => c.id);
    const queue = shuffle(picked);

    state.daily = already
      ? { ...already, queue: [...already.queue, ...queue], total: already.total + queue.length }
      : { date: t, queue, done: [], total: queue.length };
    save();
    return state.daily;
  }

  /** Advance the daily queue after rating its front card. */
  function advanceDaily(id, rating) {
    const d = state.daily;
    d.queue = d.queue.filter((q) => q !== id);
    if (rating === 1) d.queue.splice(Math.min(3, d.queue.length), 0, id);
    else d.done.push(id);
    save();
  }

  function streak() {
    let n = 0;
    let day = today();
    if (!state.days[day]) day = addDays(day, -1);
    while (state.days[day]) {
      n += 1;
      day = addDays(day, -1);
    }
    return n;
  }

  return {
    get state() {
      return state;
    },
    save,
    today,
    rate,
    preview,
    status,
    daily,
    advanceDaily,
    streak,
    shuffle,
    exportJSON: () => JSON.stringify(state, null, 2),
    importJSON(text) {
      const parsed = JSON.parse(text);
      if (!parsed || typeof parsed.cards !== 'object') throw new Error('Not a PA Recall backup');
      state = { ...defaults(), ...parsed, settings: { ...defaults().settings, ...parsed.settings } };
      save();
    },
    reset() {
      const settings = state.settings;
      state = { ...defaults(), settings };
      save();
    },
  };
})();
