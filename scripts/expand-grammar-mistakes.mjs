#!/usr/bin/env node
/**
 * Replace generic Common Mistakes stubs in early grammar reference files.
 * Usage: node scripts/expand-grammar-mistakes.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const grammarDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '../content/notes/grammar'
);

const SECTIONS = {
  '01-personal-pronouns.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Always using jij in formal settings</CardTitle>
  </CardHeader>

  <CardContent>
    English has one "you". Dutch splits **jij/je** (informal) and **u** (formal). ❌ **Hoe gaat het met je?** to an official · ✅ **Hoe gaat het met u?**
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Mixing up zij (she) and zij (they)</CardTitle>
  </CardHeader>

  <CardContent>
    Same spelling, different verb: **Zij is** (she is) vs **Zij zijn** (they are). Context and the verb form disambiguate.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Dropping pronouns like English</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Ben moe.** (too telegraphic) · ✅ **Ik ben moe.** Dutch usually keeps the subject pronoun.
  </CardContent>
</ShadCnCard>`,
  '02-verb-zijn.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Using zijn for hunger, thirst, pain</CardTitle>
  </CardHeader>

  <CardContent>
    English uses "to be": _I am hungry_. Dutch uses **hebben**: ❌ **Ik ben honger.** · ✅ **Ik heb honger.** Same for **Ik heb dorst**, **Ik heb koorts**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Wrong form with u</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **U is welkom** · ✅ **U bent welkom.** Formal **u** takes **bent**, not **is**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Ben jij vs Bent jij in questions</CardTitle>
  </CardHeader>

  <CardContent>
    In questions, **t** drops before **jij**: ❌ **Bent jij klaar?** · ✅ **Ben jij klaar?** (informal)
  </CardContent>
</ShadCnCard>`,
  '03-verb-hebben.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Using zijn for possession</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Ik ben een fiets.** · ✅ **Ik heb een fiets.** Ownership uses **hebben**, not **zijn**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Heb jij vs Hebt jij</CardTitle>
  </CardHeader>

  <CardContent>
    Like **zijn**, **t** drops before **jij** in questions: ✅ **Heb jij tijd?** not **Hebt jij tijd?**
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Literal "I have hunger" feels wrong</CardTitle>
  </CardHeader>

  <CardContent>
    **Ik heb honger** is idiomatic Dutch — do not translate word-for-word from English "I am hungry."
  </CardContent>
</ShadCnCard>`,
  '04-present-tense-regular.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">English -s on hij/zij</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Hij werks** · ✅ **Hij werkt.** Dutch regular verbs add **-t** for **hij/zij/het**, not English **-s**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Forgetting the t in ik-form spelling</CardTitle>
  </CardHeader>

  <CardContent>
    Stem ends in **-t, -d, -f, -s, -ch, -x, -z** → add **-t** for **jij** form in writing: **jij werkt**, **jij gaat** (not **jij werk** in standard spelling).
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Present for completed past</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Gisteren ik werk thuis.** · ✅ **Gisteren werkte ik thuis.** / **Gisteren heb ik thuis gewerkt.**
  </CardContent>
</ShadCnCard>`,
  '05-question-formation.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Do-support (Do you …?)</CardTitle>
  </CardHeader>

  <CardContent>
    Dutch has no **do**: ❌ **Do you work today?** · ✅ **Werk jij vandaag?** — verb to front, no extra word.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Question word order unchanged</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Waar jij woont?** · ✅ **Waar woon je?** In yes/no and **wa-** questions, verb still comes early (V2).
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Hoeveel vs Hoe veel</CardTitle>
  </CardHeader>

  <CardContent>
    **Hoeveel** (one word) = how many/much: **Hoeveel kost het?** · **Hoe oud ben je?** uses **Hoe** + adjective.
  </CardContent>
</ShadCnCard>`,
  '06-modal-verbs-intro.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Infinitive at end forgotten</CardTitle>
  </CardHeader>

  <CardContent>
    Modal + infinitive at the **end**: ❌ **Ik wil drinken koffie.** · ✅ **Ik wil koffie drinken.**
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Double modal like English</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Ik wil kan komen.** · ✅ **Ik wil komen.** / **Ik kan komen.** One modal per clause.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Moeten vs willen confusion</CardTitle>
  </CardHeader>

  <CardContent>
    **Moeten** = must / have to · **Willen** = want. ❌ **Ik moet een koffie** (I must a coffee) · ✅ **Ik wil een koffie.** / **Ik moet werken.**
  </CardContent>
</ShadCnCard>`,
  '07-word-order-svo.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Verb not second after time fronting</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Morgen ik ga werken.** · ✅ **Morgen ga ik werken.** First chunk + **verb** + rest.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Separable prefix stays with verb</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Ik opsta om zeven uur.** · ✅ **Ik sta om zeven uur op.** Prefix **op** goes to the end.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">English adverb placement</CardTitle>
  </CardHeader>

  <CardContent>
    Time often comes first in Dutch for emphasis: **Vandaag werk ik thuis** — not always the same slot as English "I work at home today."
  </CardContent>
</ShadCnCard>`,
  '08-negation.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Using niet for indefinite nouns</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Ik heb niet melk.** · ✅ **Ik heb geen melk.** Use **geen** for indefinite nouns (no **de/het**).
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Using geen for verbs</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Ik geen werk.** · ✅ **Ik werk niet.** Verbs and adjectives take **niet**, not **geen**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Niet before separable prefix</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Ik niet sta op.** · ✅ **Ik sta niet op.** **Niet** comes before the part that would move (here, before **op**).
  </CardContent>
</ShadCnCard>`,
  '09-articles-de-het.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Defaulting everything to de</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **de brood**, **de huis** · ✅ **het brood**, **het huis**. Learn noun + article as one chunk.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Dropping article with general things</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Ik drink koffie** (when meaning some coffee in a café order) · ✅ **Ik drink koffie** is OK for habit · ✅ **De koffie is koud** when specific.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">English "the" logic for abstract nouns</CardTitle>
  </CardHeader>

  <CardContent>
    Dutch **de/het** does not match English every time. Memorise high-frequency A0 nouns: **de tafel**, **het water**, **de tijd**, **het boek**.
  </CardContent>
</ShadCnCard>`,
  '10-possessive-pronouns.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Mijn de … double determiner</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **mijn de moeder** · ✅ **mijn moeder** — possessive replaces **de/het**, no double article.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Uw vs jouw register</CardTitle>
  </CardHeader>

  <CardContent>
    **Uw** with officials and strangers · **jouw/je** with friends. ❌ **Waar is jouw paspoort?** to border officer · ✅ **Uw paspoort, alstublieft.**
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Zijn vs zijn (his vs to be)</CardTitle>
  </CardHeader>

  <CardContent>
    **Zijn** = his (**zijn auto**) · **zijn** = to be (**wij zijn**). Context and position in the sentence clarify.
  </CardContent>
</ShadCnCard>`,
  '11-demonstratives.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Deze/die with wrong gender</CardTitle>
  </CardHeader>

  <CardContent>
    **Deze/die** for **de** words · **Dit/dat** for **het** words: ✅ **dit boek**, ✅ **deze tafel**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">English this/that distance only</CardTitle>
  </CardHeader>

  <CardContent>
    Dutch also matches **de/het**: not **deze boek** but **dit boek**. Gender agreement beats distance feeling.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Die as relative pronoun</CardTitle>
  </CardHeader>

  <CardContent>
    **Die/dat** here = this/that, not "who/which." Relative **die** comes later in A2 — do not mix the two jobs.
  </CardContent>
</ShadCnCard>`,
  '12-plural-nouns.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Adding -s to everything</CardTitle>
  </CardHeader>

  <CardContent>
    English adds **-s**; Dutch uses **-en**, **-s**, **-eren**, vowel change: **de fiets → de fietsen**, **het kind → de kinderen**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Keeping het in plural</CardTitle>
  </CardHeader>

  <CardContent>
    Plural nouns take **de**: ❌ **het boeken** · ✅ **de boeken**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Stem + s without e</CardTitle>
  </CardHeader>

  <CardContent>
    Many plurals need **-en**: ❌ **tafels** (sometimes heard) · ✅ **tafels** is valid · but **boek → boeken**, not **boeks**.
  </CardContent>
</ShadCnCard>`,
  '13-adjectives.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Adjective ending with de/het</CardTitle>
  </CardHeader>

  <CardContent>
    Before **de** noun: **de grote tafel** · Before **het** noun: **het grote boek** (add **-e**). Predicative: **De tafel is groot** (no **-e**).
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">English adjective order</CardTitle>
  </CardHeader>

  <CardContent>
    Dutch: **een mooi groot oud huis** — opinion before size before age, similar to English but endings still required on each adjective before the noun.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Groot vs grote after het</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **het groot huis** · ✅ **het grote huis** · ✅ **Het huis is groot.**
  </CardContent>
</ShadCnCard>`,
  '14-reflexive-verbs.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Dropping zich/me/je</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Ik was om acht uur.** · ✅ **Ik was me om acht uur.** / **Ik douche me.** Reflexive pronoun required.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Zich vs me in wrong person</CardTitle>
  </CardHeader>

  <CardContent>
    **Ik me**, **jij je**, **u zich**, **hij/zij zich**, **wij ons**. ❌ **Ik douche zich.**
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Treating all verbs as reflexive</CardTitle>
  </CardHeader>

  <CardContent>
    **Ik was me** (shower) is reflexive · **Ik eet brood** is not. Learn which verbs need **zich/me** as chunks.
  </CardContent>
</ShadCnCard>`,
  '15-separable-verbs.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Prefix stuck to verb in main clause</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Ik opbel mijn moeder.** · ✅ **Ik bel mijn moeder op.** Prefix to end in main clauses.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Splitting in subordinate clause</CardTitle>
  </CardHeader>

  <CardContent>
    In **omdat** clauses, verb cluster at end stays together: **… omdat ik mijn moeder opbel** (prefix attached in subordinate — learn per verb).
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Niet in wrong slot</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **Ik sta niet op.** · ❌ **Ik niet sta op.** **Niet** before the separable part at the end.
  </CardContent>
</ShadCnCard>`,
  '16-simple-past-regular.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Using present for gisteren</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Gisteren ik werk thuis.** · ✅ **Gisteren werkte ik thuis.**
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Wrong te/T spellings</CardTitle>
  </CardHeader>

  <CardContent>
    **woon → woonde** (extra **de**) · **werk → werkte** · **pas → paste**. Follow the **t/d** rules from the lesson tables.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Overusing simple past in speech</CardTitle>
  </CardHeader>

  <CardContent>
    Spoken Dutch often prefers perfect: **Ik heb gisteren gewerkt.** Simple past still common in writing and storytelling.
  </CardContent>
</ShadCnCard>`,
  '17-simple-past-irregular.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Regular pattern on strong verbs</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Ik gaade** · ✅ **Ik ging.** ❌ **Ik zagde** · ✅ **Ik zag.** Memorise top irregulars: **ging, kwam, zag, deed, had, was**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Perfect vs simple past confusion</CardTitle>
  </CardHeader>

  <CardContent>
    **Ik ben gegaan** (perfect) vs **Ik ging** (simple past). Both past — spoken default is often perfect for completed events.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Same form as present</CardTitle>
  </CardHeader>

  <CardContent>
    **Ik las** (I read) vs present context — past forms like **las, vond, dacht** must match a past time word (**gisteren**, **toen**).
  </CardContent>
</ShadCnCard>`,
};

const sectionRegex =
  /## Common Mistakes for English Speakers[\s\S]*?(?=\n## (?:Quick Reference|Practice Exercises))/;

let updated = 0;

for (const [file, section] of Object.entries(SECTIONS)) {
  const filePath = path.join(grammarDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  if (!sectionRegex.test(content)) {
    console.warn('Skip (no stub section):', file);
    continue;
  }

  content = content.replace(sectionRegex, `${section}\n\n`);
  fs.writeFileSync(filePath, content);
  updated += 1;
  console.log('Updated:', file);
}

console.log(`Done. ${updated} grammar files expanded.`);
