import Image from 'next/image';
import Link from 'next/link';
import { appName, instagramFollowUrl, instagramHandle } from '@/lib/shared';

/* ─────────────────────────────────────────────
   Icon set — 20×20, currentColor, theme-safe
───────────────────────────────────────────── */

type IconProps = { className?: string };

const Icon = {
  chat: (p: IconProps) => (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={p.className}
      aria-hidden="true"
    >
      <path
        d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V5Zm4 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
        fill="currentColor"
      />
    </svg>
  ),
  alphabet: (p: IconProps) => (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={p.className}
      aria-hidden="true"
    >
      <path
        d="M4 3.5A1.5 1.5 0 0 1 5.5 2H15a1 1 0 0 1 1 1v12.5a1 1 0 0 1-1 1H5.5A1.5 1.5 0 0 0 4 18V3.5Zm1.5 0V14h.5a3 3 0 0 1 1.5.4V3.5H5.5Zm3.5 0v11.9a3 3 0 0 1 1.5-.4h4V3.5H9Z"
        fill="currentColor"
      />
    </svg>
  ),
  numbers: (p: IconProps) => (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={p.className}
      aria-hidden="true"
    >
      <path
        d="M7.6 2.6a.75.75 0 0 1 .65.84L7.96 6h3.99l.32-2.7a.75.75 0 0 1 1.49.18L13.46 6h2.29a.75.75 0 0 1 0 1.5h-2.47l-.59 5h2.56a.75.75 0 0 1 0 1.5h-2.74l-.32 2.7a.75.75 0 0 1-1.49-.17l.3-2.53H7.01l-.32 2.7a.75.75 0 0 1-1.49-.17L5.5 14H3.25a.75.75 0 0 1 0-1.5h2.43l.59-5H3.75a.75.75 0 0 1 0-1.5h2.7l.32-2.75a.75.75 0 0 1 .84-.65ZM7.78 7.5l-.59 5h3.99l.59-5H7.78Z"
        fill="currentColor"
      />
    </svg>
  ),
  person: (p: IconProps) => (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={p.className}
      aria-hidden="true"
    >
      <path
        d="M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-7 15a7 7 0 1 1 14 0v.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V17Z"
        fill="currentColor"
      />
    </svg>
  ),
  clock: (p: IconProps) => (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={p.className}
      aria-hidden="true"
    >
      <path
        d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Zm-.5 2.25a.75.75 0 0 1 1.5 0V9.7l2.53 1.46a.75.75 0 1 1-.75 1.3l-2.9-1.68A.75.75 0 0 1 9.5 10V5.75Z"
        fill="currentColor"
      />
    </svg>
  ),
  food: (p: IconProps) => (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={p.className}
      aria-hidden="true"
    >
      <path
        d="M5 2.25a.75.75 0 0 1 1.5 0V6a.5.5 0 0 0 1 0V2.25a.75.75 0 0 1 1.5 0V6a2.5 2.5 0 0 1-1.75 2.39v8.86a.75.75 0 0 1-1.5 0V8.39A2.5 2.5 0 0 1 4 6V2.25A.75.75 0 0 1 5 2.25Zm8.5-.5c1.93 0 3 2.24 3 4.75 0 2.06-.72 3.94-2.25 4.55v6.2a.75.75 0 0 1-1.5 0V1.75a.75.75 0 0 1 .75 0Z"
        fill="currentColor"
      />
    </svg>
  ),
  order: (p: IconProps) => (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={p.className}
      aria-hidden="true"
    >
      <path
        d="M3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm0 8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3Z"
        fill="currentColor"
      />
    </svg>
  ),
  cart: (p: IconProps) => (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={p.className}
      aria-hidden="true"
    >
      <path
        d="M1.75 2a.75.75 0 0 0 0 1.5h1.14l1.6 8.02A2 2 0 0 0 6.45 13.5h8.13a2 2 0 0 0 1.96-1.61l1.2-6.14A.75.75 0 0 0 17 4.85H4.62l-.4-2A.75.75 0 0 0 3.5 2H1.75ZM7 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
        fill="currentColor"
      />
    </svg>
  ),
  family: (p: IconProps) => (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={p.className}
      aria-hidden="true"
    >
      <path
        d="M7 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm7 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM1.5 15.5A5.5 5.5 0 0 1 7 10a5.5 5.5 0 0 1 5.5 5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-1Zm12.06 1.5H18a.5.5 0 0 0 .5-.5v-.75A4.25 4.25 0 0 0 14.25 11c-.6 0-1.17.13-1.69.35A6.97 6.97 0 0 1 14 15.5c0 .54-.16 1.05-.44 1.5Z"
        fill="currentColor"
      />
    </svg>
  ),
  route: (p: IconProps) => (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={p.className}
      aria-hidden="true"
    >
      <path
        d="M5 2.5a2.5 2.5 0 0 1 .75 4.885v5.23a2.5 2.5 0 1 1-1.5 0V7.385A2.5 2.5 0 0 1 5 2.5Zm10 0a2.5 2.5 0 0 1 .75 4.885V8.5a4 4 0 0 1-4 4H9.56l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 1 1 1.06 1.06L9.56 11h2.19a2.5 2.5 0 0 0 2.5-2.5V7.385A2.5 2.5 0 0 1 15 2.5Z"
        fill="currentColor"
      />
    </svg>
  ),
  translate: (p: IconProps) => (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={p.className}
      aria-hidden="true"
    >
      <path
        d="M7.75 2a.75.75 0 0 1 .75.75V4h3a.75.75 0 0 1 0 1.5h-.59a10.4 10.4 0 0 1-2.13 4.16c.72.53 1.55.96 2.47 1.25a.75.75 0 1 1-.45 1.43 10.5 10.5 0 0 1-3.05-1.58 10.5 10.5 0 0 1-3.05 1.58.75.75 0 1 1-.45-1.43 9 9 0 0 0 2.47-1.25A10.4 10.4 0 0 1 4.6 5.5H4A.75.75 0 0 1 4 4h3V2.75A.75.75 0 0 1 7.75 2Zm-1.6 3.5c.36 1.02.9 1.96 1.6 2.77a8.9 8.9 0 0 0 1.6-2.77h-3.2Zm7.6 3.5a.75.75 0 0 1 .69.46l3.5 8.25a.75.75 0 0 1-1.38.58L15.9 16.3h-4.3l-.66 1.99a.75.75 0 1 1-1.42-.48l3.53-8.32A.75.75 0 0 1 13.75 9Zm-1.55 5.8h3.06l-1.51-3.57-1.55 3.57Z"
        fill="currentColor"
      />
    </svg>
  ),
  pencil: (p: IconProps) => (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={p.className}
      aria-hidden="true"
    >
      <path
        d="M13.94 2.44a2.12 2.12 0 0 1 3 3l-.72.72-3-3 .72-.72Zm-1.78 1.78-8.4 8.4a2 2 0 0 0-.52.9l-.72 2.7a.5.5 0 0 0 .61.61l2.7-.72a2 2 0 0 0 .9-.52l8.43-8.37-3-3Z"
        fill="currentColor"
      />
    </svg>
  ),
  fast: (p: IconProps) => (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={p.className}
      aria-hidden="true"
    >
      <path
        d="M11.983 1.907a.75.75 0 0 0-1.292-.657l-8.5 9.5A.75.75 0 0 0 2.75 12h6.572l-1.305 6.093a.75.75 0 0 0 1.292.657l8.5-9.5A.75.75 0 0 0 17.25 8h-6.572l1.305-6.093Z"
        fill="currentColor"
      />
    </svg>
  ),
  instagram: (p: IconProps) => (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={p.className}
      aria-hidden="true"
    >
      <path d="M10 1.667c-2.264 0-2.547.01-3.436.05-.888.041-1.494.181-2.024.388a4.09 4.09 0 0 0-1.476.96 4.09 4.09 0 0 0-.962 1.477c-.206.53-.347 1.136-.387 2.024-.04.889-.05 1.172-.05 3.435 0 2.264.01 2.547.05 3.436.04.888.181 1.494.387 2.024.214.55.5 1.016.962 1.476.46.462.926.748 1.476.962.53.206 1.136.347 2.024.387.889.04 1.172.05 3.436.05 2.263 0 2.546-.01 3.435-.05.888-.04 1.494-.181 2.024-.387a4.09 4.09 0 0 0 1.476-.962c.462-.46.748-.926.962-1.476.206-.53.347-1.136.387-2.024.04-.889.05-1.172.05-3.436 0-2.263-.01-2.546-.05-3.435-.04-.888-.181-1.494-.387-2.024a4.09 4.09 0 0 0-.962-1.476 4.09 4.09 0 0 0-1.476-.962c-.53-.206-1.136-.347-2.024-.387-.889-.04-1.172-.05-3.435-.05Zm0 1.502c2.225 0 2.489.008 3.368.048.812.037 1.253.173 1.547.287.389.151.666.332.958.624.292.292.473.57.624.958.114.294.25.735.287 1.547.04.879.048 1.143.048 3.368 0 2.225-.008 2.488-.048 3.368-.037.811-.173 1.253-.287 1.546a2.59 2.59 0 0 1-.624.958c-.292.292-.57.473-.958.624-.294.115-.735.25-1.547.288-.879.04-1.143.048-3.368.048-2.225 0-2.489-.008-3.368-.048-.811-.037-1.253-.173-1.546-.288a2.59 2.59 0 0 1-.958-.624 2.59 2.59 0 0 1-.624-.958c-.115-.293-.25-.735-.288-1.546-.04-.88-.048-1.143-.048-3.368 0-2.225.008-2.489.048-3.368.037-.812.173-1.253.288-1.547.151-.388.332-.666.624-.958.292-.292.57-.473.958-.624.293-.114.735-.25 1.546-.287.88-.04 1.143-.048 3.368-.048Zm0 2.555a4.276 4.276 0 1 0 0 8.552 4.276 4.276 0 0 0 0-8.552Zm0 7.052a2.776 2.776 0 1 1 0-5.552 2.776 2.776 0 0 1 0 5.552Zm5.444-7.22a.999.999 0 1 1-1.998 0 .999.999 0 0 1 1.998 0Z" />
    </svg>
  ),
};

/* ─────────────────────────────────────────────
   Data — routes verified against content/notes
───────────────────────────────────────────── */

const A0 = '/notes/a0';
const A1 = '/notes/a1';

const TOPICS = [
  {
    href: `${A0}/01-greetings-and-introductions`,
    title: 'Greetings & Introductions',
    description: 'Say hallo, introduce yourself, and survive first contact.',
    icon: Icon.chat,
  },
  {
    href: `${A0}/02-alphabet-and-spelling`,
    title: 'Alphabet & Spelling',
    description: 'The Dutch letters, the famous ij, and spelling your name.',
    icon: Icon.alphabet,
  },
  {
    href: `${A0}/03-numbers-0-20-and-age`,
    title: 'Numbers & Age',
    description: 'Count from nul to twintig and talk about your age.',
    icon: Icon.numbers,
  },
  {
    href: `${A0}/04-pronouns-and-zijn`,
    title: "Pronouns & 'zijn'",
    description: 'Ik ben, jij bent — your first and most important verb.',
    icon: Icon.person,
  },
  {
    href: `${A0}/11-telling-time-and-reading-the-clock`,
    title: 'Telling Time',
    description: 'Read the clock the Dutch way — half zes is not 6:30.',
    icon: Icon.clock,
  },
  {
    href: `${A0}/10-ordering-food-and-drink`,
    title: 'Ordering Food & Drink',
    description: 'Cafés, terrasjes, and getting your koffie with confidence.',
    icon: Icon.food,
  },
  {
    href: `${A1}/02-word-order-svo`,
    title: 'Word Order',
    description: 'The verb-second rule that makes Dutch sentences click.',
    icon: Icon.order,
  },
  {
    href: `${A1}/08-shopping`,
    title: 'Shopping',
    description: 'Markets, sizes, prices, and asking for what you need.',
    icon: Icon.cart,
  },
  {
    href: `${A1}/04-family`,
    title: 'Family',
    description: 'Talk about the people in your life, from moeder to neef.',
    icon: Icon.family,
  },
];

const PHASES = [
  {
    level: 'Phase 1',
    range: 'A0 → A1',
    title: 'The Foundation',
    description:
      'From your very first hallo to a complete A1: greetings, numbers, time, word order, family, food, and shopping.',
    href: `${A0}/01-greetings-and-introductions`,
    status: 'live' as const,
    statusLabel: '',
  },
  {
    level: 'Phase 2',
    range: 'A1 → A2',
    title: 'Expanding Your Range',
    description:
      'Past tenses in depth, opinions, comparisons, subordinate clauses, and the mysterious little word er.',
    href: '/notes/a2/01-past-tense-depth',
    status: 'live' as const,
    statusLabel: '',
  },
  {
    level: 'Phase 3',
    range: 'A2 → B1',
    title: 'Towards Independence',
    description:
      'Passives, hypotheticals, nuance, real news articles, and handling fast natural speech on your own.',
    href: '/notes/b1/01-conjunctions-overview',
    status: 'soon' as const,
    statusLabel: '',
  },
];

const BENEFITS = [
  {
    title: 'CEFR-structured',
    description:
      'A real curriculum, not random tips. Every lesson builds on the last, with review-and-test checkpoints at each level.',
    icon: Icon.route,
  },
  {
    title: 'For English speakers',
    description:
      'Explanations that compare Dutch to English head-on, so the grammar clicks instead of confusing you.',
    icon: Icon.translate,
  },
  {
    title: 'Practice-heavy',
    description:
      'Dialogues, vocabulary tables, and exercises in every lesson — you use the language, not just read about it.',
    icon: Icon.pencil,
  },
  {
    title: 'Free & fast',
    description:
      'Static pages, no ads, no signup. Every lesson loads instantly, even on the train to work.',
    icon: Icon.fast,
  },
];

const FEATURED_LESSONS = [
  {
    href: `${A0}/01-greetings-and-introductions`,
    category: 'Start Here',
    title: 'Greetings & Introductions',
    description:
      'Your very first Dutch conversation — hallo, hoe gaat het, and introducing yourself politely or casually.',
  },
  {
    href: `${A0}/04-pronouns-and-zijn`,
    category: 'Grammar',
    title: "Pronouns and 'zijn'",
    description:
      'Meet the verb you will use in nearly every sentence, and the pronouns that go with it.',
  },
  {
    href: `${A1}/01-daily-routines`,
    category: 'Everyday Dutch',
    title: 'Daily Routines',
    description:
      'Describe your whole day — waking up, commuting, working, relaxing — in real, natural Dutch.',
  },
  {
    href: `${A1}/03-negation`,
    category: 'Grammar',
    title: "Negation: 'niet' & 'geen'",
    description:
      'Two words for “not”, one classic beginner trap. Learn once, never mix them up again.',
  },
];

const PHRASES = [
  { dutch: 'Hallo!', english: 'Hello!' },
  { dutch: 'Bedankt', english: 'Thank you' },
  { dutch: 'Alsjeblieft', english: 'Here you go' },
  { dutch: 'Lekker', english: 'Tasty / great' },
  { dutch: 'Tot ziens', english: 'See you' },
];

const STATS = [
  { value: '90+', label: 'Lessons' },
  { value: 'A0→B1', label: 'Full Path' },
  { value: '100%', label: 'Free' },
];

const FOOTER_LINKS: {
  heading: string;
  links: { label: string; href: string }[];
}[] = [
  {
    heading: 'Course',
    links: [
      { label: 'All Notes', href: '/notes' },
      {
        label: 'A0: The Absolute Basics',
        href: `${A0}/01-greetings-and-introductions`,
      },
      { label: 'A1: Everyday Dutch', href: `${A1}/01-daily-routines` },
      { label: 'A0 Review & Test', href: `${A0}/review-and-test` },
    ],
  },
  {
    heading: 'Start Here',
    links: [
      { label: 'Greetings', href: `${A0}/01-greetings-and-introductions` },
      { label: 'Alphabet & Spelling', href: `${A0}/02-alphabet-and-spelling` },
      { label: 'Numbers 0–20', href: `${A0}/03-numbers-0-20-and-age` },
      {
        label: 'Telling Time',
        href: `${A0}/11-telling-time-and-reading-the-clock`,
      },
    ],
  },
  {
    heading: 'Grammar',
    links: [
      { label: "Pronouns & 'zijn'", href: `${A0}/04-pronouns-and-zijn` },
      { label: 'Word Order', href: `${A1}/02-word-order-svo` },
      { label: 'Negation', href: `${A1}/03-negation` },
      { label: 'Adjectives', href: `${A1}/11-adjectives` },
    ],
  },
];

/* ─────────────────────────────────────────────
   Reusable bits
───────────────────────────────────────────── */

function Arrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 6h8M7 3l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionLabel({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <span
      id={id}
      className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-fd-muted-foreground"
    >
      <span className="h-px w-6 bg-fd-primary/40" aria-hidden="true" />
      {children}
    </span>
  );
}

/* Hero visual — CSS-only flashcard stack inside a spinning ring */
function HeroCards() {
  return (
    <div className="relative flex items-center justify-center py-10 sm:py-14">
      {/* Spinning conic ring */}
      <div
        className="pointer-events-none absolute h-72 w-72 sm:h-80 sm:w-80 rounded-full opacity-50 dark:opacity-70 motion-safe:animate-spin"
        style={{
          animationDuration: '8s',
          background:
            'conic-gradient(from 0deg, transparent 0deg, var(--color-fd-primary) 130deg, transparent 250deg)',
          WebkitMask:
            'radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px))',
          mask: 'radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px))',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute h-52 w-52 sm:h-60 sm:w-60 rounded-full bg-fd-primary/10 blur-2xl"
        aria-hidden="true"
      />

      {/* Flashcard stack */}
      <div className="relative h-64 w-64 sm:h-72 sm:w-72" aria-hidden="true">
        <div className="absolute -left-4 top-8 w-40 -rotate-12 rounded-2xl border border-fd-border bg-fd-card/80 px-5 py-4 shadow-lg shadow-black/5 backdrop-blur-sm">
          <p className="text-lg font-semibold text-fd-foreground">Bedankt</p>
          <p className="text-xs text-fd-muted-foreground">thank you</p>
        </div>
        <div className="absolute -right-4 bottom-8 w-40 rotate-12 rounded-2xl border border-fd-border bg-fd-card/80 px-5 py-4 shadow-lg shadow-black/5 backdrop-blur-sm">
          <p className="text-lg font-semibold text-fd-foreground">Tot ziens</p>
          <p className="text-xs text-fd-muted-foreground">see you later</p>
        </div>
        <div className="absolute left-1/2 top-1/2 w-56 -translate-x-1/2 -translate-y-1/2 -rotate-2 rounded-2xl border border-fd-primary/30 bg-fd-card px-6 py-5 shadow-xl shadow-fd-primary/15 transition-transform duration-300 hover:rotate-0 hover:scale-[1.03]">
          <div className="mb-2 flex items-center justify-between">
            <span className="inline-flex items-center rounded-full bg-fd-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-fd-primary">
              Les 1
            </span>
            <span className="text-base leading-none">🇳🇱</span>
          </div>
          <p className="text-3xl font-semibold text-fd-foreground">Hallo!</p>
          <p className="mt-1 text-sm text-fd-muted-foreground">
            /hah-<span className="font-semibold text-fd-primary">LOH</span>/
          </p>
          <p className="mt-3 border-t border-fd-border pt-3 text-sm text-fd-muted-foreground">
            = Hello! <span className="text-fd-foreground">👋</span>
          </p>
        </div>

        {/* Floating chips */}
        <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full border border-fd-border bg-fd-card/90 px-3 py-1 text-[11px] font-semibold text-fd-muted-foreground shadow-sm backdrop-blur-sm">
          de <span className="text-fd-primary">•</span> het
        </span>
        <span className="absolute -bottom-2 left-2 rounded-full border border-fd-primary/25 bg-fd-card/90 px-3 py-1 text-[11px] font-semibold text-fd-primary shadow-sm backdrop-blur-sm">
          A0 → B1
        </span>
        <span className="absolute -right-2 top-1/4 rounded-full border border-fd-border bg-fd-card/90 px-3 py-1 text-[11px] font-semibold text-fd-muted-foreground shadow-sm backdrop-blur-sm">
          ij
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      <main className="relative overflow-hidden bg-fd-background">
        {/* Ambient glows — CSS only, theme-derived */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-4xl h-128 rounded-full bg-fd-primary/8 blur-[140px]" />
          <div className="absolute top-1/2 -left-40 w-xl h-144 rounded-full bg-fd-primary/5 blur-[120px]" />
          <div className="absolute top-1/3 -right-40 w-lg h-128 rounded-full bg-fd-primary/5 blur-[120px]" />
        </div>

        {/* Dot-grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
          aria-hidden="true"
        />

        {/* ── Hero ───────────────────────────────── */}
        <section
          className="relative z-10 mx-auto w-full max-w-6xl mt-4 px-4 sm:px-6 lg:px-8 py-0 md:pt-16 lg:pt-20"
          aria-label="Hero"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Visual */}
            <div className="order-1 lg:order-2 flex justify-center zv-fade">
              <HeroCards />
            </div>

            {/* Copy */}
            <div className="order-2 lg:order-1 flex flex-col items-center text-center lg:items-start lg:text-left gap-6 mt-0 md:mt-8 lg:mt-0">
              <div
                className="zv-reveal inline-flex items-center gap-2 rounded-full border border-fd-primary/20 bg-fd-card/60 px-3.5 py-1 backdrop-blur-sm shadow-sm shadow-fd-primary/5"
                style={{ ['--zv-delay' as string]: '60ms' }}
              >
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-fd-primary opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-fd-primary" />
                </span>
                <span className="text-[11px] font-medium tracking-widest uppercase text-fd-primary select-none">
                  Van nul naar Nederlands
                </span>
              </div>

              <h1
                className="zv-reveal text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-fd-foreground leading-[1.1]"
                style={{ ['--zv-delay' as string]: '140ms' }}
              >
                Level up your Dutch,{' '}
                <span className="bg-linear-to-r from-fd-primary to-fd-primary/55 bg-clip-text text-transparent">
                  from A0 to B1
                </span>
              </h1>

              <p
                className="zv-reveal text-sm sm:text-base text-fd-muted-foreground max-w-md leading-relaxed"
                style={{ ['--zv-delay' as string]: '220ms' }}
              >
                A structured, CEFR-aligned Dutch course written for English
                speakers — clear grammar, real dialogues, and exercises in every
                lesson. No app streaks, no fluff.
              </p>

              <div
                className="zv-reveal flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
                style={{ ['--zv-delay' as string]: '300ms' }}
              >
                <Link
                  href={`${A0}/01-greetings-and-introductions`}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-fd-primary hover:bg-fd-primary/90 px-7 py-3 text-sm font-semibold text-fd-primary-foreground shadow-lg shadow-fd-primary/25 hover:shadow-fd-primary/35 hover:-translate-y-px active:translate-y-0 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring focus-visible:ring-offset-2 focus-visible:ring-offset-fd-background"
                >
                  Start Lesson 1
                  <Arrow className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/notes"
                  className="group inline-flex items-center justify-center rounded-xl border border-fd-border bg-fd-card/60 px-7 py-3 text-sm font-medium text-fd-foreground backdrop-blur-sm hover:border-fd-primary/40 hover:text-fd-primary transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring focus-visible:ring-offset-2 focus-visible:ring-offset-fd-background"
                >
                  Browse the Course
                  <Arrow className="ml-2 w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* Stats */}
              <dl
                className="zv-reveal flex items-center gap-6 sm:gap-8 pt-2"
                style={{ ['--zv-delay' as string]: '380ms' }}
              >
                {STATS.map((s) => (
                  <div key={s.label} className="flex flex-col">
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="text-xl sm:text-2xl font-semibold text-fd-foreground tabular-nums">
                      {s.value}
                    </dd>
                    <span className="text-[11px] font-medium uppercase tracking-widest text-fd-muted-foreground">
                      {s.label}
                    </span>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Phrase strip */}
          <div
            className="mt-14 flex flex-col items-center gap-4 zv-fade"
            style={{ ['--zv-delay' as string]: '460ms' }}
          >
            <span className="text-[11px] font-medium uppercase tracking-widest text-fd-muted-foreground/70">
              Words you&apos;ll actually use
            </span>
            <ul className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {PHRASES.map((p) => (
                <li
                  key={p.dutch}
                  className="inline-flex items-baseline gap-2 rounded-2xl border border-fd-border bg-fd-card/60 px-4 py-2 backdrop-blur-sm"
                >
                  <span className="text-sm font-semibold text-fd-foreground">
                    {p.dutch}
                  </span>
                  <span className="text-xs text-fd-muted-foreground">
                    {p.english}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Learning path ──────────────────────── */}
        <section
          className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24"
          id="path"
          aria-labelledby="path-heading"
        >
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center text-center gap-3 mb-10">
              <SectionLabel>The Learning Path</SectionLabel>
              <h2
                id="path-heading"
                className="text-2xl sm:text-3xl font-semibold tracking-tight text-fd-foreground"
              >
                Three phases. One clear road to B1.
              </h2>
              <p className="text-sm text-fd-muted-foreground max-w-lg">
                Each phase takes you fully through the next CEFR level, with a
                review-and-test checkpoint before you move on.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {PHASES.map((phase) => {
                const inner = (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center rounded-full bg-fd-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-fd-primary border border-fd-primary/20">
                        {phase.range}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 text-[11px] font-medium ${
                          phase.status === 'live'
                            ? 'text-fd-primary'
                            : 'text-fd-muted-foreground/70'
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            phase.status === 'live'
                              ? 'bg-fd-primary'
                              : 'bg-fd-muted-foreground/40'
                          }`}
                          aria-hidden="true"
                        />
                        {phase.statusLabel}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-fd-muted-foreground mb-1">
                        {phase.level}
                      </p>
                      <h3
                        className={`text-base font-semibold mb-2 transition-colors duration-150 ${
                          phase.status === 'live'
                            ? 'text-fd-foreground group-hover:text-fd-primary'
                            : 'text-fd-foreground/80'
                        }`}
                      >
                        {phase.title}
                      </h3>
                      <p className="text-xs text-fd-muted-foreground leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                    {phase.status === 'live' && (
                      <div className="flex items-center gap-1 text-[11px] font-medium text-fd-primary/55 group-hover:text-fd-primary transition-colors duration-150">
                        <span>Start phase</span>
                        <Arrow className="w-3 h-3 transition-transform duration-150 group-hover:translate-x-0.5" />
                      </div>
                    )}
                  </>
                );

                return phase.href ? (
                  <Link
                    key={phase.level}
                    href={phase.href}
                    className="group relative flex flex-col gap-4 rounded-2xl border border-fd-border bg-fd-card hover:border-fd-primary/40 p-5 shadow-sm shadow-black/4 dark:shadow-none transition-all duration-150 hover:-translate-y-px hover:shadow-md hover:shadow-fd-primary/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring"
                  >
                    {inner}
                  </Link>
                ) : (
                  <div
                    key={phase.level}
                    className="relative flex flex-col gap-4 rounded-2xl border border-dashed border-fd-border bg-fd-card/50 p-5"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>

            <p className="mt-6 text-center text-xs text-fd-muted-foreground">
              Plus dedicated{' '}
              <span className="font-medium text-fd-foreground">Grammar</span>{' '}
              and{' '}
              <span className="font-medium text-fd-foreground">
                Pronunciation
              </span>{' '}
              tracks on the roadmap.
            </p>
          </div>
        </section>

        {/* ── Topics ─────────────────────────────── */}
        <section
          className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24"
          id="topics"
          aria-labelledby="topics-heading"
        >
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center text-center gap-3 mb-10">
              <SectionLabel>Browse by Topic</SectionLabel>
              <h2
                id="topics-heading"
                className="text-2xl sm:text-3xl font-semibold tracking-tight text-fd-foreground"
              >
                Jump straight into a lesson
              </h2>
              <p className="text-sm text-fd-muted-foreground max-w-lg">
                Every lesson stands on its own — pick what you need today, from
                small talk to the verb-second rule.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {TOPICS.map((card) => {
                const CardIcon = card.icon;
                return (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="group relative flex flex-col gap-4 rounded-2xl border border-fd-border bg-fd-card hover:border-fd-primary/40 p-5 shadow-sm shadow-black/4 dark:shadow-none transition-all duration-150 hover:-translate-y-px hover:shadow-md hover:shadow-fd-primary/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring"
                  >
                    <div className="w-9 h-9 rounded-xl bg-fd-primary/10 flex items-center justify-center text-fd-primary transition-colors duration-150 group-hover:bg-fd-primary/18">
                      <CardIcon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-fd-foreground group-hover:text-fd-primary transition-colors duration-150 mb-1">
                        {card.title}
                      </h3>
                      <p className="text-xs text-fd-muted-foreground leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-medium text-fd-primary/55 group-hover:text-fd-primary transition-colors duration-150">
                      <span>Open</span>
                      <Arrow className="w-3 h-3 transition-transform duration-150 group-hover:translate-x-0.5" />
                    </div>
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-linear-to-br from-fd-primary/3 to-transparent"
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Value Proposition ──────────────────── */}
        <section
          className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24"
          id="about"
          aria-labelledby="about-heading"
        >
          <div className="mx-auto max-w-5xl grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:items-center">
            <div className="flex flex-col gap-4">
              <SectionLabel>Why {appName}</SectionLabel>
              <h2
                id="about-heading"
                className="text-2xl sm:text-3xl font-semibold tracking-tight text-fd-foreground leading-tight"
              >
                A textbook&apos;s depth, a website&apos;s speed
              </h2>
              <p className="text-sm sm:text-base text-fd-muted-foreground leading-relaxed">
                <span className="font-semibold text-fd-primary">{appName}</span>{' '}
                is Nederlands, levelled up. Apps gamify streaks; textbooks bury
                you in theory. This course sits in between — structured,
                explanation-first lessons you can read on any device, written
                for how English speakers actually learn Dutch.
              </p>
              <Link
                href="/notes"
                className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-fd-primary hover:text-fd-primary/80 transition-colors duration-150"
              >
                Start reading
                <Arrow className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BENEFITS.map((b) => {
                const BIcon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="flex flex-col gap-3 rounded-2xl border border-fd-border bg-fd-card p-5 transition-all duration-150 hover:border-fd-primary/40 hover:-translate-y-px"
                  >
                    <div className="w-9 h-9 rounded-xl bg-fd-primary/10 flex items-center justify-center text-fd-primary shrink-0">
                      <BIcon className="w-5 h-5" />
                    </div>
                    <dt className="text-sm font-semibold text-fd-foreground">
                      {b.title}
                    </dt>
                    <dd className="text-xs text-fd-muted-foreground leading-relaxed">
                      {b.description}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </section>

        {/* ── Featured Lessons ───────────────────── */}
        <section
          className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24"
          aria-labelledby="featured-heading"
        >
          <div className="mx-auto max-w-5xl">
            <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
              <div className="space-y-2">
                <SectionLabel>Start Here</SectionLabel>
                <h2
                  id="featured-heading"
                  className="text-2xl sm:text-3xl font-semibold tracking-tight text-fd-foreground"
                >
                  Featured Lessons
                </h2>
              </div>
              <Link
                href="/notes"
                className="text-sm font-medium text-fd-primary hover:text-fd-primary/80 transition-colors duration-150 whitespace-nowrap"
              >
                View all →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURED_LESSONS.map((note) => (
                <Link
                  key={note.href}
                  href={note.href}
                  className="group flex flex-col gap-3 rounded-2xl border border-fd-border bg-fd-card hover:border-fd-primary/40 p-6 shadow-sm shadow-black/4 dark:shadow-none transition-all duration-150 hover:-translate-y-px hover:shadow-md hover:shadow-fd-primary/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring"
                >
                  <span className="inline-flex self-start items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-fd-primary/10 text-fd-primary border border-fd-primary/20">
                    {note.category}
                  </span>
                  <h3 className="text-base font-semibold text-fd-foreground group-hover:text-fd-primary transition-colors duration-150 leading-snug">
                    {note.title}
                  </h3>
                  <p className="text-xs text-fd-muted-foreground leading-relaxed flex-1">
                    {note.description}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-fd-primary/55 group-hover:text-fd-primary transition-colors duration-150">
                    <span>Read lesson</span>
                    <Arrow className="w-3 h-3 transition-transform duration-150 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA band ───────────────────────────── */}
        <section
          className="relative z-10 px-4 sm:px-6 lg:px-8 py-16"
          aria-labelledby="cta-heading"
        >
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-fd-primary/20 bg-fd-card/70 px-6 py-12 sm:px-12 sm:py-16 text-center backdrop-blur-sm">
            <div
              className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-2xl rounded-full bg-fd-primary/10 blur-[100px]"
              aria-hidden="true"
            />
            <div className="relative flex flex-col items-center gap-5">
              <SectionLabel>Begin Vandaag</SectionLabel>
              <h2
                id="cta-heading"
                className="text-2xl sm:text-3xl font-semibold tracking-tight text-fd-foreground max-w-xl"
              >
                Your first Dutch conversation is one lesson away
              </h2>
              <p className="text-sm sm:text-base text-fd-muted-foreground max-w-md leading-relaxed">
                Free, structured, and growing lesson by lesson. Start with{' '}
                <span className="font-semibold text-fd-foreground">hallo</span>{' '}
                today — by the end of Phase 1 you&apos;ll be ordering koffie,
                telling time, and holding real A1 conversations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Link
                  href={`${A0}/01-greetings-and-introductions`}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-fd-primary hover:bg-fd-primary/90 px-7 py-3 text-sm font-semibold text-fd-primary-foreground shadow-lg shadow-fd-primary/25 hover:shadow-fd-primary/35 hover:-translate-y-px active:translate-y-0 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring focus-visible:ring-offset-2 focus-visible:ring-offset-fd-background"
                >
                  Start Lesson 1
                  <Arrow className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/notes"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-fd-border bg-fd-card/60 px-7 py-3 text-sm font-medium text-fd-foreground backdrop-blur-sm hover:border-fd-primary/40 hover:text-fd-primary transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring focus-visible:ring-offset-2 focus-visible:ring-offset-fd-background"
                >
                  Browse the Course
                  <Arrow className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────── */}
      <footer className="relative z-10 border-t border-fd-border bg-fd-card/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            {/* Brand column */}
            <div className="flex flex-col gap-4">
              <Image
                src="/svgs/logo/dutchyy-logo.svg"
                alt={appName}
                width={160}
                height={56}
                className="w-40 h-14 object-contain self-start"
              />
              <p className="text-xs text-fd-muted-foreground leading-relaxed max-w-xs">
                A free, structured Dutch course for English speakers — from your
                first hallo all the way to B1.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href={instagramFollowUrl('footer')}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow @${instagramHandle} on Instagram`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-fd-border bg-fd-card text-fd-muted-foreground hover:text-fuchsia-600 dark:hover:text-fuchsia-400 hover:border-fuchsia-500/40 transition-colors duration-150"
                >
                  <Icon.instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Link columns */}
            {FOOTER_LINKS.map((col) => (
              <nav
                key={col.heading}
                aria-label={col.heading}
                className="flex flex-col gap-3"
              >
                <h3 className="text-[11px] font-semibold uppercase tracking-widest text-fd-muted-foreground">
                  {col.heading}
                </h3>
                <ul className="flex flex-col gap-2">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-fd-muted-foreground hover:text-fd-primary transition-colors duration-150"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-fd-border pt-6">
            <p className="text-xs text-fd-muted-foreground">
              © {new Date().getFullYear()} {appName}. All rights reserved.
            </p>
            <p className="text-xs text-fd-muted-foreground">
              Veel succes met je Nederlands. 🧡
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
