export type GrammarLink = {
  href: string;
  label: string;
};

/** Main lesson slug → grammar reference pages (reference shelf, not a parallel course). */
export const LESSON_GRAMMAR_LINKS: Record<string, GrammarLink[]> = {
  'a0/01-greetings-and-introductions': [
    { href: '/notes/grammar/01-personal-pronouns', label: 'Personal Pronouns' },
    { href: '/notes/grammar/02-verb-zijn', label: 'Verb: zijn' },
  ],
  'a0/02-alphabet-and-spelling': [
    {
      href: '/notes/pronunciation/01-vowel-sounds',
      label: 'Vowel Sounds (Pronunciation Track)',
    },
  ],
  'a0/03-numbers-0-20-and-age': [
    { href: '/notes/grammar/02-verb-zijn', label: 'Verb: zijn (age with ben)' },
    {
      href: '/notes/grammar/05-question-formation',
      label: 'Question Formation',
    },
  ],
  'a0/04-pronouns-and-zijn': [
    { href: '/notes/grammar/01-personal-pronouns', label: 'Personal Pronouns' },
    { href: '/notes/grammar/02-verb-zijn', label: 'Verb: zijn' },
  ],
  'a0/05-hebben-and-everyday-things': [
    { href: '/notes/grammar/03-verb-hebben', label: 'Verb: hebben' },
    { href: '/notes/grammar/02-verb-zijn', label: 'Verb: zijn (review)' },
  ],
  'a0/06-basic-questions': [
    {
      href: '/notes/grammar/05-question-formation',
      label: 'Question Formation',
    },
    {
      href: '/notes/grammar/07-word-order-svo',
      label: 'Word Order (V2 preview)',
    },
  ],
  'a0/07-numbers-21-100-and-money': [
    {
      href: '/notes/grammar/05-question-formation',
      label: 'Question Formation',
    },
  ],
  'a0/08-days-months-and-dates': [
    {
      href: '/notes/grammar/23-prepositions-time-movement',
      label: 'Prepositions: Time (preview)',
    },
  ],
  'a0/09-where-do-you-live': [
    {
      href: '/notes/grammar/04-present-tense-regular',
      label: 'Present Tense: wonen',
    },
    {
      href: '/notes/grammar/22-prepositions-place',
      label: 'Prepositions: Place (preview)',
    },
  ],
  'a0/10-ordering-food-and-drink': [
    {
      href: '/notes/grammar/09-articles-de-het',
      label: 'Articles: de and het',
    },
    {
      href: '/notes/grammar/06-modal-verbs-intro',
      label: 'Modal Verbs (wil preview)',
    },
  ],
  'a0/11-telling-time-and-reading-the-clock': [
    {
      href: '/notes/grammar/23-prepositions-time-movement',
      label: 'Prepositions: Time',
    },
  ],
  'a0/12-de-het-primer': [
    {
      href: '/notes/grammar/09-articles-de-het',
      label: 'Articles: de and het (full reference)',
    },
  ],
  'a0/13-nationalities-and-languages': [
    {
      href: '/notes/grammar/04-present-tense-regular',
      label: 'Present Tense: Regular Verbs (spreken, leren)',
    },
    { href: '/notes/grammar/02-verb-zijn', label: 'Verb: zijn (nationality)' },
  ],
  'a0/14-getting-by-survival-phrases': [
    {
      href: '/notes/grammar/05-question-formation',
      label: 'Question Formation (Kunt u …?)',
    },
    {
      href: '/notes/grammar/06-modal-verbs-intro',
      label: 'Modal Verbs: kunnen (preview)',
    },
  ],
  'a1/01-daily-routines': [
    {
      href: '/notes/grammar/04-present-tense-regular',
      label: 'Present Tense: Regular Verbs',
    },
    { href: '/notes/grammar/07-word-order-svo', label: 'Word Order (V2)' },
  ],
  'a1/02-word-order-svo': [
    { href: '/notes/grammar/07-word-order-svo', label: 'Word Order: SVO' },
  ],
  'a1/03-negation': [
    { href: '/notes/grammar/08-negation', label: 'Negation: niet and geen' },
  ],
  'a1/04-family': [
    {
      href: '/notes/grammar/10-possessive-pronouns',
      label: 'Possessive Pronouns (preview)',
    },
    {
      href: '/notes/grammar/04-present-tense-regular',
      label: 'Present Tense',
    },
  ],
  'a1/05-possessives': [
    {
      href: '/notes/grammar/10-possessive-pronouns',
      label: 'Possessive Pronouns',
    },
  ],
  'a1/06-food-and-drink': [
    {
      href: '/notes/grammar/09-articles-de-het',
      label: 'Articles: de and het',
    },
  ],
  'a1/07-at-the-restaurant': [
    {
      href: '/notes/grammar/06-modal-verbs-intro',
      label: 'Modal Verbs (preview)',
    },
    {
      href: '/notes/grammar/04-present-tense-regular',
      label: 'Present Tense: nemen',
    },
  ],
  'a1/08-shopping': [
    { href: '/notes/grammar/11-demonstratives', label: 'Demonstratives' },
    {
      href: '/notes/grammar/09-articles-de-het',
      label: 'Articles: de and het',
    },
  ],
  'a1/09-demonstratives': [
    { href: '/notes/grammar/11-demonstratives', label: 'Demonstratives' },
  ],
  'a1/10-plural-nouns': [
    { href: '/notes/grammar/12-plural-nouns', label: 'Plural Nouns' },
  ],
  'a1/11-adjectives': [
    { href: '/notes/grammar/13-adjectives', label: 'Adjectives and Agreement' },
  ],
  'a1/12-more-present-verbs': [
    {
      href: '/notes/grammar/04-present-tense-regular',
      label: 'Present Tense: Regular Verbs',
    },
    {
      href: '/notes/grammar/06-modal-verbs-intro',
      label: 'Modal Verbs: willen, kunnen, moeten',
    },
  ],
  'a1/13-housing': [
    {
      href: '/notes/grammar/22-prepositions-place',
      label: 'Prepositions of Place',
    },
    { href: '/notes/grammar/13-adjectives', label: 'Adjectives (het huis)' },
  ],
  'a1/14-hobbies': [
    {
      href: '/notes/grammar/04-present-tense-regular',
      label: 'Present Tense (houden van, sporten)',
    },
  ],
  'a1/15-transport': [
    {
      href: '/notes/grammar/22-prepositions-place',
      label: 'Prepositions of Place (directions)',
    },
  ],
  'a1/16-weather': [
    { href: '/notes/grammar/02-verb-zijn', label: 'Verb: zijn (het regent)' },
    {
      href: '/notes/grammar/03-verb-hebben',
      label: 'Verb: hebben (ik heb het warm)',
    },
  ],
  'a1/17-body-health': [
    { href: '/notes/grammar/03-verb-hebben', label: 'Verb: hebben (feelings)' },
  ],
  'a1/18-simple-past-regular': [
    {
      href: '/notes/grammar/16-simple-past-regular',
      label: 'Simple Past: Regular Verbs',
    },
  ],
  'a1/19-simple-past-irregular': [
    {
      href: '/notes/grammar/17-simple-past-irregular',
      label: 'Simple Past: Irregular Verbs',
    },
  ],
  'a1/20-reflexive-verbs': [
    { href: '/notes/grammar/14-reflexive-verbs', label: 'Reflexive Verbs' },
  ],
  'a1/21-separable-verbs': [
    { href: '/notes/grammar/15-separable-verbs', label: 'Separable Verbs' },
  ],
  'a1/22-clothing-and-colours': [
    {
      href: '/notes/grammar/13-adjectives',
      label: 'Adjectives (endings on colours)',
    },
    {
      href: '/notes/grammar/15-separable-verbs',
      label: 'Separable Verbs (aantrekken)',
    },
  ],
  'a1/23-asking-and-giving-directions': [
    {
      href: '/notes/grammar/22-prepositions-place',
      label: 'Prepositions: Place',
    },
    {
      href: '/notes/grammar/07-word-order-svo',
      label: 'Word Order (imperative)',
    },
  ],
  'a1/24-making-plans-and-suggestions': [
    {
      href: '/notes/grammar/34-future-tense',
      label: 'Future Tense: zullen (preview)',
    },
    {
      href: '/notes/grammar/25-om-te-infinitive',
      label: 'om te + Infinitive (zin om te)',
    },
  ],
  'a2/01-past-tense-depth': [
    {
      href: '/notes/grammar/19-past-tense-weak-strong',
      label: 'Past Tense: Weak and Strong',
    },
    {
      href: '/notes/grammar/16-simple-past-regular',
      label: 'Simple Past: Regular',
    },
  ],
  'a2/02-perfect-tense-intro': [
    { href: '/notes/grammar/18-perfect-tense', label: 'Perfect Tense' },
  ],
  'a2/03-perfect-irregular': [
    {
      href: '/notes/grammar/17-simple-past-irregular',
      label: 'Simple Past: Irregular',
    },
    { href: '/notes/grammar/18-perfect-tense', label: 'Perfect Tense' },
  ],
  'a2/04-modals-in-depth': [
    {
      href: '/notes/grammar/20-modal-verbs-depth',
      label: 'Modal Verbs in Depth',
    },
  ],
  'a2/05-opinions': [
    { href: '/notes/grammar/43-nuanced-opinions', label: 'Opinions (preview)' },
  ],
  'a2/06-comparatives': [
    {
      href: '/notes/grammar/21-comparatives-superlatives',
      label: 'Comparatives and Superlatives',
    },
  ],
  'a2/07-superlatives': [
    {
      href: '/notes/grammar/21-comparatives-superlatives',
      label: 'Comparatives and Superlatives',
    },
  ],
  'a2/08-describing-people': [
    { href: '/notes/grammar/13-adjectives', label: 'Adjectives' },
  ],
  'a2/09-describing-places': [
    {
      href: '/notes/grammar/22-prepositions-place',
      label: 'Prepositions of Place',
    },
  ],
  'a2/10-prepositions-place': [
    {
      href: '/notes/grammar/22-prepositions-place',
      label: 'Prepositions of Place',
    },
  ],
  'a2/11-prepositions-time': [
    {
      href: '/notes/grammar/23-prepositions-time-movement',
      label: 'Prepositions: Time and Movement',
    },
  ],
  'a2/12-relative-clauses': [
    { href: '/notes/grammar/24-relative-clauses', label: 'Relative Clauses' },
  ],
  'a2/13-om-te': [
    { href: '/notes/grammar/25-om-te-infinitive', label: 'om te + Infinitive' },
  ],
  'a2/14-subordinate-want-omdat': [
    {
      href: '/notes/grammar/26-subordinate-want-omdat',
      label: 'Subordinate Clauses: want and omdat',
    },
  ],
  'a2/15-indirect-objects': [
    {
      href: '/notes/grammar/27-indirect-objects-pronouns',
      label: 'Indirect Objects and Pronouns',
    },
  ],
  'a2/16-er-constructions': [
    { href: '/notes/grammar/28-er-constructions', label: 'Er Constructions' },
  ],
  'a2/17-workplace': [
    {
      href: '/notes/grammar/47-work-meetings-and-applications',
      label: 'Workplace Dutch (preview)',
    },
  ],
  'a2/18-culture-traditions': [
    {
      href: '/notes/grammar/51-dutch-culture-and-directness',
      label: 'Dutch Culture (preview)',
    },
  ],
  'a2/19-appointments': [
    {
      href: '/notes/grammar/23-prepositions-time-movement',
      label: 'Prepositions: Time',
    },
  ],
  'a2/20-conditional-als': [
    { href: '/notes/grammar/29-conditional-als', label: 'Conditional: als' },
  ],
  'a2/21-passive-intro': [
    { href: '/notes/grammar/30-passive-voice', label: 'Passive Voice Intro' },
  ],
  'a2/22-present-continuous-aan-het': [
    {
      href: '/notes/grammar/07-word-order-svo',
      label: 'Word Order (infinitive at the end)',
    },
  ],
  'a2/23-telephone-calls': [
    {
      href: '/notes/grammar/15-separable-verbs',
      label: 'Separable Verbs (doorverbinden, terugbellen)',
    },
    {
      href: '/notes/grammar/20-modal-verbs-depth',
      label: 'Modal Verbs (Mag ik … spreken?)',
    },
  ],
  'b1/01-conjunctions-overview': [
    {
      href: '/notes/grammar/31-extended-subordinate-clauses',
      label: 'Extended Subordinate Clauses',
    },
  ],
  'b1/02-relative-clauses': [
    {
      href: '/notes/grammar/32-advanced-relative-clauses',
      label: 'Advanced Relative Clauses',
    },
  ],
  'b1/03-waar-plus-preposition': [
    {
      href: '/notes/grammar/33-waar-plus-preposition',
      label: 'Waar + Preposition',
    },
  ],
  'b1/04-future-with-zullen': [
    {
      href: '/notes/grammar/34-future-tense',
      label: 'Future: gaan and zullen',
    },
  ],
  'b1/05-zou-politeness-and-advice': [
    {
      href: '/notes/grammar/35-zou-politeness-and-advice',
      label: 'zou: Politeness and Advice',
    },
  ],
  'b1/06-hypotheticals-with-als': [
    {
      href: '/notes/grammar/36-hypothetical-conditionals',
      label: 'Hypothetical Conditionals',
    },
  ],
  'b1/07-conditional-past': [
    { href: '/notes/grammar/37-conditional-past', label: 'Conditional Past' },
  ],
  'b1/08-passive-with-worden': [
    {
      href: '/notes/grammar/38-passive-with-worden',
      label: 'Passive with worden',
    },
  ],
  'b1/09-passive-with-zijn': [
    { href: '/notes/grammar/39-passive-with-zijn', label: 'Passive with zijn' },
  ],
  'b1/10-indirect-speech': [
    { href: '/notes/grammar/40-indirect-speech', label: 'Indirect Speech' },
  ],
  'b1/11-te-plus-infinitive': [
    { href: '/notes/grammar/41-te-plus-infinitive', label: 'te + Infinitive' },
  ],
  'b1/12-word-order-masterclass': [
    {
      href: '/notes/grammar/42-word-order-masterclass',
      label: 'Word Order Masterclass',
    },
  ],
  'b1/13-nuanced-opinions': [
    { href: '/notes/grammar/43-nuanced-opinions', label: 'Nuanced Opinions' },
  ],
  'b1/14-agreeing-and-debating': [
    {
      href: '/notes/grammar/44-agreeing-and-debating',
      label: 'Agreeing and Debating',
    },
  ],
  'b1/15-reading-the-news': [
    { href: '/notes/grammar/45-reading-the-news', label: 'Reading the News' },
  ],
  'b1/16-formal-letters-and-emails': [
    {
      href: '/notes/grammar/46-formal-letters-and-emails',
      label: 'Formal Letters and Emails',
    },
  ],
  'b1/17-work-meetings-and-applications': [
    {
      href: '/notes/grammar/47-work-meetings-and-applications',
      label: 'Work Meetings',
    },
  ],
  'b1/18-education-and-learning': [
    {
      href: '/notes/grammar/48-education-and-learning',
      label: 'Education and Learning',
    },
  ],
  'b1/19-society-and-environment': [
    {
      href: '/notes/grammar/49-society-and-environment',
      label: 'Society and Environment',
    },
  ],
  'b1/20-feelings-and-relationships': [
    {
      href: '/notes/grammar/50-feelings-and-relationships',
      label: 'Feelings and Relationships',
    },
  ],
  'b1/21-dutch-culture-and-directness': [
    {
      href: '/notes/grammar/51-dutch-culture-and-directness',
      label: 'Dutch Culture and Directness',
    },
  ],
  'b1/22-storytelling-past-tenses': [
    {
      href: '/notes/grammar/52-storytelling-past-tenses',
      label: 'Storytelling and Past Tenses',
    },
  ],
  'b1/23-diminutives': [
    { href: '/notes/grammar/53-diminutives', label: 'Diminutives' },
  ],
  'b1/24-particles-masterclass': [
    {
      href: '/notes/grammar/54-particles-masterclass',
      label: 'Particles Masterclass',
    },
  ],
  'b1/25-idioms-and-expressions': [
    {
      href: '/notes/grammar/55-idioms-and-expressions',
      label: 'Idioms and Expressions',
    },
  ],
  'b1/26-fast-speech-strategies': [
    {
      href: '/notes/grammar/56-fast-speech-strategies',
      label: 'Fast Speech Strategies',
    },
  ],
  'b1/27-practical-netherlands': [
    {
      href: '/notes/grammar/57-practical-netherlands',
      label: 'Practical Netherlands',
    },
  ],
  'b1/28-bringing-it-together': [
    {
      href: '/notes/grammar/58-bringing-it-together',
      label: 'Bringing It Together',
    },
  ],
};

export function getGrammarLinks(lessonId: string): GrammarLink[] {
  return LESSON_GRAMMAR_LINKS[lessonId] ?? [];
}
