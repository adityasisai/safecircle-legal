import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const SLUGS: Record<string, { file: string; title: string }> = {
  'privacy-en': { file: 'PRIVACY_POLICY_EN.md', title: 'Privacy Policy — AllyWalk' },
  'privacy-de': { file: 'PRIVACY_POLICY_DE.md', title: 'Datenschutzerklärung — AllyWalk' },
  'impressum':  { file: 'IMPRESSUM.md',         title: 'Impressum — AllyWalk' },
};

export function generateStaticParams() {
  return Object.keys(SLUGS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const entry = SLUGS[params.slug];
  return { title: entry?.title ?? 'AllyWalk' };
}

export default function DocPage({ params }: { params: { slug: string } }) {
  const entry = SLUGS[params.slug];
  if (!entry) return notFound();

  const filepath = path.join(process.cwd(), 'content', entry.file);
  const md = fs.readFileSync(filepath, 'utf-8');

  return (
    <main>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>
      <p style={{ marginTop: 48 }}>
        <a href="/">← Back to all legal documents</a>
      </p>
    </main>
  );
}
