/**
 * Plugin update endpoint.
 *
 * Called by the StoreMCP WordPress plugin's self-hosted updater. Responds
 * with the latest release metadata so WP can surface it in Plugins → Updates.
 *
 * Contract: see store-mcp/includes/class-mcp-updater.php
 *
 * Request:  GET /api/update?slug=store-mcp&version=<installed>&site=<home_url>
 * Response: application/json — shape consumed by the WP updater.
 */

import { NextResponse } from 'next/server';
import { PLUGIN_SLUG, latestRelease } from '@/lib/plugin-releases';

export const runtime = 'nodejs';
export const revalidate = 300;

const BANNERS = {
  low: 'https://storemcp.io/assets/banner-772x250.png',
  high: 'https://storemcp.io/assets/banner-1544x500.png'
};

const ICONS = {
  '1x': 'https://storemcp.io/assets/icon-128x128.png',
  '2x': 'https://storemcp.io/assets/icon-256x256.png'
};

const DESCRIPTION = [
  '<p><strong>StoreMCP</strong> turns your WordPress site and WooCommerce store into an MCP server, so any MCP-compatible AI client (Claude, ChatGPT, Cursor, Windsurf, custom agents) can manage your content and your store using natural language.</p>',
  '<ul>',
  '<li>Create, edit, publish posts, pages, media, menus and widgets.</li>',
  '<li>Manage WooCommerce products, orders, customers, coupons, reports.</li>',
  '<li>Per-site API keys, Application Passwords, OAuth 2.1.</li>',
  '<li>Rate limiting, redacted activity log, CSV export.</li>',
  '<li>HPOS-compatible, Yoast and Rank Math compatible.</li>',
  '</ul>'
].join('\n');

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');

  if (slug !== PLUGIN_SLUG) {
    return NextResponse.json(
      { error: 'Unknown slug' },
      { status: 404 }
    );
  }

  const release = latestRelease();

  const payload = {
    slug: PLUGIN_SLUG,
    version: release.version,
    tested: release.tested,
    requires: release.requires,
    requires_php: release.requiresPhp,
    last_updated: release.releasedAt,
    download_url: release.downloadUrl,
    details_url: release.detailsUrl,
    sections: {
      description: DESCRIPTION,
      changelog: release.changelog
    },
    banners: BANNERS,
    icons: ICONS
  };

  return NextResponse.json(payload, {
    headers: {
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600'
    }
  });
}
