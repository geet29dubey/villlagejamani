# Village Jamani — villagejamani.com

A bilingual (Hindi / English) cultural and community website for Jamani, a village
approximately 12 km from Itarsi in Narmadapuram district, Madhya Pradesh.

_An independent cultural and community project celebrating Jamani's heritage._

## Stack

- Next.js 15 App Router, TypeScript and plain CSS (brand tokens in `src/styles/tokens.css`)
- Static export (`out/`), deployed on **Cloudflare Pages**. There is no Node runtime and
  no server-only dependencies.
- Fonts come from `next/font/google` and are self-hosted at build time:
  Yatra One (headings), Mukta (body and UI), Tiro Devanagari Hindi (sayings and quotations).
- Images are pre-optimised by `scripts/optimize-images.mjs` using `sharp`, which is a dev dependency.

## Commands

```bash
npm install
npm run dev          # editorial mode on: shows internal flags and notes
npm run build        # regenerates images, then static export to ./out
npm run check        # format check + lint + typecheck + build
npm run editorial    # lists editorial notes and unset content fields
npm run images       # regenerate optimised copies of archive images
```

## Routes

`/` sends visitors to `/hi` (Hindi is the default, via `public/_redirects`). If the
redirect is not applied, a bilingual language chooser is shown instead.

| Hindi                                              | English               |
| -------------------------------------------------- | --------------------- |
| `/hi`                                              | `/en`                 |
| `/hi/history`                                      | `/en/history`         |
| `/hi/ganesh-utsav`                                 | `/en/ganesh-utsav`    |
| `/hi/people-legacy`                                | `/en/people-legacy`   |
| `/hi/crafts-produce`                               | `/en/crafts-produce`  |
| `/hi/gallery`                                      | `/en/gallery`         |
| `/hi/experiences`                                  | `/en/experiences`     |
| `/hi/plan-your-visit`                              | `/en/plan-your-visit` |
| `/hi/sources`, `/contribute`, `/privacy`, `/terms` | same under `/en`      |

Also generated: `/sitemap.xml` (with hreflang alternates), `/robots.txt` and `/og/jamani-og.png`.

## Content

All cultural content is kept separate from the UI, in `src/content/`:

| File             | Content                                                                         |
| ---------------- | ------------------------------------------------------------------------------- |
| `history.ts`     | village intro, timeline, elder's origin account                                 |
| `festival.ts`    | Ganesh Utsav claims, moments, programme, performer and visitor info, 4 February |
| `temple.ts`      | Ram–Janaki temple                                                               |
| `artists.ts`     | artists remembered in the festival's history                                    |
| `people.ts`      | Harishankar Parsai, R. S. Dubey, additional contributors                        |
| `ifye.ts`        | the 1964 IFYE archive documents and the Ray Ropp biography                      |
| `produce.ts`     | crafts and produce                                                              |
| `experiences.ts` | visitor experiences                                                             |
| `gallery.ts`     | photographs and their metadata                                                  |
| `travel.ts`      | location, travel, seasons, guidance                                             |

Interface strings are in `src/i18n/ui.ts`, and routes and navigation are in `src/i18n/routes.ts`.
Site settings (WhatsApp number, map, festival dates, editorial mode) are in `src/config/site.ts`.

Every historical record carries `sourceType`, `sourceName`, `sourceDate`,
`verificationStatus` (`verified-published`, `family-archive`, `oral-history` or
`awaiting-confirmation`), `imageRights` and `editorialNotes`. Editorial notes are
**never rendered on production**.

Missing values are `null`. The UI turns them into readable placeholders such as
"Date being documented" or "Year being documented", so raw tokens never appear.

### Adding a photograph

1. Put the original in `assets/archive/originals/` or `assets/photos/`. Originals are
   never modified or served.
2. Run `npm run images` to create WebP copies at 480, 960, 1600 and 2400 px, plus a
   manifest entry.
3. Reference its id (the filename without its extension) in the relevant content file,
   with alt text, caption, source and permission.

### Adding a contributor

Add an entry to `contributors` in `src/content/people.ts`, with `consentToPublish: true`.
It appears on People & Legacy, grouped by category, with no layout changes.

## Deploying to Cloudflare Pages

- Build command: `npm run build`
- Output directory: `out`
- `public/_redirects` handles `/` → `/hi`, and `public/_headers` sets caching and security headers.

See `EDITORIAL_CHECKLIST.md` for the content that still needs dates, photographs,
permissions and source verification.
