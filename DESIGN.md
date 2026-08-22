---
name: 최강피자
description: A franchise page that answers "what is actually left over" with a published number instead of an adjective.
colors:
  red-hero: "#b4170a"
  red-band: "#a11409"
  red-video: "#8d1007"
  ink-900: "#2a0a06"
  ink-800: "#3a1009"
  yellow-500: "#fdd816"
  gold-400: "#fcd666"
  gold-600: "#e5bb53"
  red-500: "#b4170a"
  ivory: "#fbf3e2"
  paper: "#fdfdfd"
  cream-card: "#f9f4ea"
  cream-ground: "#faf6f2"
  rule: "#ebe9e8"
  ink-black: "#03060c"
typography:
  menu-headline:
    fontFamily: "'Black Han Sans', Pretendard, sans-serif"
    fontSize: "clamp(3.3rem, 5.5vw, 5.8rem)"
    fontWeight: 900
    lineHeight: 0.99
    letterSpacing: "-0.02em"
    scope: "the /menu hero h1 only — subset to that headline's glyphs"
  display:
    fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif"
    fontSize: "clamp(4.4rem, 7.06vw, 7.4rem)"
    fontWeight: 900
    lineHeight: 1.04
    letterSpacing: "-0.052em"
  headline:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(2.1rem, 3.75vw, 3.95rem)"
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: "-0.05em"
  title:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(1.05rem, 1.42vw, 1.5rem)"
    fontWeight: 900
    lineHeight: 1.3
    letterSpacing: "-0.03em"
  body:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(0.95rem, 1.14vw, 1.19rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(0.8rem, 1.02vw, 1.05rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0.14em"
  data:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(0.95rem, 1.2vw, 1.26rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.03em"
    fontFeature: "tabular-nums"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  gutter-sm: "20px"
  gutter-md: "32px"
  container: "93.25rem"
  container-hero: "83.25rem"
  header-offset: "76px"
  header-offset-md: "84px"
  stack-sm: "0.9vw"
  stack-md: "1.4vw"
  stack-lg: "2.4vw"
components:
  cta-pill-gold:
    backgroundColor: "{colors.yellow-500}"
    textColor: "{colors.navy-900}"
    rounded: "{rounded.full}"
    padding: "0.875rem 2.24vw"
    typography: "{typography.label}"
  cta-pill-gold-hover:
    backgroundColor: "{colors.yellow-500}"
    textColor: "{colors.navy-900}"
  button-orange:
    backgroundColor: "{colors.orange-500}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "0.625rem 1.4vw"
    typography: "{typography.title}"
  contact-tile-gold:
    backgroundColor: "{colors.yellow-500}"
    textColor: "{colors.navy-900}"
    rounded: "{rounded.md}"
    padding: "1.6vw 2vw"
  contact-tile-white:
    backgroundColor: "#ffffff"
    textColor: "{colors.navy-900}"
    rounded: "{rounded.md}"
    padding: "1.6vw 2vw"
  panel-white:
    backgroundColor: "#ffffff"
    textColor: "{colors.navy-900}"
    rounded: "{rounded.md}"
    padding: "2vw 1.35vw 1.35vw"
  panel-navy:
    backgroundColor: "{colors.navy-900}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "0.7vw 1.6vw"
  table-header-navy:
    backgroundColor: "{colors.navy-900}"
    textColor: "#ffffff"
    typography: "{typography.title}"
    padding: "0.82vw 0"
  icon-chip-navy:
    backgroundColor: "{colors.navy-900}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    size: "2.6vw"
  icon-chip-mist:
    backgroundColor: "#eff1f6"
    textColor: "{colors.navy-900}"
    rounded: "{rounded.full}"
    size: "2.4vw"
  rail-button-navy:
    backgroundColor: "{colors.navy-900}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    size: "4rem"
  rail-button-white:
    backgroundColor: "#ffffff"
    textColor: "{colors.navy-900}"
    rounded: "{rounded.full}"
    size: "4rem"
  nav-link:
    textColor: "#ffffff"
    typography: "{typography.label}"
    padding: "0.25rem 0"
  nav-link-hover:
    textColor: "{colors.gold-400}"
  header-scrolled:
    backgroundColor: "{colors.navy-900}"
    textColor: "#ffffff"
    height: "6rem"
---

# Design System: 최강피자

## Overview

**Creative North Star: "The Published Ledger"**

This is a franchise page built to be believed rather than admired. Its personality comes from putting the numbers on the wall: a real table with real ratios, a drawn cost donut with the operating margin labelled inside it, actual kitchen video, actual review captures. The category default — a dark hero over stock kitchen footage followed by three benefit tiles — is a confirmed rejection. Nothing here is a mood board with a phone number at the bottom.

The world is loud in colour and quiet in ornament. Full-bleed fields of electric brand blue, paper white, and warm cream alternate down the page, and every word and panel is carried in near-black navy. Density is high: headlines run to nearly a tenth of the viewport width, tables sit at real reading size, and figures are set in tabular numerals so columns line up. The whole palette was sampled out of the client's approved comp set in `디자인수정참고파일들/` with ffmpeg palettegen and pixel probes — no value here was chosen by eye, which is why the palette reads as one continuous piece of print rather than a web theme. The brief was pinned to that comp set, so no concept roll was run for this build; the comps are the direction of record.

Depth is atmospheric, never decorative: one navy-tinted ambient shadow family lifts cards off their field, and physical texture (crumb scatter, brush marker, rosemary) is drawn or photographed, never faked with CSS gloss. Motion is a single entrance gesture, expressed in CSS so it survives hydration and honours reduced-motion on its own.

**Key Characteristics:**
- Full-bleed alternating colour fields, not a page of cards on one background
- Every palette value sampled from an approved comp, never eyeballed
- Display type sized as vw fractions of the comp's own 1672px width
- Real material only: real photography, real video, real captures, drawn SVG charts, real tables
- One icon family, one shadow family, one entrance gesture
- Figures in tabular numerals; emphasis is a coloured word, never a box

## Colors

An electric print palette: saturated brand blue and gold against near-black navy, with cream and paper as the only rests, and two hot accents held in reserve.

### Primary
- **Electric Brand Blue** (`{colors.blue-hero}`): the hero field. The loudest ground in the system and the first thing on screen.
- **Band Blue** (`{colors.blue-band}`): the slightly deeper blue used for mid-page bands and for the floating conversion panel over the review wall, so a blue-on-blue stack still separates.
- **Video Blue** (`{colors.blue-video}`): the kitchen/video field only.
- **Signal Gold** (`{colors.yellow-500}`): the action and emphasis colour. Header CTA pill, accent words inside headlines, star rows, contact tile, section-index rules, TALK badge.
- **Warm Gold** (`{colors.gold-400}`) / **Pale Gold** (`{colors.gold-300}`): gold on navy where the full-strength yellow would vibrate — nav hover, banner eyebrow text, hairlines at low alpha.
- **Antique Gold** (`{colors.gold-600}`): structural gold rules and outlines (the section's flanking rules, pill borders), where gold has to read as a drawn line rather than a highlight.

### Secondary
- **Profit Orange** (`{colors.orange-500}`) / **Light Profit Orange** (`{colors.orange-400}`): the profit-structure section's accent, and nowhere else — the headline accent word, the table total row, the inline CTA, the donut's profit wedge.

### Tertiary
- **Alarm Red** (`{colors.red-500}`) / **Deep Alarm Red** (`{colors.red-600}`): one hit of red per screen — the BEST seal on the hero pizza, the "전액 면제" benefit, the review headline figure, footnote asterisks.

### Neutral
- **Ink Navy** (`{colors.navy-900}`): body copy, every solid panel, table headers, the scrolled header, icon chips, rail buttons. This is the system's black.
- **Navy Shades** (`{colors.navy-800}`, `{colors.navy-700}`, `{colors.navy-600}`): darker panel and chart inks where navy has to sit against navy.
- **Paper** (`{colors.paper}`): the default page ground and the light sections.
- **Cream Card** (`{colors.cream-card}`) / **Cream Ground** (`{colors.cream-ground}`): the warm rest fields, used for the data-heavy profit section so a white table can float on it.
- **Hairline** (`{colors.rule}`): table dividers and card borders. Row dividers inside tables run dotted at navy 22% instead.
- **Footer Ink** (`{colors.ink-black}`): the closing contact section and footer, darker than navy so the gold contact tile is the brightest thing left on the page.
- Two cool mist greys carry photographic grounds where navy would be too heavy: `#eef1f7` behind the review wall and `#eff1f6` for neutral table icon chips.

### Named Rules
**The Sampled-Or-Derived Rule.** Every colour is either sampled from an approved source, or derived from a sampled one by a transform written into the token's comment. The brand red is sampled from the confirmed store red-concept render; the ink is that red taken to near-black so it reads as this system's black rather than as dark red. Never eyeball-adjust a token, and never introduce a hex with no stated origin.

**Orange is retired.** It measured 2.59:1 on its own section's cream ground — already under AA before any red work — and 2.46:1 against the brand red it now sits beside. The profit section's figures take the brand red, at 6.37 on cream.

**The Figure-Ground Emphasis Rule.** Red is the ground now, so "one red per screen" is meaningless. Emphasis is the figure, and its colour is decided by what it sits on:

- **light field** (paper, cream) → the brand red as type, 6.73:1 on paper.
- **red or ink field** → **ivory as a filled shape** — a disc, a slab behind a word, a rule. Never ivory type beside gold type: they measure **1.19:1** apart and read as one colour at body size.
- Gold is never emphasis. Gold is the action.

**The Alternating Field Rule.** Sections are full-bleed colour fields in sequence — red-hero, paper, paper-over-red-band, cream-ground, ivory, red-video, warm mist, footer ink. A new section picks the next field; it does not sit on a neutral page with a coloured card in it. The ivory rest replaced a full screen of `#FDD816`: a gold field landing immediately before a red one was the one place the palette read as fast food, and it was a field, not an accent.

**The Gradient-For-Legibility-Only Rule.** Gradients exist only as navy or black scrims over photography and video, to hold text contrast. No decorative gradient on a flat surface.

## Typography

**Display Font:** Pretendard (with `-apple-system`, `Segoe UI`, `Noto Sans KR`, `Apple SD Gothic Neo`, `Malgun Gothic`)
**Body Font:** Pretendard — one family for everything, by explicit client decision.

**Menu Hero Face:** Black Han Sans (OFL), self-hosted and subset to the fifteen syllables the `/menu` hero sets — about 10 KB. It exists because the approved menu comp letters that headline in a heavy Korean display face, and Pretendard turned up loud is a visibly different shape, not a louder version of the same one. It is scoped to that one `h1`; the subset has no other glyphs, so using it anywhere else silently falls back mid-word. Re-run `scripts/subset-display-font.mjs` after changing that copy.

**Character:** A single Korean-first geometric sans, worked hard at both ends of its weight range. Black weight with tight negative tracking gives headlines a poster compression; the same family at regular weight keeps long Korean body copy plain and readable. Pretendard carries every word on the site except that one headline.

### Hierarchy
- **Display** (900, `{typography.display.fontSize}`, 1.04): the hero headline only. Words alternate gold and white inside the line.
- **Headline** (900, `{typography.headline.fontSize}`, 1.2): section `h2`. Individual sections push the upper clamp higher when the comp does (up to ~5.7vw on the franchise sheet, ~5.15vw on the philosophy sheet); the shape of the rule — clamp on a vw fraction — does not change.
- **Title** (900, `{typography.title.fontSize}`, 1.3): table row labels, card titles, trust-row titles, video clip titles.
- **Body** (400–500, `{typography.body.fontSize}`, ~1.6): paragraphs, table details, notes. Secondary copy runs at navy 60–70% on light fields and white 78–85% on dark ones.
- **Label** (900, `{typography.label.fontSize}`, `0.14em`, no case change): pills, badges, section indices, small all-caps Latin fragments (TALK, TOP).
- **Data** (700–900, `{typography.data.fontSize}`, tabular numerals): every ratio, percentage, and won figure. Totals step up to ~1.42vw and take the section accent colour.

### Named Rules
**The Comp-Fraction Rule.** Display and headline sizes are expressed as vw fractions of the comps' own 1672px width, wrapped in `clamp(min, Nvw, max)`. A composition then holds its proportions at every desktop size instead of only at the comp width. Padding, gaps, and icon boxes on `lg` follow the same vw discipline; mobile falls back to fixed rem.

**The Accent-Word Rule.** Emphasis is a single coloured word inside the sentence — gold on blue, orange in the profit section, red once. Never a different face, never a box, never italics.

**The Tabular-Figure Rule.** Any number a prospective owner might compare is set in tabular numerals so columns align down the table.

**The Display-Face Boundary.** The display face carries titles; Pretendard carries everything you read and everything you compare. On `/brand` that means the hero `h1`, the kitchen and store titles, the counter heading, the three strength titles, the six ingredient names, the banner tagline and the menu call to action. It never takes body copy, an address, a phone number, a chip, a stamp, a button label or an index numeral — those are the Label and Data registers, and the face ships one 400 cut with no tabular figures. Client instruction, 2026-08-20, widening the earlier `/menu`-only scope.

**The One-Cut Rule.** Black Han Sans ships a single 400 weight. Any element that asks for a heavier one — and `<strong>` asks for 700 by default — gets a browser-synthesized smear instead of a heavier face, which reads as muddy half-dark glyphs. Display-face titles outside the dimensional treatments take `.display-flat`, which pins the weight, refuses synthesis, and switches to greyscale antialiasing so the tight counters do not fringe on saturated navy. Every string set in this face must also be in `scripts/subset-display-font.mjs` — a missing syllable falls back to Pretendard mid-word, silently. That is what happened to 파 and 로 in `/brand`'s largest line.

**The Two-Register Rule.** Weight 900 carries all hierarchy; 400–500 carries all reading. Mid weights are used only for a figure (700) or a sub-label, never to invent a fourth heading level.

## Layout

Full-bleed sections stacked in a fixed narrative order: hero, franchise benefit, philosophy, profit structure, focus system, real kitchen, review proof, contact + footer. Inside each field, content is centred in a `{spacing.container}` (1492px) container; the hero uses the narrower `{spacing.container-hero}` so the pizza can bleed past the right edge. Gutters are `{spacing.gutter-sm}` on mobile, `{spacing.gutter-md}` at `md`, and zero at `lg` where the container itself is the margin.

The hero is a two-column grid (53.3% / 55.6%, deliberately over 100% so the image overhangs); most other sections are a centred heading block over either a full-width table or a two-column split near 1:1. Desktop vertical rhythm is vw-based (`{spacing.stack-sm}` / `{spacing.stack-md}` / `{spacing.stack-lg}`), mobile is rem-based with `py-16`–`py-20` section padding. A fixed header reserves `{spacing.header-offset}` (`{spacing.header-offset-md}` at `md`), exposed as `--header-offset` and consumed by scroll padding, anchor scrolling, and the section height utilities.

Viewport-height sections use `svh`, with an in-app-browser override (`html[data-in-app-browser="kakao"]`) swapping in a measured `--app-height` because the Kakao webview reports `svh` wrong. Above 1024px the page uses `scroll-snap-type: y proximity` with per-section snap targets.

**The Proximity-Snap Rule.** Section heights here are uneven (the profit section is very tall), so snapping is `proximity`, never `mandatory`. Snap assists the scroll; it never traps it.

**The Layered-Defaults Rule.** Element defaults (`box-sizing`, `body`, `a`, `img { display: block }`) live in `@layer base`. Unlayered rules outrank every layered one, so an unlayered `img` rule silently beats Tailwind's `hidden` and an `lg:block` image appears at every width. New global element rules go in `@layer base` or not at all.

## Elevation & Depth

Surfaces are flat at rest and separated by colour field first. Where a card must float — a white table on cream, the conversion panel on the review wall, the rail buttons — it takes one navy-tinted ambient shadow, always `rgba(1,23,80,·)`, always straight down, always heavily blurred. There are no black shadows and no borders-plus-shadow doubling. Photographic subjects (the hero pizza) use a `drop-shadow` at the same tint so the cutout sits in the field instead of on it.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 18px 44px rgba(1,23,80,0.08)`): tables and data panels on cream or paper.
- **Panel lift** (`box-shadow: 0 26px 60px rgba(1,23,80,0.14)`): the philosophy card straddling the paper/blue seam.
- **Hero panel** (`box-shadow: 0 34px 90px rgba(1,23,80,0.42)`): the blue conversion panel over the review wall, the only shadow allowed to be this deep.
- **Control lift** (`box-shadow: 0 10px 24px rgba(1,23,80,0.28)`): floating rail buttons and small badges.
- **Header lift** (`box-shadow: 0 10px 30px rgba(1,23,80,0.18)`): the scrolled header, paired with `backdrop-blur`.
- **Gold action glow** (`box-shadow: 0 12px 24px rgba(253,216,22,0.35)`): hover only, gold CTA only.
- **Subject shadow** (`drop-shadow: 0 30px 58px rgba(1,23,80,0.42)`): cut-out product photography.

### Named Rules
**The Ink-Shadow Rule.** Every shadow in this system is ink-tinted `rgba(42,10,6,·)`, downward, and blurred. No black shadows, no hard offsets, no coloured glow except the gold hover on the gold CTA.

**The Lift-On-Intent Rule.** Interactive elements answer hover with a 1–4px upward translate over 200ms, and gold CTAs add the gold glow. Nothing changes its colour on hover except nav links (to gold).

## Shapes

Two form families and nothing between them. Actions and marks are fully round — pill CTAs, circular icon chips, circular rail buttons, the round BEST seal — so anything tappable reads as a token you could pick up. Content containers are softly rectangular: 8px for inline buttons and banner slabs, 12px for tables and contact tiles, 16px for cards and the trust panel, 24px for media tiles. Media is clipped by `overflow-hidden` on the container, never by a mask image.

Drawn geometry stands in for texture: a stroked crown watermark at 6% white behind the hero, a gold brush slab with frayed ends and dry flicks behind a headline word, a red pen underline, a crumb-and-salt scatter in the comp's two clusters. All are real SVG paths on a normalized viewBox, scaled with the type.

Borders are hairlines that carry meaning: solid `{colors.rule}` between table rows, dotted navy 22% inside a table body, 2px `{colors.gold-600}` where a gold outline is the drawn line itself, white at 12–35% on dark fields.

## Components

### Buttons
- **Shape:** fully round pill for primary actions (`{rounded.full}`); gently rounded rectangle (`{rounded.sm}`, 8px) for inline actions inside a panel.
- **Primary (gold pill):** `{components.cta-pill-gold}` — signal gold on ink navy, black weight, trailing arrow icon. Lives in the header and is always reachable; it is the page's one primary action.
- **Hover / Focus:** translate up 2px over 200ms plus the gold action glow; the arrow icon slides 4px right.
- **Profit inline (orange):** `{components.button-orange}` — orange on white, 8px radius, used only inside the profit section's summary table.
- **Contact tiles:** a gold tile and a white tile side by side at the close (`{components.contact-tile-gold}` / `{components.contact-tile-white}`), each a full-bleed action block with a stroked glyph and two lines of type; hover lifts 4px.

### Cards / Containers
- **Corner Style:** 12px for data panels, 16px for cards and the trust strip, 24px for media tiles.
- **Background:** white on cream or blue; `{colors.navy-900}` for a solid statement panel; `white/70` where a panel should read as a light wash over cream.
- **Shadow Strategy:** one shadow from the vocabulary above; card lift by default.
- **Border:** hairline `{colors.rule}` only where a table needs an outer edge.
- **Internal Padding:** ~1.1–1.6vw at `lg`, 20–24px on mobile.

### Navigation
Fixed, transparent over the hero, then `navy-900/95` with backdrop blur and header lift once scrolled past 24px. Links are white black-weight labels that go `{colors.gold-400}` on hover with a gold underline that grows from 0 to full width over 300ms; the active link holds both states. Mobile collapses to a circular hamburger with a white 25% ring, opening a navy sheet of full-width rows divided by `white/12`, closing with the same gold pill CTA. Anchor navigation is intercepted to offset by `--header-offset`.

### Data Table
The system's signature surface. A navy header row carries white black-weight column titles; body rows are icon chip + label + detail + figure, divided by dotted navy hairlines; the total row sits above a heavier rule and takes the section accent (orange in the profit section). A navy pill title straddles the card's top edge, and a navy CTA strip closes the card. Figures are tabular; benefit values take gold flags or red text per row. Tables collapse to stacked single-column rows below `lg` rather than scrolling horizontally.

### Cost Donut
A drawn SVG ring on a 400-unit box (outer radius 196, inner 92, 0.9° gap between wedges), each wedge labelled in place with its own icon, name, and range, and the white centre carrying the average revenue figure. Wedge ink flips to navy on the two light gold wedges, white elsewhere. Every wedge carries its own label, so the chart never depends on colour alone. Generated geometry is rounded to three decimals: Node and the browser disagree on the last bit of the same trig, and React reports the difference as a hydration mismatch.

### Icon Family
One family for the whole page: 24-unit grid, 1.8 stroke, round caps and joins, `currentColor`, drawn to sit on both gold-on-blue and navy-on-cream. Filled marks are a declared variant, not a second family. Icons accept explicit `width`/`height`/`x`/`y` because a nested `<svg>` inside an `<svg>` has no CSS box and ignores a size class.

### Field Devices
`src/components/decor/field-decor.tsx` — the drawn furniture the blue first screens share: `CrownWatermark` (the crown hung off an edge at 5–6% white), `CrumbScatter` (twenty toasted-crumb and salt marks in two clusters, drawn to ring a round subject), and `HeroProps` (drifting cut-outs driven by `.motion-drift` CSS vars). They lived privately inside the home hero and again inside the menu hero — duplicated verbatim — which is why `/brand` had none of them and read as a different site. The `/brand` no-asset-reuse rule constrains files a crawler can hash, not this vocabulary: repeating these marks is what makes three routes one brand.

### Floating Rail
Right-edge stack of three circular controls (TALK, inquiry, TOP), fading in after 420px of scroll. Two navy, one white with a navy 12% ring; each lifts 2px on hover. Below `md` it stays but shrinks to 3.5rem.

### Brand Lockup
The wordmark is an image that already contains the type, so the header sets no live 최강피자 beside it — shipping both set the brand name twice. Two cuts: white for red and ink grounds, brand red for light ones. The lion badge is the character mark and carries the mascot slots.

The favicon is its own artwork, not the badge and not the component: the crown at `stroke-width` 4.2 rather than the component's 3.2, because 3.2 scaled to a 16px tab lands at 0.94px and greys out. The badge that was there filled the tab with an unreadable smudge.

## Menu Page

The catalogue at `/menu` runs the same field order as the rest of the site — blue hero, blue best, paper, yellow, blue side, navy close — and adds three devices of its own.

**Dimensional headline.** The hero `h1` is set in the scoped display face with a navy ring and a stepped extrude, built from `text-shadow` rather than `-webkit-text-stroke`: a stroke eats the counters out of Hangul at this weight. Each line takes a slightly different rotation so the block steps rather than sits, and the accent word overshoots on entry. One authored moment, not three.

**Cut-out ingredients, never a wash.** Twelve ingredients — shrimp, basil, tomato, pepperoni, olive, pepper, mushroom, corn, cheese, bacon — float across the blue as transparent cut-outs. Four ride the card cluster's own edges, behind it and in front; the rest ring the field. The two columns leave only a narrow gutter, so the open ground on this screen is the frame around the composition — the strips outside each column and the band under the copy — and crowding them all onto the cards reads as clutter rather than as depth. They are generated on solid black and keyed by treating the frame as premultiplied — alpha from the channel maximum, not luminance, so a dark saturated subject survives. This is the only way food is allowed onto the blue field: **in its own colour, as the subject.** A photograph washed with blue behind a section reads as spoiled, which is why those were removed in `9abd46a`.

**The card cluster is a control.** The leader card is promoted by pressing a side card or a dot, cycles on its own, and stops on hover or focus so it never moves the thing you were about to press. The cluster leans toward a fine pointer only.

**No panel and no actions in the hero.** The comp's white service panel is gone: it repeated what the leader card already states — the number one, its name, its line — and spent the height the headline and the cards needed. Its two buttons went with it, because neither flow exists yet. Ordering and store-finding are not built, and a hero button that leads nowhere is worse than no button. When those ship, they belong on the field at the scale the rest of the first screen is set, not back inside a panel.

**The line above the headline is type on real sauce.** "피자는 역시" is set in the same display face as the headline, in white with the same navy ring and stepped extrude one size down, riding a real smear of pizza sauce. The two lines read as one poster lockup rather than a UI label introducing a heading. The smear is a photographed material — grain, gloss and trailing drags — not a vector approximation: a drawn version was tried first and thrown away, because flat fill cannot carry the volume and faking that volume with CSS bevels and gradients is exactly what this system forbids. Sauce rather than paint because it is the thing this page is about.

Its red is **material, not signal.** The One Red rule governs the emphasis red that marks a figure; a photograph of sauce belongs with the tomato and pepperoni cut-outs already on this screen. The BEST seal stays the one signal red.

Placement is measured off the asset, not eyeballed: its solid body covers the middle two-thirds of the image height across the left 70% of its width, centred near 46%, so the words are seated there and inset from the blunt end rather than riding the top edge or drifting onto a trailing streak. The lettering's ring and extrude are sized in `em`, because this line runs from 1.5rem on a phone to 2.85rem on a wide display and a fixed ring would be a slab at one end and invisible at the other. The gold spark stays off the sauce. The line needs `inline-flex` and `whitespace-nowrap`: the page sets `text-wrap: pretty` and `word-break: keep-all`, and an `inline-block` here measures at its padding alone while the two words break onto separate lines — the same shrink-to-fit misread the headline's last line already works around.

**Cut-out ingredients, never a wash.** Twelve ingredients — shrimp, basil, tomato, pepperoni, olive, pepper, mushroom, corn, cheese, bacon — float across the blue as transparent cut-outs. Four ride the card cluster's own edges, behind it and in front; the rest ring the field. The two columns leave only a narrow gutter, so the open ground on this screen is the frame around the composition — the strips outside each column and the band under the copy — and crowding them all onto the cards reads as clutter rather than as depth. They are generated on solid black and keyed by treating the frame as premultiplied — alpha from the channel maximum, not luminance, so a dark saturated subject survives. This is the only way food is allowed onto the blue field: **in its own colour, as the subject.** A photograph washed with blue behind a section reads as spoiled, which is why those were removed in `9abd46a`.

**The card cluster is a control.** The leader card is promoted by pressing a side card or a dot, cycles on its own, and stops on hover or focus so it never moves the thing you were about to press. The cluster leans toward a fine pointer only.

**No panel and no actions in the hero.** The comp's white service panel is gone: it repeated what the leader card already states — the number one, its name, its line — and spent the height the headline and the cards needed. Its two buttons went with it, because neither flow exists yet. Ordering and store-finding are not built, and a hero button that leads nowhere is worse than no button. When those ship, they belong on the field at the scale the rest of the first screen is set, not back inside a panel.

**The line above the headline is type on real paint.** "피자는 역시" is set in the same display face as the headline and rides a single sweep of thick gold paint, so it reads as the first line of one poster lockup instead of a UI label introducing it. The sweep is a photographed material, not a vector approximation: raised ridges, wet gloss, a blunt landing on the left, and split bristle tails past the last syllable. A drawn version was tried first and thrown away — flat fill cannot carry the volume, and faking that volume with CSS bevels and gradients is exactly what this system forbids.

Placement is measured off the asset, not eyeballed: its solid body covers 69% of the image height and the left 87% of its width, centred at 44.6%, so the words are seated at 46.5% and inset from the blunt end rather than riding the top edge or drifting onto a tail. The gold spark stays off the paint — gold on gold is no mark at all. The line needs `inline-flex` and `whitespace-nowrap`: the page sets `text-wrap: pretty` and `word-break: keep-all`, and an `inline-block` here measures at its padding alone while the two words break onto separate lines — the same shrink-to-fit misread the headline's last line already works around.

**Cut-out ingredients, never a wash.** Twelve ingredients — shrimp, basil, tomato, pepperoni, olive, pepper, mushroom, corn, cheese, bacon — float across the blue as transparent cut-outs. Four ride the card cluster's own edges, behind it and in front; the rest ring the field. The two columns leave only a narrow gutter, so the open ground on this screen is the frame around the composition — the strips outside each column and the band under the copy — and crowding them all onto the cards reads as clutter rather than as depth. They are generated on solid black and keyed by treating the frame as premultiplied — alpha from the channel maximum, not luminance, so a dark saturated subject survives. This is the only way food is allowed onto the blue field: **in its own colour, as the subject.** A photograph washed with blue behind a section reads as spoiled, which is why those were removed in `9abd46a`.

**The card cluster is a control.** The leader card is promoted by pressing a side card or a dot, cycles on its own, and stops on hover or focus so it never moves the thing you were about to press. The cluster leans toward a fine pointer only.

**No panel and no actions in the hero.** The comp's white service panel is gone: it repeated what the leader card already states — the number one, its name, its line — and spent the height the headline and the cards needed. Its two buttons went with it, because neither flow exists yet. Ordering and store-finding are not built, and a hero button that leads nowhere is worse than no button. When those ship, they belong on the field at the scale the rest of the first screen is set, not back inside a panel.

**The line above the headline is type, not a chip.** "피자는 역시" is set in the same display face as the headline over a single gold brush sweep, so it reads as the first line of one poster lockup instead of a UI label introducing it. The sweep is its own mark, not the home page's marker slab: it lands blunt on the left, holds full weight through the words, and tapers past the last syllable into flicks where the brush lifted. Its dry-bristle gaps are real holes in the path — `evenodd` sub-paths, not shapes painted in a background colour — because it sits on a gradient field where a painted gap would show. The gold spark stays off the sweep; gold on gold is no mark at all. It needs `inline-flex` and `whitespace-nowrap`: the page sets `text-wrap: pretty` and `word-break: keep-all`, and an `inline-block` here measures at its padding alone while the two words break onto separate lines — the same shrink-to-fit misread the headline's last line already works around.

**The category row is one control, not six labels.** A white track on the cream band, centred and hugging its own content rather than flung to the container's edges, with the lit pill sliding between labels. Every pill takes its padding in `em`, so 매콤 and 클래식 are the same shape instead of the gap scaling with the viewport and leaving short words as blobs. The type steps up past 1800px so the control holds its own on a large display.

**Category filtering is CSS.** The rail writes the chosen category onto a wrapper as `data-filter` and the stylesheet hides the sections that do not carry it in `data-category`. Every item stays in the served HTML, so the filter narrows what is on screen and never what the page contains. A section can hold several categories, so the attribute is a list matched with `~=`, and the rule hides non-matches rather than hiding everything and re-showing — the blanket selector is the more specific of the two and wins. On 전체 the rail stops filtering and goes back to reporting which section is underfoot.

## Brand Page

`/brand` is the customer-facing story — 파로 도우, 재료, 실제 주방, 부천본점 — and exists partly as a search surface. Three rules keep it honest:

- **No franchise material.** The home page owns 창업·가맹·수익; one shared sentence between the two routes and search engines start treating them as duplicates electing a representative. The build check counts shared sentences and expects zero.
- **No asset reuse that repeats a page.** Its kitchen clip is the one video the home page does not use; its ingredient pictures are the menu hero's own cut-outs recast as content.
- **One sheet, one metric.** `/brand` is a single-screen magazine infographic, not a stack of bands, so it is bound by `min-height` rather than a fixed 16:9 box. Its type is `clamp(rem, min(Vvw, Nsvh), rem)` — width-driven with a height cap, `V = N x 941 / 1672 / 100`. Sizing off `svh` alone let the type and the column it sits in scale on different axes, so the composition changed shape rather than size.
- **Its share card is its own hero.** All three routes' og:image cards are rendered from the live pages by `scripts/og-cards.mjs` at 1200×630 under 200 KB, date-stamped so every regeneration is a new URL. Retired card URLs 301 to the current home card in `next.config.ts` — an og:image URL, once published, is never allowed to keep answering 200 as itself.

## Do's and Don'ts

### Do:
- **Do** size display and headline type as `clamp()` on a vw fraction of the comps' 1672px width, and use vw for `lg` padding and gaps.
- **Do** re-sample the approved comp when a colour needs to change, per the Sampled-Not-Chosen Rule.
- **Do** write entrance motion as CSS animations (`rise` 0.7s, `swell` 1.1s, `reveal` 1s, all `cubic-bezier(0.16, 1, 0.3, 1)`, delays via `--motion-delay`). framer-motion decides its `initial` state per environment, so the server rendered `opacity:0` while a reduced-motion client rendered `opacity:1` — a hydration mismatch that stranded the hero blank. CSS runs before hydration and honours `prefers-reduced-motion` itself.
- **Do** put element defaults in `@layer base` so utilities can still override them.
- **Do** round generated SVG geometry (three decimals) so server and client render identical path data.
- **Do** give every chart wedge its own text label; colour alone never carries a value.
- **Do** ship real material: real product photography, real kitchen video, real review captures, drawn SVG charts, real tables.
- **Do** pass explicit `width`/`height`/`x`/`y` to icons drawn inside an SVG chart.
- **Do** keep image output to WebP only. AVIF re-encoding cost minutes of CPU per cold request for a few percent of bytes.
- **Do** set every comparable figure in tabular numerals.

### Don't:
- **Don't** introduce a second typeface for body, labels or data. Pretendard is a client decision and carries all of them. The display face carries **titles** on `/menu` and `/brand` (see Typography → The Display-Face Boundary); widening it past a title needs the same kind of evidence, not a preference.
- **Don't** use `framer-motion` `initial` for entrance state anywhere on this page.
- **Don't** add an unlayered global element rule; it will outrank Tailwind utilities.
- **Don't** use black shadows, hard offset shadows, or coloured glows other than the gold hover on the gold CTA.
- **Don't** fake physicality in CSS — no glass, no bevel, no fake paper grain. Texture is drawn SVG or a real photograph.
- **Don't** use stock imagery or a stock icon set; the icon family and the photography are the brand's own.
- **Don't** replace a table or a chart with benefit tiles. The published number is the thesis.
- **Don't** set section snapping to `mandatory`.
- **Don't** add eyebrow or kicker pills above headings on new surfaces; see the open item below.

## Open Items

- **Hero photograph.** The comps' hero pizza is a different photograph from anything in the repo. The real product photo we hold ships, colour-graded to the comp's own colour statistics; the designer's original has been requested. When it arrives, swap the asset — the grading step is a stopgap, not a system rule.
- **Eyebrow pills.** The build carries a labelled pill above the franchise and philosophy headings because the approved comps place one there. It is recorded here as a carried decision from the pinned comp set, not as a device this system offers new surfaces. Sections should earn their entry with the headline.
- **Accent underline on video tiles.** One media tile uses a hard, unblurred gold offset shadow. It contradicts the Navy-Shadow Rule and is not canonized; treat it as a defect to resolve into a drawn gold rule.
