#!/usr/bin/env python3
"""Phase 8: Part A/B practice cards on phrase & register files 43-58."""

from __future__ import annotations

import re
from pathlib import Path

GRAMMAR_DIR = Path(__file__).resolve().parents[1] / "content" / "notes" / "grammar"

# slug -> (part_a_title override or None to keep existing title, part_b_body)
PHRASE_PART_B: dict[str, tuple[str | None, str]] = {
    "43-nuanced-opinions": (
        "Part A: Opinion chunks",
        """    6. Say **Het lijkt me dat …** about a topic you care about.
    7. Say the same idea with **Naar mijn mening** (stronger) and **Ik zou zeggen dat** (softer).""",
    ),
    "44-agreeing-and-debating": (
        "Part A: Debate chunks",
        """    5. Say **Daar ben ik het (deels) mee eens** aloud.
    6. Disagree politely: **Ik begrijp je punt, maar …**""",
    ),
    "45-reading-the-news": (
        "Part A: News reading",
        """    5. Read one headline-style sentence aloud (drop articles like NOS).
    6. Say **Volgens …** + one-sentence summary.""",
    ),
    "46-formal-letters-and-emails": (
        "Part A: Email frames",
        """    5. Open a formal email aloud: **Geachte …**
    6. Close with **Met vriendelijke groet,** — then contrast with **Hoi … Groetjes,** for informal.""",
    ),
    "47-work-meetings-and-applications": (
        "Part A: Work language",
        """    5. Open a meeting: **Zullen we beginnen?** / **Laten we starten.**
    6. Say one **actiepunt** with owner and deadline aloud.""",
    ),
    "48-education-and-learning": (
        "Part A: Study vocabulary",
        """    5. Say what you study: **Ik doe een opleiding in …** / **Ik studeer …**
    6. Say **Ik moet … inleveren** for a deadline.""",
    ),
    "49-society-and-environment": (
        "Part A: Society chunks",
        """    5. Say **Naar mijn mening** + one sentence on **klimaat** or **duurzaamheid**.
    6. Say **Aan de ene kant … aan de andere kant …** on one policy topic.""",
    ),
    "50-feelings-and-relationships": (
        "Part A: Emotion chunks",
        """    5. Say **Ik voel me …** with two different emotions.
    6. Repair aloud: **Sorry, dat was niet mijn bedoeling.**""",
    ),
    "51-dutch-culture-and-directness": (
        "Part A: Culture terms",
        """    6. Explain **recht voor zijn raap** in one Dutch sentence aloud.
    7. Say what **Doe normaal** means in Dutch culture (one sentence).""",
    ),
    "52-storytelling-past-tenses": (
        "Part A: Story connectors",
        """    4. Tell three sentences of a story with **toen** + simple past.
    5. Link events with **Daarna** or **Opeens** aloud.""",
    ),
    "53-diminutives": (
        "Part A: Diminutives",
        """    6. Say **het huisje**, **kopje koffie**, **straatje** aloud.
    7. Use one diminutive to soften tone in a full sentence.""",
    ),
    "54-particles-masterclass": (
        "Part A: Add the particle",
        """    6. Say **Kom maar binnen, hoor** naturally.
    7. Use **Even kijken** as a pause before answering a question.""",
    ),
    "55-idioms-and-expressions": (
        "Part A: Match phrase to meaning",
        """    6. Say **Het maakt niet uit** and **Het valt mee** in context.
    7. Toast aloud: **Proost!** / **Gezondheid!**""",
    ),
    "56-fast-speech-strategies": (
        "Part A: Linking drill",
        """    2. Say **is het** · **op een** · **dat ik** five times — slow, then fast.
    3. Recovery line aloud: **Kunt u dat langzamer herhalen?** or **Wat bedoelt u precies?**""",
    ),
    "57-practical-netherlands": (
        "Part A: Match system to purpose",
        """    6. Say **Ik wil me inschrijven bij de gemeente** (or your real situation).
    7. Use **DigiD** in one sentence about online government.""",
    ),
    "58-bringing-it-together": (
        "Part A: Integrated paragraph",
        """    2. Say your paragraph aloud (or three sentences using chunks from this track).
    3. Name one weak spot and which grammar file you will open next.""",
    ),
}


def rename_part_a(content: str, new_title: str | None) -> str:
    if not new_title:
        return content
    # Rename Drills or any non-Part-B card title in practice section
    practice = re.search(
        r"(## Practice Exercises\n.*?)(## Answer Key)",
        content,
        re.DOTALL,
    )
    if not practice:
        return content
    body = practice.group(1)
    if "Part A:" in body:
        return content
    body = re.sub(
        r'<CardTitle className="text-lg">[^<]+</CardTitle>',
        f'<CardTitle className="text-lg">{new_title}</CardTitle>',
        body,
        count=1,
    )
    return content[: practice.start()] + body + content[practice.end(1) :]


def add_part_b(content: str, part_b_body: str) -> str:
    practice = re.search(
        r"(## Practice Exercises\n.*?)(## Answer Key)",
        content,
        re.DOTALL,
    )
    if not practice:
        return content
    body = practice.group(1)
    if '<CardTitle className="text-lg">Part B:' in body:
        return content

    part_b_card = f"""
<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">Part B: Say chunks aloud</CardTitle>
  </CardHeader>

  <CardContent>
{part_b_body}
  </CardContent>
</ShadCnCard>
"""
    body = body.rstrip() + "\n" + part_b_card + "\n"
    return content[: practice.start()] + body + content[practice.end(1) :]


def fix_answer_keys(content: str, slug: str) -> str:
    content = content.replace("**Part A samples**", "**Part A**")
    if slug == "58-bringing-it-together":
        old = """## Answer Key

Open practice. Compare with [B1 Lesson 28](/notes/b1/28-bringing-it-together) and the [Grammar Track](/notes/grammar) index."""
        new = """## Answer Key

<ShadCnCard className="my-4">
  <CardContent>
    **Part A:** Open practice — combine **omdat**, **hoewel**, perfect, **zou**, and one idiom from your week.

    **Part B:** Say your paragraph aloud. Compare with [B1 Lesson 28](/notes/b1/28-bringing-it-together) and [Grammar Track intro](/notes/grammar/00-introduction).
  </CardContent>
</ShadCnCard>"""
        content = content.replace(old, new)
    if slug == "56-fast-speech-strategies":
        old = """## Answer Key

Open practice. Compare with [Connected Speech](/notes/pronunciation/05-connected-speech)."""
        new = """## Answer Key

<ShadCnCard className="my-4">
  <CardContent>
    **Part A:** Linking varies by speaker — aim for smooth **is het**, **op een**, **dat ik**.

    **Part B:** Say recovery lines aloud. Compare with [Connected Speech](/notes/pronunciation/05-connected-speech).
  </CardContent>
</ShadCnCard>"""
        content = content.replace(old, new)
    return content


def process_file(path: Path) -> bool:
    slug = path.stem
    if slug not in PHRASE_PART_B:
        return False
    part_a_title, part_b_body = PHRASE_PART_B[slug]
    original = path.read_text(encoding="utf-8")
    updated = original
    updated = rename_part_a(updated, part_a_title)
    updated = add_part_b(updated, part_b_body)
    updated = fix_answer_keys(updated, slug)
    if updated != original:
        path.write_text(updated, encoding="utf-8")
        return True
    return False


def main() -> None:
    changed = 0
    for i in range(43, 59):
        matches = list(GRAMMAR_DIR.glob(f"{i:02d}-*.mdx"))
        if not matches:
            continue
        if process_file(matches[0]):
            changed += 1
            print(f"updated: {matches[0].name}")
    print(f"\nDone. {changed} phrase files updated.")


if __name__ == "__main__":
    main()
