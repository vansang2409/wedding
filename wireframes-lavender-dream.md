# Wireframes: Lavender Dream Wedding Journey

## Purpose

This document defines low-fidelity wireframes for the Lavender Dream wedding journey.

No colors. No implementation details. No visual styling beyond hierarchy.

The focus is:

- Storytelling flow.
- Scene composition.
- Desktop, tablet, and mobile hierarchy.
- How the guest moves emotionally from scene to scene.

## Global Story Flow

```txt
Enter
  ↓
Opening
  ↓
Our Story
  ↓
Gallery
  ↓
Wedding Information
  ↓
Countdown
  ↓
RSVP
  ↓
Thank You
  ↓
Leave / Replay / View Gallery
```

Global persistent elements:

```txt
Logo / home
Sound control
Next / menu control
Scroll progress
Ambient background
```

These elements should stay secondary. The scenes are the main narrative.

---

# Desktop Wireframes

Desktop uses the fullest cinematic composition.

Layout principle:

```txt
Text and story anchors usually sit left.
Visual depth fields usually sit right or center.
Scenes can use overlapping objects and perspective.
```

## Desktop: Global Frame

```txt
┌────────────────────────────────────────────────────────────────────┐
│ Logo                                      Scene Label  Sound  Menu │
│ Progress line                                                       │
│                                                                    │
│                                                                    │
│                       Scene Content                                │
│                                                                    │
│                                                                    │
│                         Scroll Hint                                │
└────────────────────────────────────────────────────────────────────┘
```

## Desktop Scene 1: Opening

```txt
┌────────────────────────────────────────────────────────────────────┐
│ Logo                                      Scene Label  Sound  Menu │
│                                                                    │
│  [Small Tilted Label]                                               │
│                                                                    │
│  HUGE INTRO HEADLINE                         [Floating Object]      │
│  Hi, we are                                 [Large Couple Visual]   │
│  Sang & Thương                              [Gold Platform Shape]   │
│                                             [Date Chip]             │
│  Short emotional sentence                                           │
│                                                                    │
│  [Date Pill] [Wedding Pill]                                        │
│                                                                    │
│  [Primary CTA]                                                     │
│                                                                    │
│                         Scroll Hint                                │
└────────────────────────────────────────────────────────────────────┘
```

Storytelling role:

```txt
Introduce the couple.
Invite the guest into the dream.
Create curiosity to scroll.
```

## Desktop Scene 2: Our Story

```txt
┌────────────────────────────────────────────────────────────────────┐
│ Logo                                      Scene Label  Sound  Menu │
│                                                                    │
│  [Scene Label]                                                     │
│                                                                    │
│  OUR STORY                         [Memory Card 1]                 │
│                                    /                               │
│  Short scene description      ---- curved memory path ----          │
│                                      \                             │
│                                      [Active Memory Card 2]         │
│                                               \                    │
│                                               [Memory Card 3]       │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

Storytelling role:

```txt
Show the relationship as memory fragments.
The camera feels like it is passing through a timeline.
```

## Desktop Scene 3: Gallery

```txt
┌────────────────────────────────────────────────────────────────────┐
│ Logo                                      Scene Label  Sound  Menu │
│                                                                    │
│  [Scene Label]                                                     │
│                                                                    │
│  FLOATING GALLERY                  [Photo Far]     [Photo Mid]     │
│                                                                    │
│  Short scene description        [Photo Near Large]                 │
│                                                         [Photo]    │
│                                      [Photo Small]                 │
│                                                [Photo Near]        │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

Storytelling role:

```txt
Memories open into a floating photo field.
The gallery should not feel like a grid.
```

## Desktop Scene 4: Wedding Information

```txt
┌────────────────────────────────────────────────────────────────────┐
│ Logo                                      Scene Label  Sound  Menu │
│                                                                    │
│  [Scene Label]                                                     │
│                                                                    │
│  WEDDING INFORMATION                  ┌─────────────────────────┐   │
│                                       │ Main Date Card          │   │
│  Short practical description          │ Large date              │   │
│                                       └─────────────────────────┘   │
│                                                                    │
│                                ┌──────────┐ ┌──────────┐          │
│                                │ Time     │ │ Venue    │          │
│                                └──────────┘ └──────────┘          │
│                                                                    │
│                                ┌──────────────────────┐            │
│                                │ Address / Map Action │            │
│                                └──────────────────────┘            │
└────────────────────────────────────────────────────────────────────┘
```

Storytelling role:

```txt
The dream becomes clear and ceremonial.
The guest receives the practical details.
```

## Desktop Scene 5: Countdown

```txt
┌────────────────────────────────────────────────────────────────────┐
│ Logo                                      Scene Label  Sound  Menu │
│                                                                    │
│                                                                    │
│                            [Halo / Ring]                           │
│                                                                    │
│                         ┌────────────────┐                         │
│                         │   COUNTDOWN    │                         │
│                         │ D  H  M  S     │                         │
│                         └────────────────┘                         │
│                                                                    │
│                       Short emotional line                         │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

Storytelling role:

```txt
The journey pauses.
Time becomes the emotional center.
```

## Desktop Scene 6: RSVP

```txt
┌────────────────────────────────────────────────────────────────────┐
│ Logo                                      Scene Label  Sound  Menu │
│                                                                    │
│  [Scene Label]                                                     │
│                                                                    │
│                         ┌──────────────────────────────┐           │
│                         │ RSVP Glass Panel             │           │
│                         │                              │           │
│                         │ [Name Field]                 │           │
│                         │ [Attendance Options]         │           │
│                         │ [Guest Count]                │           │
│                         │ [Message Field]              │           │
│                         │                              │           │
│                         │ [Submit Button]              │           │
│                         └──────────────────────────────┘           │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

Storytelling role:

```txt
The guest moves from watching to responding.
The scene becomes stable and usable.
```

## Desktop Scene 7: Thank You

```txt
┌────────────────────────────────────────────────────────────────────┐
│ Logo                                      Scene Label  Sound  Menu │
│                                                                    │
│                                                                    │
│                         [Final Couple Visual]                      │
│                                                                    │
│                         THANK YOU MESSAGE                          │
│                         Văn Sang & Thu Thương                      │
│                                                                    │
│                         Short closing note                         │
│                                                                    │
│                         [Back to Top] [View Gallery]               │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

Storytelling role:

```txt
The film ends.
The guest leaves with a sense of gratitude and closure.
```

---

# Tablet Wireframes

Tablet keeps the same story order but reduces depth and overlap.

Layout principle:

```txt
Use two-column layouts only when space is comfortable.
Reduce overlap.
Keep controls clear.
Use fewer visible floating objects.
```

## Tablet: Global Frame

```txt
┌──────────────────────────────────────────────┐
│ Logo                       Sound  Menu       │
│ Progress line                                │
│                                              │
│              Scene Label                     │
│                                              │
│              Scene Content                   │
│                                              │
│              Supporting Visuals              │
│                                              │
└──────────────────────────────────────────────┘
```

## Tablet Scene 1: Opening

```txt
┌──────────────────────────────────────────────┐
│ Logo                       Sound  Menu       │
│                                              │
│ [Small Label]                                │
│                                              │
│ LARGE INTRO HEADLINE                         │
│ Sang & Thương                                │
│                                              │
│ Short emotional sentence                     │
│                                              │
│ [Date Pill] [Wedding Pill]                   │
│ [Primary CTA]                                │
│                                              │
│        [Couple Visual + Platform]            │
│                                              │
└──────────────────────────────────────────────┘
```

## Tablet Scene 2: Our Story

```txt
┌──────────────────────────────────────────────┐
│ [Scene Label]                                │
│ OUR STORY                                    │
│ Short description                            │
│                                              │
│ ───── Memory Path ─────                      │
│                                              │
│ [Memory Card 1]                              │
│             [Memory Card 2]                  │
│                         [Memory Card 3]      │
│                                              │
└──────────────────────────────────────────────┘
```

## Tablet Scene 3: Gallery

```txt
┌──────────────────────────────────────────────┐
│ [Scene Label]                                │
│ FLOATING GALLERY                             │
│ Short description                            │
│                                              │
│     [Featured Photo]                         │
│ [Photo]             [Photo]                  │
│        [Photo]              [Photo]          │
│                                              │
└──────────────────────────────────────────────┘
```

## Tablet Scene 4: Wedding Information

```txt
┌──────────────────────────────────────────────┐
│ [Scene Label]                                │
│ WEDDING INFORMATION                          │
│ Short description                            │
│                                              │
│ ┌──────────────────────────────────────────┐ │
│ │ Main Date Card                           │ │
│ └──────────────────────────────────────────┘ │
│                                              │
│ ┌──────────────────┐ ┌──────────────────┐   │
│ │ Time             │ │ Venue            │   │
│ └──────────────────┘ └──────────────────┘   │
│                                              │
│ ┌──────────────────────────────────────────┐ │
│ │ Address / Map Action                     │ │
│ └──────────────────────────────────────────┘ │
└──────────────────────────────────────────────┘
```

## Tablet Scene 5: Countdown

```txt
┌──────────────────────────────────────────────┐
│                                              │
│              [Halo / Ring]                   │
│                                              │
│              COUNTDOWN                       │
│              D  H  M  S                      │
│                                              │
│              Short emotional line            │
│                                              │
└──────────────────────────────────────────────┘
```

## Tablet Scene 6: RSVP

```txt
┌──────────────────────────────────────────────┐
│ [Scene Label]                                │
│ RSVP                                         │
│                                              │
│ ┌──────────────────────────────────────────┐ │
│ │ [Name Field]                             │ │
│ │ [Attendance Options]                     │ │
│ │ [Guest Count]                            │ │
│ │ [Message Field]                          │ │
│ │ [Submit Button]                          │ │
│ └──────────────────────────────────────────┘ │
└──────────────────────────────────────────────┘
```

## Tablet Scene 7: Thank You

```txt
┌──────────────────────────────────────────────┐
│                                              │
│              [Final Couple Visual]           │
│                                              │
│              THANK YOU MESSAGE               │
│              Văn Sang & Thu Thương           │
│                                              │
│              Short closing note              │
│                                              │
│              [Back to Top] [Gallery]         │
│                                              │
└──────────────────────────────────────────────┘
```

---

# Mobile Wireframes

Mobile keeps the same emotional sequence but removes heavy depth.

Layout principle:

```txt
Single-column cinematic flow.
Large readable text.
Fewer visible particles.
Photos stack.
Cards stack.
No hover dependency.
```

## Mobile: Global Frame

```txt
┌──────────────────────────────┐
│ Logo              Sound Menu │
│ Progress line                 │
│                              │
│ Scene Content                 │
│                              │
└──────────────────────────────┘
```

## Mobile Scene 1: Opening

```txt
┌──────────────────────────────┐
│ Logo              Sound Menu │
│                              │
│ [Small Label]                 │
│                              │
│ LARGE INTRO HEADLINE          │
│ Sang & Thương                 │
│                              │
│ Short emotional sentence      │
│                              │
│ [Date Pill]                   │
│ [Wedding Pill]                │
│                              │
│ [Primary CTA]                 │
│                              │
│ [Couple Visual begins below]  │
│ [Platform / Object hint]      │
└──────────────────────────────┘
```

Storytelling note:

```txt
The first viewport focuses on the invitation.
The couple visual appearing lower encourages the guest to continue.
```

## Mobile Scene 2: Our Story

```txt
┌──────────────────────────────┐
│ [Scene Label]                 │
│ OUR STORY                     │
│ Short description             │
│                              │
│ │                            │
│ ● [Memory Card 1]             │
│ │                            │
│ ● [Memory Card 2]             │
│ │                            │
│ ● [Memory Card 3]             │
│ │                            │
└──────────────────────────────┘
```

Storytelling note:

```txt
The cinematic path becomes a vertical memory journal.
Cards must be large and readable.
```

## Mobile Scene 3: Gallery

```txt
┌──────────────────────────────┐
│ [Scene Label]                 │
│ FLOATING GALLERY              │
│ Short description             │
│                              │
│ [Large Featured Photo]        │
│                              │
│   [Photo 2]                   │
│                              │
│ [Photo 3]                     │
│                              │
│   [Photo 4]                   │
│                              │
└──────────────────────────────┘
```

Storytelling note:

```txt
The gallery is simplified into a floating stack.
Slight rotations preserve the memory-field feeling.
```

## Mobile Scene 4: Wedding Information

```txt
┌──────────────────────────────┐
│ [Scene Label]                 │
│ WEDDING INFORMATION           │
│ Short description             │
│                              │
│ ┌──────────────────────────┐ │
│ │ Date Card                │ │
│ └──────────────────────────┘ │
│                              │
│ ┌──────────────────────────┐ │
│ │ Time Card                │ │
│ └──────────────────────────┘ │
│                              │
│ ┌──────────────────────────┐ │
│ │ Venue Card               │ │
│ └──────────────────────────┘ │
│                              │
│ ┌──────────────────────────┐ │
│ │ Address / Map Action     │ │
│ └──────────────────────────┘ │
└──────────────────────────────┘
```

Storytelling note:

```txt
This scene becomes stable and practical.
No complex overlap on mobile.
```

## Mobile Scene 5: Countdown

```txt
┌──────────────────────────────┐
│                              │
│        [Halo / Ring]          │
│                              │
│        COUNTDOWN              │
│        D  H  M  S             │
│                              │
│        Short emotional line   │
│                              │
└──────────────────────────────┘
```

Storytelling note:

```txt
A centered pause.
The simplest and calmest mobile scene.
```

## Mobile Scene 6: RSVP

```txt
┌──────────────────────────────┐
│ [Scene Label]                 │
│ RSVP                          │
│                              │
│ ┌──────────────────────────┐ │
│ │ [Name Field]             │ │
│ │ [Attendance Options]     │ │
│ │ [Guest Count]            │ │
│ │ [Message Field]          │ │
│ │                          │ │
│ │ [Submit Button]          │ │
│ └──────────────────────────┘ │
└──────────────────────────────┘
```

Storytelling note:

```txt
Functional and calm.
Background motion should be minimal.
```

## Mobile Scene 7: Thank You

```txt
┌──────────────────────────────┐
│                              │
│      [Final Couple Visual]    │
│                              │
│      THANK YOU MESSAGE        │
│      Văn Sang & Thu Thương    │
│                              │
│      Short closing note       │
│                              │
│      [Back to Top]            │
│      [Gallery]                │
│                              │
└──────────────────────────────┘
```

Storytelling note:

```txt
The ending rests.
No footer-like layout.
```

---

# Cross-Device Storytelling Rules

## Desktop

```txt
Most cinematic.
Fullest depth.
Most atmospheric.
Best for Awwwards-like movement.
```

## Tablet

```txt
Balanced.
Some depth.
Less overlap.
Readable and stable.
```

## Mobile

```txt
Lightweight.
Same emotional order.
Simplified motion.
Large content.
No hover-only information.
```

## Narrative Anchors

Each scene must have one main anchor:

```txt
Opening:
Headline + couple visual

Our Story:
Active memory card

Gallery:
Featured floating photo

Wedding Information:
Main date card

Countdown:
Countdown halo

RSVP:
Glass form

Thank You:
Names + final message
```

## Flow Continuity

```txt
Opening object
  becomes
Memory path
  becomes
Floating photos
  becomes
Glass information cards
  becomes
Countdown halo
  becomes
RSVP glass panel
  becomes
Thank-you glow
```

This continuity is more important than individual scene decoration.

