#!/usr/bin/env bash
# Phase 1 validation checks for the pronunciation track.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PRON="$ROOT/content/notes/pronunciation"
NOTES="$ROOT/content/notes"

fail=0

check_absent() {
  local label="$1"
  local pattern="$2"
  local path="$3"
  if rg -q "$pattern" "$path"; then
    echo "FAIL: $label"
    rg -n "$pattern" "$path" | head -10
    fail=1
  else
    echo "OK:   $label"
  fi
}

check_absent 'no broken a0/08-numbers-and-time link' '08-numbers-and-time' "$PRON"

# Broken outbound links from pronunciation files
broken_links=$(python3 - <<'PY'
import re
from pathlib import Path

notes = Path("content/notes")
pron = notes / "pronunciation"
broken = []
for path in sorted(pron.glob("*.mdx")):
    text = path.read_text(encoding="utf-8")
    for m in re.finditer(r'\]\((/notes/[^)#]+)(?:#[^)]+)?\)', text):
        link = m.group(1)
        parts = link.strip("/").split("/")
        if len(parts) < 2:
            continue
        section, slug = parts[1], parts[2] if len(parts) > 2 else None
        if not slug:
            continue
        if section in ("a0", "a1", "a2", "b1", "grammar", "pronunciation", "scenarios", "word-hub"):
            target = notes / section / f"{slug}.mdx"
            if not target.exists():
                broken.append(f"{path.name}: {link}")
if broken:
    print("\n".join(broken))
PY
)
if [ -n "$broken_links" ]; then
  echo "FAIL: broken links in pronunciation track:"
  echo "$broken_links"
  fail=1
else
  echo "OK:   pronunciation track outbound links resolve"
fi

# Core lesson files exist
for f in 00-introduction 01-vowel-sounds 02-consonant-sounds 03-word-stress \
  04-intonation-and-rhythm 05-connected-speech 06-regional-variation review-and-practice; do
  if [ ! -f "$PRON/$f.mdx" ]; then
    echo "FAIL: missing $f.mdx"
    fail=1
  fi
done
if [ "$fail" -eq 0 ]; then
  echo "OK:   all pronunciation lesson files exist"
fi

# Every main lesson has Pronunciation Focus with track link
lesson_issues=$(python3 - <<'PY'
import re
from pathlib import Path

notes = Path("content/notes")
issues = []
for level in ("a0", "a1", "a2", "b1"):
    for path in sorted((notes / level).glob("*.mdx")):
        if path.name in ("00-introduction.mdx", "cheat-sheet.mdx", "review-and-test.mdx"):
            continue
        text = path.read_text(encoding="utf-8")
        if 'title="Pronunciation Focus"' not in text:
            issues.append(f"{level}/{path.name}: missing Pronunciation Focus")
            continue
        for m in re.finditer(
            r'<Callout title="Pronunciation Focus"[^>]*>\s*(.*?)\s*</Callout>',
            text,
            re.DOTALL,
        ):
            if "/notes/pronunciation/" not in m.group(1):
                issues.append(f"{level}/{path.name}: PF without pronunciation link")
                break
if issues:
    print("\n".join(issues))
PY
)
if [ -n "$lesson_issues" ]; then
  echo "FAIL: main lesson pronunciation issues:"
  echo "$lesson_issues"
  fail=1
else
  echo "OK:   all main lessons have Pronunciation Focus with track link"
fi

# Unclosed Pronunciation Focus callouts (mdxlint-style)
unclosed=$(python3 - <<'PY'
import re
from pathlib import Path

notes = Path("content/notes")
bad = []
for level in ("a0", "a1", "a2", "b1"):
    for path in (notes / level).glob("*.mdx"):
        text = path.read_text(encoding="utf-8")
        for m in re.finditer(r'<Callout title="Pronunciation Focus"[^>]*>', text):
            start = m.end()
            rest = text[start:]
            if not re.search(r'</Callout>', rest[:2000]):
                bad.append(f"{level}/{path.name}")
                break
if bad:
    print("\n".join(bad))
PY
)
if [ -n "$unclosed" ]; then
  echo "FAIL: unclosed Pronunciation Focus callouts:"
  echo "$unclosed"
  fail=1
else
  echo "OK:   Pronunciation Focus callouts are closed"
fi

# Phase 2: expanded intro sections
intro="$PRON/00-introduction.mdx"
for pair in \
  "Track bands|^### Track bands" \
  "Sound spine|^### Sound spine" \
  "Listening spine|^### Listening spine" \
  "How to study|^### How to study"; do
  label="${pair%%|*}"
  pattern="${pair#*|}"
  if ! rg -q "$pattern" "$intro"; then
    echo "FAIL: 00-introduction missing ### $label"
    fail=1
  else
    echo "OK:   00-introduction has ### $label"
  fi
done

# A1 and A2 level intros mention pronunciation track
for level_intro in a1/00-introduction a2/00-introduction; do
  path="$NOTES/${level_intro}.mdx"
  if ! rg -q '/notes/pronunciation/' "$path"; then
    echo "FAIL: $level_intro missing pronunciation link"
    fail=1
  else
    echo "OK:   $level_intro links pronunciation track"
  fi
done

# Phase 3: listening hub page
if [ ! -f "$PRON/listening-and-register-choice.mdx" ]; then
  echo "FAIL: missing listening-and-register-choice.mdx"
  fail=1
else
  echo "OK:   listening-and-register-choice hub exists"
fi
if ! rg -q 'listening-and-register-choice' "$PRON/meta.json"; then
  echo "FAIL: meta.json missing listening hub"
  fail=1
else
  echo "OK:   meta.json lists listening hub"
fi
if ! rg -q 'listening-and-register-choice' "$PRON/00-introduction.mdx"; then
  echo "FAIL: 00-introduction missing hub link"
  fail=1
else
  echo "OK:   00-introduction links listening hub"
fi
for cross in 05-connected-speech 06-regional-variation review-and-practice; do
  if ! rg -q 'listening-and-register-choice' "$PRON/$cross.mdx"; then
    echo "FAIL: $cross missing hub cross-link"
    fail=1
  fi
done
if [ "$fail" -eq 0 ]; then
  echo "OK:   hub cross-linked from 05, 06, review"
fi

# Phase 4: lesson map + UI wiring
if [ ! -f "$ROOT/lib/lesson-pronunciation-map.ts" ]; then
  echo "FAIL: missing lib/lesson-pronunciation-map.ts"
  fail=1
else
  echo "OK:   lesson-pronunciation-map.ts exists"
fi
if [ ! -f "$ROOT/lib/pronunciation-lesson-map.ts" ]; then
  echo "FAIL: missing lib/pronunciation-lesson-map.ts"
  fail=1
else
  echo "OK:   pronunciation-lesson-map.ts exists"
fi
if ! rg -q 'PronunciationTaughtIn' "$ROOT/app/notes/[[...slug]]/page.tsx"; then
  echo "FAIL: notes page missing PronunciationTaughtIn"
  fail=1
else
  echo "OK:   PronunciationTaughtIn wired in notes page"
fi
for f in 01-vowel-sounds 02-consonant-sounds 03-word-stress 04-intonation-and-rhythm 05-connected-speech 06-regional-variation; do
  if ! rg -q 'Taught in \*\*Pronunciation Focus\*\*' "$PRON/$f.mdx"; then
    echo "FAIL: $f missing explicit Related Main Lessons"
    fail=1
  fi
done
if [ "$fail" -eq 0 ]; then
  echo "OK:   01-06 have explicit Related Main Lessons"
fi

map_count=$(python3 - <<'PY'
import re
from pathlib import Path
text = Path("lib/lesson-pronunciation-map.ts").read_text()
print(len(re.findall(r"^\s+'(?:a0|a1|a2|b1)/", text, re.M)))
PY
)
if [ "${map_count:-0}" -lt 85 ]; then
  echo "FAIL: lesson-pronunciation-map has only $map_count entries (need ≥85)"
  fail=1
else
  echo "OK:   lesson-pronunciation-map has $map_count lesson entries"
fi

# Phase 5: classroom loop on files 01-06
for f in 01-vowel-sounds 02-consonant-sounds 03-word-stress 04-intonation-and-rhythm 05-connected-speech 06-regional-variation; do
  path="$PRON/$f.mdx"
  for need in "Quick Review" "Remember from" "### Before this page" "Part A:" "Part B:" "## Answer Key"; do
    if ! grep -q "$need" "$path"; then
      echo "FAIL: $f missing $need"
      fail=1
    fi
  done
done
if [ "$fail" -eq 0 ]; then
  echo "OK:   files 01-06 have classroom loop sections"
fi
if ! grep -q 'Remember from' "$PRON/review-and-practice.mdx"; then
  echo "FAIL: review-and-practice missing Remember from"
  fail=1
else
  echo "OK:   review-and-practice has Remember from"
fi

# Phase 6: ecosystem links
if ! rg -q '/notes/pronunciation/' "$ROOT/content/notes/word-hub/00-introduction.mdx"; then
  echo "FAIL: word-hub intro missing pronunciation link"
  fail=1
else
  echo "OK:   word-hub intro links pronunciation track"
fi
if ! rg -q 'Forvo' "$PRON/01-vowel-sounds.mdx" "$PRON/02-consonant-sounds.mdx"; then
  echo "FAIL: 01 or 02 missing Forvo resources"
  fail=1
else
  echo "OK:   01 and 02 list external listening resources"
fi
scenario_pron_count=$(rg -l '/notes/pronunciation/' "$ROOT/content/notes/scenarios" | wc -l | tr -d ' ')
if [ "${scenario_pron_count:-0}" -lt 50 ]; then
  echo "FAIL: only $scenario_pron_count scenarios link pronunciation (need ≥50)"
  fail=1
else
  echo "OK:   $scenario_pron_count scenarios link pronunciation track"
fi

# Phase 7: no prose em dashes in pronunciation track (allow table placeholders and numeric ranges)
emdash_hits=$(python3 - <<'PY'
import re
from pathlib import Path
hits = []
for path in Path("content/notes/pronunciation").glob("*.mdx"):
    for i, line in enumerate(path.read_text().splitlines(), 1):
        if "\u2014" not in line:
            continue
        # allow en-dash ranges like 01–03 and empty table cells
        cleaned = re.sub(r"\d+\u2013\d+", "", line)
        if "\u2014" in cleaned and not re.search(r"\|\s*\u2014\s*\|", cleaned):
            hits.append(f"{path.name}:{i}")
if hits:
    print("\n".join(hits))
PY
)
if [ -n "$emdash_hits" ]; then
  echo "FAIL: prose em dashes in pronunciation track:"
  echo "$emdash_hits"
  fail=1
else
  echo "OK:   no prose em dashes in pronunciation track"
fi

exit "$fail"
