#!/usr/bin/env python3
"""Phase 9: hub links, intro polish, review-and-practice upgrades."""

from __future__ import annotations

import re
from pathlib import Path

GRAMMAR_DIR = Path(__file__).resolve().parents[1] / "content" / "notes" / "grammar"

TENSE_HUB = "[Tense and Register Choice](/notes/grammar/tense-and-register-choice)"
TENSE_LINE = f"\n\nNot sure which past, passive, or future form? See {TENSE_HUB}.\n"
CONNECTOR_HUB = "[Connector Choice](/notes/grammar/connector-choice)"
CONNECTOR_LINE = f"\n\nNot sure which connector? See {CONNECTOR_HUB}.\n"

TENSE_FILES = [
    "16-simple-past-regular",
    "17-simple-past-irregular",
    "18-perfect-tense",
    "19-past-tense-weak-strong",
    "30-passive-voice",
    "34-future-tense",
    "38-passive-with-worden",
    "39-passive-with-zijn",
    "52-storytelling-past-tenses",
]

CONNECTOR_FILES = [
    "11-demonstratives",
    "24-relative-clauses",
    "25-om-te-infinitive",
    "26-subordinate-want-omdat",
    "28-er-constructions",
    "29-conditional-als",
    "31-extended-subordinate-clauses",
    "32-advanced-relative-clauses",
]

INTRO_REPLACEMENTS: dict[str, tuple[str, str]] = {
    "05-question-formation.mdx": (
        "Yes/no inversion and **wh** questions. Main lesson: [A0 Lesson 6: Basic Questions](/notes/a0/06-basic-questions).",
        "English often keeps **do/does** in questions; Dutch **inverts** subject and verb (**Werk je?**) or fronts a question word (**Waar woon je?**). Main lesson: [A0 Lesson 6: Basic Questions](/notes/a0/06-basic-questions).",
    ),
    "25-om-te-infinitive.mdx": (
        "**Om … te** + infinitive expresses purpose (_in order to_). Main lesson: [A2 Lesson 13](/notes/a2/13-om-te).",
        "**Om … te** + infinitive expresses purpose (_in order to_) — not **because** (**omdat**). English _to_ can mean both; Dutch splits them. Main lesson: [A2 Lesson 13](/notes/a2/13-om-te).",
    ),
    "29-conditional-als.mdx": (
        "**Als** introduces **if** in real conditions. Main lesson: [A2 Lesson 20](/notes/a2/20-conditional-als).",
        "**Als** introduces **if** in real conditions. Do not confuse **als** (if/when) with **toen** (when in the past) or **wanneer** (whenever) — see [Connector Choice](/notes/grammar/connector-choice). Main lesson: [A2 Lesson 20](/notes/a2/20-conditional-als).",
    ),
    "30-passive-voice.mdx": (
        "Dutch passive focuses on what happens to something. Main lesson: [A2 Lesson 21](/notes/a2/21-passive-intro).",
        "Dutch passive focuses on what happens to something (**wordt** + participle). Spoken Dutch often stays active; news and rules use passive. Process vs result (**wordt** vs **is**) → [Tense and Register Choice](/notes/grammar/tense-and-register-choice). Main lesson: [A2 Lesson 21](/notes/a2/21-passive-intro).",
    ),
}

TABLE_11_OLD = """| | near | far |
| --- | --- | --- |
| **de** word | deze | die |
| **het** word | dit | dat |"""

TABLE_11_NEW = """| | near (this) | far (that) | Example |
| --- | --- | --- | --- |
| **de** word | **deze** | **die** | **deze fiets** · **die fiets** |
| **het** word | **dit** | **dat** | **dit huis** · **dat huis** |"""


def insert_after_intro_first_para(content: str, line: str, marker: str) -> str:
    if marker in content:
        return content
    # First paragraph after ## Introduction
    pattern = r"(## Introduction\n\n[^\n]+(?:\n[^\n#<][^\n]*)?)"
    m = re.search(pattern, content)
    if not m:
        return content
    return content[: m.end()] + line + content[m.end() :]


def add_hub_links() -> int:
    n = 0
    for slug in TENSE_FILES:
        path = GRAMMAR_DIR / f"{slug}.mdx"
        text = path.read_text(encoding="utf-8")
        updated = insert_after_intro_first_para(text, TENSE_LINE, "tense-and-register-choice")
        if updated != text:
            path.write_text(updated, encoding="utf-8")
            print(f"tense link: {path.name}")
            n += 1
    for slug in CONNECTOR_FILES:
        path = GRAMMAR_DIR / f"{slug}.mdx"
        text = path.read_text(encoding="utf-8")
        updated = insert_after_intro_first_para(text, CONNECTOR_LINE, "connector-choice")
        if updated != text:
            path.write_text(updated, encoding="utf-8")
            print(f"connector link: {path.name}")
            n += 1
    return n


def polish_intros() -> int:
    n = 0
    for filename, (old, new) in INTRO_REPLACEMENTS.items():
        path = GRAMMAR_DIR / filename
        text = path.read_text(encoding="utf-8")
        if old in text:
            path.write_text(text.replace(old, new, 1), encoding="utf-8")
            print(f"intro: {filename}")
            n += 1
    path = GRAMMAR_DIR / "11-demonstratives.mdx"
    text = path.read_text(encoding="utf-8")
    if TABLE_11_OLD in text:
        path.write_text(text.replace(TABLE_11_OLD, TABLE_11_NEW, 1), encoding="utf-8")
        print("table: 11-demonstratives.mdx")
        n += 1
    return n


def upgrade_review() -> bool:
    path = GRAMMAR_DIR / "review-and-practice.mdx"
    text = path.read_text(encoding="utf-8")
    if "Remember from…" in text and "Part C → file map" in text:
        return False

    intro_add = """
<Callout title="Remember from…" type="info">
  Remember from [Grammar Track intro](/notes/grammar/00-introduction#how-to-study): try a part → check answers → open **one** grammar file from the map → say three new sentences. Hubs for mixed doubts: [Tense and Register Choice](/notes/grammar/tense-and-register-choice) · [Connector Choice](/notes/grammar/connector-choice).
</Callout>
"""
    if '<Callout title="Remember from' not in text:
        text = text.replace(
            "Work **on paper or aloud**. For each mistake, open the linked grammar file and do three fresh examples.\n",
            "Work **on paper or aloud**. For each mistake, open the linked grammar file and do three fresh examples.\n"
            + intro_add
            + "\n",
        )

    part_c_map = """
### Part C → file map

| Item | Topic | Grammar file |
| --- | --- | --- |
| 15 | **hoewel** | [31 Extended Subordinates](/notes/grammar/31-extended-subordinate-clauses) |
| 16 | **waarover** | [33 Waar + Preposition](/notes/grammar/33-waar-plus-preposition) |
| 17 | **Zou u** | [35 Zou and Politeness](/notes/grammar/35-zou-politeness-and-advice) |
| 18 | unreal **als** | [36 Hypotheticals](/notes/grammar/36-hypothetical-conditionals) |
| 19 | conditional past | [37 Conditional Past](/notes/grammar/37-conditional-past) |
| 20 | result passive **is** | [39 Passive with zijn](/notes/grammar/39-passive-with-zijn) |
| 21 | indirect speech | [40 Indirect Speech](/notes/grammar/40-indirect-speech) |
| 22 | **te** + adj | [41 Te + Infinitive](/notes/grammar/41-te-plus-infinitive) |
| 23 | verb cluster | [42 Word Order Masterclass](/notes/grammar/42-word-order-masterclass) |

### Part D → file map

| Item | Recycles | Grammar files |
| --- | --- | --- |
| 24 | perfect, **omdat**, opinion | [18](/notes/grammar/18-perfect-tense), [26](/notes/grammar/26-subordinate-want-omdat), [43](/notes/grammar/43-nuanced-opinions) |
| 25 | formal email | [Register](/notes/grammar/register-and-formality), [46](/notes/grammar/46-formal-letters-and-emails) |
| 26 | **hoewel** | [31](/notes/grammar/31-extended-subordinate-clauses) |
| 27 | **er wordt** / **er is** | [38](/notes/grammar/38-passive-with-worden), [39](/notes/grammar/39-passive-with-zijn) |
| 28 | recovery phrases | [56 Fast Speech](/notes/grammar/56-fast-speech-strategies) |

"""
    if "Part C → file map" not in text:
        text = text.replace("## Part C: B1 independence\n", part_c_map + "## Part C: B1 independence\n")

    text = text.replace(
        "- Retry weak topics in the [Grammar Track](/notes/grammar) (single files only)",
        "- Retry weak topics in the [Grammar Track intro](/notes/grammar/00-introduction) (single files only)",
    )
    path.write_text(text, encoding="utf-8")
    print("updated: review-and-practice.mdx")
    return True


def main() -> None:
    n = add_hub_links()
    n += polish_intros()
    if upgrade_review():
        n += 1
    print(f"\nDone. {n} touchpoints.")


if __name__ == "__main__":
    main()
