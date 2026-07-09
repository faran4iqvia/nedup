export type CourseLevel = {
  id: string;
  label: string;
  lessonIds: string[];
  reviewId: string;
  cheatSheetPath?: string;
};

/** All trackable main-lesson slugs (excludes intros and cheat sheets). */
export const COURSE_LEVELS: CourseLevel[] = [
  {
    id: 'a0',
    label: 'A0',
    reviewId: 'a0/review-and-test',
    cheatSheetPath: '/notes/a0/cheat-sheet',
    lessonIds: [
      'a0/01-greetings-and-introductions',
      'a0/02-alphabet-and-spelling',
      'a0/03-numbers-0-20-and-age',
      'a0/04-pronouns-and-zijn',
      'a0/05-hebben-and-everyday-things',
      'a0/06-basic-questions',
      'a0/07-numbers-21-100-and-money',
      'a0/08-days-months-and-dates',
      'a0/09-where-do-you-live',
      'a0/10-ordering-food-and-drink',
      'a0/11-telling-time-and-reading-the-clock',
      'a0/12-de-het-primer',
    ],
  },
  {
    id: 'a1',
    label: 'A1',
    reviewId: 'a1/review-and-test',
    cheatSheetPath: '/notes/a1/cheat-sheet',
    lessonIds: Array.from({ length: 21 }, (_, i) => {
      const n = String(i + 1).padStart(2, '0');
      const names = [
        'daily-routines',
        'word-order-svo',
        'negation',
        'family',
        'possessives',
        'food-and-drink',
        'at-the-restaurant',
        'shopping',
        'demonstratives',
        'plural-nouns',
        'adjectives',
        'more-present-verbs',
        'housing',
        'hobbies',
        'transport',
        'weather',
        'body-health',
        'simple-past-regular',
        'simple-past-irregular',
        'reflexive-verbs',
        'separable-verbs',
      ];
      return `a1/${n}-${names[i]}`;
    }),
  },
  {
    id: 'a2',
    label: 'A2',
    reviewId: 'a2/review-and-test',
    cheatSheetPath: '/notes/a2/cheat-sheet',
    lessonIds: [
      'a2/01-past-tense-depth',
      'a2/02-perfect-tense-intro',
      'a2/03-perfect-irregular',
      'a2/04-modals-in-depth',
      'a2/05-opinions',
      'a2/06-comparatives',
      'a2/07-superlatives',
      'a2/08-describing-people',
      'a2/09-describing-places',
      'a2/10-prepositions-place',
      'a2/11-prepositions-time',
      'a2/12-relative-clauses',
      'a2/13-om-te',
      'a2/14-subordinate-want-omdat',
      'a2/15-indirect-objects',
      'a2/16-er-constructions',
      'a2/17-workplace',
      'a2/18-culture-traditions',
      'a2/19-appointments',
      'a2/20-conditional-als',
      'a2/21-passive-intro',
    ],
  },
  {
    id: 'b1',
    label: 'B1',
    reviewId: 'b1/review-and-test',
    cheatSheetPath: '/notes/b1/cheat-sheet',
    lessonIds: [
      'b1/01-conjunctions-overview',
      'b1/02-relative-clauses',
      'b1/03-waar-plus-preposition',
      'b1/04-future-with-zullen',
      'b1/05-zou-politeness-and-advice',
      'b1/06-hypotheticals-with-als',
      'b1/07-conditional-past',
      'b1/08-passive-with-worden',
      'b1/09-passive-with-zijn',
      'b1/10-indirect-speech',
      'b1/11-te-plus-infinitive',
      'b1/12-word-order-masterclass',
      'b1/13-nuanced-opinions',
      'b1/14-agreeing-and-debating',
      'b1/15-reading-the-news',
      'b1/16-formal-letters-and-emails',
      'b1/17-work-meetings-and-applications',
      'b1/18-education-and-learning',
      'b1/19-society-and-environment',
      'b1/20-feelings-and-relationships',
      'b1/21-dutch-culture-and-directness',
      'b1/22-storytelling-past-tenses',
      'b1/23-diminutives',
      'b1/24-particles-masterclass',
      'b1/25-idioms-and-expressions',
      'b1/26-fast-speech-strategies',
      'b1/27-practical-netherlands',
      'b1/28-bringing-it-together',
    ],
  },
];

export const ALL_LESSON_IDS = COURSE_LEVELS.flatMap((level) => [
  ...level.lessonIds,
  level.reviewId,
]);

export const REVIEW_IDS = COURSE_LEVELS.map((l) => l.reviewId);
