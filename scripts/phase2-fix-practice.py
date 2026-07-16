#!/usr/bin/env python3
"""Fix Part B practice cards missing when answer key already had Part B."""

import re
from pathlib import Path

GRAMMAR_DIR = Path(__file__).resolve().parents[1] / "content/notes/grammar"

PART_B_TITLES = {
    "01-personal-pronouns": ("Part B: Say aloud", "6. Say aloud: greet with **ik**, **jij**, and **u** in one sentence each.\n    7. Introduce yourself with **Ik ben …** and ask someone's name."),
    "02-verb-zijn": ("Part B: Say aloud", "6. Say: **Ik ben …** + nationality from your own life.\n    7. Ask a friend **Ben je klaar?** and answer."),
    "03-verb-hebben": ("Part B: Say aloud", "6. Say three **Ik heb …** sentences (possession or honger/dorst).\n    7. Ask **Heb jij …?** about something you need."),
    "04-present-tense-regular": ("Part B: Say aloud", "7. Say three sentences about your daily routine.\n    8. Ask one **Werk je …?** question."),
    "05-question-formation": ("Part B: Say aloud", "7. Ask three yes/no questions about today.\n    8. Ask **Waar …?** and **Wanneer …?** about your plans."),
    "06-modal-verbs-intro": ("Part B: Say aloud", "7. Say three sentences with **wil**, **kan**, **moet**.\n    8. Ask **Mag ik …?** for permission."),
    "09-articles-de-het": ("Part B: Learn chunks", "6. List three **het** words you use daily (noun + article).\n    7. Quiz a partner: say a noun · they guess **de** or **het**."),
    "10-possessive-pronouns": ("Part B: Say aloud", "7. Describe your family with **mijn**, **zijn**, **haar**.\n    8. Use formal **uw** in one polite question."),
    "11-demonstratives": ("Part B: Say aloud", "7. Point at objects: **deze …** / **dit …** (three items).\n    8. Contrast near and far: **deze** vs **die**."),
    "12-plural-nouns": ("Part B: Say aloud", "7. Say three plural **de …** phrases from your kitchen.\n    8. Fix aloud: **het boeken** → **de boeken**."),
    "13-adjectives": ("Part B: Describe aloud", "7. Describe a person with **groot**, **klein**, **aardig**.\n    8. Say **Het huis is …** + predicate adjective."),
    "14-reflexive-verbs": ("Part B: Say aloud", "7. Say **Ik was me** · **Ik kleed me aan** · **Ik scheren me**.\n    8. Ask **Was je …?** to a friend."),
    "15-separable-verbs": ("Part B: Say aloud", "7. Say three separable verbs from your morning routine.\n    8. Use one with a modal: **Ik moet …**"),
    "16-simple-past-regular": ("Part B: Say aloud", "7. Say what you did yesterday (three **-te/-de** verbs).\n    8. Ask **Werkte je …?**"),
    "17-simple-past-irregular": ("Part B: Say aloud", "7. Say **Ik ging …** · **Ik kwam …** · **Ik was …**.\n    8. Contrast present and past for **gaan**."),
    "19-past-tense-weak-strong": ("Part B: Say aloud", "7. Classify five verbs aloud as zwak or sterk.\n    8. Give past + participle for **gaan**, **werken**, **maken**."),
    "20-modal-verbs-depth": ("Part B: Say aloud", "5. Write five **Zullen we …?** suggestions aloud.\n    6. Convert three present modal sentences to simple past."),
    "21-comparatives-superlatives": ("Part B: Say aloud", "7. Compare two cities: **… is groter dan …**\n    8. Say **Het beste** + noun from your opinion."),
    "22-prepositions-place": ("Part B: Describe your room", "7. Say where five objects are (**op**, **in**, **naast**).\n    8. Describe your desk without movement verbs."),
    "23-prepositions-time-movement": ("Part B: Say your week aloud", "7. Say when you work (**om**, **op maandag**).\n    8. Say where you go (**naar** + place)."),
    "24-relative-clauses": ("Part B: Write about your neighbourhood", "4. Write three sentences about your neighbourhood using **die** or **dat**.\n    5. Explain aloud: conjunction **dat** vs relative **dat** (one example each)."),
    "25-om-te-infinitive": ("Part B: Say your goals aloud", "7. Say three **Ik ga … om … te …** purpose sentences.\n    8. Contrast one **om te** and one **omdat** sentence aloud."),
    "26-subordinate-want-omdat": ("Part B: Explain why aloud", "4. Answer three **Waarom?** questions with **Omdat …** aloud.\n    5. Write a short paragraph with **daarom** and **doordat**."),
    "27-indirect-objects-pronouns": ("Part B: Say aloud", "7. Say **Ik geef hem …** · **Ik geef haar …** (three gifts).\n    8. Use **me** and **je** in short answers."),
    "28-er-constructions": ("Part B: Say aloud", "7. Say **Er is …** / **Er zijn …** (three existence sentences).\n    8. Use partitive **er**: **Ik heb er drie**."),
    "29-conditional-als": ("Part B: Say aloud", "7. Say three **Als ik …, dan …** real conditions.\n    8. Explain when you use verb-last in the **als** clause."),
    "30-passive-voice": ("Part B: Say aloud", "4. Say five **Er wordt …** sentences aloud.\n    5. Add **door** + agent to two passives you create."),
}

GENERIC_PART_B = (
    "Part B: Say aloud",
    "7. Say three example sentences aloud using today's pattern.\n    8. Make one sentence from your own life.",
)


def fix_file(path: Path) -> bool:
    slug = path.stem
    content = path.read_text(encoding="utf-8")
    original = content

    # Fix duplicate Part B label in answer key
    content = content.replace("**Part B:** **Part B:**", "**Part B:**")

    practice = re.search(
        r"(## Practice Exercises\n.*?)(## Answer Key)",
        content,
        re.DOTALL,
    )
    if not practice:
        return False

    practice_body = practice.group(1)
    if "Part B:" in practice_body and "<CardTitle" in practice_body.split("Part B:")[1][:200]:
        # already has Part B card
        pass
    elif "Part B:" not in practice_body or "<CardTitle" not in practice_body:
        title, items = PART_B_TITLES.get(slug, GENERIC_PART_B)
        part_b_card = f"""
<ShadCnCard className="my-4">
  <CardHeader>
    <CardTitle className="text-lg">{title}</CardTitle>
  </CardHeader>

  <CardContent>
    {items}
  </CardContent>
</ShadCnCard>
"""
        # Remove open-ended last items from Part A (item 6 say aloud etc.)
        practice_body = re.sub(
            r"\n    6\. Say[^\n]*\n?",
            "\n",
            practice_body,
        )
        practice_body = re.sub(
            r"\n    6\. List[^\n]*\n?",
            "\n",
            practice_body,
        )
        if not practice_body.rstrip().endswith("</ShadCnCard>"):
            pass
        practice_body = practice_body.rstrip() + "\n" + part_b_card + "\n"
        content = content[: practice.start()] + practice_body + content[practice.end(1) :]

    if content != original:
        path.write_text(content, encoding="utf-8")
        return True
    return False


def main() -> None:
    n = 0
    for i in range(1, 31):
        path = next(GRAMMAR_DIR.glob(f"{i:02d}-*.mdx"))
        if fix_file(path):
            n += 1
            print(f"fixed: {path.name}")
    print(f"Done. {n} files fixed.")


if __name__ == "__main__":
    main()
