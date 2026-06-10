# SafeCircle — Legal

A tiny [Next.js](https://nextjs.org) site that publishes SafeCircle's legal documents (Privacy Policy in English + German, Impressum) as styled web pages. Hosted on [Vercel](https://vercel.com).

The site reads Markdown files from `/content/` and renders them automatically. To update any document, edit the `.md` file, push to GitHub, and Vercel redeploys within ~30 seconds.

## Live URLs

_(fill in after first deploy)_

- https://safecircle-legal.vercel.app/
- https://safecircle-legal.vercel.app/privacy-de
- https://safecircle-legal.vercel.app/privacy-en
- https://safecircle-legal.vercel.app/impressum

## Updating a document

1. Edit the relevant file in `/content/`.
2. Commit and push to GitHub.
3. Vercel auto-deploys. Refresh the live URL.

## Local development (optional)

```
npm install
npm run dev
```

Open http://localhost:3000.
