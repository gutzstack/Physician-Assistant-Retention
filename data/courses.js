/*
 * Course registry.
 *
 * Each course gets a color + icon. Lecture content lives in data/decks/<course>.js,
 * where each lecture/PowerPoint becomes one "section" of flashcards.
 */
window.PA = {
  semester: 'Year 1 · Semester 1',
  courses: [
    {
      id: 'history-physical',
      name: 'Medical History & Physical Exam',
      short: 'H&P',
      color: '#d4704a',
      icon: 'clipboard',
      blurb: 'Interviewing, documentation, and the head-to-toe exam.',
    },
    {
      id: 'physiology',
      name: 'Medical Physiology',
      short: 'Physio',
      color: '#2a9d8f',
      icon: 'pulse',
      blurb: 'How the body works — from cell membranes to organ systems.',
    },
    {
      id: 'anatomy',
      name: 'Anatomy',
      short: 'Anatomy',
      color: '#7b5ea7',
      icon: 'bone',
      blurb: 'Structures, relationships, innervation, and blood supply.',
    },
  ],
  sections: [],

  /**
   * Register lecture sections for a course.
   *   PA.addSections('anatomy', [
   *     { title: 'Upper Limb', source: 'Lecture 04 - Upper Limb.pptx', cards: [
   *       { front: 'Question', back: 'Answer', image: 'assets/images/optional.png' },
   *     ]},
   *   ]);
   */
  addSections(courseId, sections) {
    sections.forEach((s) => this.sections.push({ ...s, course: courseId }));
  },
};
