# Editorial checklist — villagejamani.com

Nothing on this site should be invented. Every item below is a gap that is
currently shown to visitors as a polite placeholder (for example "Date being
documented" or "Photograph to be added with permission"). Run `npm run editorial`
for a live list of every internal note and unset field in `src/content/`.

Internal notes and flags are only visible in editorial mode (`npm run dev`, or a
preview build with `NEXT_PUBLIC_EDITORIAL_MODE=true`). Never set that variable
on the production domain.

## 1. Before launch (blocking)

- [ ] **Gram Panchayat wording**: the site is described as "an independent cultural
      and community project". Do not call it "official" without written authorisation.
- [ ] **IFYE scans**: add the three scans to `assets/archive/originals/`
      (`ifye-ray-ropp.jpg`, `ifye-dotty-smith.jpg`, `ifye-mary-ellen-patterson.jpg`),
      set each `imageId` in `src/content/ifye.ts`, and run `npm run images`.
- [ ] **IFYE transcriptions**: transcribe only clearly legible text straight from each
      scan. Mark uncertain passages `[illegible]`. Check the Ray Ropp printed lines
      (supplied by the family) against the scan.
- [ ] **Written permission from the Dubey family** to publish the five archive
      photographs and the IFYE scans (`imageRights` is currently `family-permission-granted`;
      change it to `permission-pending` if this has not been given in writing).
- [ ] **Contact channel**: set `whatsappNumber` and/or `contactEmail` in `src/config/site.ts`.
      Until then, enquiry buttons lead to the contact form, which says the number is being set up.
- [ ] **Parsai citations**: add specific published references (birth date and place,
      Sahitya Akademi Award) to the Sources page.

## 2. Facts awaiting family confirmation

| Item                                                                  | Where                                                      | What is needed                                                           |
| --------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------ |
| Jamani's settlement date and origin                                   | `history.ts` → `settlement`                                | Elders' accounts, Panchayat or land records, gazetteer                   |
| Elder's origin account (quotation)                                    | `history.ts` → `elderOriginAccount`                        | Verbatim recording with the speaker's consent                            |
| Founding year and founder of the Ganesh Utsav                         | `history.ts`, `festival.ts`                                | Replace "about five generations" once confirmed                          |
| Bullock-cart journeys: which station, which years                     | `festival.ts` → `bullock-cart`                             | Family confirmation                                                      |
| Ram–Janaki temple age (~300 years, oral history)                      | `temple.ts`                                                | Independent source: inscription, temple/land records, archaeology survey |
| Temple architecture, photographs, family memory                       | `temple.ts`                                                | Description, photos with permission, a quoted memory                     |
| R. S. Dubey: full name, birth and death years                         | `people.ts` → `rsDubey`                                    | Family                                                                   |
| R. S. Dubey: three contribution milestones (title, year, impact)      | `people.ts`                                                | Family, in their own words                                               |
| R. S. Dubey: remembrance quotation and portrait                       | `people.ts`                                                | Family, with attribution and permission                                  |
| Parsai: notable works list                                            | `people.ts` → `notableWorks`                               | Only with verified citations                                             |
| Parsai: birthplace marker or memorial in Jamani                       | `people.ts` → `birthplaceNote`                             | Only if one exists                                                       |
| Parsai portrait                                                       | `people.ts` → `portrait`                                   | A lawful source or the rights holder's permission                        |
| Pandit Samta Prasad ("Gudai Maharaj"): confirm intended identity      | `artists.ts`                                               | Family                                                                   |
| Art form, city or gharana, and year for each artist                   | `artists.ts`                                               | Festival records, programmes, photographs                                |
| Amrit Mishra: discipline                                              | `artists.ts`                                               | Family                                                                   |
| Nirmala Devi: identity and the post-1978 date range                   | `artists.ts`                                               | Archival confirmation                                                    |
| Names of the Birju Maharaj disciples and family members who performed | `artists.ts`                                               | Family                                                                   |
| How 4 February is observed in Jamani                                  | `festival.ts` → `birjuMaharajDay.observance`               | Kathak community                                                         |
| Festival song or bhajan line, and who shared it                       | `festival.ts` → `festivalSong`                             | Village                                                                  |
| This year's festival dates and programme                              | `config/site.ts` → `festival`, `festival.ts` → `programme` | Organisers; the countdown and Event schema appear automatically          |

## 3. Ray Ropp biography: needs an external source before publication

These are hidden on production until a `source` is recorded in `src/content/ifye.ts`:

- [ ] Long association with 4-H youth development
- [ ] Agricultural and dairy-farming background in Illinois
- [ ] Support for youth mentorship and cross-cultural understanding
- [ ] Connection with Ropp Jersey Dairy Farm and Cheese Factory

Do not add "legendary", award details, exact length of service or current
organisational positions without verification.

## 4. Archive photographs: identification

For each photo in `src/content/gallery.ts`, confirm the place, occasion, approximate
date, photographer, and the people pictured (named only with consent). In particular:

- [ ] Is the Saraswati-backdrop stage the Ganesh Utsav stage in Jamani? If so, add the
      `ganesh-utsav` category.
- [ ] Is the "ग्राम पचायत भवन" building Jamani's Panchayat Bhawan? When was the photo taken, and who is in it?

## 5. Photographs still needed (all with permission)

Sthapana · night concert or Kathak · Visarjan · the temple · clay pots and lamps ·
mango, orange and banana orchards · flowers and vegetables · wheat, rice, gram and pulses ·
each experience · performers in the artists list · village lanes and life.

## 6. Artwork

- [ ] Commission the Gond painting (Ganpati's procession through Jamani with the
      musicians) from a Gond artist and credit them by name on the Ganesh Utsav page
      and on the Sources page. The current tree-and-sun and Warli motifs are brand sketches.

## 7. Map and experiences

- [ ] Set `mapEmbedUrl` to a public map of the village area. Never pin a private residence.
- [ ] For each experience: duration, group size, price, accessibility and the host
      family's consent. Change `status` to `bookable` once it is running.
- [ ] For each product: producer or family (with consent), availability and photograph.
