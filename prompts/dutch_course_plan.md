# Dutch Language Course Plan (A0 through B1)

Reference document for the full Dutchyy Dutch course curriculum. Use this alongside `dutch_course_master_prompt_v2.md` when generating lesson content.

**Status:** Approved plan. No lesson files generated yet.

**Vocabulary targets:** A0: 200 | A1: 1,000 | A2: 2,000 | B1: 3,500

---

## Learner Profile

- Native language: English
- Target language: Dutch (Netherlands standard, with Belgian usage flagged where relevant)
- Starting point: true beginner (A0)
- Target level: B1
- Study rhythm: daily or near daily
- Purpose: general fluency for daily life and professional settings
- Style: structured written lessons with explanations, tables, and practice

---

## File Structure

```
content/notes/
  meta.json
  phase-1-a0-a1/
    meta.json
    a0/
      01-greetings-and-basics.mdx
      ...
      review-and-test.mdx
    a1/
      01-daily-routines.mdx
      ...
      review-and-test.mdx
  phase-2-a1-a2/
    meta.json
    a2/
      01-past-tense-depth.mdx
      ...
      review-and-test.mdx
  phase-3-a2-b1/
    meta.json
    b1/
      01-subordinate-clauses.mdx
      ...
      review-and-test.mdx
  pronunciation/
    meta.json
    01-vowel-sounds.mdx
    02-consonant-sounds.mdx
    03-word-stress.mdx
    04-intonation-and-rhythm.mdx
    05-connected-speech.mdx
    06-regional-variation.mdx
  grammar/
    meta.json
    01-personal-pronouns.mdx
    02-verb-zijn.mdx
    ...
    32-separable-verbs-complex-sentences.mdx
```

Each folder has a `meta.json` listing pages in learning order. Lesson slugs are lowercase with hyphens.

---

## Three Content Tracks

The course has three parallel tracks that run alongside the main phase lessons:

| Track             | Purpose                                                                             | Cross reference in main lessons |
| ----------------- | ----------------------------------------------------------------------------------- | ------------------------------- |
| **Main lessons**  | Topic based lessons mixing vocabulary, grammar in context, dialogues, and exercises | Primary learning path           |
| **Pronunciation** | Deep dive on sounds, stress, rhythm, connected speech, regional accents             | `Pronunciation Focus` callout   |
| **Grammar**       | Sequential, systematic grammar reference from A0 through B1                         | `Grammar Focus` callout         |

Main lessons introduce grammar in context. Grammar track files give the full structured explanation, tables, and extra examples. Main lessons should not duplicate the full grammar write up. They point back to the relevant grammar file instead.

---

## Pronunciation Track

| #   | File                       | Title                                               | Level | Study alongside   |
| --- | -------------------------- | --------------------------------------------------- | ----- | ----------------- |
| 1   | `01-vowel-sounds`          | Vowel Sounds: aa, ee, eu, ui, ij, and Short vs Long | A0    | A0 Lesson 2       |
| 2   | `02-consonant-sounds`      | Consonant Sounds: g, ch, and the Dutch r            | A0    | A0 Lessons 3 to 4 |
| 3   | `03-word-stress`           | Word Stress Patterns                                | A0    | A0 Lesson 8       |
| 4   | `04-intonation-and-rhythm` | Sentence Intonation and Rhythm                      | A1    | A1 Lesson 1       |
| 5   | `05-connected-speech`      | Connected Speech: How Words Blend Together          | A2    | A2 Lesson 10      |
| 6   | `06-regional-variation`    | Regional Differences: Randstad, Flanders, and More  | B1    | B1 Lesson 22      |

---

## Grammar Track

Grammar files are numbered sequentially from first concept (A0) through advanced structures (B1). Each file is a standalone reference lesson with frontmatter, clear explanations, tables, examples, common mistakes for English speakers, and short practice exercises with an answer key.

| #   | File                              | Title                                                               | Level | First introduced in main lesson |
| --- | --------------------------------- | ------------------------------------------------------------------- | ----- | ------------------------------- |
| 1   | `01-personal-pronouns`            | Personal Pronouns: ik, jij, hij, zij, wij, jullie, zij              | A0    | A0 Lesson 4                     |
| 2   | `02-verb-zijn`                    | The Verb _zijn_ (to be)                                             | A0    | A0 Lesson 4                     |
| 3   | `03-verb-hebben`                  | The Verb _hebben_ (to have)                                         | A0    | A0 Lesson 5                     |
| 4   | `04-present-tense-regular`        | Present Tense: Regular Verb Conjugation                             | A0    | A0 Lesson 8                     |
| 5   | `05-question-formation`           | Question Formation: Question Words and Inversion                    | A0    | A0 Lesson 7                     |
| 6   | `06-modal-verbs-intro`            | Modal Verbs: _willen, kunnen, moeten_ and the Infinitive at the End | A0    | A0 Lesson 11                    |
| 7   | `07-word-order-svo`               | Word Order: Subject, Verb, Object                                   | A1    | A1 Lesson 2                     |
| 8   | `08-negation`                     | Negation: _niet_ and _geen_                                         | A1    | A1 Lesson 3                     |
| 9   | `09-articles-de-het`              | Articles: _de_ and _het_                                            | A1    | A1 Lesson 6                     |
| 10  | `10-possessive-pronouns`          | Possessive Pronouns: _mijn, jouw, zijn, haar, ons, jullie, hun_     | A1    | A1 Lesson 5                     |
| 11  | `11-demonstratives`               | Demonstratives: _deze, die, dit, dat_                               | A1    | A1 Lesson 9                     |
| 12  | `12-plural-nouns`                 | Plural Nouns: _-en, -s_, and Irregular Forms                        | A1    | A1 Lesson 10                    |
| 13  | `13-adjective-agreement`          | Adjective Agreement and Position                                    | A1    | A1 Lesson 11                    |
| 14  | `14-reflexive-verbs`              | Reflexive Verbs and _zich_                                          | A1    | A1 Lesson 20                    |
| 15  | `15-separable-verbs`              | Separable Verbs: Prefixes and Word Order                            | A1    | A1 Lesson 21                    |
| 16  | `16-simple-past-regular`          | Simple Past: Regular Verbs (_-te/-de_)                              | A1    | A1 Lesson 18                    |
| 17  | `17-simple-past-irregular`        | Simple Past: Common Irregular Verbs                                 | A1    | A1 Lesson 19                    |
| 18  | `18-perfect-tense`                | Perfect Tense: _hebben/zijn_ + Past Participle                      | A2    | A2 Lesson 2                     |
| 19  | `19-past-tense-weak-strong`       | Past Tense in Depth: Weak vs Strong Verbs                           | A2    | A2 Lesson 1                     |
| 20  | `20-modal-verbs-depth`            | Modal Verbs in Depth: _mogen, zullen_, Double Infinitive            | A2    | A2 Lesson 4                     |
| 21  | `21-comparatives-superlatives`    | Comparatives and Superlatives                                       | A2    | A2 Lessons 6 to 7               |
| 22  | `22-prepositions-place`           | Prepositions of Place: _in, op, aan, bij, naast, tussen_            | A2    | A2 Lesson 10                    |
| 23  | `23-prepositions-time-movement`   | Prepositions of Time and Movement: _naar, van, tot, sinds_          | A2    | A2 Lesson 11                    |
| 24  | `24-relative-clauses`             | Relative Clauses: _die_ and _dat_                                   | A2    | A2 Lesson 12                    |
| 25  | `25-om-te-infinitive`             | Purpose with _om te_ + Infinitive                                   | A2    | A2 Lesson 13                    |
| 26  | `26-subordinate-want-omdat`       | Subordinate Clauses: _want_ and _omdat_                             | A2    | A2 Lesson 14                    |
| 27  | `27-indirect-objects-pronouns`    | Indirect Objects and Pronoun Order                                  | A2    | A2 Lesson 15                    |
| 28  | `28-er-constructions`             | The Word _er_: Existential, Locative, and Partitive Uses            | A2    | A2 Lesson 16                    |
| 29  | `29-conditional-als`              | Real Conditionals with _als_                                        | A2    | A2 Lesson 20                    |
| 30  | `30-passive-voice`                | Passive Voice: _worden_ + Past Participle                           | A2    | A2 Lesson 21                    |
| 31  | `31-extended-subordinate-clauses` | Extended Subordinate Clauses: _hoewel, terwijl, nadat_              | B1    | B1 Lesson 1                     |
| 32  | `32-coordinating-conjunctions`    | Coordinating Conjunctions: _en, maar, want, of, dus_                | B1    | B1 Lesson 2                     |
| 33  | `33-future-tense`                 | Future Tense: _gaan_ and _zullen_                                   | B1    | B1 Lesson 3                     |
| 34  | `34-hypothetical-conditionals`    | Hypothetical Conditionals: _als_ + Past Tense, _zou/zouden_         | B1    | B1 Lesson 4                     |
| 35  | `35-complex-word-order`           | Complex Word Order: Inversion, Fronting, and V2                     | B1    | B1 Lesson 5                     |
| 36  | `36-er-prepositions`              | _er_ + Preposition Combinations: _erover, ervan, ermee_             | B1    | B1 Lesson 6                     |
| 37  | `37-indirect-speech`              | Indirect Speech: _hij zegt dat…_                                    | B1    | B1 Lesson 11                    |
| 38  | `38-advanced-relative-pronouns`   | Advanced Relative Pronouns: _wie, waar, hetgeen_                    | B1    | B1 Lesson 12                    |
| 39  | `39-passive-in-context`           | Passive Voice in Context: Agent with _door_                         | B1    | B1 Lesson 13                    |
| 40  | `40-separable-verbs-complex`      | Separable Verbs in Complex Sentences                                | B1    | B1 Lesson 14                    |

**Grammar track total:** 40 sequential reference lessons

### Grammar file structure

Each grammar file should include:

1. **Introduction** — what this structure does and when you need it
2. **Explanation** — full rules with tables and at least five example sentences
3. **Common Mistakes for English Speakers** — two to four wrong/correct pairs
4. **Quick Reference Table** — one page summary of the rule
5. **Practice Exercises** — six to eight focused grammar drills
6. **Answer Key**
7. **Related Main Lessons** — list of main lesson numbers where this grammar appears in context

---

## Phase 1: A0 into A1

### Level A0 — Foundation (~250 words, 11 lessons)

| #   | Slug                       | Working Title                                   | Key Grammar / Verbs                          |
| --- | -------------------------- | ----------------------------------------------- | -------------------------------------------- |
| 1   | `01-greetings-and-basics`  | Greetings and Introductions                     | Hallo, goedemorgen, ik heet…                 |
| 2   | `02-alphabet-and-spelling` | The Dutch Alphabet and Spelling                 | Letter names, double vowels intro            |
| 3   | `03-numbers-and-counting`  | Numbers 0 to 20 and Basic Counting              | Hoeveel, één, twee…                          |
| 4   | `04-zijn-to-be`            | Personal Pronouns and _zijn_ (to be)            | ik/jij/hij/zij, ben/bent/is → Grammar 01, 02 |
| 5   | `05-hebben-to-have`        | _hebben_ (to have) and Basic Expressions        | Ik heb, het is / het gaat → Grammar 03       |
| 6   | `06-numbers-dates-age`     | Numbers 21 to 100, Dates, and Age               | Hoe oud ben je?, maandag…                    |
| 7   | `07-basic-questions`       | Basic Questions: _wie, wat, waar, wanneer, hoe_ | Question word order → Grammar 05             |
| 8   | `08-gaan-and-komen`        | Present Tense: _gaan_ and _komen_               | Regular present conjugation → Grammar 04     |
| 9   | `09-polite-forms`          | Polite Forms: _u_, _alstublieft_, _dank u wel_  | Formal vs informal                           |
| 10  | `10-colors-days-time`      | Colors, Days of the Week, and Time Basics       | Hoe laat is het?                             |
| 11  | `11-intro-to-modals`       | Intro to Modals: _willen, kunnen, moeten_       | Infinitive at end → Grammar 06               |
| —   | `review-and-test`          | **A0 Review and Level Test**                    | Full A0 assessment                           |

**Cumulative vocabulary after A0:** ~250 words

---

### Level A1 — Everyday Dutch (~800 new words, 21 lessons)

| #   | Slug                       | Working Title                                 | Key Grammar / Verbs                     |
| --- | -------------------------- | --------------------------------------------- | --------------------------------------- |
| 1   | `01-daily-routines`        | Daily Routines and Telling Time               | _doen, werken_, time expressions        |
| 2   | `02-word-order-svo`        | Basic Word Order: Subject, Verb, Object       | Dutch SVO, verb second → Grammar 07     |
| 3   | `03-negation`              | Negation: _niet_ and _geen_                   | Niet vs geen rules → Grammar 08         |
| 4   | `04-family`                | Family and Relationships                      | Family vocabulary                       |
| 5   | `05-possessives`           | Possessive Pronouns: _mijn, jouw, zijn, haar_ | Agreement basics → Grammar 10           |
| 6   | `06-food-and-drink`        | Food and Drink Basics                         | _eten, drinken_, de/het → Grammar 09    |
| 7   | `07-at-the-restaurant`     | At the Restaurant and Ordering                | Polite requests                         |
| 8   | `08-shopping`              | Shopping and Prices                           | _kosten, betalen_, numbers in context   |
| 9   | `09-demonstratives`        | Demonstratives: _deze, die, dit, dat_         | Near vs far → Grammar 11                |
| 10  | `10-plural-nouns`          | Plural Nouns                                  | -en, -s, irregular plurals → Grammar 12 |
| 11  | `11-adjectives`            | Adjectives and Basic Agreement                | _de grote stad_ → Grammar 13            |
| 12  | `12-more-present-verbs`    | Present Tense: _doen, zien, eten, werken_     | Full present patterns                   |
| 13  | `13-housing`               | Housing and _wonen_                           | Rooms, furniture                        |
| 14  | `14-hobbies`               | Hobbies and Free Time                         | _houden van_, leisure verbs             |
| 15  | `15-transport`             | Transportation and Directions                 | _gaan, komen_, waar is…                 |
| 16  | `16-weather`               | Weather and Seasons                           | _het regent, het is warm_               |
| 17  | `17-body-health`           | Body and Health Basics                        | _hebben_ for sensations                 |
| 18  | `18-simple-past-regular`   | Simple Past: Regular Verbs (_-te/-de_)        | Weak verb past → Grammar 16             |
| 19  | `19-simple-past-irregular` | Simple Past: Common Irregular Verbs           | _was, had, ging_ → Grammar 17           |
| 20  | `20-reflexive-verbs`       | Reflexive Verbs Introduction                  | _zich_, _zich wassen_ → Grammar 14      |
| 21  | `21-separable-verbs`       | Separable Verbs Introduction                  | _opstaan, meenemen_ → Grammar 15        |
| —   | `review-and-test`          | **A1 Review and Level Test**                  | Full A1 assessment                      |

**Cumulative vocabulary after A1:** ~1,000 words

**Phase 1 total:** 32 main lessons + 2 review chapters

---

## Phase 2: A1 into A2

### Level A2 — Expanding Fluency (~1,000 new words, 21 lessons)

| #   | Slug                        | Working Title                                    | Key Grammar / Verbs                             |
| --- | --------------------------- | ------------------------------------------------ | ----------------------------------------------- |
| 1   | `01-past-tense-depth`       | Past Tense in Depth: Weak vs Strong Verbs        | Verb classes → Grammar 19                       |
| 2   | `02-perfect-tense-intro`    | Perfect Tense: _hebben/zijn_ + Past Participle   | _ge-_ prefix → Grammar 18                       |
| 3   | `03-perfect-irregular`      | Perfect Tense: Common Irregular Participles      | _gedaan, gezien, geweest_                       |
| 4   | `04-modals-in-depth`        | Modal Verbs in Depth                             | _mogen, zullen_, double infinitive → Grammar 20 |
| 5   | `05-opinions`               | Giving Opinions: _vinden, denken, menen_         | _Ik vind dat…_                                  |
| 6   | `06-comparatives`           | Comparatives: _groter, beter, meer_              | Irregular comparatives → Grammar 21             |
| 7   | `07-superlatives`           | Superlatives: _het grootst, het best_            | _de mooiste_                                    |
| 8   | `08-describing-people`      | Describing People: Appearance and Character      | Adjective stacking                              |
| 9   | `09-describing-places`      | Describing Places: Cities and Countryside        | _er is, er zijn_ intro                          |
| 10  | `10-prepositions-place`     | Prepositions of Place: _in, op, aan, bij, naast_ | Static location → Grammar 22                    |
| 11  | `11-prepositions-time`      | Prepositions of Time and Movement                | _naar, van, tot_ → Grammar 23                   |
| 12  | `12-relative-clauses`       | Relative Clauses: _die, dat_                     | _de man die…_ → Grammar 24                      |
| 13  | `13-om-te`                  | Purpose with _om te_ + Infinitive                | _om te leren_ → Grammar 25                      |
| 14  | `14-subordinate-want-omdat` | Subordinate Clauses: _want_ and _omdat_          | Verb to end → Grammar 26                        |
| 15  | `15-indirect-objects`       | Indirect Objects and Double Pronouns             | _geef het mij_ → Grammar 27                     |
| 16  | `16-er-constructions`       | Impersonal _er_: _er is, er zijn, er ligt_       | Existential _er_ → Grammar 28                   |
| 17  | `17-workplace`              | Jobs and the Workplace                           | _weten, zeggen, geven_                          |
| 18  | `18-culture-traditions`     | Dutch Culture and Traditions                     | Cultural vocabulary                             |
| 19  | `19-appointments`           | Making Appointments and Formal Communication     | Phone and email basics                          |
| 20  | `20-conditional-als`        | Conditional with _als_: Real Conditions          | _Als ik tijd heb…_ → Grammar 29                 |
| 21  | `21-passive-intro`          | Passive Voice Introduction                       | _worden_ + participle → Grammar 30              |
| —   | `review-and-test`           | **A2 Review and Level Test**                     | Full A2 assessment                              |

**Cumulative vocabulary after A2:** ~2,000 words

**Phase 2 total:** 21 main lessons + 1 review chapter

---

## Phase 3: A2 into B1

### Level B1 — Independent Use (~1,500 new words, 23 lessons)

| #   | Slug                            | Working Title                                   | Key Grammar / Verbs                 |
| --- | ------------------------------- | ----------------------------------------------- | ----------------------------------- |
| 1   | `01-subordinate-clauses`        | Subordinate Clauses: _omdat, hoewel, terwijl_   | Contrast and reason → Grammar 31    |
| 2   | `02-coordinating-conjunctions`  | Coordinating Conjunctions: _en, maar, want, of_ | No verb shift → Grammar 32          |
| 3   | `03-future-tense`               | Future with _gaan_ and _zullen_                 | Near vs distant future → Grammar 33 |
| 4   | `04-conditional-hypothetical`   | Hypotheticals: _als_ + Past Tense               | _Als ik rijk was…_ → Grammar 34     |
| 5   | `05-complex-word-order`         | Complex Word Order: Inversion and V2            | Fronted elements → Grammar 35       |
| 6   | `06-er-prepositions`            | _er_ + Preposition Combinations                 | _erover, ervan_ → Grammar 36        |
| 7   | `07-particles`                  | Particles: _toch, hoor, even, nou_              | Pragmatic nuance                    |
| 8   | `08-reading-news`               | Reading: Short News Articles                    | Comprehension strategies            |
| 9   | `09-professional-dutch`         | Professional Dutch: Emails and Meetings         | Workplace register                  |
| 10  | `10-plans-hypotheticals`        | Discussing Plans and Hypotheticals              | _zou, zouden_                       |
| 11  | `11-indirect-speech`            | Indirect Speech: _hij zegt dat…_                | Tense shifting → Grammar 37         |
| 12  | `12-relative-pronouns-advanced` | Advanced Relatives: _wie, waar, hetgeen_        | Formal relatives → Grammar 38       |
| 13  | `13-passive-context`            | Passive Voice in Context                        | Agent with _door_ → Grammar 39      |
| 14  | `14-separable-complex`          | Separable Verbs in Complex Sentences            | Word order with modals → Grammar 40 |
| 15  | `15-diminutives`                | Diminutives: _-je, -tje, -pje_                  | Affection and smallness             |
| 16  | `16-formal-informal`            | Formal vs Informal Register                     | _u_ vs _jij_, titles                |
| 17  | `17-idioms`                     | Dutch Idioms and Colloquialisms                 | Common fixed expressions            |
| 18  | `18-formal-letters`             | Writing Formal Letters                          | Complaints, requests                |
| 19  | `19-debating`                   | Debating and Persuasion                         | _enerzijds, anderzijds_             |
| 20  | `20-reading-literature`         | Reading: Dutch Literature Excerpts              | Longer texts                        |
| 21  | `21-listening-strategies`       | Listening Strategies for Natural Speech         | Fast speech coping                  |
| 22  | `22-netherlands-belgium`        | Netherlands vs Belgium: Language Differences    | Regional vocabulary                 |
| 23  | `23-mixed-skills`               | Consolidation: Mixed Skills Practice            | Full B1 integration                 |
| —   | `review-and-test`               | **B1 Review and Level Test**                    | Full B1 assessment                  |

**Cumulative vocabulary after B1:** ~3,500 words

**Phase 3 total:** 23 main lessons + 1 review chapter

---

## Course Summary

| Content type                     | Count   |
| -------------------------------- | ------- |
| Main lessons (A0 + A1 + A2 + B1) | 76      |
| Review and test chapters         | 4       |
| Pronunciation track              | 6       |
| Grammar track                    | 40      |
| **Total MDX files**              | **126** |

| Phase | Levels  | Main lessons | Reviews | Est. new words |
| ----- | ------- | ------------ | ------- | -------------- |
| 1     | A0 + A1 | 32           | 2       | 1,000          |
| 2     | A2      | 21           | 1       | 1,000          |
| 3     | B1      | 23           | 1       | 1,500          |

---

## Verb Progression Map

| Phase | New verbs introduced                                                               |
| ----- | ---------------------------------------------------------------------------------- |
| A0    | zijn, hebben, gaan, komen, willen, kunnen, moeten                                  |
| A1    | doen, zien, eten, werken, wonen, houden van, drinken, kopen, betalen               |
| A2    | weten, denken, vinden, maken, zeggen, geven, mogen, zullen, worden, liggen, staan  |
| B1    | blijven, krijgen, laten, proberen, hopen, geloven, beslissen, uitleggen, vertellen |

---

## Weekly Pacing Suggestion

Assumes daily or near daily study, ~45 to 60 minutes per main lesson. Grammar and pronunciation files are shorter (~20 to 30 minutes each) and slot in alongside main lessons.

### Steady pace (recommended): ~4 main lessons per week

| Weeks    | Main content       | Parallel tracks                          | Milestone                                       |
| -------- | ------------------ | ---------------------------------------- | ----------------------------------------------- |
| 1 to 3   | A0 Lessons 1 to 11 | Pronunciation 01 to 02, Grammar 01 to 06 | Greetings, counting, _zijn/hebben_, modals      |
| 4        | A0 Review          | Pronunciation 03, Grammar 07             | **A0 complete**                                 |
| 5 to 9   | A1 Lessons 1 to 21 | Pronunciation 04, Grammar 08 to 17       | Daily life, shopping, simple past               |
| 10       | A1 Review          | Grammar 18 to 19 (review)                | **A1 complete, Phase 1 done**                   |
| 11 to 15 | A2 Lessons 1 to 21 | Pronunciation 05, Grammar 20 to 30       | Perfect tense, opinions, comparatives           |
| 16       | A2 Review          | Grammar review as needed                 | **A2 complete, Phase 2 done**                   |
| 17 to 22 | B1 Lessons 1 to 23 | Pronunciation 06, Grammar 31 to 40       | Conjunctions, hypotheticals, professional Dutch |
| 23       | B1 Review          | Full course review                       | **B1 complete**                                 |

**Total: ~23 weeks (~5 to 6 months)**

### Other paces

| Pace      | Main lessons per week | Total duration          |
| --------- | --------------------- | ----------------------- |
| Intensive | ~6                    | ~15 weeks (~3.5 months) |
| Relaxed   | ~3                    | ~30 weeks (~7 months)   |

---

## Review and Test Chapters

At the end of every level folder (`a0/`, `a1/`, `a2/`, `b1/`), include one `review-and-test.mdx` containing:

1. Summary of everything covered in that level, organized by topic
2. Combined vocabulary list from all lessons in that level
3. Twenty five to forty question mixed test (grammar, vocabulary, reading, one longer translation)
4. Full answer key
5. CEFR can do statements for that level

---

## Generation Order

When content generation begins, follow this order:

1. **Phase 1 main lessons** — one lesson at a time, A0 then A1
2. **Pronunciation files 01 to 04** — alongside or just ahead of the main lessons they support
3. **Grammar files 01 to 19** — alongside or just ahead of the main lessons they support
4. Phase 1 review chapters
5. Phase 2 (main + pronunciation 05 + grammar 20 to 30)
6. Phase 3 (main + pronunciation 06 + grammar 31 to 40)

Do not start Phase 2 until Phase 1 is fully generated and reviewed. Same rule for Phase 3.

---

## Related Files

- `prompts/dutch_course_master_prompt_v2.md` — AI generation instructions and lesson structure requirements
- `prompts/dutch_course_plan.md` — this file (curriculum reference)
