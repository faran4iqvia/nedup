# Quranic Arabic Course Plan (F0 through Q3 / B1)

Reference document for a Fumadocs based **Quranic Arabic only** course. Use alongside `arabic_course_master_prompt_v2.md` when generating content.

**Status:** Approved plan template. No lesson files generated yet.

**Single goal:** Understand **Quranic Arabic** when reading the Quran (and familiar worship texts), not only recite it.

**Target level:** **Q3 = B1** for Quranic comprehension — independent word by word reading of most ayat, Juz Amma mastery, common passages across the mushaf, graded reading with reduced harakat.

**Out of scope:** Spoken MSA, dialect, conversation scenarios, listening/speaking drills, tafsir methodology, advanced balagha (rhetoric).

**Learner starting point:** Can read Arabic script but does not understand what they read.

**Explanation language:** English, with plain ASCII transliteration and full harakat on all learner facing Arabic.

---

## Part 1: Course Architecture

| Feature | Implementation |
| --- | --- |
| Single path F0 → Q3 | 82 main lessons (12 + 21 + 21 + 28) |
| Grammar reference track | Quranic grammar (~45 files) |
| Pronunciation track | Harakat + tajweed for **comprehension** (6 files) |
| Scenarios | Comprehension drills (salah, adhan, surah, khutbah excerpt) |
| Flashcards, vocab tool, drill, progress | Arabic front / English meaning |
| Cheat sheet + review per level | F0, Q1, Q2, Q3 |
| Common mistakes | Common Mistakes for Decoders (+ English speaker notes) |
| Spaced recycling + cross references | Required in every lesson |

### Suggested platform files

`lib/course-catalog.ts`, `lib/lesson-flashcards.ts`, `lib/lesson-vocabulary-meta.ts`, `lib/lesson-grammar-map.ts`, `lib/drill-questions.ts`, `lib/progress-storage.ts`, MDX components in `components/mdx.tsx`.

---

## Part 2: Learner Profile

| Field | Value |
| --- | --- |
| **L1** | English |
| **Script** | Can decode Arabic; may recite Quran in salah without meaning |
| **Goal** | Quranic Arabic comprehension through B1 level |
| **Study rhythm** | Daily or near daily, 45–60 min per lesson |
| **Style** | Written lessons, word by word ayah tables, roots, exercises |

### Transliteration policy

Plain ASCII only: **aa/ii/uu** for long vowels, **'** for ayn, digraphs **sh/kh/gh/th/dh**. Example: `al-kitabu`, `fa'ala`. Arabic in `<ArabicBase>` keeps full harakat.

---

## Part 3: File Structure

```
content/notes/
  meta.json
  index.mdx

  f0/                    # Foundation
    meta.json
    00-introduction.mdx
    cheat-sheet.mdx
    01-… through 12-…
    review-and-test.mdx

  q1/                    # Core Quranic I
    meta.json
    00-introduction.mdx
    cheat-sheet.mdx
    01-… through 21-…
    review-and-test.mdx

  q2/                    # Core Quranic II
    meta.json
    00-introduction.mdx
    cheat-sheet.mdx
    01-… through 21-…
    review-and-test.mdx

  q3/                    # Quranic B1 — independence
    meta.json
    00-introduction.mdx
    cheat-sheet.mdx
    01-… through 28-…
    review-and-test.mdx

  pronunciation/
  grammar/
  quran-reference/
  roots/
  scenarios/
    f0-salah-and-adhan-meaning.mdx
    q1-juz-amma-in-prayer.mdx
    …
```

---

## Part 4: Content Tracks

| Track | Purpose |
| --- | --- |
| **Main (F0, Q1, Q2, Q3)** | Primary path — one lesson at a time |
| **Grammar** | Optional deep dives; `<GrammarFocus>` links from lessons |
| **Quran Reference** | Particles, frequency lists, ayah patterns |
| **Roots** | Root families for vocabulary acceleration |
| **Pronunciation** | Harakat and tajweed for reading comprehension |
| **Scenarios** | Worship and study comprehension drills |

**Study order:** F0 → Q1 → Q2 → Q3. No parallel paths.

---

## Part 5: Level Overview

### F0 — Foundation (12 lessons) · ~150 words

**Outcome:** Stop blind reciting; read harakat correctly; understand first ayat and salah phrases.

| # | Slug | Title |
| --- | --- | --- |
| 1 | `01-from-recitation-to-meaning` | From Recitation to Meaning |
| 2 | `02-harakat-and-short-vowels` | Harakat: Fatha, Kasra, Damma |
| 3 | `03-sukun-shadda-and-tanwin` | Sukun, Shadda, Tanwin |
| 4 | `04-the-arabic-root-system` | The Root System (Preview) |
| 5 | `05-first-20-quranic-words` | Your First 20 Quranic Words |
| 6 | `06-nominal-sentences` | Nominal Sentences in the Quran |
| 7 | `07-pronouns` | Pronouns: ana, anta, huwa… |
| 8 | `08-question-words` | Question Words: ma, man, ayna |
| 9 | `09-salah-and-adhan-phrases` | Salah and Adhan: Words You Already Say |
| 10 | `10-numbers-in-quran` | Numbers in the Quran |
| 11 | `11-your-first-ayah` | Your First Ayah Word by Word |
| 12 | `12-foundation-bridge` | Foundation Review and Bridge to Q1 |
| — | `review-and-test` | **F0 Review and Test** |

---

### Q1 — Core Quranic I (21 lessons) · cumulative ~500 words

**Outcome:** Juz Amma surahs word by word; core verbs, particles, idafa; ~70% token coverage with function words.

| # | Slug | Title |
| --- | --- | --- |
| 1 | `01-word-by-word-method` | The Word by Word Method |
| 2 | `02-allah-and-rabb` | Allah and Rabb in Context |
| 3 | `03-past-tense-faala` | Past Tense: fa'ala |
| 4 | `04-present-yafalu` | Present: yaf'alu |
| 5 | `05-imperative-ifal` | Commands: if'al |
| 6 | `06-negation-la-ma` | Negation: la, ma, lamma |
| 7 | `07-idafa` | Idafa (Possession) |
| 8 | `08-prepositions` | Prepositions: fi, 'ala, min, ila |
| 9 | `09-demonstratives` | hadha, dhalika, tilka |
| 10 | `10-plurals` | Plurals in Quranic Arabic |
| 11 | `11-inna-and-anna` | Particles: inna, anna |
| 12 | `12-conditional-intro` | law, idha, in (intro) |
| 13 | `13-surah-fatiha` | Surah al-Fatiha Deep Dive |
| 14 | `14-surah-ikhlas-falaq-nas` | Surahs Ikhlas, Falaq, Nas |
| 15 | `15-surah-kafirun-kawthar` | Surahs al-Kafirun and al-Kawthar |
| 16 | `16-vso-word-order` | VSO Word Order in Ayat |
| 17 | `17-active-participles` | Active Participles (saa'il, mu'min) |
| 18 | `18-themes-mercy-guidance` | Vocabulary Themes: Mercy and Guidance |
| 19 | `19-themes-day-of-judgment` | Vocabulary Themes: Akhira |
| 20 | `20-reading-short-ayat-set-1` | Reading Practice: Short Ayat Set 1 |
| 21 | `21-q1-integration` | Q1 Integration |
| — | `review-and-test` | **Q1 Review and Test** |

---

### Q2 — Core Quranic II (21 lessons) · cumulative ~900 words

**Outcome:** Verb Forms II–IV; weak verbs; qad/lam/lan; relative clauses; longer ayat (Yasin, Rahman excerpts).

| # | Slug | Title |
| --- | --- | --- |
| 1 | `01-verb-form-ii` | Verb Form II (intensive/causative) |
| 2 | `02-verb-form-iii` | Verb Form III (mutual) |
| 3 | `03-verb-form-iv` | Verb Form IV (causative) |
| 4 | `04-verb-forms-v-vi-overview` | Verb Forms V and VI Overview |
| 5 | `05-weak-verbs-hollow` | Hollow Verbs (middle weak) |
| 6 | `06-weak-verbs-defective` | Defective Verbs (final weak) |
| 7 | `07-particles-qad-lam-lan` | Particles: qad, lam, lan, lamma |
| 8 | `08-particles-idh-idha` | Particles: idh, idha |
| 9 | `09-relative-clauses` | Relative Clauses: alladhii, allatii |
| 10 | `10-passive-in-quran` | Passive Voice in the Quran |
| 11 | `11-oaths-and-emphasis` | Oaths and Emphasis (wa…) |
| 12 | `12-commands-and-prohibitions` | Commands and Prohibitions |
| 13 | `13-narrative-ayat-intro` | Narrative Ayat: Story Patterns |
| 14 | `14-prophet-musa-excerpts` | Reading: Musa Narratives (excerpts) |
| 15 | `15-prophet-ibrahim-excerpts` | Reading: Ibrahim Narratives (excerpts) |
| 16 | `16-surah-yasin-excerpts` | Surah Yasin: Selected Ayat |
| 17 | `17-surah-rahman-excerpts` | Surah al-Rahman: Selected Ayat |
| 18 | `18-roots-in-context` | Root Families in Context |
| 19 | `19-reading-with-fewer-harakat` | Reading with Fewer Harakat (step 1) |
| 20 | `20-q2-reading-set` | Q2 Reading Set: Mixed Ayat |
| 21 | `21-q2-integration` | Q2 Integration |
| — | `review-and-test` | **Q2 Review and Test** |

---

### Q3 — Quranic B1 (28 lessons) · cumulative ~1,400 words

**Outcome:** Independent comprehension of most common ayat; Forms VII–X; subordinate structures; i'rab awareness; mushaf reading strategy.

| # | Slug | Title |
| --- | --- | --- |
| 1 | `01-verb-forms-vii-viii` | Verb Forms VII and VIII |
| 2 | `02-verb-forms-ix-x` | Verb Forms IX and X |
| 3 | `03-verb-forms-masterclass` | Verb Forms I–X Comparison Table |
| 4 | `04-inna-sisters-full` | Inna and Her Sisters (full set) |
| 5 | `05-anna-and-subordinate` | anna, an, and Subordinate Clauses |
| 6 | `06-law-and-hypothetical` | law and Hypothetical Structures |
| 7 | `07-conditional-depth` | Conditional Structures in Depth |
| 8 | `08-relative-pronouns-advanced` | Advanced Relatives: man, ma |
| 9 | `09-irab-for-comprehension` | I'rab Awareness for Comprehension |
| 10 | `10-masdar-verbal-nouns` | Masdar (Verbal Nouns) in the Quran |
| 11 | `11-comparatives-superlatives` | Comparatives and Superlatives in Ayat |
| 12 | `12-kinaya-and-pronoun-reference` | Pronoun Reference Across Ayat |
| 13 | `13-tawhid-and-shirk-vocabulary` | Themes: Tawhid and Shirk |
| 14 | `14-paradise-and-hell-vocabulary` | Themes: Janna and Nar |
| 15 | `15-prophetic-stories-bulk` | Prophetic Stories: Extended Reading |
| 16 | `16-surah-kahf-excerpts` | Surah al-Kahf: Selected Ayat |
| 17 | `17-surah-baqarah-excerpts` | Surah al-Baqarah: Selected Ayat |
| 18 | `18-reading-harakat-light` | Reading Mushaf with Light Harakat |
| 19 | `19-chunking-long-ayat` | Chunking Long Ayat |
| 20 | `20-particle-rare-but-high-impact` | High Impact Rare Particles |
| 21 | `21-waqf-and-continuity` | Waqf Signs and Reading Continuity |
| 22 | `22-duas-from-quran` | Duas in the Quran (comprehension) |
| 23 | `23-reading-strategies` | Independent Reading Strategies |
| 24 | `24-thematic-juz-amma-full` | Full Juz Amma Thematic Review |
| 25 | `25-cross-surah-vocabulary` | Cross Surah Vocabulary Networks |
| 26 | `26-common-tafsir-words` | Words Tafsir Books Use (intro) |
| 27 | `27-q3-reading-marathon` | Q3 Reading Marathon: 20 Ayat |
| 28 | `28-bringing-it-together` | Bringing It Together |
| — | `review-and-test` | **Q3 Review and Test** |

---

## Part 6: Pronunciation Track (6 + review)

Harakat, emphatics, sun/moon letters, tajweed for comprehension. Study alongside F0 L2–L6 and Q1 L1. No speaking drills.

---

## Part 7: Grammar Track (45 files)

Quranic grammar only: pronouns, nominal sentences, idafa, verb forms I–X, particles, relatives, passive, i'rab awareness. All examples from Quranic text.

---

## Part 8: Scenarios (12 — comprehension only)

Salah/adhan meaning (F0), Juz Amma in prayer (Q1), short surah comprehension (Q1), ayah you always recite (Q2), khutbah excerpt (Q2), reading one page (Q3), ask teacher about ayah (Q3). No conversational scenarios.

---

## Part 9: Course Summary

| Content type | Count |
| --- | --- |
| F0 lessons | 12 |
| Q1 lessons | 21 |
| Q2 lessons | 21 |
| Q3 lessons | 28 |
| Review chapters | 4 |
| **Total main lessons** | **82** |
| Supporting tracks | pronunciation, grammar, quran-reference, roots, scenarios |

| Level | CEFR (reading) | Est. duration (4 lessons/week) |
| --- | --- | --- |
| F0 | A0 | 3 weeks |
| Q1 | A1 | 5–6 weeks |
| Q2 | A2 | 5–6 weeks |
| Q3 | B1 | 7–8 weeks |
| **Total** | **A0–B1** | **~22 weeks (~5 months)** |

---

## Part 10: Vocabulary Targets

| Level | Cumulative words | Coverage note |
| --- | --- | --- |
| F0 | 150 | First roots + salah words |
| Q1 | 500 | ~70% Quran tokens with function words |
| Q2 | 900 | Most Juz Amma + common roots |
| Q3 | 1,400+ | Strong independence on common mushaf |

---

## Part 11: B1 Can-Do Statements (Q3)

- Explain Juz Amma surahs word by word without a translation
- Identify verb form (I–X) and core particle function in unseen ayat
- Read familiar surah text with light harakat and grasp main meaning
- Parse idafa chains and basic subordinate clauses in ayat
- Use root knowledge for unfamiliar words in known patterns
- Study independently using mushaf + word by word method

---

## Part 12: Interactive Tooling (required per lesson)

| Asset | Spec |
| --- | --- |
| Flashcards | 6 cards: Arabic (harakat) / English meaning |
| Vocabulary meta | Words + root field |
| Drill questions | Min. 2 per lesson |
| MDX blocks | GrammarFocus, LessonVocabularyTool, LessonFlashcards, ExerciseAccordion, LessonCompleteButton |

---

## Part 13: Generation Order

1. F0 lessons one at a time
2. Pronunciation + Grammar + Roots (through F0/Q1 scope)
3. Q1 lessons + Quran Reference (early files)
4. Q1 review → Q2 → Q2 review → Q3 → Q3 review

Do not start Q2 until Q1 is reviewed. Do not start Q3 until Q2 is reviewed.

---

## Related Files

- `prompts/arabic_course_master_prompt_v2.md` — AI generation instructions
