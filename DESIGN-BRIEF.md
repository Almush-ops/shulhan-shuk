# Design Brief: שולחן שוק

> Created: 2026-03-05
> Niche: קייטרינג שולחנות שוק (Catering - Market Tables)
> URL: shulhan-shuk.co.il

---

## 1. Brand Identity

### Basics
- **Brand name**: שולחן שוק
- **Tagline**: "שולחן שוק לכל אירוע — בשרי, חלבי, המבורגר ועוד"
- **Target audience**: מארגני אירועים פרטיים (ימי הולדת, בר מצווה, חתונות, מסיבות רווקות, אירועי חברה) — גילאים 25-55, כל הארץ
- **Primary goal**: לידים (טלפון + WhatsApp + טופס)
- **Brand personality** (3 words): חם, חגיגי, מקצועי

### Tone of Voice
- חם, ישיר, מזמין
- "כל אירוע מתחיל בשולחן שוק מושלם — ואנחנו נדאג לכל פרט"
- מקצועי אבל לא פורמלי. כמו חבר שהוא שף מקצועי.

---

## 2. Color System

### Brand Palette
- **Palette name**: "Warm Shuk Amber" — כתום-ענבר חם שמעורר תיאבון ומזכיר שוק אוכל
- **Creation method**: Color psychology (orange = appetite, warmth, celebration) + competitor differentiation (halitzel=red, chef4u=gold+black)

| Shade | Hex | Usage |
|-------|-----|-------|
| 50 | #FEF7F0 | רקעי סקשנים חלופיים, tints עדינים |
| 100 | #FDEBD8 | מצבי hover, רקעים בהירים |
| 200 | #FAD3AE | badges, אקסנטים בהירים |
| 300 | #F2AD72 | אלמנטים דקורטיביים |
| 400 | #E18A42 | כפתורים משניים |
| **500** | **#C76A28** | **צבע מותג ראשי — ענבר שרוף חם** |
| 600 | #A75521 | רקע כפתורים, לינקים |
| 700 | #87431A | טקסט על רקע בהיר |
| 800 | #693314 | כותרות כהות |
| 900 | #4B240E | כמעט-שחור עם גוון ענבר |

### Fresh Accent (ירוק טרי — "עשבי תיבול על השולחן")
| Shade | Hex | Usage |
|-------|-----|-------|
| 500 | #3A7C52 | וי-ים בצ'קליסטים, badges זמינות |
| 600 | #2D6342 | אייקונים, אקסנטים משניים |

### Semantic Colors
| Token | Hex | Purpose |
|-------|-----|---------|
| dark | #2C1810 | טקסט ראשי, כותרות — חום-שחור חם |
| surface | #FBF5EF | רקע סקשנים חלופיים — שמנת חמה |
| border | #E5D5C5 | גבולות, מפרידים — בז' חם |
| accent | #C76A28 | CTAs, הדגשות (= brand-500) |
| muted | #7C6B5D | טקסט משני, תיאורים — חום-אפור |

### Contrast Check
- brand-700 (#87431A) on white: ~6.2:1 PASS AA
- white on brand-600 (#A75521): ~5.1:1 PASS AA
- dark (#2C1810) on surface (#FBF5EF): ~14:1 PASS AAA

---

## 3. Typography

### Fonts
- **Heading font**: **Suez One** (weight: 400) — סריף דקורטיבי פרימיום, מזכיר אוכל ואירוח יוקרתי
- **Body font**: **Rubik** (weights: 400, 500, 600, 700) — עגלגל, חם, קריא, ידידותי

### Pairing Logic
Suez One בכותרות נותן תחושת "מסעדה/אירוח" פרימיום. Rubik בגוף טקסט נותן נגישות וחום. הצירוף יוצר יוקרה נגישה — בדיוק מה שצריך לשירות קייטרינג.

### Scale
```
h1: text-3xl md:text-4xl lg:text-5xl  font-heading font-normal  leading-tight
h2: text-2xl md:text-3xl              font-heading font-normal  leading-snug
h3: text-xl md:text-2xl               font-sans font-bold       leading-snug
h4: text-lg                           font-sans font-semibold
body: text-base                       font-sans font-normal      leading-relaxed
```

### Font Files
- Suez One: fonts.google.com/specimen/Suez+One → WOFF2 weight 400
- Rubik: fonts.google.com/specimen/Rubik → WOFF2 weights 400, 500, 600, 700
- Location: `/public/fonts/`
- Tailwind: `fontFamily: { sans: ['Rubik', ...], heading: ['Suez One', ...] }`

---

## 4. Logo

- **Status**: הלקוחה (שרית) מכינה לוגו
- **Placeholder**: שם "שולחן שוק" ב-Suez One + brand-700
- **File locations**: `/public/logo.svg`, `/public/favicon.png`
- **When received**: Replace placeholder with client's logo

---

## 5. Hero Section

- **Style**: HeroCardForm (Hero with Lead Form) — טופס לידים above the fold
- **Background**: Full-bleed food image with warm gradient overlay (`from-dark/80 via-dark/60 to-transparent`)
- **Height**: Standard (py-20 md:py-28)
- **Content alignment**: RTL — טקסט מימין, טופס משמאל
- **Heading**: "שולחן שוק לכל אירוע"
- **Subtitle**: "בשרי, חלבי, המבורגר, שניצל ועוד — משלוח לכל הארץ"
- **Primary CTA (form)**: "קבלו הצעת מחיר"
- **Form fields**: שם מלא (text), טלפון (tel), סוג אירוע (select), כמות אורחים (select)
- **Trust items below form**: "פריסה ארצית", "כשר למהדרין", "מחירים שקופים", "מענה תוך שעה"
- **Background image**: תמונת שולחן שוק מרשימה (יגיע מהלקוחה, placeholder עד אז)

---

## 6. Homepage Layout

### Archetype: Lead Magnet (customized heavily per plan)

### Section Sequence

| # | Section | Pattern | Background | Padding |
|---|---------|---------|------------|---------|
| 1 | **Hero + Lead Form** | HeroCardForm (food image bg) | Image + overlay | py-20 md:py-28 |
| 2 | **Trust Numbers** | Light Strip with Numbers | White | py-12 md:py-16 |
| 3 | **מה זה שולחן שוק** | Split Image + Text (#27) | Surface | py-16 md:py-20 |
| 4 | **סוגי שולחנות** (8) | Feature Cards with Images (#13, 4-col) | White | py-16 md:py-20 |
| 5 | **למה שולחן שוק** | Icon + Text Grid (#12, 2x3) | Surface | py-16 md:py-20 |
| 6 | **טבלת מחירים** | Comparison Table (#31) | White | py-16 md:py-20 |
| 7 | **גלריה** | 4-Column Compact Grid (#18) | Surface | py-16 md:py-20 |
| 8 | **סוגי אירועים** (7) | Feature Cards with Images (#13, 3-col) | White | py-16 md:py-20 |
| 9 | **המלצות לקוחות** | Testimonial Card Grid (#21) | Surface | py-16 md:py-20 |
| 10 | **אזורי שירות** | Custom badge grid (cities) | White | py-12 md:py-16 |
| 11 | **שאלות נפוצות** | Accordion (#37) | Surface | py-16 md:py-20 |
| 12 | **CTA תחתון** | Full-Width Banner CTA (#33) | brand-700 bg | py-16 md:py-20 |

### Inner Page Heroes
- **Service pages** (basari, halavi...): HeroCardForm with specific food type image
- **Event pages** (yom-huledet, bar-mitzva...): HeroCardForm with event-specific image
- **Area pages** (haifa, tel-aviv...): HeroSplit compact (no image, city name emphasis)
- **Blog posts**: HeroMinimal compact
- **Info pages** (about, pricing): HeroSplit

---

## 7. Component Styles

| Component | Choice | Notes |
|-----------|--------|-------|
| Cards | **Elevated** | shadow-sm + hover:shadow-lg, rounded-2xl, white bg, warm border on hover |
| Buttons | **Rounded-lg** | Primary: brand-600 bg + white text. Secondary: white bg + brand-600 text + border |
| Border radius | rounded-2xl (cards), rounded-lg (buttons, inputs) | Warm, inviting curves |
| Shadow intensity | Moderate | shadow-sm default, shadow-lg on hover |
| Trust bar | Light + Numbers | 4 stats: שנות ניסיון, אירועים, כיסוי ארצי, שביעות רצון |
| Header | Standard (white bg, sticky) | Logo + nav + CTA phone button |
| Footer | Mega 4-col + Social | Dark bg (brand-900), 4 columns: שולחנות, אירועים, אזורים, מידע |
| Mobile CTA | Floating WhatsApp button (bottom-left) | Opens form popup first, then redirects to WhatsApp |
| WhatsApp popup | Modal with name + phone fields | Submit → save to Supabase → redirect to wa.me |

---

## 8. Imagery Direction

- **Photo style**: Food photography — overhead and 45-degree angles. Real event photos, not stock. Colorful, abundant, appetizing. Israeli shuk market vibe — messy-beautiful, overflowing with food.
- **Primary image ratio**: 4/3 (cards), 16/9 (heroes), 1/1 (gallery)
- **Color temperature**: Warm — enhance oranges, reds, golden tones. Natural light preferred.
- **Sources**: Real photos from client (שרית). AI-generated with Recraft for placeholders/atmosphere.
- **Placeholder strategy**: Gradient (brand-50 to brand-100) + food icon until client provides real photos
- **Key images needed**: Hero shuk table, 8 food types, events, gallery, team/chef, kashrut certificate

---

## 9. Conversion Elements

- **Primary CTA**: טופס ליד (שם + טלפון + סוג אירוע + כמות) → Supabase leads table
- **Secondary CTA**: WhatsApp button with pre-form → Supabase → wa.me redirect
- **Tertiary**: Click-to-call phone button in header (mobile)
- **Phone number**: TBD (from client)
- **WhatsApp number**: TBD (from client)
- **Form on every page**: Yes — HeroCardForm on service/event pages, compact form in sidebar on blog
- **Webhook URL**: TBD (n8n webhook)
- **Webhook fields**: `{ name, phone, event_type, guests, page_url, utm_source }`

---

## 10. Competitor Analysis (Visual)

| Competitor | URL | What to Learn | What to Avoid |
|-----------|-----|---------------|---------------|
| halitzel.co.il | halitzel.co.il | Product Schema, 3,500-word pages, ביקורות 4.9 | Rust red too aggressive, generic card design, no E-E-A-T bio |
| chef4u.co.il | chef4u.co.il | Dark+gold luxury feel, 56 pages coverage, clean nav | Too dark for food, no pricing, no schema, cold feel |
| bravos.co.il | bravos.co.il | 3-tier pricing table (lite/standard/prime), 14 FAQ, 481 reviews | Cluttered design, no location pages |
| shulhanot-shuk.co.il | shulhanot-shuk.co.il | Interactive menu builder, 25 blog posts | No schema, weak E-E-A-T, generic WordPress look |
| meatcatering.co.il | meatcatering.co.il | Only competitor with area pages, 8000-word homepage, FAQPage schema | Terrible design, too text-heavy, slow |

---

## 11. Inspiration References

| Site | URL | What Inspired |
|------|-----|---------------|
| **ottolenghi.co.uk** | ottolenghi.co.uk | Food photography hero, warm palette, Middle Eastern food relevance |
| **chobani.com** | chobani.com | Food brand with warm inviting palette, food-focused hero sections |
| **bonappetit.com** | bonappetit.com | Card-based food content, clean category navigation |
| **evenergy.co.il** | evenergy.co.il | WhatsApp button → form popup → lead capture pattern |

---

## 12. Special Design Elements

### שולחן שוק "Market Atmosphere"
- Sections with food photos as subtle background (opacity 5-10%) for warmth
- Service cards with food-type image that scales subtly on hover
- Section dividers: subtle wave or organic shape (not straight lines) — market feel
- Gallery with lightbox — real photos are our biggest E-E-A-T advantage

### Kashrut Badge
- Dedicated badge component: כשר למהדרין with certification icon
- Appears in: header (small), hero trust items, pricing, footer
- Links to `/kashrut/` page with certificate scan

### Process Steps (4 steps)
Visual component showing the ordering process:
1. פנייה — יצירת קשר
2. ייעוץ — התאמת תפריט
3. הכנה — הכנת השולחן
4. אירוע — הגעה והגשה

---

## Notes
- כל הטקסטים בעברית, RTL-first
- ~45 עמודים בהשקה (8 סוגי שולחן + 7 אירועים + 14 אזורים + 6 המרה + 7 מידע + 7 בלוג)
- תכנית מלאה: `C:\Users\Almog\.claude\plans\golden-wobbling-puddle.md`
- Schema markup on every page (LocalBusiness, Product, FAQPage, BreadcrumbList)
- Cookie consent banner (from medcalc template)
- Legal pages (privacy, terms, accessibility)
- Content Factory connection post-launch
