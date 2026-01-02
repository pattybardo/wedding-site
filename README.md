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
- Automatic photo slideshow in hero section with elegant overlay
- Smooth scrolling navigation
- Main page with story, schedule, venue, and RSVP sections
- Separate details page for accommodations, travel, and policies
- Google Forms integration for RSVP management
- Fade-in animations on scroll
- Mobile-friendly design

## Project Structure

```
wedding-site/
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions deployment workflow
├── index.html          # Main wedding page
├── details.html        # Details & information page
├── css/
│   └── styles.css      # All styling
├── js/
│   └── script.js       # JavaScript for interactions
├── images/             # Your couple photos for the slideshow
├── package.json        # Project dependencies
├── .gitignore          # Git ignore file
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

### Hero Slideshow

The hero section features an automatic photo slideshow that cycles through your images every 5 seconds.

**Current Setup:**
- 19 photos are cycling in the slideshow
- Images are in the `images/` folder
- Smooth fade transitions between photos
- Color-tinted overlay ensures text remains readable
- Handles different aspect ratios automatically

**To customize:**

1. **Add/Remove Photos:**
   - Add your photos to the `images/` folder
   - Update the slideshow in `index.html` (lines 14-72)
   - Add or remove `<div class="slide">` blocks as needed

2. **Change Slide Duration:**
   - Edit `js/script.js` line 4
   - Change `slideInterval = 5000` (value in milliseconds)

3. **Adjust Photo Crop Position:**
   - Some photos may cut off faces or important parts when cropped
   - Add a class to the `<img>` tag to change the crop position
   - Works on all devices including mobile

   **Available crop classes:**
   - `crop-top` - Focus on top of image (good for faces)
   - `crop-bottom` - Focus on bottom of image
   - `crop-left` - Focus on left side
   - `crop-right` - Focus on right side
   - `crop-top-left` - Focus on top-left corner
   - `crop-top-right` - Focus on top-right corner
   - `crop-bottom-left` - Focus on bottom-left corner
   - `crop-bottom-right` - Focus on bottom-right corner
   - `crop-upper` - Focus slightly above center (30% from top)
   - `crop-lower` - Focus slightly below center (70% from top)

   **Example:**
   ```html
   <!-- Default center crop -->
   <div class="slide">
       <img src="images/photo1.jpg" alt="Patrick & Gabriella">
   </div>

   <!-- Crop to show faces at top of image -->
   <div class="slide">
       <img src="images/photo2.jpg" class="crop-top" alt="Patrick & Gabriella">
   </div>

   <!-- Fine-tune to upper portion -->
   <div class="slide">
       <img src="images/photo3.jpg" class="crop-upper" alt="Patrick & Gabriella">
   </div>
   ```

4. **Adjust Overlay Color:**
   - Edit `css/styles.css` (lines 177-182)
   - Modify the gradient colors in `.hero-overlay`

## Deployment

### GitHub Pages (Recommended)

This repository includes a GitHub Actions workflow that automatically deploys your site to GitHub Pages whenever you push to the main branch.

**Initial Setup:**

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial wedding site commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages** (in the left sidebar)
   - Under "Build and deployment":
     - Source: Select **GitHub Actions**
   - Click **Save**

3. **Wait for deployment**
   - Go to the **Actions** tab in your repository
   - You'll see the "Deploy to GitHub Pages" workflow running
   - Once complete (green checkmark), your site is live!

4. **Access your site**
   - Your site will be live at: `https://[your-username].github.io/wedding-site`
   - Or if you have a custom domain configured: your custom domain

**Making Changes:**

After the initial setup, any changes you push to the main branch will automatically trigger a new deployment:

```bash
git add .
git commit -m "Update wedding details"
git push origin main
```

The site will update automatically within 1-2 minutes.

**Using Claude Web:**

Once deployed, you can use Claude on the web to make changes:
1. Access your repository through GitHub
2. Use Claude to edit files directly
3. Commit and push changes
4. View the updated site on your phone at your GitHub Pages URL

### Alternative: Netlify

1. Push to GitHub
2. Connect your repository to Netlify
3. Deploy automatically on every push

### Alternative: Vercel

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
