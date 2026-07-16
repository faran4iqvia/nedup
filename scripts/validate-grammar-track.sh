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

if ! rg -q '#track-bands' "$GRAMMAR/00-introduction.mdx"; then
  echo "FAIL: 00-introduction missing #track-bands"
  fail=1
else
  echo "OK:   00-introduction has #track-bands"
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

if ! rg -q '#word-order-spine' "$GRAMMAR/00-introduction.mdx"; then
  echo "FAIL: missing #word-order-spine anchor"
  fail=1
else
  echo "OK:   #word-order-spine anchor present"
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
if ! rg -q '#tense-spine' "$GRAMMAR/00-introduction.mdx"; then
  echo "FAIL: 00-introduction missing #tense-spine"
  fail=1
else
  echo "OK:   00-introduction has #tense-spine"
fi
if ! rg -q '#connector-hub' "$GRAMMAR/00-introduction.mdx"; then
  echo "FAIL: 00-introduction missing #connector-hub"
  fail=1
else
  echo "OK:   00-introduction has #connector-hub"
fi
if ! rg -q 'tense-and-register-choice' "$GRAMMAR/meta.json"; then
  echo "FAIL: meta.json missing tense hub"
  fail=1
else
  echo "OK:   meta.json lists hub pages"
fi

exit "$fail"
