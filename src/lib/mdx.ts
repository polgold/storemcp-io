import { getHighlighter, type Highlighter } from 'shiki';

let highlighterPromise: Promise<Highlighter> | null = null;

export function getShiki() {
  if (!highlighterPromise) {
    highlighterPromise = getHighlighter({
      themes: ['github-dark-default'],
      langs: ['json', 'bash', 'php', 'ts', 'tsx', 'js', 'yaml', 'md']
    });
  }
  return highlighterPromise;
}

export async function highlight(code: string, lang = 'text') {
  const h = await getShiki();
  const langs = h.getLoadedLanguages() as string[];
  const resolved = langs.includes(lang as any) ? lang : 'text';
  try {
    return h.codeToHtml(code, {
      lang: resolved,
      theme: 'github-dark-default'
    });
  } catch {
    return `<pre><code>${code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')}</code></pre>`;
  }
}
