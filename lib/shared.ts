export const appName = 'NedUp';
export const docsRoute = '/notes';
export const docsImageRoute = '/og/notes';
export const docsContentRoute = '/llms.mdx/notes';

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: 'fuma-nama',
  repo: 'fumadocs',
  branch: 'main',
};

/* ─────────────────────────────────────────────
   Instagram — single source of truth
───────────────────────────────────────────── */

export const instagramHandle = 'ogshaykhspear';

// Clean, canonical profile URL (no params).
export const instagramUrl = `https://www.instagram.com/${instagramHandle}`;

// Instagram's referral token from the profile's "Copy link".
const instagramShareToken = 'ZDNlZDc0MzIxNw==';

// Builds a tracked follow URL. `igsh` is read by Instagram itself; the
// utm_* keys are ready for the destination's own outbound-click analytics.
export function instagramFollowUrl(placement: string): string {
  const params = new URLSearchParams({
    igsh: instagramShareToken,
    utm_source: instagramHandle,
    utm_medium: 'website',
    utm_campaign: 'follow',
    utm_content: placement,
  });
  return `${instagramUrl}?${params.toString()}`;
}
