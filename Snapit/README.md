# Snapit

Public marketing site for [Snapit](https://trysnapit.com). Invoices go to the accounting system automatically.

This site tells the product story. Login, invoices, privacy, and terms stay on [app.trysnapit.com](https://app.trysnapit.com).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run start
npm run lint
```

## Edit the site

Public facts live in `lib/site.ts`: the domain, title, description, email, WhatsApp link, and the app, privacy, and terms URLs.

Home copy lives in `lib/home.ts`. The home sections render that data. Questions in `lib/faq.ts` are built from the same strings, and `/llms.txt` repeats them.

A new blog post is a Markdown file in `content/blog`. See `content/blog/README.md`. The filename is the URL. The sitemap, blog index, and `/llms.txt` pick it up on the next build.

## Deploy

Host the app on [Vercel](https://vercel.com) and point `trysnapit.com` at that project. The site uses the Next.js server for the social image, sitemap, `robots.txt`, and `/llms.txt`.
