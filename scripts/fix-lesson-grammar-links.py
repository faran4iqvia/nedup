#!/usr/bin/env python3
"""Add grammar track + hub links to main-lesson Grammar Focus callouts."""

from __future__ import annotations

import re
from pathlib import Path

NOTES = Path(__file__).resolve().parents[1] / "content" / "notes"

# path relative to content/notes -> replacement or append snippet
GRAMMAR_FOCUS_FIXES: dict[str, str] = {
    "a1/15-transport.mdx": (
        "Object pronoun order and more imperative forms are covered in the Grammar Track as you advance. For A1, practise **me**, **hem**, and **haar** in transport and direction sentences.",
        "Object pronoun order: [Indirect Objects and Pronouns](/notes/grammar/27-indirect-objects-pronouns). For A1, practise **me**, **hem**, and **haar** in transport and direction sentences.",
    ),
    "a1/22-clothing-and-colours.mdx": (
        "The adjective endings here are exactly the rule from [Lesson 11](/notes/a1/11-adjectives); **aantrekken** and **uittrekken** split exactly like the separable verbs in [Lesson 21](/notes/a1/21-separable-verbs). Nothing new to memorise structurally — you are applying rules you already have to a new topic.",
        "Adjective endings: [Adjective Agreement](/notes/grammar/13-adjectives). Separables **aantrekken** / **uittrekken**: [Separable Verbs](/notes/grammar/15-separable-verbs). You are applying rules you already have to a new topic.",
    ),
    "a1/23-asking-and-giving-directions.mdx": (
        "The imperative is simply the verb stem: **ga**, **loop**, **neem**. Say it with a friendly tone and it is polite; add **alstublieft** to soften it further. Prepositions of place (**naast**, **tegenover**, **tussen**) get a full treatment in [A2 Lesson 10](/notes/a2/10-prepositions-place) — here you just need to recognise them.",
        "The imperative is simply the verb stem: **ga**, **loop**, **neem**. Prepositions of place (**naast**, **tegenover**, **tussen**): [Prepositions of Place](/notes/grammar/22-prepositions-place) · lesson [A2 Lesson 10](/notes/a2/10-prepositions-place).",
    ),
    "a1/24-making-plans-and-suggestions.mdx": (
        "All three openers — **Zullen we …?**, **Laten we …**, **Heb je zin om te …** — push the main verb to the end of the sentence, the V2/end-verb pattern from [Lesson 2](/notes/a1/02-word-order-svo). **Zullen** is doing suggestion work here; its full role as the future tense arrives in [B1 Lesson 4](/notes/b1/04-future-with-zullen).",
        "Verb at end: [Word Order SVO](/notes/grammar/07-word-order-svo). **Zullen we …?** preview → [Future with zullen](/notes/grammar/34-future-tense) (B1). Lesson: [A1 Lesson 2](/notes/a1/02-word-order-svo).",
    ),
    "a2/18-culture-traditions.mdx": (
        "Cultural Dutch leans on **particles** (**hoor**, **zeg**, **toch**) and fixed phrases (**typisch Nederlands**, **het was gezellig**). These are not separate grammar rules, but they shape how opinions and invitations sound natural. Compare [Giving Opinions](/notes/a2/05-opinions) and [Connected Speech](/notes/pronunciation/05-connected-speech).",
        "Particles (**hoor**, **zeg**, **toch**): [Particles Masterclass](/notes/grammar/54-particles-masterclass). Register and tone: [Register and Formality](/notes/grammar/register-and-formality). Compare [Giving Opinions](/notes/a2/05-opinions).",
    ),
}

# Append hub sentence if Grammar Focus lacks hub slug
HUB_APPEND: dict[str, str] = {
    "a1/18-simple-past-regular.mdx": " Unsure perfect vs simple past? See [Tense and Register Choice](/notes/grammar/tense-and-register-choice).",
    "a1/19-simple-past-irregular.mdx": " See [Tense and Register Choice](/notes/grammar/tense-and-register-choice) for spoken vs narrative past.",
    "a2/01-past-tense-depth.mdx": " See [Tense and Register Choice](/notes/grammar/tense-and-register-choice) for weak vs strong and register.",
    "a2/02-perfect-tense-intro.mdx": " See [Tense and Register Choice](/notes/grammar/tense-and-register-choice) for when to use perfect vs simple past.",
    "a2/03-perfect-irregular.mdx": " See [Tense and Register Choice](/notes/grammar/tense-and-register-choice).",
    "a2/05-opinions.mdx": " For **dat** clauses and connectors, see [Connector Choice](/notes/grammar/connector-choice).",
    "a2/13-om-te.mdx": " Compare **om te** vs **omdat**: [Connector Choice](/notes/grammar/connector-choice).",
    "a2/14-subordinate-want-omdat.mdx": " Compare **want** vs **omdat**: [Connector Choice](/notes/grammar/connector-choice).",
    "a2/20-conditional-als.mdx": " Compare **als** / **wanneer** / **toen**: [Connector Choice](/notes/grammar/connector-choice).",
    "a2/21-passive-intro.mdx": " Process vs result passive: [Tense and Register Choice](/notes/grammar/tense-and-register-choice).",
    "b1/01-conjunctions-overview.mdx": " Connector compare tables: [Connector Choice](/notes/grammar/connector-choice).",
    "b1/04-future-with-zullen.mdx": " **gaan** vs **zullen** vs present: [Tense and Register Choice](/notes/grammar/tense-and-register-choice).",
    "b1/08-passive-with-worden.mdx": " **wordt** vs **is**: [Tense and Register Choice](/notes/grammar/tense-and-register-choice).",
    "b1/09-passive-with-zijn.mdx": " **wordt** vs **is**: [Tense and Register Choice](/notes/grammar/tense-and-register-choice).",
    "b1/16-formal-letters-and-emails.mdx": " **jij** vs **u** and email tone: [Register and Formality](/notes/grammar/register-and-formality).",
    "b1/22-storytelling-past-tenses.mdx": " Narrative past choices: [Tense and Register Choice](/notes/grammar/tense-and-register-choice).",
}


def fix_grammar_focus(path: Path, old_body: str, new_body: str) -> bool:
    text = path.read_text(encoding="utf-8")
    pattern = (
        r'(<Callout title="Grammar Focus"[^>]*>\s*)'
        + re.escape(old_body)
        + r"(\s*</Callout>)"
    )
    if not re.search(pattern, text, re.DOTALL):
        return False
    updated = re.sub(pattern, r"\1" + new_body + r"\2", text, count=1, flags=re.DOTALL)
    path.write_text(updated, encoding="utf-8")
    return True


def append_hub(path: Path, snippet: str) -> bool:
    text = path.read_text(encoding="utf-8")
    if snippet.strip() in text:
        return False
    hub_key = snippet.split("/notes/grammar/")[1].split(")")[0]
    if hub_key in text:
        return False

    def repl(m: re.Match[str]) -> str:
        opening, body, closing = m.group(1), m.group(2), m.group(3)
        if body.rstrip().endswith("."):
            new_body = body.rstrip() + snippet
        else:
            new_body = body.rstrip() + "." + snippet
        return opening + new_body + closing

    pattern = r'(<Callout title="Grammar Focus"[^>]*>\s*)(.*?)(\s*</Callout>)'
    updated, n = re.subn(pattern, repl, text, count=1, flags=re.DOTALL)
    if n:
        path.write_text(updated, encoding="utf-8")
        return True
    return False


def main() -> None:
    n = 0
    for rel, (old, new) in GRAMMAR_FOCUS_FIXES.items():
        path = NOTES / rel
        if fix_grammar_focus(path, old, new):
            print(f"fixed: {rel}")
            n += 1
    for rel, snippet in HUB_APPEND.items():
        path = NOTES / rel
        if append_hub(path, snippet):
            print(f"hub: {rel}")
            n += 1
    print(f"\nDone. {n} lesson updates.")


if __name__ == "__main__":
    main()
