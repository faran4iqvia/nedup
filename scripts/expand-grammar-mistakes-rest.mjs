#!/usr/bin/env node
/**
 * Expand thin Common Mistakes sections in grammar reference files 18–58.
 * Usage: node scripts/expand-grammar-mistakes-rest.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const grammarDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '../content/notes/grammar'
);

const SECTIONS = {
  '18-perfect-tense.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">hebben + movement verb</CardTitle>
  </CardHeader>

  <CardContent>
    English "I have gone" uses **have** for everything. Dutch movement verbs take **zijn**: ❌ **Ik heb gegaan.** · ✅ **Ik ben gegaan.**
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Participle not at the end</CardTitle>
  </CardHeader>

  <CardContent>
    Like English auxiliary + past participle, the participle goes last: ❌ **Gewerkt heb ik vandaag.** · ✅ **Ik heb vandaag gewerkt.**
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Adding ge- to inseparable verbs</CardTitle>
  </CardHeader>

  <CardContent>
    Verbs with **be-**, **ver-**, **ont-**, **her-** skip **ge-**: ❌ **Ik heb geverteld.** · ✅ **Ik heb verteld.**
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Separable prefix in wrong place</CardTitle>
  </CardHeader>

  <CardContent>
    **ge** sits between prefix and stem: ❌ **Ik ben opgegaan.** (wrong verb) · ✅ **Ik ben opgestaan.** / **Ik ben thuisgekomen.**
  </CardContent>
</ShadCnCard>`,

  '19-past-tense-weak-strong.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Regular -de on strong verbs</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Ik gaade** · ✅ **Ik ging.** Strong verbs have irregular past stems — do not add **-de** to **gaan**, **zien**, **doen**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Wrong te/de on weak verbs</CardTitle>
  </CardHeader>

  <CardContent>
    Follow **'t ex kofschip**: **werk → werkte**, **woon → woonde**. English -ed does not map 1:1 to Dutch **-te/-de**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Using simple past where perfect is natural</CardTitle>
  </CardHeader>

  <CardContent>
    Spoken Dutch often prefers perfect for completed events: **Gisteren heb ik gewerkt** is very common; **Gisteren werkte ik** sounds more narrative or written.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Mixing up past and participle forms</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Ik heb ging** · ✅ **Ik ging** (simple past) · ✅ **Ik ben gegaan** (perfect). Never combine **hebben/zijn** with simple past stem.
  </CardContent>
</ShadCnCard>`,

  '20-modal-verbs-depth.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Participle with modal in perfect</CardTitle>
  </CardHeader>

  <CardContent>
    With modals in the perfect, use **double infinitive**, not a participle: ❌ **Ik heb moeten gewerkt.** · ✅ **Ik heb moeten werken.**
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Infinitive not at end</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Ik wil drinken koffie.** · ✅ **Ik wil koffie drinken.** Modal + object + infinitive at the end — same as A1, still the #1 slip.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">mogen vs kunnen for permission</CardTitle>
  </CardHeader>

  <CardContent>
    English "Can I …?" for permission → Dutch **Mag ik …?**: ❌ **Kan ik hier roken?** (ability) · ✅ **Mag ik hier roken?** (permission)
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Splitting separable verb with modal</CardTitle>
  </CardHeader>

  <CardContent>
    With a modal, separable verbs stay one word: ❌ **Ik wil**: **wil op staan** · ✅ **Ik wil opstaan.** · ✅ **Ik heb willen opstaan.**
  </CardContent>
</ShadCnCard>`,

  '21-comparatives-superlatives.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Adding -er to irregular adjectives</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **goeder** · ✅ **beter**. Memorise irregulars: **goed → beter → het best**, **veel → meer → het meest**, **weinig → minder → het minst**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Using dan after superlative</CardTitle>
  </CardHeader>

  <CardContent>
    **dan** = than in comparatives only: ✅ **groter dan** · ❌ **het grootst dan** · ✅ **het grootst van allemaal**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Forgetting -e on attributive superlative</CardTitle>
  </CardHeader>

  <CardContent>
    Before a noun: ❌ **de mooist stad** · ✅ **de mooiste stad**. Predicate: **De stad is het mooist** (no extra **-e**).
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">meer + adjective without ending</CardTitle>
  </CardHeader>

  <CardContent>
    Long adjectives use **meer … dan**: ✅ **meer interessant dan** · ✅ **de meest interessante** (with **-e** before noun).
  </CardContent>
</ShadCnCard>`,

  '22-prepositions-place.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">English in/on/at logic</CardTitle>
  </CardHeader>

  <CardContent>
    Dutch place preps do not match English: **op** the table (**op de tafel**), **in** the city (**in Amsterdam**), **aan** the door (**aan de deur**). Learn chunks, not translations.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Wrong verb of position (liggen/staan/zitten)</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **De boek ligt op de tafel.** · ✅ **Het boek ligt op de tafel.** Match **het/de** and choose **liggen** (flat), **staan** (upright), **zitten** (fixed in).
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">bij vs in for locations</CardTitle>
  </CardHeader>

  <CardContent>
    **bij** = near/at (person or place): **Ik ben bij de dokter** · **in** = inside: **Ik ben in het ziekenhuis**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">tussen … en vs between</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **tussen de bank en de tafel** · ❌ **tussen de bank en tafel** (repeat **de** when both nouns need it).
  </CardContent>
</ShadCnCard>`,

  '23-prepositions-time-movement.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">on Monday → in Monday</CardTitle>
  </CardHeader>

  <CardContent>
    Days use **op**: ✅ **op maandag** · Months/seasons/years use **in**: ✅ **in mei**, **in de zomer**, **in 2024**. English "on" does not carry over.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">naar vs in for movement</CardTitle>
  </CardHeader>

  <CardContent>
    Movement **to** a place → **naar**: **Ik ga naar Amsterdam.** Static location → **in**: **Ik ben in Amsterdam.**
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">sinds vs voor for duration</CardTitle>
  </CardHeader>

  <CardContent>
    **sinds** = since (starting point still relevant): **Ik woon sinds 2020 hier.** · **voor** = ago: **Ik ben twee jaar geleden verhuisd.**
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">van … tot missing second element</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **van negen tot vijf** · ✅ **van maandag tot vrijdag**. English "from … to …" needs both parts in Dutch too.
  </CardContent>
</ShadCnCard>`,

  '24-relative-clauses.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">die for het nouns</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **het boek die …** · ✅ **het boek dat …** · ✅ **de man die …**. Relative pronoun agrees with antecedent gender.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Verb-second inside relative clause</CardTitle>
  </CardHeader>

  <CardContent>
    Subordinate order: verb at end. ❌ **de man die woont in Utrecht** · ✅ **de man die in Utrecht woont**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Missing comma before non-defining clause</CardTitle>
  </CardHeader>

  <CardContent>
    Dutch uses a comma before **die/dat** relative clauses: **Mijn broer, die in Groningen woont, …**
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">wat for people</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **de persoon wat …** · ✅ **de persoon die …**. **wat** is for things or whole clauses, not people.
  </CardContent>
</ShadCnCard>`,

  '25-om-te-infinitive.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">om … te split like English "to"</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Ik leer om te praten Nederlands.** · ✅ **Ik leer om Nederlands te praten.** Infinitive + **te** cluster goes at the end.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Using om te after modal</CardTitle>
  </CardHeader>

  <CardContent>
    After modals, bare infinitive only: ❌ **Ik wil om te werken.** · ✅ **Ik wil werken.** · ✅ **Ik leer om te werken.** (**om te** = purpose, not with modals)
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">te omitted before infinitive</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **om Nederlands praten** · ✅ **om Nederlands te praten.** **te** is required before the infinitive in **om … te** constructions.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Confusing om te with naar</CardTitle>
  </CardHeader>

  <CardContent>
    Purpose = **om te**: **Ik kom om te helpen.** Direction/feeling ≠ purpose: **Ik ga naar huis** (not **om te**).
  </CardContent>
</ShadCnCard>`,

  '26-subordinate-want-omdat.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Main-clause order after omdat</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Ik blijf thuis omdat ik ben ziek.** · ✅ **Ik blijf thuis omdat ik ziek ben.** Verb goes to the end in **omdat** clauses.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Treating want like omdat</CardTitle>
  </CardHeader>

  <CardContent>
    **want** keeps main-clause V2: ✅ **Ik blijf thuis, want ik ben ziek.** (verb second, not last). **omdat** = subordinate; **want** = coordinate.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Comma before want</CardTitle>
  </CardHeader>

  <CardContent>
    **want** joins two main clauses — use a comma: **Ik eet thuis, want ik heb geen tijd.**
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">doordat vs omdat in your own actions</CardTitle>
  </CardHeader>

  <CardContent>
    **omdat** = subjective reason (your view) · **doordat** = objective cause. Both push verb to end; choose meaning, not word order.
  </CardContent>
</ShadCnCard>`,

  '27-indirect-objects-pronouns.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">me vs mij in short phrases</CardTitle>
  </CardHeader>

  <CardContent>
    Unstressed object: **me**, **je**, **hem** · Stressed/emphatic: **mij**, **jou**, **hem**. ✅ **Geef me het boek.** · ✅ **Geef het aan mij.**
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">English double-object order</CardTitle>
  </CardHeader>

  <CardContent>
    Both orders work, but pronouns come first: ✅ **Ik geef het hem.** · ✅ **Ik geef hem het boek.** · ❌ **Ik geef het boek hem** (less natural with full noun first).
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">hem vs hen for them</CardTitle>
  </CardHeader>

  <CardContent>
    Indirect **hem** can mean **him**; **hen/hun** = them (objects). ❌ **Ik geef hen het** when meaning **him** — context matters; learn **hem/haar/hen** as chunks.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Missing pronoun with geven/leggen</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Ik geef het boek.** (incomplete) · ✅ **Ik geef hem het boek.** / **Ik geef het boek aan hem.**
  </CardContent>
</ShadCnCard>`,

  '28-er-constructions.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Dropping er in existence questions</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Is een museum?** · ✅ **Is er een museum?** English "Is there …?" needs **er** in Dutch.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Partitive word order</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Ik heb er drie appels.** · ✅ **Ik heb er drie.** / **Ik heb drie appels.** The second **er** replaces "of them" — do not repeat the noun.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">er vs daar in answers</CardTitle>
  </CardHeader>

  <CardContent>
    **Waar …?** → **Daar …** (place) · **Er** replaces indefinite "there" or partitive: **Hoeveel zijn er? Er zijn er vier.**
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Preposition stranded wrong</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Waar praat je?** · ✅ **Waar praat je over?** / **Waarover praat je?** Dutch keeps **over** with **praten over**.
  </CardContent>
</ShadCnCard>`,

  '29-conditional-als.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Verb-second in als-clause</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Als ik heb tijd, ga ik.** · ✅ **Als ik tijd heb, ga ik.** **Als** triggers subordinate order — verb at end.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">When vs if confusion</CardTitle>
  </CardHeader>

  <CardContent>
    Real future condition → **als**: **Als het morgen regent, blijf ik thuis.** Habitual "when" → also **als** or **wanneer** depending on context; learn set phrases.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Comma before als-clause</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **Als ik tijd heb, bel ik je.** Comma between subordinate **als** clause and main clause — unlike English optional comma habits.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Using present in both clauses for unreal</CardTitle>
  </CardHeader>

  <CardContent>
    Real present/future: **Als ik tijd heb, …** · Unreal/hypothetical (B1): **Als ik rijk was, zou ik reizen.** Do not mix patterns — see B1 hypotheticals.
  </CardContent>
</ShadCnCard>`,

  '30-passive-voice.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Missing worden</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Het huis gebouwd.** · ✅ **Het huis wordt gebouwd.** Process passive needs **worden + participle**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Active word order in passive</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Wordt het huis gebouwd door hen?** is OK · ❌ **Hen bouwt het huis.** Agent with **door**: **Het huis wordt door hen gebouwd.**
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Er-passive word order</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **Er wordt gewerkt.** · ❌ **Er gewerkt wordt.** In main clauses **wordt** stays in V2 position; participle at end.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Confusing worden passive with zijn passive</CardTitle>
  </CardHeader>

  <CardContent>
    Process: **Het rapport wordt afgerond** (being finished) · Result: **Het rapport is afgerond** (is finished). English "is" can blur the two — Dutch separates them.
  </CardContent>
</ShadCnCard>`,

  '31-extended-subordinate-clauses.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Main-clause order after hoewel</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Hoewel ik ben moe, ik ga naar bed.** · ✅ **Hoewel ik moe ben, ga ik naar bed.** Subordinate verb last; main clause keeps V2.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Terwijl with wrong progressive</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Terwijl ik ben aan het koken…** (broken order) · ✅ **Terwijl ik kook…** / **Terwijl ik aan het koken ben…** Natural progressive or simple present.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Nadat perfect in wrong order</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Nadat we gegeten hebben…** (spoken OK, written careful) · ✅ **Nadat we hebben gegeten, gaan we wandelen.** Auxiliary before participle at clause end.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Tenzij treated like want</CardTitle>
  </CardHeader>

  <CardContent>
    **tenzij** = unless (subordinate): ✅ **Ik kom, tenzij ik ziek ben.** Verb at end — not V2 like **want**.
  </CardContent>
</ShadCnCard>`,

  '32-advanced-relative-clauses.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Preposition before wie/wat incorrectly</CardTitle>
  </CardHeader>

  <CardContent>
    Formal written style: **met wie**, **waarmee** — not ❌ **wie met** in careful Dutch. Spoken: **de persoon met wie ik werk**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">wiens for het words</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **het bedrijf wiens…** · ✅ **het bedrijf waarvan…** / **wiens** for **de** words: **de man wiens auto…**
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Missing comma in non-defining relatives</CardTitle>
  </CardHeader>

  <CardContent>
    **Mijn manager, met wie ik dagelijks overleg, …** — comma both sides for extra information clauses.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">dat vs die after alles/iets</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **alles wat**, **iets dat**, **de man die**. **wat** often with whole-clause or **alles**; **dat/die** with specific antecedent.
  </CardContent>
</ShadCnCard>`,

  '33-waar-plus-preposition.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Splitting waar and preposition</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Het punt waar we over praten** (informal OK) · ✅ **Het punt waarover we praten** (formal/written). Learn fused forms: **waarin**, **waarmee**, **waarop**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">waarvan for people</CardTitle>
  </CardHeader>

  <CardContent>
    People → **van wie**: ✅ **de collega van wie ik het hoorde** · Things → **waarvan**: **het project waarvan ik de leider ben**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">English preposition stranding calque</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Waar denk je aan het?** · ✅ **Waar denk je aan?** / **Waar denk je over?** Match the verb's fixed preposition (**denken aan**).
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">waarnaar vs waar … naartoe</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **Het doel waarnaar we streven** · ✅ **Waar ga je naartoe?** — fused relative in written Dutch; question keeps separate words.
  </CardContent>
</ShadCnCard>`,

  '34-future-tense.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Overusing zullen in statements</CardTitle>
  </CardHeader>

  <CardContent>
    Spoken near future → **gaan + infinitive**: ✅ **Ik ga morgen werken.** **Zullen** = formal, written, or **Zullen we …?** suggestions — not default "will".
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Present for scheduled future</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **De trein vertrekt om acht uur.** Dutch uses present for timetables — like English "The train leaves at eight."
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Zal ik vs Zullen we</CardTitle>
  </CardHeader>

  <CardContent>
    Offer to do something for someone: **Zal ik de deur openen?** · Suggestion to do together: **Zullen we gaan?**
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Infinitive not at end with gaan</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Ik ga morgen werken thuis.** · ✅ **Ik ga morgen thuis werken.** Time + place + infinitive at end.
  </CardContent>
</ShadCnCard>`,

  '35-zou-politeness-and-advice.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Object after infinitive chain</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Zou je kunnen helpen me?** · ✅ **Zou je me kunnen helpen?** Object pronoun before **kunnen/zullen/mogen + infinitive**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">zal for polite requests</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Zal je me helpen?** (sounds blunt or odd) · ✅ **Zou je me kunnen helpen?** · ✅ **Kunt u me helpen?** **Zou** softens the request.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">zou graag word order</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **Ik zou graag een koffie willen.** · ❌ **Ik zou willen graag een koffie.** **graag** sits before the main verb you want softened.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Advice without zou</CardTitle>
  </CardHeader>

  <CardContent>
    Soft advice: **Ik zou wachten.** (I would wait) — not **Je moet wachten** when you want to sound less pushy. English "You should" maps better to **Ik zou …** in many contexts.
  </CardContent>
</ShadCnCard>`,

  '36-hypothetical-conditionals.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Present in both clauses for unreal</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Als ik ben rijk, reis ik.** · ✅ **Als ik rijk was, zou ik reizen.** Unreal present → past in **als**-clause + **zou** in main clause.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Missing zou in result clause</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Als ik tijd had, ga ik.** · ✅ **Als ik tijd had, zou ik gaan.** Hypothetical result needs **zou/zouden + infinitive**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg"> waren vs was with ik</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **Als ik rijk was, …** · ✅ **Als ik rijk waren, …** is wrong — match subject: **was** with **ik**, **waren** with **wij/zij**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">English "If I would …"</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Als ik zou rijk zijn, …** · ✅ **Als ik rijk was, zou ik …** Dutch past in **als** clause; **zou** only in main clause.
  </CardContent>
</ShadCnCard>`,

  '37-conditional-past.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Simple past instead of past perfect in als-clause</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Als ik wist, kwam ik.** · ✅ **Als ik het had geweten, zou ik zijn gekomen.** Unreal past → **had/was + participle** in **als** clause.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Missing zijn in past perfect passive result</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **Als ik eerder was begonnen, …** · ✅ **zou ik zijn gekomen** (not **zou ik gekomen** alone with movement verbs).
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">zou + participle without zijn/hebben</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **zou ik hebben gedaan** · ✅ **zou ik zijn gekomen** · ❌ **zou ik gedaan** (incomplete auxiliary chain).
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Mixing real past with zou</CardTitle>
  </CardHeader>

  <CardContent>
    Real past story: **Toen ik jong was, woonde ik in Utrecht.** Unreal regret: **Als ik harder had gewerkt, zou ik geslaagd zijn.** Do not use **zou** for simple factual past.
  </CardContent>
</ShadCnCard>`,

  '38-passive-with-worden.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Present passive without worden</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Het rapport afgerond.** · ✅ **Het rapport wordt afgerond.** Ongoing process needs **worden**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Agent with van instead of door</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **Het rapport wordt door het team afgerond.** · ❌ **… van het team** (wrong agent marker). **door** = by (agent).
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Impersonal er-passive word order</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **Er wordt hard gewerkt.** · ❌ **Er hard wordt gewerkt.** **wordt** in V2; adverb before participle cluster.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Using worden for finished state</CardTitle>
  </CardHeader>

  <CardContent>
    Still in progress: **wordt gebouwd** · Already done: **is gebouwd** (**zijn** passive). English "is built" can mean either — Dutch splits them.
  </CardContent>
</ShadCnCard>`,

  '39-passive-with-zijn.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">worden for result state</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Het venster wordt gebroken** (process) vs ✅ **Het venster is gebroken** (state: it is broken now). Result = **zijn + participle**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Missing zijn in perfect passive state</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **Het rapport is afgerond.** · ❌ **Het rapport afgerond is.** In main clauses **is** comes early (V2), participle still at end.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Agent with door in state passive</CardTitle>
  </CardHeader>

  <CardContent>
    State passives often drop the agent: **De deur is gesloten.** Add **door** only when the agent matters: **De deur is door hem gesloten.**
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Translating "is being" with zijn</CardTitle>
  </CardHeader>

  <CardContent>
    English progressive passive "is being built" → Dutch **wordt gebouwd**, not **is gebouwd**. **is gebouwd** = is (already) built.
  </CardContent>
</ShadCnCard>`,

  '40-indirect-speech.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Verb-second inside dat-clause</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Hij zei dat hij is ziek.** · ✅ **Hij zei dat hij ziek was.** Subordinate: verb at end; shift tense (**is → was**).
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">No tense shift from English habit</CardTitle>
  </CardHeader>

  <CardContent>
    Direct: **Ik ben ziek.** → Reported: **Hij zei dat hij ziek was.** Backshift present → past in Dutch indirect speech.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Future reported with zal instead of zou</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **Hij zei dat hij zou komen.** · ❌ **Hij zei dat hij zal komen.** Reported future → **zou + infinitive**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Question word order in indirect questions</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Hij vroeg waar woont hij.** · ✅ **Hij vroeg waar hij woont.** Indirect question = subordinate order (verb last).
  </CardContent>
</ShadCnCard>`,

  '41-te-plus-infinitive.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">om te after adjective where te alone is enough</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **Het is moeilijk te zeggen.** · ❌ **Het is moeilijk om te zeggen.** After adjectives like **moeilijk**, **leuk**, **belangrijk** → **te + infinitive** (no **om**).
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Missing te after zonder/na</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **zonder te vragen** · ✅ **na te hebben gegeten** · ❌ **zonder vragen** (when meaning "without asking").
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">te separated from infinitive</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Ik probeer te Nederlands te spreken.** · ✅ **Ik probeer Nederlands te spreken.** Object before **te + infinitive** cluster at end.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Confusing om te and te after nouns</CardTitle>
  </CardHeader>

  <CardContent>
    Purpose noun: **de manier om te leren** · Adjective: **moeilijk te leren** — **om** appears with purpose nouns, not with adjective + **te**.
  </CardContent>
</ShadCnCard>`,

  '42-word-order-masterclass.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">No inversion after fronted element</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Morgen ik ga werken.** · ✅ **Morgen ga ik werken.** First element + verb + subject — English keeps SVO after "Tomorrow".
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Verb cluster scrambled in subordinate clause</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **… omdat ik moet morgen werken.** · ✅ **… omdat ik morgen moet werken.** All non-finite verbs pile at the end: **moet werken**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">English Time–Manner–Place order forced wrong</CardTitle>
  </CardHeader>

  <CardContent>
    Dutch prefers **Time – Manner – Place**: ✅ **Ik ga morgen met de trein naar Utrecht.** All three can appear — order matters for natural Dutch.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Main-clause verb at end after want</CardTitle>
  </CardHeader>

  <CardContent>
    **want** = V2 (coordinate): **Ik blijf, want ik ben moe.** Do not push **ben** to the end — that rule is for **omdat/hoewel/dat**.
  </CardContent>
</ShadCnCard>`,

  '43-nuanced-opinions.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Ik denk dat with verb-second</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Ik denk dat is het een goed idee.** · ✅ **Ik denk dat het een goed idee is.** **dat** clause = subordinate, verb last.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Overusing I think</CardTitle>
  </CardHeader>

  <CardContent>
    Vary hedges: **Naar mijn mening**, **Volgens mij**, **Het lijkt me dat**, **Ik ben er niet zeker van dat** — English speakers repeat "I think" too often.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">twijfel of vs dat</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **Ik twijfel of dat klopt.** · ✅ **Ik twijfel of hij komt.** **twijfel** pairs with **of** (whether), not **dat** for yes/no doubt.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Too direct disagreement</CardTitle>
  </CardHeader>

  <CardContent>
    Soften with: **Ik begrijp je punt, maar …** / **Dat zou kunnen, al …** — Dutch directness does not mean skipping polite framing in debates.
  </CardContent>
</ShadCnCard>`,

  '44-agreeing-and-debating.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">eens zijn without preposition</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Ik ben eens.** · ✅ **Ik ben het eens.** / **Ik ben het met je eens.** **het** is required in **het eens zijn**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">met vs over for topic of agreement</CardTitle>
  </CardHeader>

  <CardContent>
    Person: **Ik ben het met je eens.** · Topic: **Ik ben het eens met dat plan.** · Disagreement on view: **Ik ben het niet eens met …**
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Enerzijds without anderzijds</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **Enerzijds …, anderzijds …** — set phrase for balanced arguments. Do not leave **enerzijds** hanging.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Calquing "I see your point" word-for-word</CardTitle>
  </CardHeader>

  <CardContent>
    Natural Dutch: **Dat is een goed punt** / **Ik snap wat je bedoelt** — not a literal **Ik zie jouw punt**.
  </CardContent>
</ShadCnCard>`,

  '45-reading-the-news.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Present tense in past news events</CardTitle>
  </CardHeader>

  <CardContent>
    Headlines use present: **Minister kondigt maatregelen aan** — do not read it as "is announcing right now" only; it reports a past event in headline style.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">volgens without article on source</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **volgens de bron** · ✅ **volgens het NOS-bericht** — **volgens** + source is a fixed reporting chunk.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Passive overload without recognising worden/zijn</CardTitle>
  </CardHeader>

  <CardContent>
    News favours passive: **Er worden maatregelen genomen** (process) · **De maatregelen zijn aangekondigd** (result). Identify which passive type you are reading.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">melden dat with wrong word order</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **Het bericht meldt dat de prijzen stijgen.** · ❌ **… dat stijgen de prijzen.** Subordinate **dat** → verb at end.
  </CardContent>
</ShadCnCard>`,

  '46-formal-letters-and-emails.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Informal opening in formal mail</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Hoi meneer,** · ✅ **Geachte heer,** / **Geachte mevrouw,** · Unknown name: **Geachte heer/mevrouw,**
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Met vriendelijke groeten too early</CardTitle>
  </CardHeader>

  <CardContent>
    Closing comes after full message: **Met vriendelijke groet,** (singular **groet** is standard in NL business email). Blank line, then your name.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">u vs je in same email</CardTitle>
  </CardHeader>

  <CardContent>
    Pick one register and stick to it: formal **u/uw** throughout, or informal **je/jij** — mixing reads unprofessional.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Direct English-style "I am writing to…"</CardTitle>
  </CardHeader>

  <CardContent>
    Dutch formal: **Hierbij informeer ik u dat …** / **Met deze e-mail reageer ik op …** — set phrases sound more native than literal translation.
  </CardContent>
</ShadCnCard>`,

  '47-work-meetings-and-applications.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">solliciteren voor vs op</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **Ik solliciteer op deze functie.** · ✅ **Ik wil graag solliciteren.** **solliciteren op** + job; avoid calquing "apply for" as **voor**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Overly casual in meetings</CardTitle>
  </CardHeader>

  <CardContent>
    Use **Kunt u dat toelichten?** / **Zou u kunnen uitleggen …?** with managers or clients — not **Leg het uit** unless the team is informal.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">agenda vs programma confusion</CardTitle>
  </CardHeader>

  <CardContent>
    Meeting list: **de agenda** · Event schedule: **het programma**. ✅ **Wat staat er op de agenda?**
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Missing zou graag in applications</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **Ik zou graag willen solliciteren.** Softens the request — better than blunt **Ik wil solliciteren** in formal contexts.
  </CardContent>
</ShadCnCard>`,

  '48-education-and-learning.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">studeren op instead of aan</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **Ik studeer Nederlands aan de universiteit.** · ❌ **Ik studeer op de universiteit.** **studeren aan** + institution.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">inschrijven voor vs bij</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **inschrijven bij de universiteit** · ✅ **inschrijven voor een cursus** — **bij** institution, **voor** course/exam.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">examen vs tentamen mix-up</CardTitle>
  </CardHeader>

  <CardContent>
    **het tentamen** = exam/test (NL academic) · **het examen** also used — learn what your school calls it and stay consistent.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">docent vs leraar register</CardTitle>
  </CardHeader>

  <CardContent>
    University: **de docent** · School: **de leraar/lerares**. Use the term that matches the context.
  </CardContent>
</ShadCnCard>`,

  '49-society-and-environment.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">gemeente as "government" generally</CardTitle>
  </CardHeader>

  <CardContent>
    **de gemeente** = municipality (local). National government → **de regering** / **het kabinet** — do not use **gemeente** for all bureaucracy.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">zorgstelsel vs zorgverzekering</CardTitle>
  </CardHeader>

  <CardContent>
    **het zorgstelsel** = healthcare system · **de zorgverzekering** = your health insurance policy. Different words for different admin tasks.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">duurzaam vs duurzaamheid</CardTitle>
  </CardHeader>

  <CardContent>
    Adjective: **duurzaam** (**duurzame energie**) · Noun: **duurzaamheid** (sustainability). Match word class in **het milieu** discussions.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">bijstand literal "assistance"</CardTitle>
  </CardHeader>

  <CardContent>
    **de bijstand** = social welfare benefit (specific NL term) — not generic "help". Context: **uitkering**, **gemeente**, **DUO**-style vocabulary.
  </CardContent>
</ShadCnCard>`,

  '50-feelings-and-relationships.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Ik ben … for feel emotions</CardTitle>
  </CardHeader>

  <CardContent>
    Physical/state: **Ik ben moe/ziek.** · Feelings often: **Ik voel me …** (**Ik voel me blij/boos**). ❌ **Ik ben boos op me** · ✅ **Ik ben boos** / **Ik voel me gefrustreerd.**
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Het spijt me structure</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **Het spijt me dat ik te laat ben.** · ❌ **Ik spijt me.** **Het spijt me** is fixed — **het** subject, not **ik**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">ruzie maken vs have an argument</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **We hebben ruzie gehad.** · ✅ **ruzie maken** · ❌ **We hebben een argument gehad** (English calque — use **ruzie** or **discussie**).
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">vertrouwen in vs op</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **Ik vertrouw je.** · ✅ **Ik vertrouw op je hulp.** Person = bare **vertrouwen**; rely on something → **vertrouwen op**.
  </CardContent>
</ShadCnCard>`,

  '51-dutch-culture-and-directness.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Reading directness as rudeness</CardTitle>
  </CardHeader>

  <CardContent>
    **Nee, dat kan niet.** / **Dat is geen goed idee.** can be normal professional Dutch — not necessarily angry. Adjust expectations from English softeners.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Over-apologising like British English</CardTitle>
  </CardHeader>

  <CardContent>
    Dutch uses shorter apologies: **Sorry.** / **Het spijt me.** — stacking **sorry** repeatedly sounds odd. Match local brevity.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">gezellig translated as "cozy" only</CardTitle>
  </CardHeader>

  <CardContent>
    **gezellig** = social warmth, fun together, nice atmosphere — wider than English "cozy". **Het was gezellig** after a party = we had a good time together.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Dropping in without agenda</CardTitle>
  </CardHeader>

  <CardContent>
    **Zullen we … afspreken?** / **Ik zet het in de agenda.** Dutch social and work life often plans ahead — "drop by anytime" is less common than in some cultures.
  </CardContent>
</ShadCnCard>`,

  '52-storytelling-past-tenses.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Perfect for background description</CardTitle>
  </CardHeader>

  <CardContent>
    Background setting → imperfect: ✅ **Ik woonde in Amsterdam en werkte in een café.** Events in the story → perfect or simple past: **Toen ben ik verhuisd.**
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Missing toen for single past event</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **Ik was net thuisgekomen toen de telefoon ging.** **toen** = when (past, one-off). Do not use **als** for completed story moments.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">All perfect in a narrative paragraph</CardTitle>
  </CardHeader>

  <CardContent>
    English past simple everywhere → Dutch mix: imperfect for scene-setting, perfect for completed plot points. Sounds more natural to native listeners.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Simple past in spoken anecdote only</CardTitle>
  </CardHeader>

  <CardContent>
    Spoken: **Ik heb gisteren …** is fine. Written story: **Ik woonde …** / **Ik ging …** adds narrative colour — choose register consciously.
  </CardContent>
</ShadCnCard>`,

  '53-diminutives.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Wrong suffix after s/z sound</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **huis → huisje** · ✅ **glas → glaasje** (**-je** with extra vowel). ❌ **huisje** spelled wrong as **huizje** — follow **-tje/-pje/-je** rules from the lesson.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Diminutive always means "small"</CardTitle>
  </CardHeader>

  <CardContent>
    **kopje** = cup (of coffee), not necessarily tiny cup · **broodje** = sandwich. Often conventional, not literal size.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Forgetting het with diminutives</CardTitle>
  </CardHeader>

  <CardContent>
    Diminutives are **het** words: ✅ **het kopje**, **het meisje**, **het autootje** — even if the base noun was **de**.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Overusing diminutives in formal writing</CardTitle>
  </CardHeader>

  <CardContent>
    Friendly: **even een kopje koffie** · Formal email: **een kop koffie** — diminutives soften tone; skip them in **Geachte**-level writing.
  </CardContent>
</ShadCnCard>`,

  '54-particles-masterclass.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Translating particles word-for-word</CardTitle>
  </CardHeader>

  <CardContent>
    **maar**, **even**, **toch**, **hoor** modify tone — not literal "but/even/still/hear". **Kom maar binnen** = come on in (welcoming).
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Doe maar as rude dismissal</CardTitle>
  </CardHeader>

  <CardContent>
    **Doe maar** = go ahead / never mind / that's fine — context-dependent, often friendly. Tone and face matter more than the words alone.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Missing particle in invitation</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **Gaat het even?** / **Kom gerust even langs.** **even** softens — bare imperatives can sound sharp in Dutch.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">toch in statements</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **Dat is toch logisch?** = that's logical, right? · **toch** seeks confirmation — different from English "still" in many slots.
  </CardContent>
</ShadCnCard>`,

  '55-idioms-and-expressions.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Literal translation of idioms</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **It rains pipe stems** · ✅ **Het regent pijpenstelen** = it's pouring. Learn idioms as whole chunks, not word-by-word.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Using idioms in formal writing</CardTitle>
  </CardHeader>

  <CardContent>
    **Op de bonnefooi**, **de kogel is door de kerk** — spoken/informal. Avoid in **Geachte** emails unless you know the register fits.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Mixing up similar fixed expressions</CardTitle>
  </CardHeader>

  <CardContent>
    **Iets uit de losse pols** = off the cuff · **Op de bonnefooi** = on the spur of the moment (leaving) — similar English glosses, different Dutch contexts.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Forcing idioms into every sentence</CardTitle>
  </CardHeader>

  <CardContent>
    One well-placed idiom sounds native; stacking several sounds unnatural. Start with high-frequency items from news and conversation.
  </CardContent>
</ShadCnCard>`,

  '56-fast-speech-strategies.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Giving up after one missed word</CardTitle>
  </CardHeader>

  <CardContent>
    Use recovery phrases: **Kunt u dat herhalen?** · **Ik begrijp het woord … niet** · **Kunt u langzamer praten?** — normal to ask, not failure.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Decoding reduced forms letter-by-letter</CardTitle>
  </CardHeader>

  <CardContent>
    Fast speech: **wa** (was), **da** (dat), **'t** (het) — learn common reductions as units, not as "wrong" Dutch.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Only practising slow classroom Dutch</CardTitle>
  </CardHeader>

  <CardContent>
    Add short **NOS** clips, podcasts, or series with subtitles. Chunk fixed phrases (**Hoe gaat het?**, **Geen probleem**) before open-ended speech.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Apologising in English mid-conversation</CardTitle>
  </CardHeader>

  <CardContent>
    Switch to Dutch recovery: **Sorry, kunt u dat nog een keer zeggen?** — keeps practice going and models the phrase you need.
  </CardContent>
</ShadCnCard>`,

  '57-practical-netherlands.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">inschrijven at wrong office</CardTitle>
  </CardHeader>

  <CardContent>
    **inschrijven bij de gemeente** = register your address (BRP) · Health insurance, **BSN**, **DigiD** are separate steps — one appointment does not cover everything.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">BSN vs passport number</CardTitle>
  </CardHeader>

  <CardContent>
    **het BSN** (burgerservicenummer) is your Dutch citizen service number for work and tax — not the same as your passport or **DigiD** login.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">huisarts vs ziekenhuis for first contact</CardTitle>
  </CardHeader>

  <CardContent>
    Non-emergency: call **de huisarts** (GP) first · **het ziekenhuis** / **112** for emergencies. Dutch system routes through GP gatekeeping.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Informal je at gemeente counter</CardTitle>
  </CardHeader>

  <CardContent>
    ✅ **Kunt u me helpen met inschrijven?** · ❌ **Kan je me helpen?** Official contexts → **u** and **alstublieft**.
  </CardContent>
</ShadCnCard>`,

  '58-bringing-it-together.mdx': `## Common Mistakes for English Speakers

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Same register in every context</CardTitle>
  </CardHeader>

  <CardContent>
    ❌ **Hoi, ik wil inschrijven** at gemeente · ✅ **Geachte mevrouw, …** / **Kunt u me helpen met inschrijven?** Match **u/je**, openings, and particles to the situation.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Grammar-only study without speaking</CardTitle>
  </CardHeader>

  <CardContent>
    B1 needs **luisteren** + **spreken** daily: one short listening clip, one spoken paragraph, one written note — not only Grammar Track reading.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Never revisiting weak A1/A2 spots</CardTitle>
  </CardHeader>

  <CardContent>
    **de/het**, separables, **omdat** word order, and **zijn/hebben** perfect still slip at B1. Use Grammar Focus links to patch holes, not only new B1 topics.
  </CardContent>
</ShadCnCard>

<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Treating B1 as "finished" Dutch</CardTitle>
  </CardHeader>

  <CardContent>
    B1 = independence in daily life (work, news, forms) — not perfection. Keep **taalpartner**, **taalcafé**, and recovery phrases (**Kunt u dat herhalen?**) in your routine.
  </CardContent>
</ShadCnCard>`,
};

const sectionRegex =
  /## Common Mistakes for English Speakers[\s\S]*?(?=\n## (?:Quick Reference|Practice Exercises))/;

let updated = 0;
let skipped = 0;

for (const [file, section] of Object.entries(SECTIONS)) {
  const filePath = path.join(grammarDir, file);
  if (!fs.existsSync(filePath)) {
    console.warn('Missing:', file);
    skipped += 1;
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  if (!sectionRegex.test(content)) {
    console.warn('Skip (no matching section):', file);
    skipped += 1;
    continue;
  }

  content = content.replace(sectionRegex, `${section}\n\n`);
  fs.writeFileSync(filePath, content);
  updated += 1;
  console.log('Updated:', file);
}

console.log(`Done. ${updated} updated, ${skipped} skipped.`);
