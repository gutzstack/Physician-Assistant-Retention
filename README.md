# PA Recall

Daily spaced-repetition flashcards for PA school — Year 1, Semester 1.

- **Medical History & Physical Exam**
- **Medical Physiology**
- **Anatomy**

Each class is split into **sections** (one per lecture / PowerPoint). Every day the
home page builds a review of **25 cards** (adjustable from 10–50 in Settings),
mixing cards that are due for review with new ones from all three classes.

## How it works

1. Open the site and hit **Start review**.
2. Read the question, try to recall the answer, then tap the card (or press <kbd>Space</kbd>) to flip it.
3. Rate how well you knew it — <kbd>1</kbd> Again · <kbd>2</kbd> Hard · <kbd>3</kbd> Good · <kbd>4</kbd> Easy.

Cards you know well get pushed further out (1 day → 3 days → 1 week → …); cards
you miss come back later in the same session and again tomorrow. A card counts as
**mastered** once its review interval reaches 3 weeks.

You can also open any class and **Study** or **Browse** a single section, which is
handy right before an exam.

Progress is saved in your browser. Use **Settings → Export / Import** to move it
between devices.

## Running it

No build step and no install. Either:

- open `index.html` directly in a browser, or
- host it free with **GitHub Pages** (Settings → Pages → Deploy from branch → `/ (root)`).

## Adding lecture material

Drop the original PowerPoints / notes into `materials/<class>/`, then the cards
get written into the matching deck file:

| Class | Slides go in | Cards live in |
| --- | --- | --- |
| Medical History & Physical Exam | `materials/history-physical/` | `data/decks/history-physical.js` |
| Medical Physiology | `materials/physiology/` | `data/decks/physiology.js` |
| Anatomy | `materials/anatomy/` | `data/decks/anatomy.js` |

Each lecture becomes one section:

```js
PA.addSections('anatomy', [
  {
    title: 'Upper Limb',
    source: 'Lecture 04 – Upper Limb.pptx',
    cards: [
      { front: 'Name the four **rotator cuff** muscles.', back: '- Supraspinatus\n- Infraspinatus\n- Teres minor\n- Subscapularis' },
      { front: 'Label this structure.', back: 'Brachial plexus', image: 'assets/images/brachial-plexus.png' },
    ],
  },
]);
```

Card text supports `**bold**`, `*italic*`, `- bullet` lines and blank-line paragraphs.
Images go in `assets/images/`.

The current cards are marked `sample: true` and will be replaced with real
lecture content.

## Project layout

```
index.html            page shell
css/styles.css        all styling (light + dark)
js/srs.js             spaced-repetition scheduling + saved progress
js/app.js             pages: home, class, study session, settings
data/courses.js       the three classes (name, color, icon)
data/decks/*.js       flashcards, one file per class
materials/            original slides and notes
assets/images/        images used on cards
```
