#!/usr/bin/env bash
# Phase 5+ validation checks for the grammar track.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
GRAMMAR="$ROOT/content/notes/grammar"

fail=0

check() {
  local label="$1"
  local pattern="$2"
  if rg -q "$pattern" "$GRAMMAR"; then
    echo "FAIL: $label"
    rg -n "$pattern" "$GRAMMAR" | head -20
    fail=1
  else
    echo "OK:   $label"
  fi
}

check 'no "Open answers" stubs' 'Open answers'
check 'no broken a1/10-perfect link' 'a1/10-perfect'
check 'no broken a1/17-reflexive link' 'a1/17-reflexive'
check 'no misleading 01-42 → personal-pronouns in phrase callouts' 'core grammar files \[01–42\]\(/notes/grammar/01-personal-pronouns\)'

intro="$GRAMMAR/00-introduction.mdx"
for pair in \
  "Track bands|^### Track bands" \
  "Core grammar|^### Core grammar" \
  "Word order spine|^### Word order spine" \
  "Tense spine|^### Tense spine" \
  "Connector hub|^### Connector hub" \
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

if ! rg -q '^### Phrase register' "$GRAMMAR/register-and-formality.mdx"; then
  echo "FAIL: register-and-formality missing ### Phrase register"
  fail=1
else
  echo "OK:   register-and-formality has ### Phrase register"
fi

# Phase 6: B1 core 31-42 classroom loop
for f in "$GRAMMAR"/3[1-9]-*.mdx "$GRAMMAR"/4[0-2]-*.mdx; do
  [ -f "$f" ] || continue
  base=$(basename "$f")
  for need in "Quick Review" "Remember from" "Part A:" "Part B:"; do
    if ! grep -q "$need" "$f"; then
      echo "FAIL: $base missing $need"
      fail=1
    fi
  done
done
if [ "$fail" -eq 0 ]; then
  echo "OK:   files 31-42 have Quick Review, Remember from, Part A, Part B"
fi

if ! rg -q 'Remember from' "$GRAMMAR/register-and-formality.mdx"; then
  echo "FAIL: register-and-formality missing Remember from callout"
  fail=1
else
  echo "OK:   register-and-formality has Remember from"
fi

# Phase 7: Before this page on Tier A entry files
for f in 06-modal-verbs-intro 11-demonstratives 13-adjectives 19-past-tense-weak-strong 24-relative-clauses 29-conditional-als; do
  path="$GRAMMAR/$f.mdx"
  if ! grep -q '### Before this page' "$path"; then
    echo "FAIL: $f missing Before this page"
    fail=1
  fi
done
before_count=$(rg -l '### Before this page' "$GRAMMAR" | wc -l | tr -d ' ')
if [ "$before_count" -lt 22 ]; then
  echo "FAIL: only $before_count files with Before this page (need ≥22)"
  fail=1
else
  echo "OK:   $before_count files with Before this page (≥22)"
fi

# Phase 8: Part B on phrase files 43-58
for i in $(seq 43 58); do
  path=$(ls "$GRAMMAR"/$(printf '%02d' "$i")-*.mdx 2>/dev/null | head -1)
  [ -f "$path" ] || continue
  base=$(basename "$path")
  if ! grep -q 'Part B:' "$path"; then
    echo "FAIL: $base missing Part B practice card"
    fail=1
  fi
done
if [ "$fail" -eq 0 ]; then
  echo "OK:   files 43-58 have Part B practice"
fi

# Phase 9: hub pages in meta and intro
for hub in tense-and-register-choice connector-choice; do
  if [ ! -f "$GRAMMAR/$hub.mdx" ]; then
    echo "FAIL: missing hub $hub.mdx"
    fail=1
  fi
done
if [ "$fail" -eq 0 ]; then
  echo "OK:   hub pages tense-and-register-choice and connector-choice exist"
fi
if ! rg -q 'tense-and-register-choice' "$GRAMMAR/meta.json"; then
  echo "FAIL: meta.json missing tense hub"
  fail=1
else
  echo "OK:   meta.json lists hub pages"
fi

lesson_missing=$(python3 - <<'PY'
import re
from pathlib import Path
notes = Path("content/notes")
missing = []
for level in ("a0", "a1", "a2", "b1"):
    for path in (notes / level).glob("*.mdx"):
        if path.name in ("00-introduction.mdx", "cheat-sheet.mdx", "review-and-test.mdx"):
            continue
        text = path.read_text()
        for m in re.finditer(r'<Callout title="Grammar Focus"[^>]*>\s*(.*?)\s*</Callout>', text, re.DOTALL):
            if "/notes/grammar/" not in m.group(1) and path.name != "07-numbers-21-100-and-money.mdx":
                missing.append(str(path.relative_to(notes)))
                break
if missing:
    print("\n".join(missing))
PY
)
if [ -n "$lesson_missing" ]; then
  echo "FAIL: Grammar Focus without grammar link:"
  echo "$lesson_missing"
  fail=1
else
  echo "OK:   main lessons link Grammar Focus to grammar track"
fi

exit "$fail"
