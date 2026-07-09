#!/usr/bin/env node
/** One-off generator for PR4 B1 lib extensions */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const GRAMMAR = {
  'b1/01-conjunctions-overview': [
    '31-extended-subordinate-clauses',
    'Extended Subordinate Clauses',
  ],
  'b1/02-relative-clauses': [
    '32-advanced-relative-clauses',
    'Advanced Relative Clauses',
  ],
  'b1/03-waar-plus-preposition': [
    '33-waar-plus-preposition',
    'Waar + Preposition',
  ],
  'b1/04-future-with-zullen': ['34-future-tense', 'Future: gaan and zullen'],
  'b1/05-zou-politeness-and-advice': [
    '35-zou-politeness-and-advice',
    'zou: Politeness and Advice',
  ],
  'b1/06-hypotheticals-with-als': [
    '36-hypothetical-conditionals',
    'Hypothetical Conditionals',
  ],
  'b1/07-conditional-past': ['37-conditional-past', 'Conditional Past'],
  'b1/08-passive-with-worden': [
    '38-passive-with-worden',
    'Passive with worden',
  ],
  'b1/09-passive-with-zijn': ['39-passive-with-zijn', 'Passive with zijn'],
  'b1/10-indirect-speech': ['40-indirect-speech', 'Indirect Speech'],
  'b1/11-te-plus-infinitive': ['41-te-plus-infinitive', 'te + Infinitive'],
  'b1/12-word-order-masterclass': [
    '42-word-order-masterclass',
    'Word Order Masterclass',
  ],
  'b1/13-nuanced-opinions': ['43-nuanced-opinions', 'Nuanced Opinions'],
  'b1/14-agreeing-and-debating': [
    '44-agreeing-and-debating',
    'Agreeing and Debating',
  ],
  'b1/15-reading-the-news': ['45-reading-the-news', 'Reading the News'],
  'b1/16-formal-letters-and-emails': [
    '46-formal-letters-and-emails',
    'Formal Letters and Emails',
  ],
  'b1/17-work-meetings-and-applications': [
    '47-work-meetings-and-applications',
    'Work Meetings',
  ],
  'b1/18-education-and-learning': [
    '48-education-and-learning',
    'Education and Learning',
  ],
  'b1/19-society-and-environment': [
    '49-society-and-environment',
    'Society and Environment',
  ],
  'b1/20-feelings-and-relationships': [
    '50-feelings-and-relationships',
    'Feelings and Relationships',
  ],
  'b1/21-dutch-culture-and-directness': [
    '51-dutch-culture-and-directness',
    'Dutch Culture and Directness',
  ],
  'b1/22-storytelling-past-tenses': [
    '52-storytelling-past-tenses',
    'Storytelling and Past Tenses',
  ],
  'b1/23-diminutives': ['53-diminutives', 'Diminutives'],
  'b1/24-particles-masterclass': [
    '54-particles-masterclass',
    'Particles Masterclass',
  ],
  'b1/25-idioms-and-expressions': [
    '55-idioms-and-expressions',
    'Idioms and Expressions',
  ],
  'b1/26-fast-speech-strategies': [
    '56-fast-speech-strategies',
    'Fast Speech Strategies',
  ],
  'b1/27-practical-netherlands': [
    '57-practical-netherlands',
    'Practical Netherlands',
  ],
  'b1/28-bringing-it-together': [
    '58-bringing-it-together',
    'Bringing It Together',
  ],
};

const NEW_COUNTS = [
  58, 62, 55, 64, 60, 68, 59, 63, 61, 58, 66, 70, 57, 65, 62, 68, 64, 60, 66,
  58, 63, 67, 55, 69, 61, 64, 72, 65,
];
const LESSON_SLUGS = Object.keys(GRAMMAR);

const FLASH = {
  'b1/01-conjunctions-overview': [
    ['hoewel', 'although (verb last)'],
    ['terwijl', 'while (simultaneous)'],
    ['nadat / voordat', 'after / before + subordinate'],
    ['totdat', 'until (verb last)'],
  ],
  'b1/02-relative-clauses': [
    ['wiens', 'whose'],
    ['waarvan', 'of which / whose (formal)'],
    ['waarmee', 'with which'],
    ['de collega met wie ik werk', 'the colleague I work with'],
  ],
  'b1/03-waar-plus-preposition': [
    ['waarover', 'about which'],
    ['waarin', 'in which'],
    ['waarnaar', 'to which'],
    ['Het punt waarover we praten', 'The point we are talking about'],
  ],
  'b1/04-future-with-zullen': [
    ['Ik zal je morgen bellen', 'I will call you tomorrow'],
    ['Zullen we afspreken?', 'Shall we meet?'],
    ['gaan + infinitive', 'near future (spoken default)'],
    ['zullen', 'formal future / suggestions'],
  ],
  'b1/05-zou-politeness-and-advice': [
    ['Zou je me kunnen helpen?', 'Could you help me? (polite)'],
    ['Ik zou wachten', 'I would wait (soft advice)'],
    ['Zou u dat kunnen uitleggen?', 'Could you explain that? (formal)'],
    ['zou / zouden', 'conditional + politeness'],
  ],
  'b1/06-hypotheticals-with-als': [
    ['Als ik rijk was, zou ik reizen', 'If I were rich, I would travel'],
    ['Als ik tijd had, …', 'If I had time, …'],
    ['zou + infinitive in main clause', 'hypothetical result'],
    ['past tense in als-clause', 'unreal present'],
  ],
  'b1/07-conditional-past': [
    [
      'Als ik het had geweten, zou ik zijn gekomen',
      'If I had known, I would have come',
    ],
    ['had + participle', 'past perfect in als-clause'],
    ['zou + zijn + participle', 'unreal past result'],
    ['Als ik eerder was begonnen, …', 'If I had started earlier, …'],
  ],
  'b1/08-passive-with-worden': [
    ['Het rapport wordt afgerond', 'The report is being finished'],
    ['werd / werden', 'past passive with worden'],
    ['door + agent', 'by (agent in passive)'],
    ['Er wordt gewerkt', 'Work is being done'],
  ],
  'b1/09-passive-with-zijn': [
    ['Het rapport is afgerond', 'The report has been finished (state)'],
    ['Het venster is gebroken', 'The window is broken'],
    ['zijn + participle', 'result / state passive'],
    ['worden vs zijn passive', 'process vs result'],
  ],
  'b1/10-indirect-speech': [
    ['Hij zei dat hij ziek was', 'He said he was ill'],
    ['zou for reported future', 'Hij zei dat hij zou komen'],
    ['dat-clause word order', 'verb at end in indirect speech'],
    ['de volgende dag', 'the next day (time shift)'],
  ],
  'b1/11-te-plus-infinitive': [
    ['om … te + infinitive', 'in order to'],
    ['te + infinitive after adjectives', 'easy to … / hard to …'],
    ['zonder te / na te', 'without / after + -ing'],
    ['Het is moeilijk te zeggen', 'It is hard to say'],
  ],
  'b1/12-word-order-masterclass': [
    ['Inversion after fronted element', 'Morgen ga ik …'],
    ['Verb cluster at end', '… omdat ik morgen moet werken'],
    ['Main vs subordinate order', 'V2 vs verb last'],
    ['Time–Manner–Place', 'Ik ga morgen met de trein naar Utrecht'],
  ],
  'b1/13-nuanced-opinions': [
    ['Naar mijn mening', 'In my opinion'],
    ['Ik ben er niet zeker van dat …', 'I am not sure that …'],
    ['Het lijkt me dat …', 'It seems to me that …'],
    ['Ik twijfel of …', 'I doubt whether …'],
  ],
  'b1/14-agreeing-and-debating': [
    ['Daar ben ik het mee eens', 'I agree with that'],
    ['Ik zie dat anders', 'I see it differently'],
    ['Enerzijds … anderzijds', 'On one hand … on the other'],
    ['Dat is een goed punt', 'That is a good point'],
  ],
  'b1/15-reading-the-news': [
    ['volgens de bron', 'according to the source'],
    ['het bericht meldt dat …', 'the report states that …'],
    ['De regering kondigde aan dat …', 'The government announced that …'],
    ['kop / artikel / bron', 'headline / article / source'],
  ],
  'b1/16-formal-letters-and-emails': [
    ['Geachte heer/mevrouw', 'Dear Sir/Madam'],
    ['Met vriendelijke groet', 'Kind regards'],
    ['Hierbij informeer ik u dat …', 'I hereby inform you that …'],
    ['In de bijlage vindt u …', 'In the attachment you will find …'],
  ],
  'b1/17-work-meetings-and-applications': [
    ['sollicitatiegesprek', 'job interview'],
    ['Ik zou graag willen solliciteren', 'I would like to apply'],
    ['Kunt u dat toelichten?', 'Can you elaborate on that?'],
    ['agenda / actiepunten', 'agenda / action points'],
  ],
  'b1/18-education-and-learning': [
    ['inschrijven', 'enrol / register'],
    ['het tentamen / het examen', 'the exam'],
    ['Ik studeer … aan de universiteit', 'I study … at the university'],
    ['de docent / de student', 'lecturer / student'],
  ],
  'b1/19-society-and-environment': [
    ['de gemeente', 'municipality'],
    ['duurzaamheid', 'sustainability'],
    ['het zorgstelsel', 'healthcare system'],
    ['de bijstand', 'social assistance'],
  ],
  'b1/20-feelings-and-relationships': [
    ['Ik voel me …', 'I feel …'],
    ['We hebben ruzie gehad', 'We had an argument'],
    ['Ik vertrouw je', 'I trust you'],
    ['Het spijt me dat …', 'I am sorry that …'],
  ],
  'b1/21-dutch-culture-and-directness': [
    ['Dutch directness', 'plain speech, less small talk'],
    ['gezellig', 'cosy / fun together'],
    ['agenda afspreken', 'plan in the diary'],
    ['Met alle respect, maar …', 'With all due respect, but …'],
  ],
  'b1/22-storytelling-past-tenses': [
    ['Ik was net thuisgekomen toen …', 'I had just come home when …'],
    ['imperfect for background', 'Ik woonde in Amsterdam …'],
    ['perfect for events', 'Toen ben ik verhuisd'],
    ['plot vs background tenses', 'mix imperfect + perfect'],
  ],
  'b1/23-diminutives': [
    ['-je / -tje / -pje', 'diminutive suffixes'],
    ['het kopje', 'the little cup / cup of'],
    ['even gezellig', 'a bit cosy (friendly tone)'],
    ['broodje', 'sandwich / little bread'],
  ],
  'b1/24-particles-masterclass': [
    ['maar / even / toch', 'modal particles (softening)'],
    ['Kom maar binnen', 'Come on in (welcoming)'],
    ['Doe maar', 'Go ahead / never mind'],
    ['Dat is toch logisch?', 'That is logical, right?'],
  ],
  'b1/25-idioms-and-expressions': [
    ['Het regent pijpenstelen', 'It is raining cats and dogs'],
    ['Op de bonnefooi', 'On the spur of the moment'],
    ['De kogel is door de kerk', 'The decision is made'],
    ['Iets uit de losse pols', 'Something off the cuff'],
  ],
  'b1/26-fast-speech-strategies': [
    ['Reduced forms in fast speech', 'wa / da / "t klinkt'],
    ['Chunking: fixed phrases', 'learn whole units, not word by word'],
    ['Ask to repeat: Kunt u dat herhalen?', 'Can you repeat that?'],
    ['Ik begrijp het woord … niet', 'I do not understand the word …'],
  ],
  'b1/27-practical-netherlands': [
    ['inschrijven bij de gemeente', 'register at municipality'],
    ['het BSN', 'citizen service number'],
    ['de zorgverzekering', 'health insurance'],
    ['DigiD', 'government login'],
  ],
  'b1/28-bringing-it-together': [
    ['Mix passives + opinions', 'B1 integration capstone'],
    ['Formal + informal register switch', 'u vs je in one day'],
    ['Review weak spots', 'revisit Grammar Focus links'],
    ['B1 = independence in daily life', 'work, news, bureaucracy'],
  ],
};

const DRILLS = [
  [
    'b1-01-hoewel',
    'b1/01-conjunctions-overview',
    'Fix: Hoewel ik ben moe, ik ga uit.',
    'Hoewel ik moe ben, ga ik uit.',
    'hoewel',
  ],
  [
    'b1-05-zou',
    'b1/05-zou-politeness-and-advice',
    'Polite: Could you help me?',
    'Zou je me kunnen helpen?',
    'zou',
  ],
  [
    'b1-06-hypo',
    'b1/06-hypotheticals-with-als',
    'If I were rich, I would travel.',
    'Als ik rijk was, zou ik reizen.',
    'als',
  ],
  [
    'b1-07-past',
    'b1/07-conditional-past',
    'If I had known, I would have come.',
    'Als ik het had geweten, zou ik zijn gekomen.',
    'conditional-past',
  ],
  [
    'b1-08-passive',
    'b1/08-passive-with-worden',
    'The report is being finished (ongoing).',
    'Het rapport wordt afgerond.',
    'passive',
  ],
  [
    'b1-09-zijn',
    'b1/09-passive-with-zijn',
    'The window is broken (state).',
    'Het venster is gebroken.',
    'passive-zijn',
  ],
  [
    'b1-10-indirect',
    'b1/10-indirect-speech',
    'He said he would come tomorrow.',
    'Hij zei dat hij de volgende dag zou komen.',
    'indirect-speech',
  ],
  [
    'b1-03-waar',
    'b1/03-waar-plus-preposition',
    'The city I live in.',
    'De stad waarin ik woon.',
    'waar',
  ],
  [
    'b1-12-order',
    'b1/12-word-order-masterclass',
    'Fix: Morgen ik ga werken.',
    'Morgen ga ik werken.',
    'word-order',
  ],
  [
    'b1-16-formal',
    'b1/16-formal-letters-and-emails',
    'Formal email sign-off.',
    'Met vriendelijke groet,',
    'formal',
  ],
  [
    'b1-27-bsn',
    'b1/27-practical-netherlands',
    'I need to register at the municipality.',
    'Ik moet me inschrijven bij de gemeente.',
    'bureaucracy',
  ],
  [
    'b1-14-debate',
    'b1/14-agreeing-and-debating',
    'I see it differently.',
    'Ik zie dat anders.',
    'opinions',
  ],
];

function patchGrammar() {
  const file = path.join(root, 'lib/lesson-grammar-map.ts');
  let text = fs.readFileSync(file, 'utf8');
  const entries = LESSON_SLUGS.map((slug) => {
    const [num, label] = GRAMMAR[slug];
    return `  '${slug}': [
    { href: '/notes/grammar/${num}', label: '${label}' },
  ],`;
  }).join('\n');
  text = text.replace(
    "  'a2/21-passive-intro': [\n    { href: '/notes/grammar/30-passive-voice', label: 'Passive Voice Intro' },\n  ],\n};",
    `  'a2/21-passive-intro': [
    { href: '/notes/grammar/30-passive-voice', label: 'Passive Voice Intro' },
  ],
${entries}
};`
  );
  fs.writeFileSync(file, text);
}

function patchVocab() {
  const file = path.join(root, 'lib/lesson-vocabulary-meta.ts');
  let text = fs.readFileSync(file, 'utf8');
  let prev = 1944;
  const entries = NEW_COUNTS.map((n, i) => {
    const slug = LESSON_SLUGS[i];
    const total = prev + n;
    const block = `  '${slug}': {
    previousCount: ${prev},
    newCount: ${n},
    totalCount: ${total},
  },`;
    prev = total;
    return block;
  }).join('\n');
  text = text.replace(
    "  'a2/21-passive-intro': {\n    previousCount: 1881,\n    newCount: 63,\n    totalCount: 1944,\n  },\n};",
    `  'a2/21-passive-intro': {
    previousCount: 1881,
    newCount: 63,
    totalCount: 1944,
  },
${entries}
};`
  );
  fs.writeFileSync(file, text);
  console.log('B1 final vocab total:', prev);
}

function patchFlashcards() {
  const file = path.join(root, 'lib/lesson-flashcards.ts');
  let text = fs.readFileSync(file, 'utf8');
  const entries = Object.entries(FLASH)
    .map(([slug, cards]) => {
      const lines = cards
        .map(
          ([front, back]) =>
            `    { front: '${front.replace(/'/g, "\\'")}', back: '${back.replace(/'/g, "\\'")}' },`
        )
        .join('\n');
      return `  '${slug}': [\n${lines}\n  ],`;
    })
    .join('\n');
  text = text.replace(
    "  'a2/21-passive-intro': [\n    { front: 'Het huis wordt gebouwd', back: 'The house is being built' },\n    { front: 'worden + participle', back: 'passive with worden' },\n    { front: 'Er wordt gewerkt', back: 'Work is being done (er + passive)' },\n  ],\n};",
    `  'a2/21-passive-intro': [
    { front: 'Het huis wordt gebouwd', back: 'The house is being built' },
    { front: 'worden + participle', back: 'passive with worden' },
    { front: 'Er wordt gewerkt', back: 'Work is being done (er + passive)' },
  ],
${entries}
};`
  );
  fs.writeFileSync(file, text);
}

function patchDrills() {
  const file = path.join(root, 'lib/drill-questions.ts');
  let text = fs.readFileSync(file, 'utf8');
  const entries = DRILLS.map(
    ([id, lessonId, prompt, answer, tag]) => `  {
    id: '${id}',
    level: 'B1',
    lessonId: '${lessonId}',
    prompt: '${prompt.replace(/'/g, "\\'")}',
    answer: '${answer.replace(/'/g, "\\'")}',
    tags: ['${tag}'],
  },`
  ).join('\n');
  text = text.replace(
    "  {\n    id: 'a2-16-er',\n    level: 'A2',\n    lessonId: 'a2/16-er-constructions',\n    prompt: 'There are many bikes in Amsterdam.',\n    answer: 'Er zijn veel fietsen in Amsterdam.',\n    tags: ['er', 'translation'],\n  },\n];",
    `  {
    id: 'a2-16-er',
    level: 'A2',
    lessonId: 'a2/16-er-constructions',
    prompt: 'There are many bikes in Amsterdam.',
    answer: 'Er zijn veel fietsen in Amsterdam.',
    tags: ['er', 'translation'],
  },
${entries}
];`
  );
  fs.writeFileSync(file, text);
}

patchGrammar();
patchVocab();
patchFlashcards();
patchDrills();
console.log('B1 lib data patched.');
