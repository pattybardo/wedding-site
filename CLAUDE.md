# CLAUDE.md - AI Assistant Guide

This document provides comprehensive guidance for AI assistants working on this wedding website project.

## Project Overview

**Project Name:** Wedding Site
**Type:** Static Wedding Website
**Couple:** Patrick & Gabriella Bardo
**Wedding Date:** June 6, 2026
**Venue:** Villa Vanahem, Stenungsund, Sweden

### Purpose
An elegant, static wedding website with RSVP integration via Google Forms. The site provides guests with wedding information, schedule, venue details, and important policies.

## Technology Stack

- **Frontend:** Pure HTML5, CSS3, JavaScript (ES6+)
- **Build Tool:** None (static site)
- **Dev Server:** live-server (port 8080)
- **Fonts:** Google Fonts (Cormorant Garamond, Montserrat)
- **Maps:** Google Maps embed
- **Forms:** Google Forms integration (external)
- **Deployment:** Designed for static hosting (GitHub Pages, Netlify, Vercel)

## Codebase Structure

```
wedding-site/
├── .claude/
│   └── settings.json          # Claude Code settings (frontend-design plugin enabled)
├── .git/                      # Git repository
├── css/
│   └── styles.css            # All styles (8799 bytes, ~461 lines)
├── js/
│   └── script.js             # JavaScript interactions (1313 bytes, ~44 lines)
├── index.html                # Main wedding page (4834 bytes, ~108 lines)
├── details.html              # Details & information page (3833 bytes, ~84 lines)
├── package.json              # NPM configuration
├── .gitignore                # Git ignore rules
└── README.md                 # Project documentation (5309 bytes)
```

### Missing Directories
- `images/` - Does not exist yet, should be created when adding images

## File Responsibilities

### HTML Files

#### `index.html` (Main Page)
**Purpose:** Primary landing page for wedding information

**Key Sections:**
1. **Hero Section** (lines 13-20)
   - Couple names: "Gabriella & Patrick Bardo"
   - Tagline: "We're getting married!"
   - Wedding date and venue
   - Background: Gradient (accent to secondary color)

2. **Navigation** (lines 22-28)
   - Sticky navigation bar
   - Links: Our Story, Schedule, Venue, Details & Info, RSVP

3. **Our Story Section** (lines 31-36)
   - Currently placeholder: "Add your story here..."
   - ID: `#story`

4. **Schedule Section** (lines 38-70)
   - Two-day event structure
   - **Thursday, June 5, 2026:** Welcome BBQ at 19:00
   - **Friday, June 6, 2026:** Ceremony at 14:00, Reception at 16:00
   - Note: Schedule is tentative

5. **Venue Section** (lines 72-86)
   - Villa Vanahem details
   - Embedded Google Maps iframe (lines 80)
   - "Get Directions" button (line 83)

6. **RSVP Section** (lines 88-98)
   - Placeholder for RSVP deadline
   - Google Form link (currently "YOUR_GOOGLE_FORM_URL_HERE")
   - Option to embed iframe instead

7. **Footer** (lines 101-103)
   - Copyright notice

#### `details.html` (Information Page)
**Purpose:** Detailed information for guests

**Key Sections:**
1. **Page Header** (lines 13-19)
   - Title: "Details & Information"
   - Back to Home link

2. **Navigation** (lines 21-27)
   - Same structure as index.html
   - "Details" link marked as active

3. **Info Sections** (lines 30-73)
   - **Accommodations** - Placeholder for hotel recommendations
   - **Travel & Transportation** - Placeholder for airport/travel info
   - **Important Information** (lines 43-56) - Adults-only reception policy
     - Contains thoughtful message about children policy
     - Ceremony: Children welcome
     - Reception: Adults-only (with breastfeeding exception)
   - **Parking & Arrival** - Placeholder
   - **Things to Do** - Placeholder
   - **FAQ** - Placeholder

### CSS File

#### `css/styles.css`
**Structure:** Well-organized with clear section comments

**Key Sections:**
1. **Variables & Reset** (lines 1-39)
   - CSS Custom Properties (lines 5-21)
   - Color scheme: Browns/tans/creams (primary: #8B7355, secondary: #D4AF77, accent: #C9ADA7)
   - Typography: Cormorant Garamond (headings), Montserrat (body)
   - Spacing scale: xs (0.5rem) to xl (6rem)
   - Box model reset

2. **Typography** (lines 41-68)
   - Responsive font sizes using `clamp()`
   - Heading hierarchy

3. **Layout** (lines 70-86)
   - Container: max-width 1200px
   - Section padding: 6rem vertical
   - Alternating section backgrounds

4. **Component Styles:**
   - Hero section (lines 88-125): Full viewport height, centered, gradient background
   - Navigation (lines 127-179): Sticky, underline hover effect, active state
   - Details page header (lines 181-270): Gradient background, policy box styling
   - Timeline (lines 272-332): Grid layout, hover effects
   - Venue (lines 334-365): Map container with rounded corners
   - RSVP (lines 367-389): Centered layout
   - Buttons (lines 391-425): Two variants (default, primary)
   - Footer (lines 427-437): Dark background

5. **Responsive Design** (lines 439-460)
   - Breakpoint: 768px
   - Mobile: Wrapped navigation, single-column timeline

### JavaScript File

#### `js/script.js`
**Functionality:**

1. **Smooth Scrolling** (lines 1-13)
   - Handles anchor links starting with `#`
   - Smooth scroll behavior to sections

2. **Scroll Animations** (lines 15-43)
   - IntersectionObserver for fade-in effects
   - Sections start invisible, fade in on scroll
   - Initial transform: translateY(20px)
   - Transition: 0.6s ease

## Development Workflows

### Starting Development

```bash
npm install          # Install dependencies (live-server)
npm start           # Start dev server on localhost:8080
# OR
npm run dev         # Same as npm start
```

### File Watching
- live-server automatically reloads on file changes
- No build process required

### Testing
- Manual testing in browser
- Check responsive design at different breakpoints
- Test smooth scrolling and animations
- Verify Google Maps and Forms integration

## Key Conventions & Patterns

### HTML Conventions
1. **Semantic HTML5:** Use semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
2. **Section IDs:** Use lowercase with hyphens for anchor links (#story, #schedule, #venue, #rsvp)
3. **BEM-like Classes:** Descriptive class names (e.g., `.hero-content`, `.timeline-item`, `.venue-info`)
4. **Accessibility:** Include proper `alt` attributes, semantic structure, ARIA labels where needed

### CSS Conventions
1. **CSS Custom Properties:** Use variables defined in `:root` for colors, fonts, spacing
2. **Mobile-First:** Base styles work on mobile, media queries enhance for desktop
3. **Clamp for Typography:** Use `clamp()` for responsive font sizes
4. **Consistent Spacing:** Use CSS variables (--spacing-xs through --spacing-xl)
5. **Section Comments:** Clearly delineate sections with comment blocks
6. **Transitions:** Standard 0.3s ease for interactive elements
7. **Box Shadows:** Subtle shadows (rgba(0, 0, 0, 0.05) to 0.1)

### JavaScript Conventions
1. **ES6+:** Use modern JavaScript (arrow functions, const/let, forEach)
2. **Event Delegation:** Use querySelectorAll for multiple elements
3. **Intersection Observer:** Preferred for scroll-based animations
4. **Smooth Scrolling:** Native CSS scroll-behavior with JS fallback

### Git Conventions
1. **Branch Naming:** Use `claude/` prefix followed by descriptive name and session ID
2. **Ignored Files:** node_modules, package-lock.json, build outputs, .env files, OS files, editor configs

## Common Tasks

### Updating Wedding Information

1. **Change Couple Names:** Edit `index.html` line 15-16, update footer in both files
2. **Update Date/Venue:** Edit `index.html` line 18
3. **Add Story:** Replace placeholder in `index.html` lines 31-35
4. **Modify Schedule:** Edit timeline items in `index.html` lines 38-70
5. **Update Venue Info:** Edit `index.html` lines 72-86

### Customizing Design

1. **Change Colors:**
   - Edit CSS variables in `css/styles.css` lines 6-11
   - Primary color affects most interactive elements
   - Gradient uses accent and secondary colors

2. **Change Fonts:**
   - Update Google Fonts link in HTML `<head>`
   - Modify `--font-heading` and `--font-body` in CSS (lines 13-14)

3. **Adjust Spacing:**
   - Modify spacing variables in CSS (lines 16-20)
   - Consistent spacing scale ensures harmony

### Adding Images

1. **Create Images Directory:**
   ```bash
   mkdir images
   ```

2. **Add Hero Background:**
   - Place image in `images/` folder
   - Add to `.hero` class in CSS:
     ```css
     .hero {
         background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('../images/hero.jpg');
         background-size: cover;
         background-position: center;
     }
     ```

3. **Add Photo Gallery:** Create new section in `index.html` with grid layout

### Google Forms Integration

**Method 1: Link (Current)**
- Create Google Form
- Get shareable link
- Replace `YOUR_GOOGLE_FORM_URL_HERE` in `index.html` line 94

**Method 2: Embed**
- Get iframe code from Google Forms
- Replace RSVP container content (lines 92-96) with iframe
- Adjust styling as needed

### Google Maps Customization

1. Search venue on Google Maps
2. Click Share → Embed a map
3. Copy iframe code
4. Replace iframe in `index.html` line 80
5. Update "Get Directions" link in line 83 with venue address

### Adding New Sections

1. Add section to `index.html`:
   ```html
   <section id="new-section" class="section">
       <div class="container">
           <h2>Section Title</h2>
           <p>Content here...</p>
       </div>
   </section>
   ```

2. Add navigation link (line 22-28)
3. Style in `css/styles.css` if needed
4. Sections automatically get fade-in animation

## Important Considerations for AI Assistants

### Content Sensitivity
- This is a **personal wedding website** with specific dates, names, and policies
- The **adults-only reception policy** (details.html lines 43-56) is carefully worded - preserve the tone
- The couple is **Patrick (Canadian/Polish) & Gabriella (Swedish)** - maintain correct spelling
- **Venue is in Sweden** - consider Swedish conventions when suggesting changes

### Placeholder Content
These sections need completion but are intentionally placeholders:
- "Our Story" section (index.html line 34)
- RSVP deadline date (index.html line 91)
- Google Form URL (index.html line 94)
- Accommodations (details.html lines 33-35)
- Travel & Transportation (details.html lines 37-40)
- Parking & Arrival (details.html lines 60-62)
- Things to Do (details.html lines 65-67)
- FAQ (details.html lines 70-72)

**Do not** fill these with dummy content unless explicitly asked - they require real information.

### Design Principles
- **Elegance over flashiness:** Keep design clean and sophisticated
- **Readability first:** Ensure text is legible on all devices
- **Performance:** Site should load quickly (pure HTML/CSS/JS, no frameworks)
- **Accessibility:** Maintain semantic HTML and proper contrast ratios
- **Mobile-friendly:** Test responsive behavior (breakpoint at 768px)

### When Making Changes

1. **Read before editing:** Always read files before modifying
2. **Preserve structure:** Maintain the existing HTML hierarchy and CSS organization
3. **Match existing patterns:** Follow established naming conventions
4. **Test responsiveness:** Consider mobile (< 768px) and desktop views
5. **Maintain colors:** Use existing CSS variables rather than hardcoding colors
6. **Keep it simple:** This is a static site - avoid over-engineering
7. **Comment sections:** If adding new CSS, follow the section comment pattern

### What NOT to Do

1. **Don't add frameworks:** This is intentionally framework-free (no React, Vue, etc.)
2. **Don't add build tools:** No webpack, babel, or preprocessors needed
3. **Don't change the color scheme** without explicit request
4. **Don't modify the children policy wording** without clear direction
5. **Don't fill placeholders** with fake data
6. **Don't add features** beyond what's requested
7. **Don't remove the tentative schedule note** - it's intentional

### Testing Checklist

When making changes, verify:
- [ ] Site loads correctly on live-server
- [ ] Smooth scrolling works for anchor links
- [ ] Fade-in animations trigger on scroll
- [ ] Navigation sticky behavior works
- [ ] Responsive design works at 768px breakpoint
- [ ] Google Maps embed displays correctly
- [ ] All links work (especially "Get Directions" and "Back to Home")
- [ ] Colors use CSS variables, not hardcoded values
- [ ] Typography scales properly with clamp()

### Common Pitfalls

1. **Hardcoding values:** Always use CSS variables for colors, fonts, and spacing
2. **Breaking smooth scroll:** Ensure anchor links start with `#` and target exists
3. **Missing container divs:** Most sections need `.container` wrapper for max-width
4. **Forgetting mobile:** Test changes at < 768px width
5. **Inconsistent spacing:** Use spacing variables, not arbitrary rem/px values
6. **Overwriting animations:** The `.section` fade-in is applied via JS - don't override in CSS

## Claude Code Configuration

### Enabled Plugins
- `frontend-design@claude-plugins-official`: Enabled for frontend development assistance

### Git Workflow
- Current branch: `claude/add-claude-documentation-fL6SN`
- Main branch: (to be determined)
- Clean working directory at project start
- Follow standard git conventions for commits

## Deployment Options

### GitHub Pages
1. Push to GitHub
2. Settings → Pages
3. Select branch and root folder
4. Site live at username.github.io/wedding-site

### Netlify
1. Connect GitHub repository
2. Auto-deploy on push
3. No build command needed

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` command
3. Follow prompts

**Note:** All options work with static sites - no build configuration required.

## Questions to Ask Users

When unclear about changes, ask about:

1. **Content updates:** "Should I update the placeholder text or leave it for you to fill?"
2. **Design changes:** "Would you like me to modify the color scheme, or maintain the current brown/tan palette?"
3. **New features:** "Do you want to add a photo gallery, gift registry, or other sections?"
4. **Google Forms:** "Have you created the Google Form? I can help integrate it."
5. **Deployment:** "Are you planning to deploy to GitHub Pages, Netlify, or Vercel?"
6. **Images:** "Do you have photos ready? I can set up the images folder and background images."

## Summary for Quick Reference

**Project Type:** Static wedding website (HTML/CSS/JS)
**Key Files:** index.html (main), details.html (info), styles.css (all styles), script.js (animations)
**Dev Command:** `npm start` → localhost:8080
**Design:** Elegant brown/tan color scheme, serif headings, sans-serif body
**Special Features:** Smooth scrolling, fade-in animations, Google Maps/Forms integration, adults-only policy
**Mobile Breakpoint:** 768px
**Deployment:** Ready for static hosting (no build required)

---

**Last Updated:** January 2, 2026
**Codebase Status:** Initial structure complete, placeholders need content
**Ready For:** Content updates, Google Forms integration, image additions, deployment
