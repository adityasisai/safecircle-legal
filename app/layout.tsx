import React from 'react';

export const metadata = {
  title: 'SafeCircle — Legal',
  description: 'Privacy Policy and Impressum for the SafeCircle mobile app.',
};

const styles = `
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  html, body {
    margin: 0;
    padding: 0;
    background: #ffffff;
    color: #2c3e50;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
  }
  .container { max-width: 760px; margin: 0 auto; padding: 56px 24px; }
  h1, h2, h3 { color: #1A6B47; line-height: 1.25; }
  h1 { font-size: 30px; margin: 0 0 8px; }
  h2 { font-size: 22px; margin-top: 2em; }
  h3 { font-size: 17px; margin-top: 1.6em; }
  hr { border: 0; border-top: 1px solid #e6eaee; margin: 36px 0; }
  a { color: #1A6B47; text-decoration: underline; text-underline-offset: 2px; }
  a:hover { text-decoration: none; }
  ul, ol { padding-left: 22px; }
  li { margin: 4px 0; }
  code { background: #f4f6f8; padding: 1px 5px; border-radius: 4px; font-size: 0.92em; }
  strong { color: #1A6B47; }
  blockquote {
    border-left: 3px solid #1A6B47;
    margin: 16px 0;
    padding: 8px 16px;
    background: #f4f9f7;
    color: #2c3e50;
  }
  footer {
    margin-top: 64px;
    padding-top: 24px;
    border-top: 1px solid #e6eaee;
    color: #9ca3af;
    font-size: 13px;
    text-align: center;
  }
  @media (max-width: 600px) {
    .container { padding: 36px 16px; }
    h1 { font-size: 26px; }
    h2 { font-size: 20px; }
  }
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{ __html: styles }} />
      </head>
      <body>
        <div className="container">{children}</div>
        <footer>SafeCircle · contact@safecircle.app</footer>
      </body>
    </html>
  );
}
