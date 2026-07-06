# Creative Direction: Lavender Dream Wedding Journey

## Purpose

This document is the design bible for the immersive wedding journey project.

The website should not feel like a standard wedding invitation page. It should feel like a continuous emotional experience: a soft cinematic journey through memories, light, floating photographs, wedding details, and a graceful ending.

The core creative direction is:

> Lavender Dream: an elegant, dream-like wedding world built from soft lavender light, warm ivory space, floating memories, glass surfaces, and gentle cinematic motion.

## Design Philosophy

The experience should feel:

- Emotional, not informational first.
- Continuous, not section-based.
- Premium, not decorative-heavy.
- Dream-like, not childish.
- Cinematic, not template-like.
- Lightweight, not overly realistic.

The user should feel they are moving through a memory space. Scrolling should feel like camera movement between scenes, not simply reading stacked content blocks.

Design principles:

1. Use atmosphere before decoration.
2. Let light, depth, blur, and spacing create emotion.
3. Keep important content readable at all times.
4. Use motion to guide attention, not to show off.
5. Prefer CSS 3D, perspective, gradients, SVG, and layered images over heavy WebGL.
6. Every scene should inherit something from the previous scene.
7. The page should feel expensive because it is restrained.

Avoid:

- Dense floral borders.
- Generic wedding template layouts.
- Overuse of script fonts.
- Too much pink.
- Heavy 3D models.
- Confetti-like particles.
- Landing-page section rhythm.

## Lavender Dream Theme

Lavender Dream is the main emotional theme.

It combines:

- Lavender mist.
- Warm ivory paper.
- Champagne light.
- Soft blush petals.
- Deep plum/navy text.
- Floating glass invitation cards.
- Photographs drifting in soft 3D space.

The lavender should be atmospheric, not dominant. The site should not become a purple page. Lavender is the dream haze, while ivory and champagne remain the base.

Theme keywords:

- Lavender haze
- Ivory glow
- Champagne warmth
- Soft romance
- Floating memories
- Gentle depth
- Glass invitation
- Cinematic calm

## Color Palette

### Core Palette

| Role | Color | Usage |
|---|---:|---|
| Dream Lavender | `#D9CCFF` | Atmospheric haze, scene glow |
| Pale Lavender | `#EFE9FF` | Soft background washes |
| Warm Ivory | `#FFF8EE` | Main surface, photo mats |
| Cream Base | `#F7EFE6` | Global background |
| Champagne | `#E8D4B5` | Borders, thin lines, card edges |
| Soft Gold | `#F4C96B` | Halo, highlights, countdown glow |
| Warm Orange | `#FF8517` | CTA, active state, small accents |
| Blush Petal | `#F37A8A` | Petals and rare emotional accents |
| Deep Plum | `#32162F` | Elegant wedding text |
| Deep Navy | `#071936` | Cinematic sans text and controls |
| Muted Taupe | `#8B8175` | Body copy |
| Glass White | `rgba(255,255,255,0.58)` | Glass panels |

### Color Rules

Use ivory/cream as the dominant base.

Use lavender as:

- Background haze.
- Transition glow.
- Soft ambient depth.
- Scene atmosphere.

Use orange only for:

- Primary CTA.
- Active control.
- Small interaction highlights.

Use blush only for:

- Petals.
- Tiny emotional particles.
- Rare accent marks.

Use deep navy/plum for strong readability.

Never let lavender, orange, or blush dominate the entire viewport. The feeling should be airy and premium.

## Typography

Typography should balance modern cinematic storytelling with wedding elegance.

### Primary Cinematic Sans

Use for:

- Hero headline.
- Scene titles.
- Navigation controls.
- Buttons.
- Countdown numbers.
- UI labels.

Style:

- Bold or black weight.
- Clean, modern, confident.
- Large scale.
- Tight but readable line-height.

Recommended feel:

```txt
Arial / Helvetica / Inter-like sans
```

### Elegant Serif

Use for:

- Emotional notes.
- Invitation copy.
- Couple names in intimate scenes.
- Detail text where warmth is needed.

Recommended feel:

```txt
Playfair Display / Cormorant Garamond
```

### Script Font

Use sparingly, if at all.

Allowed:

- One small accent.
- A decorative label.
- A final romantic flourish.

Avoid:

- Long script text.
- Script as main scene title.
- Script on small mobile text.

### Type Scale

Desktop:

- Hero headline: `88px - 120px`
- Scene title: `72px - 104px`
- Feature date/countdown: `64px - 96px`
- Body: `17px - 20px`
- Labels: `12px - 14px`

Mobile:

- Hero headline: `52px - 68px`
- Scene title: `42px - 58px`
- Feature date/countdown: `42px - 64px`
- Body: `15px - 17px`
- Labels: `11px - 13px`

Line-height:

- Hero: `0.9 - 0.98`
- Scene title: `0.92 - 1.0`
- Body: `1.55 - 1.75`
- Labels: `1.0 - 1.2`

## Spacing

Use an 8px base rhythm.

Spacing scale:

| Token | Size | Usage |
|---|---:|---|
| `xs` | `4px` | Micro details |
| `sm` | `8px` | Tight icon/text gap |
| `md` | `16px` | Standard component gap |
| `lg` | `24px` | Card inner rhythm |
| `xl` | `32px` | Group spacing |
| `2xl` | `48px` | Large content separation |
| `3xl` | `64px` | Scene internal breathing |
| `4xl` | `96px` | Cinematic spacing |
| `5xl` | `128px` | Scene transition space |

Scene spacing:

- Desktop scenes should breathe.
- Do not crowd the first viewport.
- Important objects should have clear negative space.
- Mobile can stack, but still needs cinematic pauses.

Desktop padding:

- Horizontal: `36px - 64px`
- Scene vertical: `96px - 140px`

Tablet padding:

- Horizontal: `28px - 40px`
- Scene vertical: `80px - 120px`

Mobile padding:

- Horizontal: `20px - 24px`
- Scene vertical: `72px - 96px`

## Shadows

Shadows should create soft depth, not heavy contrast.

Object shadow:

```txt
0 24px 70px rgba(66,48,28,0.13)
```

Floating photo shadow:

```txt
0 18px 44px rgba(66,48,28,0.12)
```

Hero object shadow:

```txt
0 34px 90px rgba(48,35,22,0.22)
```

Glass panel shadow:

```txt
0 24px 80px rgba(72,55,38,0.14)
```

Lavender glow:

```txt
0 0 72px rgba(217,204,255,0.32)
```

Gold halo:

```txt
0 0 80px rgba(244,201,107,0.24)
```

Rules:

1. Shadows should be large, soft, and low-opacity.
2. Moving objects need lighter shadows.
3. Centerpiece objects can have stronger glow.
4. Mobile shadows should be reduced by about 30%.
5. Avoid stacking many shadows on animated objects.

## Glassmorphism

Glass is a premium material in this design, not a generic effect.

Use glass for:

- Wedding information cards.
- RSVP panel.
- Floating controls.
- Focused gallery overlay.
- Scene labels when needed.

Glass base:

```txt
background: rgba(255,255,255,0.54 - 0.68)
border: 1px solid rgba(255,255,255,0.62)
backdrop-filter: blur(18px - 28px)
box-shadow: soft warm shadow
```

Desktop:

- More blur allowed.
- Larger glass surfaces are acceptable.

Tablet:

- Moderate blur.
- Fewer overlapping glass panels.

Mobile:

- Use light transparency.
- Reduce blur.
- Preserve contrast and performance.

Rules:

1. Do not place glass cards inside glass cards.
2. Keep text contrast strong.
3. Glass should feel like invitation material.
4. Use thin borders and soft inner highlights.
5. Avoid making every element glass.

## Lighting

Lighting should carry the emotional atmosphere.

Global light direction:

```txt
Primary light: top-right
Fill light: front / center ivory
Accent light: lavender haze and champagne glow
```

Lighting style:

- Soft studio lighting.
- No harsh shadows.
- No dramatic dark mode.
- No neon.
- No saturated gradient blobs.

Scene lighting:

### Opening

- Bright ivory base.
- Lavender haze near the edges.
- Champagne glow on hero objects.

### Our Story

- Warmer, nostalgic, slightly sepia.
- Lavender reduced.
- Memory cards softly lit.

### Gallery

- Airier and brighter.
- Photos have warm edge light.
- Background should feel spacious.

### Wedding Information

- Champagne and glass-friendly lighting.
- Strong readability.
- Subtle lavender in background only.

### Countdown

- Center gold halo.
- Lavender outer haze.
- Edges slightly calmer.

### RSVP

- Quiet, premium, readable.
- Glass panel gets the most controlled lighting.

### Thank You

- Soft ivory ending.
- Lavender and gold particles fade upward.

## Particle Effects

Particles should feel like atmosphere, not celebration confetti.

Particle types:

1. Lavender dust
   - Tiny.
   - Very subtle.
   - Slow opacity breathing.

2. Blush petals
   - Low count.
   - Slow diagonal drift.
   - Slight rotation.

3. Gold motes
   - Tiny light specks.
   - Used near countdown and transitions.

4. Soft light circles
   - Blurred.
   - Rare.
   - Background only.

Particle count:

Desktop:

- `30 - 60` dust particles.
- `8 - 16` petals.

Tablet:

- `15 - 30` dust particles.
- `4 - 8` petals.

Mobile:

- `6 - 14` particles total.
- `0 - 4` petals.

Reduced motion:

- Particles static or disabled.

Rules:

1. Particles must not cover important text.
2. No dense confetti.
3. No random bright colors.
4. Petals should be occasional, not constant.
5. Lavender dust should be barely noticeable.

## Motion Language

Motion should feel:

- Floating.
- Breathing.
- Slow.
- Cinematic.
- Physical but not realistic-heavy.

Motion verbs:

```txt
float
drift
reveal
dissolve
push
pull
settle
glow
orbit
fade
```

Primary motion:

- Scroll-driven camera movement.
- CSS 3D parallax.
- Floating photo drift.
- Glass cards rising into place.
- Text reveal with stagger.
- Particles drifting slowly.
- Countdown halo breathing.

Avoid:

- Bounce-heavy UI.
- Fast rotations.
- Excessive hover tilt.
- Large random movements.
- Scroll hijacking.
- Motion that prevents reading.

## Animation Timing

Timing scale:

| Motion | Duration |
|---|---:|
| Button hover | `180ms - 240ms` |
| Small UI reveal | `300ms - 480ms` |
| Text line reveal | `560ms - 860ms` |
| Card reveal | `700ms - 1100ms` |
| Scene transition | `1000ms - 1800ms` |
| Ambient float | `6s - 12s` |
| Atmospheric drift | `14s - 28s` |

Easing:

Primary:

```txt
cubic-bezier(0.22, 1, 0.36, 1)
```

Soft reveal:

```txt
cubic-bezier(0.16, 1, 0.3, 1)
```

Exit:

```txt
cubic-bezier(0.65, 0, 0.35, 1)
```

Linear:

- Only for very subtle infinite rotation.

Stagger:

- Text lines: `80ms - 140ms`
- Cards: `120ms - 180ms`
- Gallery photos: `80ms - 120ms`
- Particles: randomized

Reduced motion:

- Use opacity-only transitions.
- Duration: `180ms - 300ms`.
- Disable parallax and infinite drift.

## Scene Atmosphere

### Scene 1: Opening

Feeling:

- Arrival.
- Dream.
- Anticipation.

Atmosphere:

- Ivory base.
- Lavender haze.
- Warm hero light.
- Large cinematic headline.
- Couple visual as anchor.

Motion:

- Soft reveal.
- Light parallax.
- Sparse petals.

### Scene 2: Our Story

Feeling:

- Nostalgia.
- Intimacy.
- Memory.

Atmosphere:

- Warmer cream.
- Sepia undertone.
- Timeline as memory path.

Motion:

- Cards enter from depth.
- Timeline glows softly.
- Inactive objects drift back.

### Scene 3: Gallery

Feeling:

- Joy.
- Air.
- Wonder.

Atmosphere:

- Open photo field.
- Floating memory objects.
- Lavender mostly in far background.

Motion:

- Photos float at different speeds.
- Hover brings photo forward.
- Mobile uses stacked photo rhythm.

### Scene 4: Wedding Information

Feeling:

- Clarity.
- Elegance.
- Ceremony.

Atmosphere:

- Glass cards.
- Champagne light.
- Thin SVG lines.

Motion:

- Cards assemble.
- Hover lift only on desktop.
- Mobile stable and readable.

### Scene 5: Countdown

Feeling:

- Anticipation.
- Focus.
- Quiet excitement.

Atmosphere:

- Center halo.
- Gold and lavender glow.
- Minimal surrounding clutter.

Motion:

- Halo breathing.
- Digits update cleanly.
- Small orbiting motes.

### Scene 6: RSVP

Feeling:

- Personal.
- Calm.
- Welcoming.

Atmosphere:

- Premium glass form.
- Very quiet background.
- Strong readability.

Motion:

- Form rises.
- Field focus glows.
- Success state blooms softly.

### Scene 7: Thank You

Feeling:

- Gratitude.
- Closure.
- Soft joy.

Atmosphere:

- Bright ivory fade.
- Gentle lavender/gold particles.
- Couple names centered.

Motion:

- Slow fade.
- Particles drift upward.
- Experience rests.

## Responsive Behavior

### Desktop

Full immersive experience:

- Full CSS 3D depth.
- Pointer parallax.
- Floating photo fields.
- More particles.
- Glass blur.
- Hover interactions.
- Rich scene transitions.

### Tablet

Reduced but still immersive:

- Fewer particles.
- Smaller transform distances.
- Less blur.
- Simplified photo depth.
- Scene rhythm remains.

### Mobile

Lightweight emotional version:

- Same story order.
- Fewer layers.
- Minimal particles.
- No heavy WebGL.
- No hover dependency.
- Stacked photo rhythm.
- Glass panels with reduced blur.
- Large tap targets.

Mobile must not become a plain page. It should still feel cinematic, but with simpler motion.

## Accessibility

Requirements:

1. Important content must be semantic HTML.
2. Decorative objects must use `aria-hidden`.
3. Controls must have `aria-label`.
4. Text on glass must pass practical contrast.
5. RSVP fields must have labels and clear states.
6. No hover-only critical content.
7. Respect `prefers-reduced-motion`.
8. The site must be usable without WebGL.
9. Audio must never autoplay without user action.
10. Text must not overlap on mobile.

Reduced motion behavior:

- Disable camera parallax.
- Disable particle drift.
- Disable floating loops.
- Keep simple fade transitions.

## Performance Considerations

Target:

- Lighthouse Performance above `95`.
- 60 FPS on modern desktop.
- Smooth scroll on mobile.
- Minimal WebGL.

Performance rules:

1. Animate `transform` and `opacity` only where possible.
2. Avoid animating layout properties.
3. Lazy-load non-critical images.
4. Preload only first-scene critical assets.
5. Keep particle count device-aware.
6. Avoid large blur layers on mobile.
7. Use CSS/SVG primitives before Three.js.
8. Use Three.js only when it truly adds value.
9. Keep RSVP stable and low-motion.
10. Keep image dimensions explicit.

Asset loading:

- Opening couple visual: priority.
- Story and gallery images: lazy.
- High-res gallery: only when needed.
- Audio: preload none.
- Optional WebGL: lazy and enhancement-only.

Device profiles:

High:

- Desktop, pointer fine.
- Full effects.

Medium:

- Tablet/small laptop.
- Reduced depth and particles.

Low:

- Mobile.
- Minimal motion.
- No WebGL by default.

## Final Creative Rule

When making design decisions, choose the option that feels:

```txt
more cinematic
more restrained
more readable
more emotional
less template-like
less heavy
```

The final result should feel like an interactive love story inside a lavender dream, not a decorated wedding landing page.

