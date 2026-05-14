# Design System: Platinum Command (Arctic White Protocol)
**Project Identity:** Sovereign Asset Management & Intelligence Interface

## 1. Visual Theme & Atmosphere
**Luxury Silence:** The aesthetic philosophy centers on "authoritative minimalism." The interface is designed to feel like an elite, high-security command center that operates with silent precision. It uses "Arctic White" as a primary canvas to convey purity, clarity, and high-density information without visual clutter.

* **Mood:** Sovereign, Airy, Dense-yet-Clean, Precise.
* **Density:** High information density balanced by expansive white space and surgical alignment.

## 2. Color Palette & Roles
The system uses a monochromatic base with highly functional, semantic accents.

* **Arctic Canvas (#FFFFFF):** The primary surface for all main interfaces.
* **Command Navy (#0F172A):** Used for primary text, deep-contrast containers, and high-authority headers.
* **Obsidian Slate (#F8FAFC):** Secondary surface color for subtle depth and component grouping.
* **Operational Indigo (#4F46E5):** Semantic accent for logic, flow, and command operations.
* **Integrity Emerald (#059669):** Semantic accent for system health, success states, and optimized metrics.
* **Protection Rose (#E11D48):** Semantic accent for security, critical alerts, and defensive protocols.
* **Muted Purity (#94A3B8):** Secondary metadata and background labels to ensure hierarchy.

## 3. Typography Rules
Typography is the primary driver of the "Sovereign" feel. 

* **Family:** Clean, high-performance Sans-serif (Inter/System).
* **Headings:** Bold, italicized, and `tracking-tighter` for large displays (5xl to 8xl) to create a "Military-Elite" look.
* **Micro-Typography (Tags/Metadata):** 
    * **Size:** Strictly **10px**.
    * **Weight:** `font-black` (Heavy).
    * **Character:** `uppercase` with extreme letter spacing (`tracking-[0.4em]` or `tracking-widest`).
* **Linguistic Rule (Luxury Silence):** No trailing punctuation (no dots, no commas at line ends). Text must be delivered as clean, stand-alone statements of fact.

## 4. Component Stylings
* **Primary Cards:** 
    * **Shape:** Generously rounded corners (`rounded-[40px]` or `rounded-[64px]`).
    * **Stroke:** Ultra-thin border (`border-slate-100` or `border-slate-200`).
    * **Elevation:** Airy, low-contrast shadows (`shadow-xl shadow-slate-200/30`).
* **Control Buttons:**
    * **Shape:** Pill-shaped (`rounded-full`).
    * **Weight:** Heavy caps with wide tracking.
    * **Interaction:** Subtle scaling (`active:scale-95`) and smooth background transitions.
* **Status Indicators:**
    * **Shape:** Perfectly circular pulses with glowing aura effects (`shadow-[0_0_12px]`).

## 5. Layout Principles
* **Section Rhythm:** Use `.section-tight` padding logic to maintain a compact, executive presentation.
* **Alignment:** Strict grid alignment with asymmetric balance in "Dashboard" views.
* **Separation:** Prefer white space and thin borders over heavy background changes.

## 6. Motion & Interaction (The "Command Pulse")
To keep the system feeling "alive" while maintaining Luxury Silence:
* **Fluid Displacement:** Page transitions between services must use a soft `fade-in` (300ms) with a 2px vertical lift.
* **Authoritative Pulse:** Critical status indicators use a slow, constant glow (`1.5s ease-in-out`) rather than rapid flashing.
* **Data Telemetry:** Numbers in dashboards should have a subtle `0.1%` fluctuation every 5 seconds to signify live system activity.
* **Tactile Feedback:** Buttons use a `95%` scale-down on click to provide an elite, mechanical feel.

## 7. Prohibited Elements (The "Surgical Polish" Rules)
* ❌ **No Technical Jargon:** Replace hashes (#), terminal IDs, and encryption codes with administrative descriptors (e.g., "REGION 01", "SYSTEM AUTHORITY").
* ❌ **No Terminal Punctuation:** No periods at the end of sentences or titles.
* ❌ **No Default Sizing:** No 12px or 14px small text; strictly use the 10px font-black tag standard for all metadata.
