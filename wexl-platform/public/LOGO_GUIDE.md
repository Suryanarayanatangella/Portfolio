# UiTECH Logo Guide

## Logo Files Created

### 1. **favicon.svg** - Browser Favicon
- Square format (100x100)
- Code brackets with "R" letter
- Gradient background
- Used in browser tabs

### 2. **logo.svg** - Full Horizontal Logo
- Horizontal format (400x100)
- Icon + "UiTECH" text
- For headers, documents, presentations
- Scalable vector format

### 3. **Logo Component** - React Component
- Location: `src/components/Logo/Logo.jsx`
- Three sizes: small, default, large
- Animated hover effects
- Use in React components

## Logo Concept

**Symbol:** Code brackets `</>` with forward slash
- Represents web development and coding
- Modern, tech-focused design
- Clean and professional

**Colors:**
- Primary: #113e59 (Deep Blue) - Trust, professionalism
- Accent: #f6b519 (Gold) - Innovation, quality
- Gradient: Blue to Gold - Growth and transformation

**Typography:**
- Font: DM Sans (Bold)
- Style: Modern, clean, professional
- Gradient text effect

## Usage Guidelines

### In React Components

```jsx
import Logo from '../components/Logo/Logo';

// Default size
<Logo />

// Small size (for mobile)
<Logo size="small" />

// Large size (for hero sections)
<Logo size="large" />

// With custom className
<Logo className="my-custom-class" />
```

### In HTML/Static Files

```html
<!-- Full logo -->
<img src="/logo.svg" alt="UiTECH" />

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

## Logo Variations

### Primary Logo (Default)
- Full color with gradient
- Use on white/light backgrounds
- Most common usage

### Icon Only
- Just the code brackets symbol
- Use when space is limited
- Social media profile pictures

### Text Only
- "UiTECH" with gradient
- Use in tight spaces
- Footer, small headers

## Color Specifications

### Primary Colors
```
Primary Blue: #113e59
RGB: 17, 62, 89
CMYK: 81, 30, 0, 65

Accent Gold: #f6b519
RGB: 246, 181, 25
CMYK: 0, 26, 90, 4
```

### Gradient
```
Linear gradient from Primary Blue to Accent Gold
Angle: 135deg (diagonal)
```

## Minimum Sizes

- **Digital:** 32px height minimum
- **Print:** 0.5 inch height minimum
- **Favicon:** 16x16px, 32x32px, 48x48px

## Clear Space

Maintain clear space around logo equal to the height of the icon box on all sides.

## Don'ts

❌ Don't stretch or distort the logo
❌ Don't change the colors
❌ Don't add effects (shadows, outlines)
❌ Don't rotate the logo
❌ Don't place on busy backgrounds
❌ Don't use low-resolution versions

## Dos

✅ Use provided SVG files for scalability
✅ Maintain aspect ratio
✅ Use on clean backgrounds
✅ Ensure good contrast
✅ Use official color codes

## File Formats Available

- **SVG** - Scalable Vector (preferred for web)
- **React Component** - For React applications
- **PNG** - Raster format (create from SVG as needed)

## Creating PNG Versions

To create PNG versions from SVG:

1. Open SVG in browser
2. Take screenshot or use online converter
3. Export at these sizes:
   - 512x512 (app icon)
   - 192x192 (PWA icon)
   - 180x180 (Apple touch icon)
   - 32x32 (favicon)
   - 16x16 (favicon)

## Social Media Sizes

- **Facebook:** 1200x630px (og:image)
- **Twitter:** 1200x600px (twitter:image)
- **LinkedIn:** 1200x627px
- **Instagram:** 1080x1080px (square)

## Brand Assets Location

```
/public
  ├── favicon.svg          # Browser favicon
  ├── logo.svg            # Full horizontal logo
  ├── og-image.png        # Social media preview (create)
  └── LOGO_GUIDE.md       # This file

/src/components/Logo
  └── Logo.jsx            # React logo component
```

## Questions?

For logo usage questions or custom variations, contact:
- Email: narayana0249766@gmail.com
- Phone: +91-9494549004

---

**UiTECH** - Transforming Ideas into Digital Excellence

*Last Updated: ${new Date().toLocaleDateString('en-IN')}*
