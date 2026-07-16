export type PronunciationLink = {
  href: string;
  label: string;
};

/** Main lesson slug → pronunciation reference pages (from Pronunciation Focus callouts). */
export const LESSON_PRONUNCIATION_LINKS: Record<string, PronunciationLink[]> = {
  'a0/01-greetings-and-introductions': [
    { href: '/notes/pronunciation/01-vowel-sounds', label: 'Vowel Sounds' },
    {
      href: '/notes/pronunciation/02-consonant-sounds',
      label: 'Consonant Sounds',
    },
  ],
  'a0/02-alphabet-and-spelling': [
    { href: '/notes/pronunciation/01-vowel-sounds', label: 'Vowel Sounds' },
  ],
  'a0/03-numbers-0-20-and-age': [
    { href: '/notes/pronunciation/01-vowel-sounds', label: 'Vowel Sounds' },
    {
      href: '/notes/pronunciation/02-consonant-sounds',
      label: 'Consonant Sounds',
    },
  ],
  'a0/04-pronouns-and-zijn': [
    { href: '/notes/pronunciation/01-vowel-sounds', label: 'Vowel Sounds' },
  ],
  'a0/05-hebben-and-everyday-things': [
    {
      href: '/notes/pronunciation/02-consonant-sounds',
      label: 'Consonant Sounds',
    },
  ],
  'a0/06-basic-questions': [
    { href: '/notes/pronunciation/01-vowel-sounds', label: 'Vowel Sounds' },
  ],
  'a0/07-numbers-21-100-and-money': [
    {
      href: '/notes/pronunciation/02-consonant-sounds',
      label: 'Consonant Sounds',
    },
  ],
  'a0/08-days-months-and-dates': [
    {
      href: '/notes/pronunciation/02-consonant-sounds',
      label: 'Consonant Sounds',
    },
    { href: '/notes/pronunciation/03-word-stress', label: 'Word Stress' },
  ],
  'a0/09-where-do-you-live': [
    {
      href: '/notes/pronunciation/02-consonant-sounds',
      label: 'Consonant Sounds',
    },
    { href: '/notes/pronunciation/03-word-stress', label: 'Word Stress' },
  ],
  'a0/10-ordering-food-and-drink': [
    { href: '/notes/pronunciation/01-vowel-sounds', label: 'Vowel Sounds' },
    {
      href: '/notes/pronunciation/02-consonant-sounds',
      label: 'Consonant Sounds',
    },
  ],
  'a0/11-telling-time-and-reading-the-clock': [
    {
      href: '/notes/pronunciation/02-consonant-sounds',
      label: 'Consonant Sounds',
    },
    { href: '/notes/pronunciation/03-word-stress', label: 'Word Stress' },
  ],
  'a0/12-de-het-primer': [
    { href: '/notes/pronunciation/03-word-stress', label: 'Word Stress' },
  ],
  'a0/13-nationalities-and-languages': [
    {
      href: '/notes/pronunciation/02-consonant-sounds',
      label: 'Consonant Sounds',
    },
  ],
  'a0/14-getting-by-survival-phrases': [
    { href: '/notes/pronunciation/03-word-stress', label: 'Word Stress' },
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'a1/01-daily-routines': [
    {
      href: '/notes/pronunciation/04-intonation-and-rhythm',
      label: 'Intonation and Rhythm',
    },
  ],
  'a1/02-word-order-svo': [
    {
      href: '/notes/pronunciation/04-intonation-and-rhythm',
      label: 'Intonation and Rhythm',
    },
  ],
  'a1/03-negation': [
    {
      href: '/notes/pronunciation/04-intonation-and-rhythm',
      label: 'Intonation and Rhythm',
    },
  ],
  'a1/04-family': [
    { href: '/notes/pronunciation/01-vowel-sounds', label: 'Vowel Sounds' },
  ],
  'a1/05-possessives': [
    { href: '/notes/pronunciation/03-word-stress', label: 'Word Stress' },
  ],
  'a1/06-food-and-drink': [
    { href: '/notes/pronunciation/03-word-stress', label: 'Word Stress' },
  ],
  'a1/07-at-the-restaurant': [
    {
      href: '/notes/pronunciation/02-consonant-sounds',
      label: 'Consonant Sounds',
    },
    { href: '/notes/pronunciation/03-word-stress', label: 'Word Stress' },
  ],
  'a1/08-shopping': [
    { href: '/notes/pronunciation/03-word-stress', label: 'Word Stress' },
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'a1/09-demonstratives': [
    { href: '/notes/pronunciation/03-word-stress', label: 'Word Stress' },
  ],
  'a1/10-plural-nouns': [
    { href: '/notes/pronunciation/01-vowel-sounds', label: 'Vowel Sounds' },
  ],
  'a1/11-adjectives': [
    { href: '/notes/pronunciation/01-vowel-sounds', label: 'Vowel Sounds' },
  ],
  'a1/12-more-present-verbs': [
    {
      href: '/notes/pronunciation/02-consonant-sounds',
      label: 'Consonant Sounds',
    },
  ],
  'a1/13-housing': [
    { href: '/notes/pronunciation/01-vowel-sounds', label: 'Vowel Sounds' },
  ],
  'a1/14-hobbies': [
    {
      href: '/notes/pronunciation/02-consonant-sounds',
      label: 'Consonant Sounds',
    },
  ],
  'a1/15-transport': [
    {
      href: '/notes/pronunciation/02-consonant-sounds',
      label: 'Consonant Sounds',
    },
  ],
  'a1/16-weather': [
    { href: '/notes/pronunciation/01-vowel-sounds', label: 'Vowel Sounds' },
  ],
  'a1/17-body-health': [
    { href: '/notes/pronunciation/01-vowel-sounds', label: 'Vowel Sounds' },
  ],
  'a1/18-simple-past-regular': [
    {
      href: '/notes/pronunciation/04-intonation-and-rhythm',
      label: 'Intonation and Rhythm',
    },
  ],
  'a1/19-simple-past-irregular': [
    {
      href: '/notes/pronunciation/04-intonation-and-rhythm',
      label: 'Intonation and Rhythm',
    },
  ],
  'a1/20-reflexive-verbs': [
    {
      href: '/notes/pronunciation/04-intonation-and-rhythm',
      label: 'Intonation and Rhythm',
    },
  ],
  'a1/21-separable-verbs': [
    {
      href: '/notes/pronunciation/04-intonation-and-rhythm',
      label: 'Intonation and Rhythm',
    },
  ],
  'a1/22-clothing-and-colours': [
    { href: '/notes/pronunciation/01-vowel-sounds', label: 'Vowel Sounds' },
    {
      href: '/notes/pronunciation/02-consonant-sounds',
      label: 'Consonant Sounds',
    },
  ],
  'a1/23-asking-and-giving-directions': [
    {
      href: '/notes/pronunciation/02-consonant-sounds',
      label: 'Consonant Sounds',
    },
  ],
  'a1/24-making-plans-and-suggestions': [
    {
      href: '/notes/pronunciation/02-consonant-sounds',
      label: 'Consonant Sounds',
    },
    {
      href: '/notes/pronunciation/04-intonation-and-rhythm',
      label: 'Intonation and Rhythm',
    },
  ],
  'a2/01-past-tense-depth': [
    {
      href: '/notes/pronunciation/04-intonation-and-rhythm',
      label: 'Intonation and Rhythm',
    },
  ],
  'a2/02-perfect-tense-intro': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'a2/03-perfect-irregular': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'a2/04-modals-in-depth': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'a2/05-opinions': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'a2/06-comparatives': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'a2/07-superlatives': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'a2/08-describing-people': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'a2/09-describing-places': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'a2/10-prepositions-place': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'a2/11-prepositions-time': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'a2/12-relative-clauses': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'a2/13-om-te': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'a2/14-subordinate-want-omdat': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'a2/15-indirect-objects': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'a2/16-er-constructions': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'a2/17-workplace': [
    { href: '/notes/pronunciation/03-word-stress', label: 'Word Stress' },
  ],
  'a2/18-culture-traditions': [
    { href: '/notes/pronunciation/01-vowel-sounds', label: 'Vowel Sounds' },
  ],
  'a2/19-appointments': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'a2/20-conditional-als': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'a2/21-passive-intro': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'a2/22-present-continuous-aan-het': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'a2/23-telephone-calls': [
    {
      href: '/notes/pronunciation/04-intonation-and-rhythm',
      label: 'Intonation and Rhythm',
    },
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'b1/01-conjunctions-overview': [
    {
      href: '/notes/pronunciation/04-intonation-and-rhythm',
      label: 'Intonation and Rhythm',
    },
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'b1/02-relative-clauses': [
    { href: '/notes/pronunciation/03-word-stress', label: 'Word Stress' },
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'b1/03-waar-plus-preposition': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'b1/04-future-with-zullen': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'b1/05-zou-politeness-and-advice': [
    {
      href: '/notes/pronunciation/04-intonation-and-rhythm',
      label: 'Intonation and Rhythm',
    },
  ],
  'b1/06-hypotheticals-with-als': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'b1/07-conditional-past': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'b1/08-passive-with-worden': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'b1/09-passive-with-zijn': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'b1/10-indirect-speech': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'b1/11-te-plus-infinitive': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'b1/12-word-order-masterclass': [
    {
      href: '/notes/pronunciation/04-intonation-and-rhythm',
      label: 'Intonation and Rhythm',
    },
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'b1/13-nuanced-opinions': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'b1/14-agreeing-and-debating': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'b1/15-reading-the-news': [
    { href: '/notes/pronunciation/03-word-stress', label: 'Word Stress' },
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
    {
      href: '/notes/pronunciation/06-regional-variation',
      label: 'Regional Variation',
    },
  ],
  'b1/16-formal-letters-and-emails': [
    { href: '/notes/pronunciation/03-word-stress', label: 'Word Stress' },
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'b1/17-work-meetings-and-applications': [
    { href: '/notes/pronunciation/03-word-stress', label: 'Word Stress' },
  ],
  'b1/18-education-and-learning': [
    { href: '/notes/pronunciation/03-word-stress', label: 'Word Stress' },
  ],
  'b1/19-society-and-environment': [
    { href: '/notes/pronunciation/03-word-stress', label: 'Word Stress' },
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'b1/20-feelings-and-relationships': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'b1/21-dutch-culture-and-directness': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
    {
      href: '/notes/pronunciation/06-regional-variation',
      label: 'Regional Variation',
    },
  ],
  'b1/22-storytelling-past-tenses': [
    { href: '/notes/pronunciation/03-word-stress', label: 'Word Stress' },
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'b1/23-diminutives': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'b1/24-particles-masterclass': [
    {
      href: '/notes/pronunciation/04-intonation-and-rhythm',
      label: 'Intonation and Rhythm',
    },
    {
      href: '/notes/pronunciation/06-regional-variation',
      label: 'Regional Variation',
    },
  ],
  'b1/25-idioms-and-expressions': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
  ],
  'b1/26-fast-speech-strategies': [
    {
      href: '/notes/pronunciation/04-intonation-and-rhythm',
      label: 'Intonation and Rhythm',
    },
    {
      href: '/notes/pronunciation/listening-and-register-choice',
      label: 'Listening and Register Choice',
    },
  ],
  'b1/27-practical-netherlands': [
    { href: '/notes/pronunciation/03-word-stress', label: 'Word Stress' },
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
    {
      href: '/notes/pronunciation/06-regional-variation',
      label: 'Regional Variation',
    },
  ],
  'b1/28-bringing-it-together': [
    {
      href: '/notes/pronunciation/05-connected-speech',
      label: 'Connected Speech',
    },
    {
      href: '/notes/pronunciation/06-regional-variation',
      label: 'Regional Variation',
    },
  ],
};
