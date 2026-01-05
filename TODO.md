# Wedding Website - TODO List

## Quick Wins Completed ✅
- [x] Image optimization (reduced from 49MB to 11MB)
- [x] Skip navigation link added
- [x] Color contrast fixes (updated #999 to #666, #666 to #555)
- [x] Slideshow progress bar increased to 6px
- [x] Email word-break fixed
- [x] Things to Do section filled in
- [x] Hotel contact details TODO comment added

## Accessibility Improvements (Separate PR)

### Critical (P0)
- [ ] **Access Modal Keyboard Trap**
  - Add instructional text: "Please enter the 4-digit access code you received with your invitation"
  - Implement proper focus management (trap focus within modal)
  - Add ARIA attributes: `role="dialog"`, `aria-labelledby`, `aria-describedby`
  - Add "Need help?" link to email/phone contact
  - Ensure ESC key closes modal
  - Restore focus when modal closes

- [ ] **Map Accessibility**
  - Add `title` attribute to all iframe maps
  - Add text fallback above maps: "View in [Google Maps](link) | [Apple Maps](link)"
  - Consider adding written directions for each location

- [ ] **Slideshow Accessibility**
  - Add ARIA labels to slideshow control button
  - Add keyboard access to pause/play from slideshow area
  - Add slide counter (e.g., "Photo 3 of 18")
  - Ensure screen readers announce slide changes

- [ ] **Focus Indicators**
  - Add visible focus indicators to all interactive elements
  - Ensure focus outline meets WCAG contrast requirements
  - Test keyboard navigation throughout site

### High Priority (P1)
- [ ] **Improve Slideshow alt Text**
  - Replace generic "Patrick & Gabriella" with descriptive alt text for each image
  - Examples: "Patrick and Gabriella hiking in the mountains", "The couple at sunset on the beach"

- [ ] **Link Purpose Clarity**
  - Review all links for clarity out of context
  - Update "Get Directions" to "Get Directions to Villa Vanahem"
  - Add aria-labels where needed

## Content Improvements

### High Priority (P1)
- [ ] **Hotel Booking Details** (See HTML TODO comment)
  - Add Stenungsbad Yacht Club phone number
  - Add hotel email address
  - Add direct website link
  - Add booking code/reference if available
  - Add booking deadline date

- [ ] **Missing Critical Information**
  - [ ] Gift Registry
    - Add gift preferences or registry links
    - Clarify Swedish vs international gift customs if needed
  - [ ] Dietary Restrictions
    - Add to RSVP form instructions
    - Ensure guests know to include dietary needs
  - [ ] Parking Details
    - Populate "Parking & Arrival" section (currently placeholder)
    - Include parking fees, restrictions, directions
  - [ ] Weather Contingency
    - Add backup plan for outdoor ceremony
    - Set guest expectations for rain possibility
  - [ ] Accommodation Booking Deadline
    - Add deadline to book at group rate for hotel block

- [ ] **Schedule Finalization**
  - Either finalize schedule and remove "tentative" note
  - Or add: "Final schedule will be confirmed by [DATE]"
  - Add notification method for changes

- [ ] **RSVP Deadline Prominence**
  - Make March 1st deadline more visually prominent
  - Consider adding countdown timer
  - Add calendar reminder link
  - Add FAQ: "When is the RSVP deadline?"

## Navigation & UX

### High Priority (P1)
- [ ] **Navigation Improvements**
  - Implement scroll-spy for active section highlighting on index.html
  - Fix mobile navigation wrapping (consider hamburger menu)
  - Increase touch target size to minimum 44x44px on mobile
  - Consider tablet breakpoint (1024px) for better medium-screen experience

- [ ] **Hero Scroll Indicator**
  - Add scroll indicator arrow/animation at bottom of hero
  - Help users discover content below fold

## Enhancement Opportunities (P2)

- [ ] **Progressive Photo Loading**
  - Implement lazy loading for slideshow images
  - Load first 3 images initially, others in background
  - Add low-quality image placeholders (LQIP)
  - Consider WebP format with JPG fallback

- [ ] **Enhanced Mobile Navigation**
  - Consider bottom navigation bar for mobile
  - Or implement hamburger menu with full-screen overlay

- [ ] **Add to Calendar - Universal Format**
  - Generate .ics files for universal calendar support
  - Support Google Calendar, Apple Calendar, Outlook, etc.

- [ ] **FAQ Expandable Sections**
  - Implement accordion/disclosure pattern for FAQ
  - Better scannability on mobile
  - Users expand only relevant questions

- [ ] **Accessibility Statement**
  - Add footer link to accessibility statement
  - Show commitment, known issues, contact for accommodations
  - State WCAG conformance goal

- [ ] **Offline Support**
  - Implement service worker for offline functionality
  - Cache critical pages, venue directions, hotel info
  - Show friendly "You're offline" message for international guests with limited data

- [ ] **Multiple Language Support**
  - Consider Swedish translation or language switcher
  - At minimum, ensure Swedish guests feel welcome

- [ ] **Print Stylesheet**
  - Add @media print styles for directions and schedule
  - Hide navigation, hero, footer when printing
  - Add URL display for links

- [ ] **Guest Photos Section**
  - After wedding: add photo upload link
  - Add wedding hashtag (#BardoWedding2026 or similar)
  - Photo sharing instructions

## Testing & Validation

### Before Launch
- [ ] Run Lighthouse audit (target: Performance >90, Accessibility 100, Best Practices >90, SEO >90)
- [ ] Test with screen reader (NVDA, JAWS, or VoiceOver)
- [ ] Test keyboard-only navigation throughout site
- [ ] Test on actual mobile devices (not just browser DevTools)
- [ ] Test in bright sunlight conditions (contrast, progress bar visibility)
- [ ] Validate all external links work
- [ ] Test Google Forms integration
- [ ] Test with actual invited guests for feedback

### Browsers to Test
- [ ] Chrome/Edge (desktop & mobile)
- [ ] Firefox (desktop & mobile)
- [ ] Safari (desktop & mobile)
- [ ] Test on older devices/browsers if possible

## Performance Metrics
- Before optimization: ~49MB total images
- After optimization: ~11MB total images
- Target: Lighthouse Performance score >90

## Notes
- UX Review completed: 2026-01-05
- Overall assessment: Strong B+ (A-grade with P0 and P1 fixes)
- Focus on accessibility fixes will have highest impact
- Separate accessibility PR recommended for clear review
