#!/usr/bin/env node
/**
 * Audit flashcards: flag English/meta fronts and lessons with fewer than 6 cards.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.dirname(fileURLToPath(import.meta.url));
const src = fs.readFileSync(
  path.join(root, '../lib/lesson-flashcards.ts'),
  'utf8'
);

const dutchHint =
  /\b(ik|je|u|het|de|een|niet|graag|alstublieft|ben|heb|ga|naar|van|met|zou|zullen|omdat|hoewel|waar|hoe|wat|wie|wanneer|waarom|tot|voor|bij|op|in|aan|mijn|jouw|zijn|haar|wij|zij|jullie|kunt|mag|moet|wil|kan|dank|goed|dag|morgen|avond|nacht|brood|koffie|trein|station|regent|warm|koud|ziek|dokter|apotheek|gezellig|gemeente|inschrijven|solliciteren|vergadering|spijt|vertrouw|mening|groet|bericht|agenda|universiteit|docent|student|duurzaam|geachte|herhalen|begrijp|langzaam|aangenaam|goedemorgen|goedenavond|dank|bedankt|alsjeblieft|alstublieft|chipkaart|rekening|menukaart|woonkamer|hoofdpijn|apotheek|koningsdag|sinterklaas|afspraak|pijpenstelen|bonnefooi|broodje|kopje|digid|bsn|huisarts|zorgverzekering|sollicitatiegesprek|inschrijven|tentamen|examen|bijstand|enerzijds|daarben|eens|twijfel|volgens|meldt|informeer|bijlage|toelichten|actiepunten|gevoel|ruzie|direct|agenda|pijpenstelen|herhalen|langzamer|bonnefooi|kogel|pols|regent|even|toch|maar|doe|kom|gaat|woont|komt|heet|spel|begrijp|kost|geld|euro|maandag|mei|weekend|vandaag|morgen|gisteren|links|rechts|rechtdoor|half|laat|taal|fiets|water|melk|moeder|vader|zus|broer|kind|kinderen|jas|schoenen|stad|huis|flat|trein|bus|metro|ov|chipkaart|regen|wind|zon|wolken|lichaam|hoofd|buik|arm|been|oog|oren|mond|neus|werkte|ging|kwam|had|was|gewerkt|gegaan|gezien|moeten|mogen|kunnen|willen|zullen|vind|volgens|eens|debate|mening|punt|kop|artikel|bron|formeel|informeel|geachte|groet|bijlage|solliciteer|functie|universiteit|studeer|docent|student|gemeente|milieu|gevoel|vertrouw|spijt|sorry|verhaal|toen|imperfect|perfect|diminutief|partikel|idiom|expressie|spraak|strategie|netherlands|praktisch|integratie|review|test)\b|[äëïöüáéíóúàèìòùâêîôûçñ]/i;

const lessonRegex = /'([^']+)':\s*\[([\s\S]*?)\n  \],/g;
let m;
const issues = [];

while ((m = lessonRegex.exec(src)) !== null) {
  const id = m[1];
  const block = m[2];
  const fronts = [...block.matchAll(/front:\s*'([^']+)'/g)].map((x) => x[1]);
  const count = fronts.length;
  if (count < 6) issues.push({ id, type: 'count', count, fronts });

  for (const front of fronts) {
    const looksEnglish =
      !dutchHint.test(front) &&
      /^[A-Za-z0-9\s/–—:+,.'"?()-]+$/.test(front) &&
      front.length > 3;
    if (looksEnglish) {
      issues.push({ id, type: 'english-front', front });
    }
  }
}

console.log(
  'Lessons with < 6 cards:',
  issues.filter((i) => i.type === 'count').length
);
console.log(
  'English/meta fronts:',
  issues.filter((i) => i.type === 'english-front').length
);
for (const i of issues.filter((x) => x.type === 'english-front')) {
  console.log(`  ${i.id}: "${i.front}"`);
}
