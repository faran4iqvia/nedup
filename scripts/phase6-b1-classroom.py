#!/usr/bin/env python3
"""Phase 6: Quick Review, Remember from, Before this page, Part A/B for grammar 31-42."""

from __future__ import annotations

import re
from pathlib import Path

GRAMMAR_DIR = Path(__file__).resolve().parents[1] / "content" / "notes" / "grammar"

# quick_review, remember_from, before_items (list of markdown lines), before_fallback,
# part_a_title, part_b_title, part_b_body
B1: dict[str, tuple] = {
    "31-extended-subordinate-clauses": (
        "From [Grammar 26: want and omdat](/notes/grammar/26-subordinate-want-omdat): **omdat** pushes the verb to the end · **want** keeps V2. B1 adds **hoewel**, **terwijl**, **nadat**, **voordat**, and **totdat** with the same verb-last rule.",
        "Remember from [Grammar 26](/notes/grammar/26-subordinate-want-omdat) and [07: Word Order](/notes/grammar/07-word-order-svo): new B1 connectors use the **same verb-last rule** as **omdat** · the main clause still has V2.",
        [
            "- [Grammar 26: Subordinate want and omdat](/notes/grammar/26-subordinate-want-omdat) (**omdat** + verb last)",
            "- [Grammar 07: Word Order](/notes/grammar/07-word-order-svo) (V2 in the main clause)",
            "- [A2 Lesson 14: Subordinate Clauses](/notes/a2/14-subordinate-want-omdat) (main-lesson practice)",
        ],
        "If **omdat ik ziek ben** still feels wrong, read [26](/notes/grammar/26-subordinate-want-omdat) first.",
        "Part A: Combine clauses",
        "Part B: Say aloud",
        """    5. Say one **hoewel** sentence aloud (contrast + main clause).
    6. Say one **Nadat … hebben …, …** sequence aloud.""",
    ),
    "32-advanced-relative-clauses": (
        "From [Grammar 24: Relative Clauses](/notes/grammar/24-relative-clauses): **die** for **de** nouns · **dat** for **het** nouns · verb at the end. B1 adds **wie**, **waar**, **wat**, **hetgeen**, and nested relatives.",
        "Remember from [Grammar 24](/notes/grammar/24-relative-clauses) and [31: Extended Subordinates](/notes/grammar/31-extended-subordinate-clauses): relatives use verb-last order — the same pattern as **Ik denk dat …**.",
        [
            "- [Grammar 24: Relative Clauses](/notes/grammar/24-relative-clauses) (**die/dat** + verb last)",
            "- [Grammar 07: Word Order](/notes/grammar/07-word-order-svo) (verb at end in subordinate chunks)",
        ],
        "If **die/dat** + verb last is shaky, read [24](/notes/grammar/24-relative-clauses) first.",
        "Part A: Relative pronouns",
        "Part B: Say aloud",
        """    6. Say one sentence with **die** or **dat** aloud.
    7. Say one **met wie** sentence and one nested relative aloud.""",
    ),
    "33-waar-plus-preposition": (
        "From [Grammar 32: Advanced Relatives](/notes/grammar/32-advanced-relative-clauses): people use **met wie** · formal Dutch merges **waar** + preposition for things (**waarop**, **waarmee**, **waarvan**).",
        "Remember from [Grammar 32](/notes/grammar/32-advanced-relative-clauses) and [24](/notes/grammar/24-relative-clauses): spoken **die/dat** + prep. at end · written **waar** + fused preposition.",
        [
            "- [Grammar 32: Advanced Relative Clauses](/notes/grammar/32-advanced-relative-clauses) (**wie**, **waar**, nested relatives)",
        ],
        "If **met wie** vs **die … mee** is new, read [32](/notes/grammar/32-advanced-relative-clauses) first.",
        "Part A: Waar + preposition",
        "Part B: Say aloud",
        """    5. Say one formal **waarover** or **waarmee** sentence aloud.
    6. Contrast the same idea in spoken (**die … over**) vs formal register.""",
    ),
    "34-future-tense": (
        "From [Grammar 20: Modals in Depth](/notes/grammar/20-modal-verbs-depth) and [04: Present Tense](/notes/grammar/04-present-tense-regular): Dutch future = **gaan** (near plan) · **zullen** (promise / formal) · present tense (timetables).",
        "Remember from [Grammar 06](/notes/grammar/06-modal-verbs-intro), [20](/notes/grammar/20-modal-verbs-depth), and preview [35: Zou](/notes/grammar/35-zou-politeness-and-advice): **zullen** for promises · **gaan** for near future · **zou** softens requests (next file).",
        [
            "- [Grammar 20: Modal Verbs in Depth](/notes/grammar/20-modal-verbs-depth) (**zullen** conjugation and use)",
        ],
        "If **zullen** conjugation is rusty, read [20](/notes/grammar/20-modal-verbs-depth) first.",
        "Part A: Choose gaan, zullen, or present",
        "Part B: Say aloud",
        """    5. Say one near-future sentence with **gaan** aloud.
    6. Say one **Zullen we …?** suggestion aloud.""",
    ),
    "35-zou-politeness-and-advice": (
        "From [Grammar 06: Modals](/notes/grammar/06-modal-verbs-intro): **zou** is the past of **zullen**, but at B1 it mainly softens requests and advice — **Zou je … kunnen?**, **Ik zou …**.",
        "Remember from [Grammar 06](/notes/grammar/06-modal-verbs-intro) and [20](/notes/grammar/20-modal-verbs-depth): **Zou** + second modal + infinitive at the end · object before the chain (**Zou je me kunnen helpen?**).",
        [
            "- [Grammar 06: Modal Verbs Intro](/notes/grammar/06-modal-verbs-intro) (modal + infinitive at end)",
            "- [Grammar 07: Word Order](/notes/grammar/07-word-order-svo) (object in the middle field)",
        ],
        "If **Zou je … kunnen** word order trips you up, read [06](/notes/grammar/06-modal-verbs-intro) and [07](/notes/grammar/07-word-order-svo) first.",
        "Part A: Zou patterns",
        "Part B: Say aloud",
        """    5. Say a polite **Zou je … kunnen?** request aloud.
    6. Say a formal **Zou u …?** request aloud.""",
    ),
    "36-hypothetical-conditionals": (
        "From [Grammar 29: Conditional als](/notes/grammar/29-conditional-als): real conditions use present in both clauses. B1 unreal uses past in **als** + **zou** in the main clause.",
        "Remember from [Grammar 29](/notes/grammar/29-conditional-als) and [35: Zou](/notes/grammar/35-zou-politeness-and-advice): real **Als ik … heb, kom ik** · unreal **Als ik … was, zou ik …**.",
        [
            "- [Grammar 29: Conditional als](/notes/grammar/29-conditional-als) (real conditions)",
            "- [Grammar 35: Zou and Politeness](/notes/grammar/35-zou-politeness-and-advice) (**zou** in the result clause)",
        ],
        "If real **Als ik tijd heb, kom ik** is rusty, read [29](/notes/grammar/29-conditional-als) first.",
        "Part A: Real vs unreal",
        "Part B: Say aloud",
        """    5. Say one unreal **Als … was, zou ik …** sentence aloud.
    6. Say one **Wat als …?** question aloud.""",
    ),
    "37-conditional-past": (
        "From [Grammar 36: Hypothetical Conditionals](/notes/grammar/36-hypothetical-conditionals): **Als ik rijk was, zou ik reizen.** Past regrets add plusquamperfect: **Als ik had geweten, zou ik zijn gekomen.**",
        "Remember from [Grammar 36](/notes/grammar/36-hypothetical-conditionals) and [18: Perfect Tense](/notes/grammar/18-perfect-tense): past unreal uses **had** + participle in **als** · **zou** + **hebben/zijn** + participle in the result.",
        [
            "- [Grammar 36: Hypothetical Conditionals](/notes/grammar/36-hypothetical-conditionals) (unreal present)",
            "- [Grammar 18: Perfect Tense](/notes/grammar/18-perfect-tense) (**hebben/zijn** + participle)",
        ],
        "If **Als ik rijk was, zou ik …** is shaky, read [36](/notes/grammar/36-hypothetical-conditionals) first.",
        "Part A: Past unreal conditionals",
        "Part B: Say aloud",
        """    5. Say one **Had ik … maar …!** regret aloud.
    6. Say one **Als … had …, zou … zijn/hebben …** chain aloud.""",
    ),
    "38-passive-with-worden": (
        "From [Grammar 30: Passive Voice](/notes/grammar/30-passive-voice): **wordt** + participle · **door** + agent · **Er wordt gewerkt**. B1 adds modals, future, and subordinate passives.",
        "Remember from [Grammar 30](/notes/grammar/30-passive-voice) and [18: Perfect Tense](/notes/grammar/18-perfect-tense): same past participle as the perfect · **wordt** = process in progress.",
        [
            "- [Grammar 30: Passive Voice](/notes/grammar/30-passive-voice) (**wordt** + participle)",
            "- [Grammar 18: Perfect Tense](/notes/grammar/18-perfect-tense) (participle forms)",
        ],
        "If **wordt + participle** is new, read [30](/notes/grammar/30-passive-voice) first.",
        "Part A: Passive with worden",
        "Part B: Say aloud",
        """    6. Say **Er wordt hard gewerkt** in a full sentence aloud.
    7. Add **door** + agent to one passive you create aloud.""",
    ),
    "39-passive-with-zijn": (
        "From [Grammar 38: Passive with worden](/notes/grammar/38-passive-with-worden): **wordt** = in progress. **is** + participle = completed state (**is gebouwd** = is built).",
        "Remember from [Grammar 38](/notes/grammar/38-passive-with-worden) and [30](/notes/grammar/30-passive-voice): **wordt gebouwd** = being built · **is gebouwd** = is (already) built.",
        [
            "- [Grammar 38: Passive with worden](/notes/grammar/38-passive-with-worden) (**wordt** vs **is** contrast)",
        ],
        "If **wordt** vs **is** passive is confusing, read [38](/notes/grammar/38-passive-with-worden) first.",
        "Part A: Passive with zijn",
        "Part B: Say aloud",
        """    6. Contrast **wordt** vs **is** with one verb aloud.
    7. Say one **Er zijn … gemaakt** sentence aloud.""",
    ),
    "40-indirect-speech": (
        "From [Grammar 26: want and omdat](/notes/grammar/26-subordinate-want-omdat) and [A2 Lesson 5: Opinions](/notes/a2/05-opinions): **Ik denk dat …** already uses verb-last order — indirect speech uses the same **dat/of** pattern.",
        "Remember from [Grammar 26](/notes/grammar/26-subordinate-want-omdat): **dat/of** + verb last. From [Grammar 16](/notes/grammar/16-simple-past-regular) / [17](/notes/grammar/17-simple-past-irregular): Dutch often keeps the same tense when reporting (unlike English backshift).",
        [
            "- [Grammar 26: Subordinate want and omdat](/notes/grammar/26-subordinate-want-omdat) (**dat** + verb last)",
            "- [Grammar 16](/notes/grammar/16-simple-past-regular) / [17](/notes/grammar/17-simple-past-irregular) (tense in reported speech)",
        ],
        "If **dat** + verb last is shaky, read [26](/notes/grammar/26-subordinate-want-omdat) first.",
        "Part A: Indirect speech",
        "Part B: Say aloud",
        """    6. Report one short quote with **dat** aloud.
    7. Report one yes/no question with **of** aloud.""",
    ),
    "41-te-plus-infinitive": (
        "From [Grammar 25: om te](/notes/grammar/25-om-te-infinitive): purpose = **om … te**. B1 adds **adj + te**, **zonder te**, **door te**, and verb + **te** chains.",
        "Remember from [Grammar 25](/notes/grammar/25-om-te-infinitive) and preview [42: Word Order Masterclass](/notes/grammar/42-word-order-masterclass): purpose = **om te** · adjective = **adj + te** (no **om**) · **te** at the end of clusters.",
        [
            "- [Grammar 25: om te Infinitive](/notes/grammar/25-om-te-infinitive) (purpose clauses)",
            "- [Grammar 07: Word Order](/notes/grammar/07-word-order-svo) (infinitive / **te** at end)",
        ],
        "If **om te** purpose clauses are rusty, read [25](/notes/grammar/25-om-te-infinitive) first.",
        "Part A: te + infinitive",
        "Part B: Say aloud",
        """    6. Say **Ik probeer Nederlands te spreken** aloud.
    7. Say one **zonder te** and one **door te** phrase aloud.""",
    ),
    "42-word-order-masterclass": (
        "From [Grammar 07](/notes/grammar/07-word-order-svo), [15](/notes/grammar/15-separable-verbs), and [26](/notes/grammar/26-subordinate-want-omdat): V2 · separable prefix at end · verb last in **omdat/dat**. This page stacks those rules for B1 clusters.",
        "Remember from [Grammar 07](/notes/grammar/07-word-order-svo), [26](/notes/grammar/26-subordinate-want-omdat), [08](/notes/grammar/08-negation), [18](/notes/grammar/18-perfect-tense), and [20](/notes/grammar/20-modal-verbs-depth): build clusters from the inside out — all verbs at the end of a bijzin.",
        [],  # Before this page already present
        "",
        "Part A: Label and build",
        "Part B: Say aloud",
        "",  # Part B already present
    ),
}

TABLE_REPLACEMENTS: dict[str, tuple[str, str]] = {
    "31-extended-subordinate-clauses": (
        """| Connector | Meaning | Example |
| --- | --- | --- |
| **hoewel** | although | **Hoewel** ik moe **ben**, **werk** ik door. |
| **terwijl** | while | **Terwijl** ik **kook**, **luister** ik naar muziek. |
| **nadat** | after | **Nadat** ik **heb** gegeten, **ga** ik **wandelen**. |
| **voordat** | before | **Voordat** ik **ga**, **bel** ik je. |
| **totdat** | until | **Ik wacht**, **totdat** hij **komt**. |""",
        """| Connector | Meaning | Dutch example | English |
| --- | --- | --- | --- |
| **hoewel** | although | **Hoewel** ik moe **ben**, **werk** ik door. | Although I am tired, I keep working. |
| **terwijl** | while | **Terwijl** ik **kook**, **luister** ik naar muziek. | While I cook, I listen to music. |
| **nadat** | after | **Nadat** ik **heb** gegeten, **ga** ik **wandelen**. | After I have eaten, I go for a walk. |
| **voordat** | before | **Voordat** ik **ga**, **bel** ik je. | Before I leave, I call you. |
| **totdat** | until | **Ik wacht**, **totdat** hij **komt**. | I wait until he comes. |""",
    ),
    "32-advanced-relative-clauses": (
        """| Antecedent | Pronoun | Example |
| --- | --- | --- |
| de word (sg. + pl.) | **die** | de collega **die** … |
| het word (sg.) | **dat** | het rapport **dat** … |""",
        """| Antecedent | Pronoun | Dutch example | English |
| --- | --- | --- | --- |
| de word (sg. + pl.) | **die** | de collega **die** ik ken | the colleague who I know |
| het word (sg.) | **dat** | het rapport **dat** ik lees | the report that I read |""",
    ),
    "34-future-tense": (
        """| Strategy | Pattern | Typical use |
| --- | --- | --- |
| **Gaan** + infinitive | Ik **ga** morgen **werken** | near, concrete plan |
| **Zullen** + infinitive | Ik **zal** je **bellen** | promise, prediction, formal |
| **Present tense** | De trein **vertrekt** om acht uur | timetables, programs |""",
        """| Strategy | Pattern | Typical use | English example |
| --- | --- | --- | --- |
| **Gaan** + infinitive | Ik **ga** morgen **werken** | near, concrete plan | I am going to work tomorrow. |
| **Zullen** + infinitive | Ik **zal** je **bellen** | promise, prediction, formal | I will call you. |
| **Present tense** | De trein **vertrekt** om acht uur | timetables, programs | The train leaves at eight. |""",
    ),
}


def callout_block(body: str) -> str:
    return f"""<Callout title="Remember from…" type="info">
  {body}
</Callout>"""


def before_block(items: list[str], fallback: str) -> str:
    lines = ["### Before this page", "", "You should be comfortable with:", ""] + items
    if fallback:
        lines += ["", fallback]
    return "\n".join(lines) + "\n\n"


def insert_scaffolding(content: str, slug: str) -> str:
    quick, remember, before_items, before_fallback, _, _, _ = B1[slug]
    parts: list[str] = []

    if before_items and "### Before this page" not in content:
        parts.append(before_block(before_items, before_fallback))

    if "## Quick Review" not in content:
        parts.append(f"## Quick Review\n\n{quick}")

    if '<Callout title="Remember from' not in content:
        parts.append(callout_block(remember))

    if not parts:
        return content

    block = "\n\n".join(parts) + "\n\n"

    if "### Before this page" in content and before_items:
        # only add quick review + callout after existing before block
        if "## Quick Review" not in content:
            pattern = r"(### Before this page\n(?:.*?\n)*?)(?=\n## )"
            m = re.search(pattern, content, re.DOTALL)
            if m:
                return content[: m.end()] + "\n" + block + content[m.end() :]

    pattern = r"(## Introduction\n(?:.*?\n)*?)(?=\n## )"
    m = re.search(pattern, content, re.DOTALL)
    if not m:
        return content
    return content[: m.end()] + "\n" + block + content[m.end() :]


def standardize_practice(content: str, slug: str) -> str:
    _, _, _, _, part_a, part_b, part_b_body = B1[slug]

    # Rename any practice card title to Part A
    content = re.sub(
        r'<CardTitle className="text-lg">(?:Drills|Combine clauses)</CardTitle>',
        f'<CardTitle className="text-lg">{part_a}</CardTitle>',
        content,
    )

    practice_match = re.search(
        r"(## Practice Exercises\n.*?)(## Answer Key)",
        content,
        re.DOTALL,
    )
    if not practice_match:
        return content

    practice_body = practice_match.group(1)
    if part_b_body and "Part B:" not in practice_body:
        part_b_card = f"""
<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">{part_b}</CardTitle>
  </CardHeader>

  <CardContent>
{part_b_body}
  </CardContent>
</ShadCnCard>
"""
        practice_body = practice_body.rstrip() + "\n" + part_b_card + "\n"
        content = content[: practice_match.start()] + practice_body + content[practice_match.end(1) :]

    return content


def normalize_answer_key(content: str) -> str:
    content = content.replace("**Part A samples**", "**Part A**")
    return content


def fix_31_answer_key(content: str) -> str:
    if "**Part A**" in content and "## Answer Key" in content:
        return content
    old = """## Answer Key

1. **Hoewel ik moe ben, ga ik door.**
2. **Terwijl zij werkt, wacht ik.**
3. **Nadat we hebben gegeten, gaan we wandelen.**
4. **Voordat hij komt, bel ik hem.**

## Related Main Lessons"""
    new = """## Answer Key

<ShadCnCard className="my-4">
  <CardContent>
    **Part A**

    1. **Hoewel ik moe ben, ga ik door.**
    2. **Terwijl zij werkt, wacht ik.**
    3. **Nadat we hebben gegeten, gaan we wandelen.**
    4. **Voordat hij komt, bel ik hem.**

    **Part B:** Say one **hoewel** and one **nadat** sentence aloud. Compare with [B1 Lesson 1](/notes/b1/01-conjunctions-overview).
  </CardContent>
</ShadCnCard>

## Related Main Lessons"""
    if old in content:
        content = content.replace(old, new)
    return content


def apply_table_replacements(content: str, slug: str) -> str:
    if slug not in TABLE_REPLACEMENTS:
        return content
    old, new = TABLE_REPLACEMENTS[slug]
    return content.replace(old, new)


def process_file(path: Path) -> bool:
    slug = path.stem
    if slug not in B1:
        return False
    original = path.read_text(encoding="utf-8")
    updated = original
    updated = insert_scaffolding(updated, slug)
    updated = apply_table_replacements(updated, slug)
    updated = standardize_practice(updated, slug)
    updated = normalize_answer_key(updated)
    if slug == "31-extended-subordinate-clauses":
        updated = fix_31_answer_key(updated)
    if updated != original:
        path.write_text(updated, encoding="utf-8")
        return True
    return False


def main() -> None:
    changed = 0
    for i in range(31, 43):
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
