import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'StoreMCP — AI Control Center for WordPress & WooCommerce';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OG({
  params
}: {
  params: { locale: string };
}) {
  const isES = params.locale === 'es';
  const headline = isES
    ? 'Controlá tu sitio WordPress desde IA.'
    : 'Control your WordPress site from AI.';
  const sub = isES
    ? '+120 tools MCP para WordPress y WooCommerce — Claude, ChatGPT, Cursor y cualquier cliente MCP.'
    : '120+ MCP tools for WordPress & WooCommerce — Claude, ChatGPT, Cursor and any MCP client.';

  return new ImageResponse(
    (
      <div
        style={{
          background:
            'radial-gradient(circle at 70% 20%, rgba(132,204,22,0.18), rgba(9,9,11,1) 55%)',
          backgroundColor: '#09090B',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '72px',
          color: '#FAFAFA'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            fontSize: 24,
            color: '#84CC16',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: 600
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: 'rgba(132,204,22,0.1)',
              border: '1px solid rgba(132,204,22,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div style={{ width: 22, height: 3, background: '#84CC16' }} />
          </div>
          StoreMCP
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 'auto',
            fontSize: 86,
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: '-0.035em',
            maxWidth: 960
          }}
        >
          {headline}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 32,
            fontSize: 26,
            color: '#A1A1AA',
            maxWidth: 900
          }}
        >
          {sub}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 40,
            gap: 12,
            fontSize: 22,
            color: '#71717A'
          }}
        >
          storemcp.io
        </div>
      </div>
    ),
    { ...size }
  );
}
