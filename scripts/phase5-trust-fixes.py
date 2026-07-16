#!/usr/bin/env python3
"""Phase 5: trust fixes — callout links and partial answer keys for B1 grammar."""

from pathlib import Path

GRAMMAR = Path(__file__).resolve().parents[1] / "content" / "notes" / "grammar"

CALLOUT_OLD = (
    "use core grammar files [01–42](/notes/grammar/01-personal-pronouns)"
)
CALLOUT_NEW = (
    "use [core grammar files 01–42](/notes/grammar/00-introduction#core-grammar)"
)

ANSWER_KEYS: dict[str, str] = {
    "32-advanced-relative-clauses.mdx": """<ShadCnCard className="my-4">
  <CardContent>
    **Part A samples**

    **1. Choose relative pronoun (samples)**

    - de man → **die** · het boek → **dat** · de stad → **waar** · alles → **wat**
    - de collega (+ preposition) → **met wie**

    **2. Preposition + wie (sample)**

    - **De klant aan wie ik gemaild heb** · **De manager voor wie ik werk**

    **3. Nested relative (sample)**

    - **Het rapport dat de cijfers bevat die we nodig hebben**

    **4. Formal waar (sample)**

    - spoken **het punt dat we het over hebben** → **het punt waarover we praten**

    **5. hetgeen / alles wat (samples)**

    - **Alles wat hij zegt, geloof ik.** · **Hetgeen hij voorstelde, werd afgewezen.**

    **Part B:** Say three relative sentences aloud — one with **die**, one with **met wie**, one nested. Compare with [B1 Lesson 2](/notes/b1/02-relative-clauses).
  </CardContent>
</ShadCnCard>""",
    "33-waar-plus-preposition.mdx": """<ShadCnCard className="my-4">
  <CardContent>
    **Part A samples**

    **1. Match preposition → waar form (samples)**

    - op → **waarop** · mee → **waarmee** · van → **waarvan** · over → **waarover**

    **2. Spoken → formal (sample)**

    - **de collega die ik mee werk** → **de collega met wie ik werk** / **de collega waarmee ik werk**

    **3. Register (sample)**

    - report / job interview → formal **waar** + prep. · café chat → **die** + prep. at end OK

    **4. Translate (samples)**

    - **Het document waarop ik vertrouw** · **De reden waarom ik bel**

    **Part B:** Say one formal **waarover** sentence aloud. Compare with [B1 Lesson 3](/notes/b1/03-waar-plus-preposition).
  </CardContent>
</ShadCnCard>""",
    "34-future-tense.mdx": """<ShadCnCard className="my-4">
  <CardContent>
    **Part A samples**

    **1. Choose gaan / zullen / present (samples)**

    - friend tonight → **Ik ga vanavond koken.** · written promise → **Ik zal morgen bellen.** · timetable → **De trein vertrekt om acht uur.**

    **2. zullen conjugation (sample)**

    - **Ik zal … · Jij zult … · Wij zullen …**

    **3. Timetable rewrite (sample)**

    - **De winkel zal om zes uur sluiten.** → **De winkel sluit om zes uur.**

    **4. Zullen we (samples)**

    - **Zullen we gaan?** · **Zullen we een biertje doen?**

    **Part B:** Say one **Zullen we …?** suggestion aloud. Compare with [B1 Lesson 4](/notes/b1/04-future-with-zullen).
  </CardContent>
</ShadCnCard>""",
    "35-zou-politeness-and-advice.mdx": """<ShadCnCard className="my-4">
  <CardContent>
    **Part A samples**

    **1. Polite requests (sample)**

    - **Kun je helpen?** → **Zou je me kunnen helpen?**

    **2. Advice (samples)**

    - **Ik zou wachten.** · **Ik zou dat niet doen.**

    **3. zou graag (sample)**

    - **Ik zou graag een afspraak maken.**

    **4. Hedge (samples)**

    - **Dat zou kunnen.** · **Ik zou zeggen dat het lastig is.**

    **Part B:** Say a formal **Zou u …?** request aloud. Compare with [B1 Lesson 5](/notes/b1/05-zou-politeness-and-advice).
  </CardContent>
</ShadCnCard>""",
    "36-hypothetical-conditionals.mdx": """<ShadCnCard className="my-4">
  <CardContent>
    **Part A samples**

    **1. Real vs unreal (samples)**

    - **Als het regent, blijf ik thuis.** (real) · **Als ik rijk was, zou ik reizen.** (unreal)

    **2. Rewrite real → unreal (sample)**

    - **Als ik meer tijd heb, leer ik Nederlands.** → **Als ik meer tijd had, zou ik Nederlands leren.**

    **3. Als ik … was/had (sample)**

    - **Als ik jou was, zou ik dat niet doen.**

    **4. Stel dat / Wat als (samples)**

    - **Stel dat hij niet komt, wat dan?** · **Wat als we te laat zijn?**

    **Part B:** Say one unreal **Als … zou …** sentence aloud. Compare with [B1 Lesson 6](/notes/b1/06-hypotheticals-with-als).
  </CardContent>
</ShadCnCard>""",
    "37-conditional-past.mdx": """<ShadCnCard className="my-4">
  <CardContent>
    **Part A samples**

    **1. Label (samples)**

    - **Als ik rijk was, zou ik kopen.** → unreal present · **Als ik harder had gewerkt, zou ik geslaagd zijn.** → unreal past

    **2. had … zou hebben/zijn (sample)**

    - **Als ik had geweten, zou ik zijn gekomen.**

    **3. Had ik … maar (sample)**

    - **Had ik dat maar gedaan!**

    **4. Modal chains (sample)**

    - **Ik zou eerder hebben moeten bellen.**

    **Part B:** Say one regret with **Had ik … maar** aloud. Compare with [B1 Lesson 7](/notes/b1/07-conditional-past).
  </CardContent>
</ShadCnCard>""",
    "38-passive-with-worden.mdx": """<ShadCnCard className="my-4">
  <CardContent>
    **Part A samples**

    **1. door + agent (sample)**

    - **Het rapport wordt door het team geschreven.**

    **2. moet/kan worden (sample)**

    - **Dit moet worden goedgekeurd.**

    **3. zal worden (sample)**

    - **De wet zal worden doorgevoerd.**

    **4. In dat clause (sample)**

    - **Hij zegt dat het project wordt uitgesteld.**

    **5. Er wordt gezegd (sample)**

    - **Er wordt gezegd dat de prijzen stijgen.**

    **Part B:** Say **Er wordt hard gewerkt** in a full sentence aloud. Compare with [B1 Lesson 8](/notes/b1/08-passive-with-worden).
  </CardContent>
</ShadCnCard>""",
    "39-passive-with-zijn.mdx": """<ShadCnCard className="my-4">
  <CardContent>
    **Part A samples**

    **1. worden vs zijn (samples)**

    - in progress **wordt gebouwd** · completed **is gebouwd**

    **2. Rewrite wordt → is (sample)**

    - **De brug wordt gebouwd.** (now) → **De brug is gebouwd.** (done)

    **3. Er is/zijn … gemaakt (sample)**

    - **Er zijn fouten gemaakt.**

    **4. dat clause (sample)**

    - **… omdat het werk is afgerond.**

    **5. moet … zijn (sample)**

    - **Dit moet vóór vrijdag zijn afgerond.**

    **Part B:** Contrast **wordt** vs **is** with one verb aloud. Compare with [B1 Lesson 9](/notes/b1/09-passive-with-zijn).
  </CardContent>
</ShadCnCard>""",
    "40-indirect-speech.mdx": """<ShadCnCard className="my-4">
  <CardContent>
    **Part A samples**

    **1. dat / of (sample)**

    - **Hij zegt: "Ik kom morgen."** → **Hij zegt dat hij morgen komt.**

    **2. zou for zullen (sample)**

    - **Ik zal bellen.** → **Hij zei dat hij zou bellen.**

    **3. Pronoun shift (sample)**

    - **Hij zegt: "Ik ben ziek."** → **Hij zegt dat hij ziek is.**

    **4. Questions (samples)**

    - **Kom je?** → **Hij vraagt of ik kom.** · **Waar woon je?** → **Hij vraagt waar ik woon.**

    **5. Commands (sample)**

    - **Blijf hier!** → **Hij zei dat ik hier moest blijven.**

    **Part B:** Report one short quote with **dat** aloud. Compare with [B1 Lesson 10](/notes/b1/10-indirect-speech).
  </CardContent>
</ShadCnCard>""",
    "41-te-plus-infinitive.mdx": """<ShadCnCard className="my-4">
  <CardContent>
    **Part A samples**

    **1. adj + te (samples)**

    - **makkelijk te gebruiken** · **moeilijk te begrijpen**

    **2. zonder te / door te (samples)**

    - **zonder te vragen** · **door hard te werken**

    **3. verb + te (sample)**

    - **Ik probeer te helpen.**

    **4. Separable + te (sample)**

    - **Ik begon hem uit te leggen.**

    **5. om te vs te (sample)**

    - purpose **om te leren** · adj **makkelijk te lezen** (not **om te**)

    **Part B:** Say **Ik probeer Nederlands te spreken** aloud. Compare with [B1 Lesson 11](/notes/b1/11-te-plus-infinitive).
  </CardContent>
</ShadCnCard>""",
    "43-nuanced-opinions.mdx": """<ShadCnCard className="my-4">
  <CardContent>
    **Part A samples**

    **1. Rank soft → strong (sample order)**

    - het lijkt me dat → naar mijn mening → ik ben ervan overtuigd → zonder twijfel

    **2. Hedged rewrite (sample)**

    - **Dat is dom.** → **Het lijkt me dat dat niet verstandig is.** / **Ik zou zeggen dat …**

    **3. ik ben er niet zeker van of (sample)**

    - **Ik ben er niet zeker van of hij komt.**

    **4. Partial view (sample)**

    - **Tot op zekere hoogte ben ik het ermee eens.**

    **5. hoewel + hedge (sample)**

    - **Hoewel het duur is, lijkt het me toch de moeite waard.**

    **Part B:** Say one hedged opinion aloud using **het lijkt me dat**. Compare with [B1 Lesson 13](/notes/b1/13-nuanced-opinions).
  </CardContent>
</ShadCnCard>""",
}


def fix_phrase_callouts() -> int:
    count = 0
    for path in sorted(GRAMMAR.glob("4[3-9]-*.mdx")) + sorted(GRAMMAR.glob("5[0-8]-*.mdx")):
        text = path.read_text()
        if CALLOUT_OLD in text:
            path.write_text(text.replace(CALLOUT_OLD, CALLOUT_NEW))
            count += 1
    return count


def fix_answer_keys() -> int:
    count = 0
    for name, key_body in ANSWER_KEYS.items():
        path = GRAMMAR / name
        text = path.read_text()
        marker = "## Answer Key\n\n"
        if marker not in text:
            raise SystemExit(f"Answer Key section missing in {name}")
        start = text.index(marker) + len(marker)
        rest = text[start:]
        if "## Related Main Lessons" in rest:
            end = rest.index("## Related Main Lessons")
            old_block = rest[:end]
        else:
            old_block = rest
        if "Open answers" not in old_block:
            print(f"skip {name}: no Open answers stub")
            continue
        new_text = text[:start] + key_body + "\n\n" + rest[end:].lstrip() if "## Related Main Lessons" in rest else text[:start] + key_body + "\n"
        path.write_text(new_text)
        count += 1
    return count


def main() -> None:
    callouts = fix_phrase_callouts()
    keys = fix_answer_keys()
    print(f"Updated {callouts} phrase callouts, {keys} answer keys")


if __name__ == "__main__":
    main()
