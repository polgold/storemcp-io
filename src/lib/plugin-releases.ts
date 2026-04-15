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
    version: '1.1.3',
    releasedAt: '2026-04-15',
    tested: '6.8',
    requires: '6.4',
    requiresPhp: '8.0',
    downloadUrl: 'https://storemcp.io/downloads/store-mcp-1.1.3.zip',
    detailsUrl: 'https://storemcp.io/changelog',
    changelog: [
      '<h4>1.1.3 — 2026-04-15</h4>',
      '<ul>',
      '<li>WordPress Plugin Check compliance pass: escaped exception messages, switched to <code>wp_parse_url()</code> / <code>wp_delete_file()</code>, prepared all custom-table queries, and removed the deprecated explicit <code>load_plugin_textdomain()</code> call.</li>',
      '<li>Widget tools now read the <code>sidebars_widgets</code> option directly instead of relying on <code>wp_get_sidebars_widgets()</code>.</li>',
      '<li>Activity-log CSV export no longer touches the filesystem.</li>',
      '<li>Bumped <em>Tested up to</em> to WordPress 6.8.</li>',
      '</ul>',
      '<h4>1.1.2 — 2026-04-15</h4>',
      '<ul>',
      '<li>License activation rewritten to use Lemon Squeezy: per-site instance tracking, correct seat counting and proper deactivation.</li>',
      '<li>Self-hosted auto-updater is now live: new releases arrive via Plugins → Updates on sites installed from storemcp.io.</li>',
      '</ul>',
      '<h4>1.1.1 — 2026-04-15</h4>',
      '<ul>',
      '<li>Added full Spanish (es_ES) translation.</li>',
      '<li>Added plain-language explainer and example prompts for every module and tool.</li>',
      '<li>Moved official website from storemcp.com to storemcp.io.</li>',
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
