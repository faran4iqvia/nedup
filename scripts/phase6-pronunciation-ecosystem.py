#!/usr/bin/env python3
"""Phase 6: scenario pronunciation footers + rebalance B1 PF links."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SCENARIOS = ROOT / "content/notes/scenarios"
B1 = ROOT / "content/notes/b1"

SCENARIO_PRON: dict[str, str] = {
    "a0-cafe-ordering.mdx": (
        "\n\n**Pronunciation:** **graag** and long **aa** in "
        "[Vowel Sounds](/notes/pronunciation/01-vowel-sounds) · "
        "[Consonant Sounds](/notes/pronunciation/02-consonant-sounds)."
    ),
    "a0-survival-phrases.mdx": (
        "\n\n**Pronunciation:** smooth survival phrases in "
        "[Connected Speech](/notes/pronunciation/05-connected-speech) · "
        "[Word Stress](/notes/pronunciation/03-word-stress)."
    ),
    "a0-asking-the-price.mdx": (
        "\n\n**Pronunciation:** number and price stress: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Vowel Sounds](/notes/pronunciation/01-vowel-sounds)."
    ),
    "a0-bakery-counter.mdx": (
        "\n\n**Pronunciation:** counter ordering sounds: "
        "[Vowel Sounds](/notes/pronunciation/01-vowel-sounds) · "
        "[Consonant Sounds](/notes/pronunciation/02-consonant-sounds)."
    ),
    "a0-first-introduction.mdx": (
        "\n\n**Pronunciation:** greeting vowels and **g**: "
        "[Vowel Sounds](/notes/pronunciation/01-vowel-sounds) · "
        "[Consonant Sounds](/notes/pronunciation/02-consonant-sounds)."
    ),
    "a0-paying-pin-or-cash.mdx": (
        "\n\n**Pronunciation:** short checkout phrases: "
        "[Connected Speech](/notes/pronunciation/05-connected-speech) · "
        "[Word Stress](/notes/pronunciation/03-word-stress)."
    ),
    "a0-telling-time.mdx": (
        "\n\n**Pronunciation:** time and number stress: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Vowel Sounds](/notes/pronunciation/01-vowel-sounds)."
    ),
    "a0-where-do-you-live.mdx": (
        "\n\n**Pronunciation:** place names and **ui**/**ie**: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Vowel Sounds](/notes/pronunciation/01-vowel-sounds)."
    ),
    "a1-huisarts-gp.mdx": (
        "\n\n**Pronunciation:** body and institution stress: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · fast dialogues: "
        "[Connected Speech](/notes/pronunciation/05-connected-speech)."
    ),
    "a1-restaurant-meal.mdx": (
        "\n\n**Pronunciation:** **g**/**sch** and menu words: "
        "[Consonant Sounds](/notes/pronunciation/02-consonant-sounds) · "
        "[Word Stress](/notes/pronunciation/03-word-stress)."
    ),
    "a1-train-ticket.mdx": (
        "\n\n**Pronunciation:** station names and announcements: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Connected Speech](/notes/pronunciation/05-connected-speech)."
    ),
    "a1-asking-directions.mdx": (
        "\n\n**Pronunciation:** imperative stress and linking: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Connected Speech](/notes/pronunciation/05-connected-speech)."
    ),
    "a1-birthday-congratulations.mdx": (
        "\n\n**Pronunciation:** **Gefeliciteerd!** stress and warmth: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Intonation and Rhythm](/notes/pronunciation/04-intonation-and-rhythm)."
    ),
    "a1-bus-tram-ov.mdx": (
        "\n\n**Pronunciation:** OV announcements and stops: "
        "[Connected Speech](/notes/pronunciation/05-connected-speech) · "
        "[Word Stress](/notes/pronunciation/03-word-stress)."
    ),
    "a1-clothing-shop.mdx": (
        "\n\n**Pronunciation:** sizes and colour vowels: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Vowel Sounds](/notes/pronunciation/01-vowel-sounds)."
    ),
    "a1-library.mdx": (
        "\n\n**Pronunciation:** service-desk blur: "
        "[Connected Speech](/notes/pronunciation/05-connected-speech) · "
        "[Word Stress](/notes/pronunciation/03-word-stress)."
    ),
    "a1-market-stall.mdx": (
        "\n\n**Pronunciation:** food words and **g**: "
        "[Consonant Sounds](/notes/pronunciation/02-consonant-sounds) · "
        "[Word Stress](/notes/pronunciation/03-word-stress)."
    ),
    "a1-neighbour-intro.mdx": (
        "\n\n**Pronunciation:** hallway small talk: "
        "[Intonation and Rhythm](/notes/pronunciation/04-intonation-and-rhythm) · "
        "[Connected Speech](/notes/pronunciation/05-connected-speech)."
    ),
    "a1-pharmacy-apotheek.mdx": (
        "\n\n**Pronunciation:** symptom and medicine stress: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Connected Speech](/notes/pronunciation/05-connected-speech)."
    ),
    "a1-postnl-parcel-pickup.mdx": (
        "\n\n**Pronunciation:** desk phrases and codes: "
        "[Connected Speech](/notes/pronunciation/05-connected-speech) · "
        "[Word Stress](/notes/pronunciation/03-word-stress)."
    ),
    "a1-shop-floor-help.mdx": (
        "\n\n**Pronunciation:** **Waar is …?** stress: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Connected Speech](/notes/pronunciation/05-connected-speech)."
    ),
    "a1-supermarket-checkout.mdx": (
        "\n\n**Pronunciation:** fast kassa Dutch: "
        "[Connected Speech](/notes/pronunciation/05-connected-speech) · "
        "[Word Stress](/notes/pronunciation/03-word-stress)."
    ),
    "a1-swimming-pool.mdx": (
        "\n\n**Pronunciation:** entry and locker phrases: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Connected Speech](/notes/pronunciation/05-connected-speech)."
    ),
    "a1-tandarts.mdx": (
        "\n\n**Pronunciation:** mouth and pain vocabulary: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Connected Speech](/notes/pronunciation/05-connected-speech)."
    ),
    "a1-ticket-desk.mdx": (
        "\n\n**Pronunciation:** ticket and price stress: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Vowel Sounds](/notes/pronunciation/01-vowel-sounds)."
    ),
    "a1-weather-chat.mdx": (
        "\n\n**Pronunciation:** small-talk intonation: "
        "[Intonation and Rhythm](/notes/pronunciation/04-intonation-and-rhythm) · "
        "[Connected Speech](/notes/pronunciation/05-connected-speech)."
    ),
    "a2-phone-reschedule.mdx": (
        "\n\n**Pronunciation:** phone rhythm: "
        "[Intonation and Rhythm](/notes/pronunciation/04-intonation-and-rhythm) · "
        "[Connected Speech](/notes/pronunciation/05-connected-speech)."
    ),
    "a2-sick-leave-call.mdx": (
        "\n\n**Pronunciation:** **Met …** opener and linking: "
        "[Intonation and Rhythm](/notes/pronunciation/04-intonation-and-rhythm) · "
        "[Connected Speech](/notes/pronunciation/05-connected-speech)."
    ),
    "a2-workplace-small-talk.mdx": (
        "\n\n**Pronunciation:** "
        "[Connected Speech](/notes/pronunciation/05-connected-speech) · "
        "unstressed particles: [Intonation and Rhythm](/notes/pronunciation/04-intonation-and-rhythm)."
    ),
    "a2-apartment-viewing.mdx": (
        "\n\n**Pronunciation:** long housing compounds: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Connected Speech](/notes/pronunciation/05-connected-speech)."
    ),
    "a2-at-the-kapper.mdx": (
        "\n\n**Pronunciation:** describing hair and booking: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Connected Speech](/notes/pronunciation/05-connected-speech)."
    ),
    "a2-babysitter-instructions.mdx": (
        "\n\n**Pronunciation:** clear instruction stress: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Intonation and Rhythm](/notes/pronunciation/04-intonation-and-rhythm)."
    ),
    "a2-choosing-restaurant.mdx": (
        "\n\n**Pronunciation:** opinion intonation: "
        "[Intonation and Rhythm](/notes/pronunciation/04-intonation-and-rhythm) · "
        "[Connected Speech](/notes/pronunciation/05-connected-speech)."
    ),
    "a2-doctor-follow-up.mdx": (
        "\n\n**Pronunciation:** follow-up dialogue flow: "
        "[Connected Speech](/notes/pronunciation/05-connected-speech) · "
        "[Word Stress](/notes/pronunciation/03-word-stress)."
    ),
    "a2-dutch-holiday-small-talk.mdx": (
        "\n\n**Pronunciation:** cultural register and warmth: "
        "[Regional Variation](/notes/pronunciation/06-regional-variation) · "
        "[Intonation and Rhythm](/notes/pronunciation/04-intonation-and-rhythm)."
    ),
    "a2-explaining-a-problem.mdx": (
        "\n\n**Pronunciation:** **omdat**/**want** linking: "
        "[Connected Speech](/notes/pronunciation/05-connected-speech) · "
        "[Intonation and Rhythm](/notes/pronunciation/04-intonation-and-rhythm)."
    ),
    "a2-hotel-check-in.mdx": (
        "\n\n**Pronunciation:** reception desk stress: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Connected Speech](/notes/pronunciation/05-connected-speech)."
    ),
    "a2-making-plans.mdx": (
        "\n\n**Pronunciation:** **Zullen we …?** intonation: "
        "[Intonation and Rhythm](/notes/pronunciation/04-intonation-and-rhythm) · "
        "[Connected Speech](/notes/pronunciation/05-connected-speech)."
    ),
    "a2-ov-chipkaart-problem.mdx": (
        "\n\n**Pronunciation:** explaining the fine: "
        "[Connected Speech](/notes/pronunciation/05-connected-speech) · "
        "[Word Stress](/notes/pronunciation/03-word-stress)."
    ),
    "a2-past-trip-story.mdx": (
        "\n\n**Pronunciation:** narrative rhythm: "
        "[Intonation and Rhythm](/notes/pronunciation/04-intonation-and-rhythm) · "
        "[Connected Speech](/notes/pronunciation/05-connected-speech)."
    ),
    "a2-reporting-lost-item.mdx": (
        "\n\n**Pronunciation:** police-report flow: "
        "[Connected Speech](/notes/pronunciation/05-connected-speech) · "
        "[Word Stress](/notes/pronunciation/03-word-stress)."
    ),
    "a2-returning-a-purchase.mdx": (
        "\n\n**Pronunciation:** complaint intonation: "
        "[Connected Speech](/notes/pronunciation/05-connected-speech) · "
        "[Intonation and Rhythm](/notes/pronunciation/04-intonation-and-rhythm)."
    ),
    "a2-sports-club.mdx": (
        "\n\n**Pronunciation:** club and schedule words: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Connected Speech](/notes/pronunciation/05-connected-speech)."
    ),
    "a2-tandarts-appointment.mdx": (
        "\n\n**Pronunciation:** phone booking and pain words: "
        "[Connected Speech](/notes/pronunciation/05-connected-speech) · "
        "[Word Stress](/notes/pronunciation/03-word-stress)."
    ),
    "a2-taxi-ride.mdx": (
        "\n\n**Pronunciation:** address and street stress: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Connected Speech](/notes/pronunciation/05-connected-speech)."
    ),
    "a2-technician-visit.mdx": (
        "\n\n**Pronunciation:** home-visit explanations: "
        "[Connected Speech](/notes/pronunciation/05-connected-speech) · "
        "[Word Stress](/notes/pronunciation/03-word-stress)."
    ),
    "b1-gemeente-registration.mdx": (
        "\n\n**Pronunciation:** formal **u** and long institution words: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Regional Variation](/notes/pronunciation/06-regional-variation)."
    ),
    "b1-customer-service-call.mdx": (
        "\n\n**Pronunciation:** fast service Dutch: "
        "[Connected Speech](/notes/pronunciation/05-connected-speech) · "
        "recovery lines: [B1 Fast Speech Strategies](/notes/b1/26-fast-speech-strategies)."
    ),
    "b1-gemeente-address-change.mdx": (
        "\n\n**Pronunciation:** **verhuizing** and bureau stress: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Regional Variation](/notes/pronunciation/06-regional-variation)."
    ),
    "b1-gemeente-birth-certificate.mdx": (
        "\n\n**Pronunciation:** formal bureau vocabulary: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Regional Variation](/notes/pronunciation/06-regional-variation)."
    ),
    "b1-gemeente-brp-uittreksel.mdx": (
        "\n\n**Pronunciation:** **uittreksel** and institution stress: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Connected Speech](/notes/pronunciation/05-connected-speech)."
    ),
    "b1-gemeente-digid.mdx": (
        "\n\n**Pronunciation:** tech and formal **u**: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Connected Speech](/notes/pronunciation/05-connected-speech)."
    ),
    "b1-gemeente-passport.mdx": (
        "\n\n**Pronunciation:** passport bureau stress: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Regional Variation](/notes/pronunciation/06-regional-variation)."
    ),
    "b1-ind-residence-permit.mdx": (
        "\n\n**Pronunciation:** **IND** and permit vocabulary: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Connected Speech](/notes/pronunciation/05-connected-speech)."
    ),
    "b1-landlord-conversation.mdx": (
        "\n\n**Pronunciation:** formal repair register: "
        "[Word Stress](/notes/pronunciation/03-word-stress) · "
        "[Intonation and Rhythm](/notes/pronunciation/04-intonation-and-rhythm)."
    ),
}

PF_APPEND: dict[str, list[str]] = {
    "b1/15-reading-the-news.mdx": [
        "/notes/pronunciation/03-word-stress",
    ],
    "b1/16-formal-letters-and-emails.mdx": [
        "/notes/pronunciation/03-word-stress",
    ],
    "b1/19-society-and-environment.mdx": [
        "/notes/pronunciation/03-word-stress",
    ],
    "b1/22-storytelling-past-tenses.mdx": [
        "/notes/pronunciation/03-word-stress",
    ],
    "b1/27-practical-netherlands.mdx": [
        "/notes/pronunciation/03-word-stress",
        "/notes/pronunciation/06-regional-variation",
    ],
    "b1/21-dutch-culture-and-directness.mdx": [
        "/notes/pronunciation/06-regional-variation",
    ],
}

LINK_SNIPPETS = {
    "/notes/pronunciation/03-word-stress": " [Word Stress](/notes/pronunciation/03-word-stress)",
    "/notes/pronunciation/06-regional-variation": " [Regional Variation](/notes/pronunciation/06-regional-variation)",
}


def append_scenario_footer(path: Path, snippet: str) -> bool:
    text = path.read_text(encoding="utf-8")
    if snippet.strip() in text or "**Pronunciation:**" in text:
        return False
    marker = "## What to study next"
    if marker not in text:
        return False
    idx = text.index(marker)
    rest = text[idx:]
    # append after first paragraph block under heading
    lines = rest.split("\n")
    out: list[str] = []
    inserted = False
    for i, line in enumerate(lines):
        out.append(line)
        if not inserted and i > 0 and line.strip() and not line.startswith("#"):
            out.append(snippet.lstrip("\n"))
            inserted = True
    if not inserted:
        out.append(snippet.lstrip("\n"))
    new_rest = "\n".join(out)
    path.write_text(text[:idx] + new_rest, encoding="utf-8")
    return True


def append_pf_links(path: Path, hrefs: list[str]) -> bool:
    text = path.read_text(encoding="utf-8")
    pattern = (
        r'(<Callout title="Pronunciation Focus"[^>]*>\s*)(.*?)(\s*</Callout>)'
    )
    m = re.search(pattern, text, re.DOTALL)
    if not m:
        return False
    body = m.group(2)
    added = []
    for href in hrefs:
        if href in body:
            continue
        added.append(LINK_SNIPPETS[href])
    if not added:
        return False
    new_body = body.rstrip() + " ·" + "".join(added) + "."
    new_text = text[: m.start()] + m.group(1) + new_body + m.group(3) + text[m.end() :]
    path.write_text(new_text, encoding="utf-8")
    return True


def main() -> None:
    n = 0
    for name, snippet in SCENARIO_PRON.items():
        path = SCENARIOS / name
        if append_scenario_footer(path, snippet):
            print(f"scenario: {name}")
            n += 1
    for rel, hrefs in PF_APPEND.items():
        path = ROOT / "content/notes" / rel
        if append_pf_links(path, hrefs):
            print(f"pf: {rel}")
            n += 1
    print(f"\nDone. {n} updates.")


if __name__ == "__main__":
    main()
