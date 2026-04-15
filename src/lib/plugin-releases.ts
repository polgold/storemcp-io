/**
 * Source of truth for StoreMCP plugin releases.
 *
 * Update this file on every release. The /api/update route reads the
 * `latest` entry and returns it to the WordPress auto-updater.
 *
 * Release checklist:
 *   1. Bump version in store-mcp.php and readme.txt (Stable tag).
 *   2. Run build-zip.sh in the store-mcp repo.
 *   3. Copy dist/store-mcp-X.Y.Z.zip into storemcp-io/public/downloads/.
 *   4. Also copy over store-mcp-latest.zip.
 *   5. Add the release entry below with the date and changelog.
 *   6. Commit + push. Vercel auto-deploys.
 */

export type PluginRelease = {
  version: string;
  releasedAt: string;
  tested: string;
  requires: string;
  requiresPhp: string;
  downloadUrl: string;
  detailsUrl: string;
  changelog: string;
};

export const PLUGIN_SLUG = 'store-mcp';

export const releases: PluginRelease[] = [
  {
    version: '1.1.1',
    releasedAt: '2026-04-15',
    tested: '6.7',
    requires: '6.4',
    requiresPhp: '8.0',
    downloadUrl: 'https://storemcp.io/downloads/store-mcp-1.1.1.zip',
    detailsUrl: 'https://storemcp.io/changelog',
    changelog: [
      '<h4>1.1.1 — 2026-04-15</h4>',
      '<ul>',
      '<li>Added full Spanish (es_ES) translation.</li>',
      '<li>Added plain-language explainer and example prompts for every module and tool.</li>',
      '<li>Moved official website from storemcp.com to storemcp.io.</li>',
      '<li>Added self-hosted auto-updater: updates delivered directly from storemcp.io.</li>',
      '</ul>',
      '<h4>1.0.0 — 2026-04-14</h4>',
      '<ul>',
      '<li>Initial public release. 137 tools across 22 modules.</li>',
      '</ul>'
    ].join('\n')
  }
];

export function latestRelease(): PluginRelease {
  return releases[0];
}

export function findRelease(version: string): PluginRelease | undefined {
  return releases.find((r) => r.version === version);
}
