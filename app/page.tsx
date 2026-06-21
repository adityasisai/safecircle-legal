import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>AllyWalk — Legal</h1>
      <p>Legal documents for the AllyWalk mobile app. The German privacy policy is the legally binding version; English is provided for convenience.</p>
      <ul>
        <li><Link href="/privacy-de">Datenschutzerklärung (Deutsch — verbindlich)</Link></li>
        <li><Link href="/privacy-en">Privacy Policy (English)</Link></li>
        <li><Link href="/impressum">Impressum</Link></li>
      </ul>
    </main>
  );
}
