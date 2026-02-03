# **Fransisco Wiles Marketing – Design System**

## **Color Palette**

| Token | Hex Value | HSL Value | Usage |
| ----- | ----- | ----- | ----- |
| `--background` | `#FCF8ED` | 45 70% 96% | Primary background (soft cream for warmth/trust) |
| `--primary` | `#3185FC` | 213 97% 59% | CTAs, buttons, links (trust/professionalism) |
| `--foreground` | `#1A1A1A` | 0 0% 10% | Main body text |
| `--muted-foreground` | `#4A4A4A` | 0 0% 29% | Subheadings, secondary text |
| `--border` | `#D9D9D9` | 0 0% 85% | Separators, borders |
| `--success` | `#2FBF71` | 148 60% 47% | Success states, confirmations |
| `--destructive` | `#F2545B` | 357 86% 64% | Error states, validation errors |

---

## **Typography**

| Element | Font Family | Size | Weight |
| ----- | ----- | ----- | ----- |
| H1 (Hero headline) | DM Serif Display | 2.25rem (36px) | 400 |
| H2 (Section headers) | DM Serif Display | 1.5rem (24px) | 400 |
| H3/H4 | Inter | 1.125rem (18px) | 600 |
| Body text | Inter | 1rem (16px) | 400 |
| Small/Caption | Inter | 0.875rem (14px) | 400 |

---

## **Spacing & Layout**

| Property | Value |
| ----- | ----- |
| Border Radius | `0.5rem` (8px) for cards, `0.375rem` (6px) for buttons/inputs |
| Card Padding | `1.5rem` (24px) mobile, `2rem` (32px) desktop |
| Section Spacing | `2rem` (32px) between major sections |
| Max Content Width | `896px` (56rem) |

---

## **Shadows & Effects**

| Element | Effect |
| ----- | ----- |
| Card Shadow | `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)` |
| Button Hover | `transform: scale(1.02)` \+ increased shadow |
| Option Hover | Border transitions to `--primary`, subtle background tint |

---

## **Page Layout**

### **Header**

* **Logo:** `fransisco-head-logo`  
* **Logo Interaction:** Slow clockwise spin on hover  
* **Background:** Matches `--background`  
* `Navigation: Articles Reviews [CTA Button: Schedule a FREE strategy session]`

### **Main Content Area**

* **Container:** Max-width `896px`, centered with `margin: auto`  
* **Padding:** `1rem` horizontal (mobile), `2rem` (desktop)

### **Footer**

* **Position:** Bottom of page, within content width  
* **Divider:** Horizontal line above footer that fades toward the ends  
* **Typography:** `text-xs` or `text-sm`, color `--muted-foreground`  
* **Layout:** Centered, stacked vertically with small gap  
* **Copyright:** `© {year} Fransisco Wiles Marketing LLC. All rights reserved.`  
* **Disclaimer:** `This is an attorney advertisement. Results may vary based on your specific case.`  
* **Links:** Sitemap, Privacy Policy, Fulfillment Policy
