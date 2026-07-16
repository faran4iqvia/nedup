#!/usr/bin/env python3
"""Phase 2: Quick Review, Remember-from Callout, Part A/B practice for grammar 01-30."""

from __future__ import annotations

import re
from pathlib import Path

GRAMMAR_DIR = Path(__file__).resolve().parents[1] / "content/notes/grammar"

# quick_review, callout_body, part_a_title, part_b_title
CLASSROOM: dict[str, tuple[str, str, str, str]] = {
    "01-personal-pronouns": (
        "From [A0 Lesson 4](/notes/a0/04-pronouns-and-zijn) you already say **Ik ben Anna**, **Waar woont u?**, and **Zij zijn op tijd**. This page lists every personal pronoun in one table.",
        "Remember from [A0 Lesson 4](/notes/a0/04-pronouns-and-zijn): pronouns pair with **zijn** (**Ik ben**, **Zij zijn**). Formal **u** uses **bent**, not **ben**.",
        "Part A: Fill in and translate",
        "Part B: Say aloud",
    ),
    "02-verb-zijn": (
        "From [A0 Lesson 4](/notes/a0/04-pronouns-and-zijn) you conjugate **ben**, **bent**, **is**, and **zijn** for introductions and location. Hunger and thirst use **hebben**, not **zijn**.",
        "Remember from [Grammar 01: Personal Pronouns](/notes/grammar/01-personal-pronouns): every **zijn** sentence needs a subject (**Ik ben …**, not **Ben moe.**).",
        "Part A: Conjugate and translate",
        "Part B: Say aloud",
    ),
    "03-verb-hebben": (
        "From [A0 Lesson 5](/notes/a0/05-hebben-and-everyday-things) you say **Ik heb geen tijd**, **Ik heb honger**, and **Ik heb dorst**. **hebben** covers possession and physical states.",
        "Remember from [Grammar 02: _zijn_](/notes/grammar/02-verb-zijn): **zijn** = identity/location · **hebben** = have / hunger / thirst / pain.",
        "Part A: Conjugate and translate",
        "Part B: Say aloud",
    ),
    "04-present-tense-regular": (
        "From [A0 Lesson 9](/notes/a0/09-where-do-you-live) you say **Ik woon in …** and **Woon je in …?** Regular verbs use stem + endings (**werk**, **werkt**, **werken**).",
        "Remember from [Grammar 01](/notes/grammar/01-personal-pronouns): Dutch keeps the subject pronoun (**Ik werk**, not bare **Werk**).",
        "Part A: Conjugate and fix",
        "Part B: Say aloud",
    ),
    "05-question-formation": (
        "From [A0 Lesson 6](/notes/a0/06-basic-questions) you invert for yes/no (**Ben je …?**) and front **waar**, **wanneer**, **wie**, **hoeveel**.",
        "Remember from [Grammar 04: Present Tense](/notes/grammar/04-present-tense-regular): inversion swaps subject and verb · the verb stays conjugated.",
        "Part A: Build questions",
        "Part B: Say aloud",
    ),
    "06-modal-verbs-intro": (
        "From [A1 Lesson 12](/notes/a1/12-more-present-verbs) you use **ik wil**, **ik kan**, **ik moet**, **ik mag** with an infinitive at the end.",
        "Remember from [Grammar 07: Word Order](/notes/grammar/07-word-order-svo): modal in position 2 · main verb at the end (**Ik wil vandaag werken**).",
        "Part A: Modal + infinitive",
        "Part B: Say aloud",
    ),
    "07-word-order-svo": (
        "",  # existing Quick Review
        "Remember from [A1 Lesson 2](/notes/a1/02-word-order-svo) and [Grammar 04](/notes/grammar/04-present-tense-regular): **Ik werk vandaag** = subject · verb · rest. V2 is the spine for everything after this.",
        "Part A: Build and fix",
        "Part B: Say aloud",
    ),
    "08-negation": (
        "",
        "Remember from [A1 Lesson 3](/notes/a1/03-negation) and [Grammar 07](/notes/grammar/07-word-order-svo): **geen** for indefinite nouns · **niet** placement sits inside the V2 frame.",
        "Part A: Choose and place",
        "Part B: Say aloud",
    ),
    "09-articles-de-het": (
        "From [A0 Lesson 12](/notes/a0/12-de-het-primer) you order **de koffie** and **het brood** as fixed chunks. This page adds guess strategies when you meet a new noun.",
        "Remember from [A0 Lesson 12](/notes/a0/12-de-het-primer): always learn **de** or **het** with the noun · plural is always **de**.",
        "Part A: Choose de or het",
        "Part B: Learn chunks",
    ),
    "10-possessive-pronouns": (
        "From [A1 Lesson 5](/notes/a1/05-possessives) you say **mijn naam**, **jouw fiets**, **ons huis**, and formal **uw**.",
        "Remember from [Grammar 09: Articles](/notes/grammar/09-articles-de-het): no **de/het** after a possessive (**mijn fiets**, not **mijn de fiets**).",
        "Part A: Fill in possessives",
        "Part B: Say aloud",
    ),
    "11-demonstratives": (
        "From [A1 Lesson 9](/notes/a1/09-demonstratives): **deze/die** for **de** words · **dit/dat** for **het** words.",
        "Remember from [Grammar 09](/notes/grammar/09-articles-de-het): noun gender picks **deze** vs **dit**.",
        "Part A: Choose deze/die/dit/dat",
        "Part B: Say aloud",
    ),
    "12-plural-nouns": (
        "From [A1 Lesson 10](/notes/a1/10-plural-nouns): plural uses **de** (never **het**) · patterns **-en**, **-s**, **-eren**, vowel change.",
        "Remember from [Grammar 09: de/het cues](/notes/grammar/09-articles-de-het#guess-strategies-and-memory-cues): singular **het** → plural **de** (**het boek** → **de boeken**).",
        "Part A: Form plurals",
        "Part B: Say aloud",
    ),
    "13-adjectives": (
        "From [A2 Lesson 8](/notes/a2/08-describing-people): **de grote stad**, **het grote huis** · predicate **De stad is groot** (no **-e**).",
        "Remember from [Grammar 09](/notes/grammar/09-articles-de-het) and [12](/notes/grammar/12-plural-nouns): adjective ending follows **de / het / plural**.",
        "Part A: Add the right ending",
        "Part B: Describe aloud",
    ),
    "14-reflexive-verbs": (
        "From [A1 Lesson 17](/notes/a1/17-reflexive-verbs): **Ik was me**, **Hij scheert zich**, **U wast zich**.",
        "Remember from [Grammar 07: Word Order](/notes/grammar/07-word-order-svo): reflexive pronoun sits in the middle field · verb still in position 2.",
        "Part A: Add zich/me/je",
        "Part B: Say aloud",
    ),
    "15-separable-verbs": (
        "From [A1 Lesson 21](/notes/a1/21-separable-verbs): **Ik sta om zeven uur op** · the prefix goes to the end in main clauses.",
        "Remember from [Grammar 07: word order spine](/notes/grammar/07-word-order-svo#word-order-spine-where-this-file-fits): step 3 · verb piece at the end.",
        "Part A: Split the prefix",
        "Part B: Say aloud",
    ),
    "16-simple-past-regular": (
        "From [A1 Lesson 18](/notes/a1/18-simple-past-regular): **werkte**, **woonde** · **-te** or **-de** + plural **-n**.",
        "Remember from [Grammar 04: Present Tense](/notes/grammar/04-present-tense-regular): same stem as present · different ending for past.",
        "Part A: Past forms",
        "Part B: Say aloud",
    ),
    "17-simple-past-irregular": (
        "From [A1 Lesson 19](/notes/a1/19-simple-past-irregular): **ging**, **kwam**, **was** · vowel change, not **-te/-de**.",
        "Remember from [Grammar 16](/notes/grammar/16-simple-past-regular): weak verbs add **-te/-de** · strong verbs change the vowel.",
        "Part A: Past forms",
        "Part B: Say aloud",
    ),
    "18-perfect-tense": (
        "",
        "Remember from [Grammar 16](/notes/grammar/16-simple-past-regular) and [17](/notes/grammar/17-simple-past-irregular): the participle often builds on the same stem.",
        "Part A: Build the perfect",
        "Part B: Say aloud",
    ),
    "19-past-tense-weak-strong": (
        "From [A2 Lesson 1](/notes/a2/01-past-tense-depth): Dutch verbs are **zwak** (weak) or **sterk** (strong) · that predicts past and participle forms.",
        "Remember from [Grammar 16](/notes/grammar/16-simple-past-regular) and [17](/notes/grammar/17-simple-past-irregular): classify first · then pick the pattern.",
        "Part A: Classify and conjugate",
        "Part B: Say aloud",
    ),
    "20-modal-verbs-depth": (
        "From [A2 Lesson 4](/notes/a2/04-modals-in-depth): all five modals, **zullen**, and **hebben + moeten werken** (double infinitive).",
        "Remember from [Grammar 06](/notes/grammar/06-modal-verbs-intro) and [18: Perfect](/notes/grammar/18-perfect-tense): modal at end in perfect · no participle after modal.",
        "Part A: Conjugate and rewrite",
        "Part B: Say aloud",
    ),
    "21-comparatives-superlatives": (
        "From [A2 Lesson 6](/notes/a2/06-comparatives): **groter**, **het grootste**, **meer/minder**, irregular **beter**, **meer**.",
        "Remember from [Grammar 13: Adjectives](/notes/grammar/13-adjectives): know the base form before adding **-er** or **-st**.",
        "Part A: Compare and superlative",
        "Part B: Say aloud",
    ),
    "22-prepositions-place": (
        "From [A2 Lesson 10](/notes/a2/10-prepositions-place): **in**, **op**, **bij**, **tussen**, **naast** for static location.",
        "Remember from [Grammar 07](/notes/grammar/07-word-order-svo): Dutch often orders **time · manner · place** in the rest of the sentence.",
        "Part A: Choose the preposition",
        "Part B: Describe your room",
    ),
    "23-prepositions-time-movement": (
        "From [A2 Lesson 11](/notes/a2/11-prepositions-time): **om** (time), **in** (month/season), **naar** (movement), **van … tot**.",
        "Remember from [Grammar 22: Place](/notes/grammar/22-prepositions-place): static **in/op** vs movement **naar**.",
        "Part A: Time and movement",
        "Part B: Say your week aloud",
    ),
    "24-relative-clauses": (
        "From [A2 Lesson 12](/notes/a2/12-relative-clauses): **die** for **de** nouns · **dat** for **het** nouns · verb at the end.",
        "Remember from [A2 Lesson 5: Opinions](/notes/a2/05-opinions): relative clauses use the same verb-last pattern as **Ik denk dat …**.",
        "Part A: Choose and merge",
        "Part B: Write about your neighbourhood",
    ),
    "25-om-te-infinitive": (
        "From [A2 Lesson 13](/notes/a2/13-om-te): **Ik ga naar de winkel om brood te kopen** (purpose = in order to).",
        "Remember from [Grammar 26](/notes/grammar/26-subordinate-want-omdat): **om te** = purpose · **omdat** = because (different word, different grammar).",
        "Part A: Build om … te",
        "Part B: Say your goals aloud",
    ),
    "26-subordinate-want-omdat": (
        "From [A2 Lesson 14](/notes/a2/14-subordinate-want-omdat): **want** keeps V2 in both clauses · **omdat** pushes the verb to the end.",
        "Remember from [Grammar 07: word order spine](/notes/grammar/07-word-order-svo#word-order-spine-where-this-file-fits): step 4 · subordinate verb last.",
        "Part A: want vs omdat",
        "Part B: Explain why aloud",
    ),
    "27-indirect-objects-pronouns": (
        "From [A2 Lesson 15](/notes/a2/15-indirect-objects): **Ik geef hem het boek** · **me/mij**, **je/jou**, **hem**, **haar**.",
        "Remember from [Grammar 01](/notes/grammar/01-personal-pronouns): unstressed **me/je** vs stressed **mij/jou** in short phrases.",
        "Part A: Fill in pronouns",
        "Part B: Say aloud",
    ),
    "28-er-constructions": (
        "From [A2 Lesson 16](/notes/a2/16-er-constructions) and [Lesson 9](/notes/a2/09-describing-places): **Er is**, **Er zijn**, partitive **er**, **er** + preposition.",
        "Remember from [Grammar 07](/notes/grammar/07-word-order-svo): **er** often fills position 1 (**Er is een probleem**).",
        "Part A: Place er correctly",
        "Part B: Say aloud",
    ),
    "29-conditional-als": (
        "From [A2 Lesson 20](/notes/a2/20-conditional-als): **Als ik tijd heb, kom ik** · real conditions · verb last in the **als** clause.",
        "Remember from [Grammar 26](/notes/grammar/26-subordinate-want-omdat): **als** is a subordinate connector · same verb-last rule as **omdat**.",
        "Part A: Build als sentences",
        "Part B: Say aloud",
    ),
    "30-passive-voice": (
        "From [A2 Lesson 21](/notes/a2/21-passive-intro): **wordt** + participle · **Er wordt gewerkt** · **door** + agent.",
        "Remember from [Grammar 18: Perfect Tense](/notes/grammar/18-perfect-tense): passive uses the same past participle form.",
        "Part A: Active to passive",
        "Part B: Say aloud",
    ),
}

PART_B_BY_FILE: dict[str, str] = {
    "20-modal-verbs-depth": """    5. Write five **Zullen we …?** suggestions aloud.
    6. Convert three present modal sentences to simple past.""",
    "24-relative-clauses": """    4. Write three sentences about your neighbourhood using **die** or **dat**.
    5. Explain aloud: conjunction **dat** vs relative **dat** (one example each).""",
    "26-subordinate-want-omdat": """    4. Answer three **Waarom?** questions with **Omdat …** aloud.
    5. Write a short paragraph with **daarom** and **doordat**.""",
    "30-passive-voice": """    4. Say five **Er wordt …** sentences aloud.
    5. Add **door** + agent to two passives you create.""",
}


def callout_block(body: str) -> str:
    return f"""<Callout title="Remember from…" type="info">
  {body}
</Callout>"""


def insert_classroom(content: str, slug: str) -> str:
    quick, callout, _, _ = CLASSROOM[slug]
    block_parts: list[str] = []

    if quick and "## Quick Review" not in content:
        block_parts.append(f"## Quick Review\n\n{quick}")

    if '<Callout title="Remember from' not in content:
        block_parts.append(callout_block(callout))

    if not block_parts:
        return content

    block = "\n\n".join(block_parts) + "\n\n"

    if "### Before this page" in content:
        # Insert after Before this page section (until next ## heading)
        pattern = r"(### Before this page\n(?:.*?\n)*?)(?=\n## )"
        m = re.search(pattern, content, re.DOTALL)
        if m:
            return content[: m.end()] + "\n" + block + content[m.end() :]
    if "## Quick Review" in content and '<Callout title="Remember from' not in content:
        pattern = r"(## Quick Review\n(?:.*?\n)*?)(?=\n## )"
        m = re.search(pattern, content, re.DOTALL)
        if m:
            return content[: m.end()] + "\n\n" + callout_block(callout) + "\n\n" + content[m.end() :]

    # After Introduction section
    pattern = r"(## Introduction\n(?:.*?\n)*?)(?=\n## )"
    m = re.search(pattern, content, re.DOTALL)
    if not m:
        return content
    return content[: m.end()] + "\n" + block + content[m.end() :]


def standardize_practice(content: str, slug: str) -> str:
    _, _, part_a, part_b = CLASSROOM[slug]

    if "Part A:" in content and "Part B:" in content:
        # Fix Drills title if mixed
        content = re.sub(
            r'<CardTitle className="text-lg">Drills</CardTitle>',
            f'<CardTitle className="text-lg">{part_a}</CardTitle>',
            content,
        )
        return content

    content = re.sub(
        r'<CardTitle className="text-lg">Drills</CardTitle>',
        f'<CardTitle className="text-lg">{part_a}</CardTitle>',
        content,
    )

    if slug in PART_B_BY_FILE:
        part_b_body = PART_B_BY_FILE[slug]
    else:
        # Default Part B from last drill line if it looks open-ended
        part_b_body = """    7. Say three example sentences aloud using today's pattern.
    8. Make one sentence from your own life."""

    part_b_card = f"""
<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">{part_b}</CardTitle>
  </CardHeader>

  <CardContent>
{part_b_body}
  </CardContent>
</ShadCnCard>"""

    # Insert Part B before closing of Practice Exercises (before ## Answer Key)
    if "Part B:" not in content:
        content = re.sub(
            r"(</ShadCnCard>\n)(## Answer Key)",
            r"\1" + part_b_card + r"\n\2",
            content,
            count=1,
        )

    return content


def standardize_answer_key(content: str, slug: str) -> str:
    if "**Part A**" in content and "**Part B**" in content:
        return content

    # Split answer key: numbered items before open/sample → Part A
    ak_match = re.search(
        r"(## Answer Key\n\n<ShadCnCard className=\"my-4\">\n  <CardContent>\n)(.*?)(  </CardContent>\n</ShadCnCard>)",
        content,
        re.DOTALL,
    )
    if not ak_match:
        return content

    body = ak_match.group(2).rstrip()
    if body.startswith("**Part A**") or body.startswith("Open answers"):
        if body.startswith("Open answers"):
            pass  # leave bulk keys from phase 1
        else:
            return content

    lines = body.split("\n")
    closed: list[str] = []
    open_lines: list[str] = []
    for line in lines:
        stripped = line.strip()
        if re.match(r"^\d+\.", stripped) or stripped.startswith("|") or stripped.startswith("-"):
            if "Open" in stripped or "open" in stripped.lower():
                open_lines.append(line)
            else:
                closed.append(line)
        elif stripped.startswith("**") and not stripped.startswith("**Part"):
            closed.append(line)
        elif "Open" in stripped or "open practice" in stripped.lower() or "Sample:" in stripped:
            open_lines.append(line)
        elif stripped:
            closed.append(line)

    # Move last numbered item if it mentions "aloud" or "Open" in practice - heuristic
    if not open_lines and closed:
        last = closed[-1]
        if "Open" in last or "aloud" in last.lower() or "Sample" in last:
            open_lines = [last]
            closed = closed[:-1]

    new_body = "    **Part A**\n\n" + "\n".join(closed)
    if open_lines:
        new_body += "\n\n    **Part B:** " + " ".join(l.strip() for l in open_lines if l.strip())
    else:
        new_body += "\n\n    **Part B:** Open practice. Check tables above."

    return content[: ak_match.start(2)] + new_body + "\n" + content[ak_match.end(2) :]


def process_file(path: Path) -> bool:
    slug = path.stem
    if slug not in CLASSROOM:
        return False
    original = path.read_text(encoding="utf-8")
    updated = original
    updated = insert_classroom(updated, slug)
    updated = standardize_practice(updated, slug)
    updated = standardize_answer_key(updated, slug)
    if updated != original:
        path.write_text(updated, encoding="utf-8")
        return True
    return False


def main() -> None:
    changed = 0
    for i in range(1, 31):
        matches = list(GRAMMAR_DIR.glob(f"{i:02d}-*.mdx"))
        if not matches:
            print(f"MISSING: {i:02d}")
            continue
        path = matches[0]
        if process_file(path):
            changed += 1
            print(f"updated: {path.name}")
        else:
            print(f"unchanged: {path.name}")
    print(f"\nDone. {changed} files updated.")


if __name__ == "__main__":
    main()
