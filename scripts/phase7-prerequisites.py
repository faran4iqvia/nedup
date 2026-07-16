#!/usr/bin/env python3
"""Phase 7: Before this page blocks and spine link tightening."""

from __future__ import annotations

import re
from pathlib import Path

GRAMMAR_DIR = Path(__file__).resolve().parents[1] / "content" / "notes" / "grammar"
SPINE = "/notes/grammar/00-introduction#word-order-spine"

# slug -> (items markdown lines, fallback sentence)
BEFORE_NEW: dict[str, tuple[list[str], str]] = {
    "06-modal-verbs-intro": (
        [
            "- [Grammar 04: Present Tense](/notes/grammar/04-present-tense-regular) (conjugated verb forms)",
            f"- [Grammar 07: Word Order](/notes/grammar/07-word-order-svo) (verb in position 2 · [word order spine]({SPINE}))",
        ],
        "If **Ik werk** word order is shaky, read [07](/notes/grammar/07-word-order-svo) first.",
    ),
    "11-demonstratives": (
        [
            "- [Grammar 09: Articles de/het](/notes/grammar/09-articles-de-het) (**de** vs **het** picks **deze** vs **dit**)",
            "- [Grammar 12: Plural Nouns](/notes/grammar/12-plural-nouns) (plural always **de** → **deze**)",
        ],
        "If **de** vs **het** is still guesswork, read [09](/notes/grammar/09-articles-de-het) first.",
    ),
    "13-adjectives": (
        [
            "- [Grammar 09: Articles](/notes/grammar/09-articles-de-het) (**de** / **het** / plural)",
            "- [Grammar 12: Plural Nouns](/notes/grammar/12-plural-nouns) (plural → adjective **-e**)",
        ],
        "If **de grote stad** vs **een groot huis** is new, read [09](/notes/grammar/09-articles-de-het#guess-strategies-and-memory-cues) first.",
    ),
    "19-past-tense-weak-strong": (
        [
            "- [Grammar 16: Simple Past Regular](/notes/grammar/16-simple-past-regular) (**-te/-de**)",
            "- [Grammar 17: Simple Past Irregular](/notes/grammar/17-simple-past-irregular) (vowel-change verbs)",
        ],
        "If you cannot yet form **werkte** or **ging**, read [16](/notes/grammar/16-simple-past-regular) and [17](/notes/grammar/17-simple-past-irregular) first.",
    ),
    "29-conditional-als": (
        [
            f"- [Grammar 26: Subordinate want and omdat](/notes/grammar/26-subordinate-want-omdat) (verb last · [word order spine]({SPINE}) step 4)",
            "- [Grammar 07: Word Order](/notes/grammar/07-word-order-svo) (V2 in the main clause)",
        ],
        "If **omdat ik ziek ben** is shaky, read [26](/notes/grammar/26-subordinate-want-omdat) first.",
    ),
}

TIER_B_REPLACEMENTS: list[tuple[str, str, str]] = [
    (
        "15-separable-verbs.mdx",
        "- [Grammar 07: Word Order](/notes/grammar/07-word-order-svo) (V2 + verb at end)",
        f"- [Grammar 07: Word Order](/notes/grammar/07-word-order-svo) (V2 + verb at end · [word order spine]({SPINE}) step 3)",
    ),
    (
        "17-simple-past-irregular.mdx",
        "- [Grammar 16: Simple Past Regular](/notes/grammar/16-simple-past-regular) (**-te/-de** pattern)\n\n## Quick Review",
        "- [Grammar 16: Simple Past Regular](/notes/grammar/16-simple-past-regular) (**-te/-de** pattern)\n\nIf **werkte** vs **ging** is confusing, read [16](/notes/grammar/16-simple-past-regular) first.\n\n## Quick Review",
    ),
    (
        "20-modal-verbs-depth.mdx",
        "- [Grammar 18: Perfect Tense](/notes/grammar/18-perfect-tense) (for double infinitive)\n\n## Quick Review",
        "- [Grammar 18: Perfect Tense](/notes/grammar/18-perfect-tense) (for double infinitive)\n\nIf modal + infinitive at the end is rusty, review [06](/notes/grammar/06-modal-verbs-intro) first.\n\n## Quick Review",
    ),
    (
        "24-relative-clauses.mdx",
        "- [A2 Lesson 5: Opinions](/notes/a2/05-opinions) (**dat** clauses with verb last)\n\nRelative clauses",
        "- [A2 Lesson 5: Opinions](/notes/a2/05-opinions) (**dat** clauses with verb last)\n- [Grammar 26: Subordinate want and omdat](/notes/grammar/26-subordinate-want-omdat) (same verb-last rule as **omdat**)\n\nRelative clauses",
    ),
    (
        "26-subordinate-want-omdat.mdx",
        "- [Grammar 07: Word Order](/notes/grammar/07-word-order-svo) (V2 in main clauses)",
        f"- [Grammar 07: Word Order](/notes/grammar/07-word-order-svo) (V2 in main clauses · [word order spine]({SPINE}) step 4)",
    ),
]


def before_block(items: list[str], fallback: str) -> str:
    lines = ["### Before this page", "", "You should be comfortable with:", ""] + items
    if fallback:
        lines += ["", fallback]
    return "\n".join(lines) + "\n\n"


def insert_before(content: str, block: str) -> str:
    if "### Before this page" in content:
        return content
    pattern = r"(## Introduction\n(?:.*?\n)*?)(?=\n## Quick Review)"
    m = re.search(pattern, content, re.DOTALL)
    if not m:
        pattern = r"(## Introduction\n(?:.*?\n)*?)(?=\n## )"
        m = re.search(pattern, content, re.DOTALL)
    if not m:
        return content
    return content[: m.end()] + "\n" + block + content[m.end() :]


def main() -> None:
    intro = GRAMMAR_DIR / "00-introduction.mdx"
    text = intro.read_text(encoding="utf-8")
    if "{#word-order-spine}" not in text:
        text = text.replace(
            "### Word order spine\n",
            "### Word order spine {#word-order-spine}\n",
        )
        intro.write_text(text, encoding="utf-8")
        print("updated: 00-introduction.mdx (word-order-spine anchor)")

    n = 0
    for slug, (items, fallback) in BEFORE_NEW.items():
        path = GRAMMAR_DIR / f"{slug}.mdx"
        original = path.read_text(encoding="utf-8")
        updated = insert_before(original, before_block(items, fallback))
        if updated != original:
            path.write_text(updated, encoding="utf-8")
            print(f"updated: {path.name}")
            n += 1

    for filename, old, new in TIER_B_REPLACEMENTS:
        path = GRAMMAR_DIR / filename
        original = path.read_text(encoding="utf-8")
        if old in original:
            updated = original.replace(old, new, 1)
            path.write_text(updated, encoding="utf-8")
            print(f"tightened: {filename}")
            n += 1

    count = len(list(GRAMMAR_DIR.glob("*.mdx")))
    with_before = sum(
        1
        for p in GRAMMAR_DIR.glob("*.mdx")
        if "### Before this page" in p.read_text(encoding="utf-8")
    )
    print(f"\nDone. {n} edits. Files with Before this page: {with_before}")


if __name__ == "__main__":
    main()
