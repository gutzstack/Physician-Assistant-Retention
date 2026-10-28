(() => {
  const $app = document.getElementById('app');

  // ---------- data ----------
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  function hash(str) {
    let h = 5381;
    for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) >>> 0;
    return h.toString(36);
  }

  const courses = PA.courses.map((c) => ({ ...c, sections: [] }));
  const courseById = Object.fromEntries(courses.map((c) => [c.id, c]));
  const cards = [];
  const cardById = {};

  PA.sections.forEach((s) => {
    const course = courseById[s.course];
    if (!course) return console.warn(`Unknown course "${s.course}" for section "${s.title}"`);
    const section = { ...s, id: s.id || slug(s.title), cards: [] };
    s.cards.forEach((raw) => {
      const card = {
        ...raw,
        id: raw.id || `${s.course}:${hash(`${section.id}|${raw.front}`)}`,
        course: s.course,
        section: section.id,
      };
      section.cards.push(card);
      cards.push(card);
      cardById[card.id] = card;
    });
    course.sections.push(section);
  });

  // ---------- helpers ----------
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]);

  /** Tiny formatter: **bold**, *italic*, "- " bullet lines, blank-line paragraphs. */
  function fmt(text) {
    const inline = (s) =>
      esc(s)
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>');
    return String(text)
      .split(/\n{2,}/)
      .map((block) => {
        const lines = block.split('\n');
        if (lines.every((l) => /^\s*[-•]\s+/.test(l))) {
          return `<ul>${lines.map((l) => `<li>${inline(l.replace(/^\s*[-•]\s+/, ''))}</li>`).join('')}</ul>`;
        }
        let html = '';
        let list = [];
        const flush = () => {
          if (list.length) html += `<ul>${list.map((l) => `<li>${inline(l)}</li>`).join('')}</ul>`;
          list = [];
        };
        lines.forEach((l) => {
          if (/^\s*[-•]\s+/.test(l)) list.push(l.replace(/^\s*[-•]\s+/, ''));
          else {
            flush();
            html += `<p>${inline(l)}</p>`;
          }
        });
        flush();
        return html;
      })
      .join('');
  }

  const ICONS = {
    clipboard:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="14" height="17" rx="2.5"/><path d="M9 2.8h6v3.4H9z"/><path d="M8.8 11h6.4M8.8 15h4"/></svg>',
    pulse:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 12.5h4l2.2-5.5 4.2 11 2.4-5.5h6.2"/></svg>',
    bone:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"/></svg>',
    flame:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21c-3.9 0-6.5-2.6-6.5-6.2 0-3.2 2.2-5.3 3.6-7.4.4 1.6 1.3 2.6 2.4 3 .2-3 1.4-5.6 3.5-7.4.3 2.8 1.8 4.5 2.9 6.3.9 1.4 1.6 3 1.6 5 0 3.7-2.6 6.7-7.5 6.7Z"/></svg>',
    check:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
    layers:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
    settings:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></svg>',
    upload:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V4M7.5 8.5 12 4l4.5 4.5M5 15v3.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V15"/></svg>',
  };

  const courseStats = (list) => {
    const s = { total: list.length, new: 0, learning: 0, mastered: 0 };
    list.forEach((c) => (s[SRS.status(c.id)] += 1));
    s.seenPct = s.total ? Math.round(((s.learning + s.mastered) / s.total) * 100) : 0;
    s.masteredPct = s.total ? Math.round((s.mastered / s.total) * 100) : 0;
    return s;
  };

  const progressBar = (st, color) => `
    <div class="bar" style="--c:${color}" role="img" aria-label="${st.masteredPct}% mastered, ${st.seenPct}% studied">
      <span class="bar-seen" style="width:${st.seenPct}%"></span>
      <span class="bar-mastered" style="width:${st.masteredPct}%"></span>
    </div>`;

  function greeting() {
    const h = new Date().getHours();
    return h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening';
  }

  // ---------- theme ----------
  function applyTheme() {
    const t = SRS.state.settings.theme;
    if (t === 'auto') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', t);
  }

  // ---------- views ----------
  function home() {
    const d = SRS.daily(cards);
    d.queue = d.queue.filter((id) => cardById[id]);
    const done = d.done.length;
    const total = Math.max(d.total, done + d.queue.length);
    const left = d.queue.length;
    const pct = total ? done / total : 0;
    const R = 52;
    const C = 2 * Math.PI * R;
    const all = courseStats(cards);
    const streak = SRS.streak();

    let heroTitle;
    let heroText;
    let heroBtn;
    if (!cards.length) {
      heroTitle = 'No cards yet';
      heroText = 'Add your lecture slides and they\'ll show up here as daily flashcards.';
      heroBtn = '';
    } else if (left === 0 && total > 0) {
      heroTitle = 'You\'re done for today';
      heroText = `${done} cards reviewed. Come back tomorrow — spacing it out is what makes it stick.`;
      heroBtn = `<button class="btn btn-ghost" data-action="more">Study 10 more</button>`;
    } else if (left === 0) {
      heroTitle = 'Nothing due today';
      heroText = 'Every card is scheduled for later. Enjoy the break, or cram a section below.';
      heroBtn = '';
    } else {
      heroTitle = done ? 'Pick up where you left off' : 'Today\'s review';
      heroText = `<strong>${left}</strong> card${left === 1 ? '' : 's'} waiting, mixed across your ${courses.length} classes.`;
      heroBtn = `<a class="btn btn-primary" href="#/study/daily">${done ? 'Continue' : 'Start review'} <span aria-hidden="true">→</span></a>`;
    }

    $app.innerHTML = `
      <section class="intro fade-in">
        <p class="eyebrow">${esc(PA.semester)}</p>
        <h1>${greeting()}.</h1>
      </section>

      <section class="hero card-surface fade-in">
        <div class="ring" aria-label="${done} of ${total} reviewed today">
          <svg viewBox="0 0 120 120">
            <circle class="ring-track" cx="60" cy="60" r="${R}"/>
            <circle class="ring-fill" cx="60" cy="60" r="${R}"
              stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - pct)}"/>
          </svg>
          <div class="ring-label"><strong>${done}</strong><span>of ${total}</span></div>
        </div>
        <div class="hero-body">
          <h2>${heroTitle}</h2>
          <p>${heroText}</p>
          <div class="hero-actions">${heroBtn}</div>
        </div>
      </section>

      <section class="stats fade-in">
        <div class="stat"><span class="stat-icon flame">${ICONS.flame}</span><div><strong>${streak}</strong><span>day streak</span></div></div>
        <div class="stat"><span class="stat-icon">${ICONS.layers}</span><div><strong>${all.total}</strong><span>total cards</span></div></div>
        <div class="stat"><span class="stat-icon ok">${ICONS.check}</span><div><strong>${all.mastered}</strong><span>mastered</span></div></div>
      </section>

      <section class="fade-in">
        <div class="section-head"><h2>Your classes</h2></div>
        <div class="course-grid">
          ${courses
            .map((c) => {
              const list = c.sections.flatMap((s) => s.cards);
              const st = courseStats(list);
              return `
              <a class="course-card card-surface" href="#/course/${c.id}" style="--c:${c.color}">
                <span class="course-icon">${ICONS[c.icon] || ''}</span>
                <h3>${esc(c.name)}</h3>
                <p class="muted">${esc(c.blurb)}</p>
                <div class="course-meta">
                  <span>${c.sections.length} section${c.sections.length === 1 ? '' : 's'}</span>
                  <span>${st.total} cards</span>
                </div>
                ${progressBar(st, c.color)}
              </a>`;
            })
            .join('')}
        </div>
      </section>
    `;
  }

  function coursePage(id) {
    const c = courseById[id];
    if (!c) return notFound();
    const list = c.sections.flatMap((s) => s.cards);
    const st = courseStats(list);
    const hasSamples = c.sections.some((s) => s.sample);

    $app.innerHTML = `
      <a class="crumb" href="#/">${ICONS.back} All classes</a>
      <header class="course-header fade-in" style="--c:${c.color}">
        <span class="course-icon lg">${ICONS[c.icon] || ''}</span>
        <div>
          <p class="eyebrow">${esc(c.short)}</p>
          <h1>${esc(c.name)}</h1>
          <p class="muted">${st.total} cards · ${st.mastered} mastered · ${st.learning} learning · ${st.new} new</p>
        </div>
      </header>

      ${
        hasSamples
          ? `<div class="notice fade-in">${ICONS.upload}<p>These are <strong>sample cards</strong> to show how things work. They'll be replaced with cards built from your actual lecture slides.</p></div>`
          : ''
      }

      <section class="section-list fade-in">
        ${
          c.sections.length
            ? c.sections
                .map((s, i) => {
                  const sst = courseStats(s.cards);
                  return `
              <article class="section-item card-surface" style="--c:${c.color}">
                <div class="section-top">
                  <span class="section-num">${String(i + 1).padStart(2, '0')}</span>
                  <div class="section-info">
                    <h3>${esc(s.title)}</h3>
                    <p class="muted small">${esc(s.source || '')}${s.source ? ' · ' : ''}${s.cards.length} cards</p>
                  </div>
                  <div class="section-actions">
                    <button class="btn btn-ghost btn-sm" data-action="browse" data-section="${s.id}">Browse</button>
                    <a class="btn btn-primary btn-sm" href="#/study/${c.id}/${s.id}">Study</a>
                  </div>
                </div>
                ${progressBar(sst, c.color)}
                <div class="browse" id="browse-${s.id}" hidden>
                  ${s.cards
                    .map(
                      (card) => `
                    <div class="browse-row">
                      <div class="browse-q">${fmt(card.front)}</div>
                      <div class="browse-a">${fmt(card.back)}</div>
                      <span class="pill pill-${SRS.status(card.id)}">${SRS.status(card.id)}</span>
                    </div>`
                    )
                    .join('')}
                </div>
              </article>`;
                })
                .join('')
            : `<div class="empty card-surface"><p>No lectures added yet.</p><p class="muted small">Drop the PowerPoints in <code>materials/${c.id}/</code> and they'll become sections here.</p></div>`
        }
      </section>
    `;
  }

  // ---------- study session ----------
  let session = null;

  function startSession(mode, courseId, sectionId) {
    if (mode === 'daily') {
      const d = SRS.daily(cards);
      d.queue = d.queue.filter((id) => cardById[id]);
      session = { mode, title: 'Daily review', color: null, back: '#/' };
    } else {
      const c = courseById[courseId];
      const s = c && c.sections.find((x) => x.id === sectionId);
      if (!s) return notFound();
      session = {
        mode,
        title: s.title,
        color: c.color,
        back: `#/course/${c.id}`,
        queue: SRS.shuffle(s.cards.map((x) => x.id)),
        done: [],
      };
      session.total = session.queue.length;
    }
    session.flipped = false;
    renderStudy();
  }

  const sessionQueue = () => (session.mode === 'daily' ? SRS.state.daily.queue : session.queue);
  const sessionDone = () => (session.mode === 'daily' ? SRS.state.daily.done.length : session.done.length);
  const sessionTotal = () =>
    session.mode === 'daily' ? Math.max(SRS.state.daily.total, sessionDone() + sessionQueue().length) : session.total;

  function renderStudy() {
    const queue = sessionQueue();
    const done = sessionDone();
    const total = sessionTotal();
    const id = queue[0];

    if (!id) return renderComplete(done);

    const card = cardById[id];
    const course = courseById[card.course];
    const section = course.sections.find((s) => s.id === card.section);
    const previews = SRS.preview(id);
    const pct = total ? (done / total) * 100 : 0;

    $app.innerHTML = `
      <div class="study" style="--c:${course.color}">
        <div class="study-top">
          <a class="crumb" href="${session.back}">${ICONS.back} ${session.mode === 'daily' ? 'Home' : 'Back'}</a>
          <span class="study-count">${done} / ${total}</span>
        </div>
        <div class="study-progress"><span style="width:${pct}%"></span></div>

        <div class="flip ${session.flipped ? 'flipped' : ''}" id="flip" tabindex="0" role="button"
             aria-label="${session.flipped ? 'Answer shown' : 'Show answer'}">
          <div class="flip-inner">
            <div class="face front card-surface">
              <div class="face-tag"><span class="dot"></span>${esc(course.short)} · ${esc(section.title)}</div>
              <div class="face-body">${fmt(card.front)}</div>
              <div class="face-hint">Tap or press <kbd>Space</kbd> to reveal</div>
            </div>
            <div class="face back card-surface">
              <div class="face-tag"><span class="dot"></span>Answer</div>
              <div class="face-body">
                ${fmt(card.back)}
                ${card.image ? `<img class="face-img" src="${esc(card.image)}" alt="">` : ''}
              </div>
            </div>
          </div>
        </div>

        <div class="rate ${session.flipped ? 'show' : ''}" aria-hidden="${!session.flipped}">
          ${['Again', 'Hard', 'Good', 'Easy']
            .map(
              (l, i) => `
            <button class="rate-btn r${i + 1}" data-rate="${i + 1}" ${session.flipped ? '' : 'tabindex="-1"'}>
              <span class="rate-label">${l}</span>
              <span class="rate-when">${previews[i]}</span>
              <kbd>${i + 1}</kbd>
            </button>`
            )
            .join('')}
        </div>
      </div>
    `;
  }

  function renderComplete(done) {
    const isDaily = session.mode === 'daily';
    $app.innerHTML = `
      <section class="complete card-surface fade-in">
        <div class="complete-badge">${ICONS.check}</div>
        <h1>${isDaily ? 'Daily review complete' : 'Section complete'}</h1>
        <p class="muted">${done} card${done === 1 ? '' : 's'} reviewed${
          isDaily ? ` · ${SRS.streak()} day streak` : ''
        }. Nice work.</p>
        <div class="hero-actions center">
          <a class="btn btn-primary" href="${session.back}">${isDaily ? 'Back home' : 'Back to class'}</a>
          ${isDaily ? '<button class="btn btn-ghost" data-action="more">Study 10 more</button>' : ''}
        </div>
      </section>
    `;
  }

  function flip() {
    if (!session || session.flipped) return;
    session.flipped = true;
    document.getElementById('flip')?.classList.add('flipped');
    const rate = document.querySelector('.rate');
    rate?.classList.add('show');
    rate?.setAttribute('aria-hidden', 'false');
    rate?.querySelectorAll('button').forEach((b) => b.removeAttribute('tabindex'));
  }

  function rate(r) {
    if (!session || !session.flipped) return;
    const id = sessionQueue()[0];
    if (!id) return;
    SRS.rate(id, r);
    if (session.mode === 'daily') {
      SRS.advanceDaily(id, r);
    } else {
      session.queue.shift();
      if (r === 1) session.queue.splice(Math.min(3, session.queue.length), 0, id);
      else session.done.push(id);
    }
    session.flipped = false;
    renderStudy();
  }

  // ---------- settings ----------
  function settingsPage() {
    const s = SRS.state.settings;
    const enabled = s.courses || courses.map((c) => c.id);
    $app.innerHTML = `
      <a class="crumb" href="#/">${ICONS.back} Home</a>
      <section class="intro fade-in"><h1>Settings</h1></section>

      <section class="settings card-surface fade-in">
        <div class="setting">
          <div>
            <h3>Daily goal</h3>
            <p class="muted small">How many cards to review each day.</p>
          </div>
          <div class="goal">
            <input type="range" id="goal" min="10" max="50" step="5" value="${s.dailyGoal}">
            <output id="goal-out">${s.dailyGoal}</output>
          </div>
        </div>

        <div class="setting">
          <div>
            <h3>Classes in daily review</h3>
            <p class="muted small">Turn a class off to leave it out of the daily mix.</p>
          </div>
          <div class="checks">
            ${courses
              .map(
                (c) => `
              <label class="check" style="--c:${c.color}">
                <input type="checkbox" data-course="${c.id}" ${enabled.includes(c.id) ? 'checked' : ''}>
                <span>${esc(c.short)}</span>
              </label>`
              )
              .join('')}
          </div>
        </div>

        <div class="setting">
          <div>
            <h3>Appearance</h3>
            <p class="muted small">Follow your device, or pick one.</p>
          </div>
          <div class="segmented" role="radiogroup">
            ${['auto', 'light', 'dark']
              .map(
                (t) => `<button role="radio" aria-checked="${s.theme === t}" data-theme-opt="${t}">${t[0].toUpperCase() + t.slice(1)}</button>`
              )
              .join('')}
          </div>
        </div>

        <div class="setting">
          <div>
            <h3>Backup</h3>
            <p class="muted small">Progress is saved in this browser. Export it to move to another device.</p>
          </div>
          <div class="row-actions">
            <button class="btn btn-ghost btn-sm" data-action="export">Export</button>
            <label class="btn btn-ghost btn-sm">Import<input type="file" id="import" accept="application/json" hidden></label>
          </div>
        </div>

        <div class="setting danger">
          <div>
            <h3>Reset progress</h3>
            <p class="muted small">Clears every review and starts all cards as new.</p>
          </div>
          <button class="btn btn-danger btn-sm" data-action="reset">Reset</button>
        </div>
      </section>
    `;
  }

  /** Changing what goes into the daily review rebuilds today's queue if nothing's been reviewed yet. */
  function settingsChanged() {
    const d = SRS.state.daily;
    if (d && d.done.length === 0) SRS.state.daily = null;
    SRS.save();
  }

  function notFound() {
    $app.innerHTML = `<section class="empty card-surface"><p>That page doesn't exist.</p><a class="btn btn-primary" href="#/">Go home</a></section>`;
  }

  // ---------- routing ----------
  function route() {
    const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    if (parts[0] !== 'study') session = null;
    document.querySelectorAll('.nav a').forEach((a) => {
      a.classList.toggle('active', a.getAttribute('href') === `#/${parts[0] || ''}`);
    });
    window.scrollTo(0, 0);

    if (!parts.length) return home();
    if (parts[0] === 'course') return coursePage(parts[1]);
    if (parts[0] === 'study' && parts[1] === 'daily') return startSession('daily');
    if (parts[0] === 'study') return startSession('section', parts[1], parts[2]);
    if (parts[0] === 'settings') return settingsPage();
    notFound();
  }

  // ---------- events ----------
  document.addEventListener('click', (e) => {
    const flipEl = e.target.closest('#flip');
    if (flipEl) return flip();

    const rateBtn = e.target.closest('[data-rate]');
    if (rateBtn) return rate(Number(rateBtn.dataset.rate));

    const themeBtn = e.target.closest('[data-theme-opt]');
    if (themeBtn) {
      SRS.state.settings.theme = themeBtn.dataset.themeOpt;
      SRS.save();
      applyTheme();
      return settingsPage();
    }

    const action = e.target.closest('[data-action]');
    if (!action) return;
    const a = action.dataset.action;

    if (a === 'browse') {
      const panel = document.getElementById(`browse-${action.dataset.section}`);
      panel.hidden = !panel.hidden;
      action.textContent = panel.hidden ? 'Browse' : 'Hide';
    } else if (a === 'more') {
      SRS.daily(cards, { extra: 10 });
      if (location.hash === '#/study/daily') route();
      else location.hash = '#/study/daily';
    } else if (a === 'export') {
      const blob = new Blob([SRS.exportJSON()], { type: 'application/json' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `pa-recall-backup-${SRS.today()}.json`;
      link.click();
      URL.revokeObjectURL(link.href);
    } else if (a === 'reset') {
      if (confirm('Reset all progress? This cannot be undone.')) {
        SRS.reset();
        location.hash = '#/';
      }
    }
  });

  document.addEventListener('input', (e) => {
    if (e.target.id === 'goal') {
      document.getElementById('goal-out').textContent = e.target.value;
    }
  });

  document.addEventListener('change', (e) => {
    const t = e.target;
    if (t.id === 'goal') {
      SRS.state.settings.dailyGoal = Number(t.value);
      settingsChanged();
    } else if (t.dataset.course) {
      const checked = [...document.querySelectorAll('[data-course]')].filter((x) => x.checked).map((x) => x.dataset.course);
      SRS.state.settings.courses = checked.length === courses.length ? null : checked;
      settingsChanged();
    } else if (t.id === 'import' && t.files[0]) {
      t.files[0].text().then((text) => {
        try {
          SRS.importJSON(text);
          applyTheme();
          alert('Progress imported.');
          location.hash = '#/';
        } catch (err) {
          alert(`Couldn't import that file: ${err.message}`);
        }
      });
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!session || e.metaKey || e.ctrlKey || e.altKey) return;
    if ((e.key === ' ' || e.key === 'Enter') && !session.flipped) {
      e.preventDefault();
      flip();
    } else if (session.flipped && ['1', '2', '3', '4'].includes(e.key)) {
      rate(Number(e.key));
    }
  });

  applyTheme();
  window.addEventListener('hashchange', route);
  route();
})();
