# Wedding Website

An elegant, static wedding website with RSVP integration via Google Forms.

## Wedding Information

**Couple:** Patrick & Gabriella Bardo
- **Patrick:** Canadian, with family primarily from Poland
- **Gabriella:** Swedish

**Dates:** June 5-6, 2026

**Venue:** Villa Vanahem, Stenungsund, Sweden
- Address: Österbergs väg 1, 444 48 Stenungsund

**Schedule (Tentative):**

*Thursday, June 5, 2026*
- Welcome BBQ: 19:00 - A relaxed evening for guests to mingle and meet before the wedding

*Friday, June 6, 2026*
- Ceremony: 14:00
- Reception: 16:00

**RSVP Form Note:** The Google Form should include a question asking how many guests will attend the Welcome BBQ on June 5th.

## Features

- Clean, elegant design with responsive layout
- Smooth scrolling navigation
- Main page with story, schedule, venue, and RSVP sections
- Separate details page for accommodations, travel, and policies
- Google Forms integration for RSVP management
- Fade-in animations on scroll
- Mobile-friendly design

## Project Structure

```
wedding-site/
├── index.html          # Main wedding page
├── details.html        # Details & information page
├── css/
│   └── styles.css      # All styling
├── js/
│   └── script.js       # JavaScript for interactions
├── images/             # Place your images here
├── package.json        # Project dependencies
└── README.md          # This file
```

## Getting Started

### Prerequisites

- Node.js installed on your system

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

This will open the website in your browser at `http://localhost:8080`

## Customization

### Update Wedding Details

Edit `index.html` to customize:
- Bride & Groom names (line 17)
- Wedding date and location (line 19)
- Your story (line 31)
- Schedule times and events (lines 38-49)
- Venue information (lines 56-60)
- RSVP deadline (line 68)

### Update Details Page

Edit `details.html` to add information for:
- **Accommodations**: Hotel recommendations with booking links and room blocks
- **Travel & Transportation**: Airport information, rental cars, shuttle services
- **Parking & Arrival**: Specific venue parking instructions
- **Things to Do**: Local attractions, restaurants, and activities for guests
- **FAQ**: Common questions about dress code, gifts, timeline, etc.

**Note:** The "Important Information" section already includes a warm message about the adults-only reception policy with an exception for breastfeeding mothers. This can be adjusted as needed.

### Google Form Integration

#### Option 1: Link to Google Form (Current)
1. Create a Google Form for RSVPs
2. Get the shareable link
3. Replace `YOUR_GOOGLE_FORM_URL_HERE` in index.html (line 71)

#### Option 2: Embed Google Form
1. Create a Google Form
2. Click "Send" → "<>" (embed) icon
3. Copy the iframe code
4. Replace the RSVP section content with the iframe

Example:
```html
<div class="rsvp-container">
    <iframe src="YOUR_GOOGLE_FORM_URL" width="640" height="800" frameborder="0">Loading...</iframe>
</div>
```

### Google Maps Integration

The venue section includes an embedded Google Map. To customize it for your venue:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your venue address
3. Click "Share" button
4. Click "Embed a map" tab
5. Copy the iframe code
6. Replace the iframe in index.html (line 62-70) with your copied code

Also update the "Get Directions" button:
- Replace `YOUR_VENUE_ADDRESS_HERE` in index.html (line 73) with your venue address

### Customize Colors

Edit CSS variables in `css/styles.css` (lines 7-12):
```css
--color-primary: #8B7355;      /* Main brand color */
--color-secondary: #D4AF77;    /* Secondary accent */
--color-accent: #C9ADA7;       /* Additional accent */
```

### Add Images

1. Place images in the `images/` folder
2. Update the hero section in `index.html` to add a background image:
```css
.hero {
    background-image: url('../images/your-photo.jpg');
    background-size: cover;
    background-position: center;
}
```

## Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select branch (main) and folder (root)
4. Your site will be live at `https://username.github.io/wedding-site`

### Netlify

1. Push to GitHub
2. Connect your repository to Netlify
3. Deploy automatically on every push

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## Managing RSVPs

### Google Forms Setup

1. Create a form with fields:
   - Name
   - Email
   - Number of Guests (for wedding ceremony/reception)
   - **Number attending Welcome BBQ (June 5th)** - Important for catering
   - Dietary Restrictions
   - Song Requests (optional)
   - Message to Couple (optional)

2. Responses are saved to Google Sheets automatically
3. You can view and manage responses in real-time

**Note:** Make sure to include a clear question about the Welcome BBQ attendance, as this is a separate event the night before the wedding where guests can mingle in a relaxed setting.

## License

MIT

## Notes

This is a static website - no backend required. All RSVP data is managed through Google Forms/Sheets for simplicity.
