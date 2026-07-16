#!/usr/bin/env python3
"""Phase 3: relabel grammar files 43-58 as phrase/register resources."""

from pathlib import Path

GRAMMAR_DIR = Path(__file__).resolve().parents[1] / "content/notes/grammar"

FILES = [
    "43-nuanced-opinions",
    "44-agreeing-and-debating",
    "45-reading-the-news",
    "46-formal-letters-and-emails",
    "47-work-meetings-and-applications",
    "48-education-and-learning",
    "49-society-and-environment",
    "50-feelings-and-relationships",
    "51-dutch-culture-and-directness",
    "52-storytelling-past-tenses",
    "53-diminutives",
    "54-particles-masterclass",
    "55-idioms-and-expressions",
    "56-fast-speech-strategies",
    "57-practical-netherlands",
    "58-bringing-it-together",
]

CALLOUT = """
<Callout title="Phrase & register resource" type="info">
  This page is a **phrase and register** reference: ready-made chunks, tone, and context. For verb patterns and word order, use core grammar files [01–42](/notes/grammar/01-personal-pronouns). For **jij** vs **u** and formality levels, start with [Register and Formality](/notes/grammar/register-and-formality).
</Callout>
"""


def main() -> None:
    for slug in FILES:
        path = GRAMMAR_DIR / f"{slug}.mdx"
        text = path.read_text(encoding="utf-8")

        if "Phrase & register resource" in text:
            print(f"skip: {slug}")
            continue

        # Prefix description
        if "Phrase & register ·" not in text:
            text = text.replace(
                "description: '",
                "description: 'Phrase & register · ",
                1,
            )

        # Insert callout after Introduction paragraph(s)
        marker = "\n\n## Explanation"
        alt = "\n\n## Quick Review"
        if marker in text:
            text = text.replace(marker, CALLOUT + marker, 1)
        elif alt in text:
            text = text.replace(alt, CALLOUT + alt, 1)
        else:
            print(f"warn: no insertion point for {slug}")
            continue

        path.write_text(text, encoding="utf-8")
        print(f"updated: {slug}")


if __name__ == "__main__":
    main()
