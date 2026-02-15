# 🏷️ Label Park – React Website

Official website for **Label Park**, Chennai's leading manufacturer and exporter of barcode labels, multicolor stickers, and Auto ID solutions.

---

## 🖥️ Tech Stack

| Tech | Version | Purpose |
|------|---------|---------|
| **React** | 18.2 | UI framework |
| **React Router DOM** | 6.x | Multi-page routing |
| **CSS Animations** | Native | Scroll reveals, keyframes, hover effects |
| **Intersection Observer** | Native | Scroll-triggered animations |
| **Google Fonts** | Barlow + Barlow Condensed | Typography |

---

## 📁 Project Structure

```
labelpark-app/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── assets/
│   │   └── images/             # All product & logo images
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed navbar with dropdown
│   │   └── Footer.jsx          # 4-column footer
│   ├── hooks/
│   │   └── useScrollReveal.js  # Intersection Observer scroll animations
│   ├── pages/
│   │   ├── Home.jsx            # Landing page (Hero, About strip, Products, Stats, CTA)
│   │   ├── About.jsx           # Company story, advantages, industries
│   │   ├── Products.jsx        # Labels & stickers grid (8 products)
│   │   ├── Printers.jsx        # Citizen & Postek printer catalog
│   │   ├── Scanners.jsx        # TVS & Honeywell scanner pages
│   │   ├── Services.jsx        # AMC & Technical Support details
│   │   └── Contact.jsx         # Quote request form
│   ├── App.jsx                 # Router + layout wrapper
│   ├── index.js                # React entry point
│   └── index.css               # Global styles, animations, variables
├── package.json
└── README.md
```

---

## ⚙️ Prerequisites

Make sure you have the following installed on your computer:

### 1. Install Node.js
Download and install from: **https://nodejs.org**
- Choose **LTS version** (recommended)
- Minimum version required: **Node.js 14+**

To verify installation, open a terminal and run:
```bash
node --version   # should show v14.x.x or higher
npm --version    # should show 6.x.x or higher
```

---

## 🚀 How to Run the Website

### Step 1 — Unzip the project
Extract the downloaded zip file to a folder on your computer.

### Step 2 — Open terminal / command prompt
- **Windows**: Press `Win + R`, type `cmd`, press Enter
- **Mac**: Press `Cmd + Space`, type `Terminal`, press Enter
- **VS Code**: Open the folder in VS Code, then press `` Ctrl + ` `` to open the terminal

### Step 3 — Navigate to the project folder
```bash
cd path/to/labelpark-app
```
Example:
```bash
cd C:\Users\YourName\Downloads\labelpark-app     # Windows
cd /Users/YourName/Downloads/labelpark-app       # Mac/Linux
```

### Step 4 — Install dependencies
```bash
npm install
```
> This downloads React and all required packages. It may take 1-3 minutes. You'll see a `node_modules/` folder created.

### Step 5 — Start the development server
```bash
npm start
```
> This will automatically open your browser at **http://localhost:3000**
> The website will **hot-reload** — any changes you make will instantly appear without refreshing.

---

## 🏗️ Build for Production (Deploy)

To create an optimized production build:
```bash
npm run build
```
This generates a `build/` folder with all optimized files ready to upload to any web hosting provider (Hostinger, GoDaddy, Netlify, Vercel, etc.).

### Deploy to Netlify (Free)
1. Run `npm run build`
2. Go to **https://netlify.com** → Sign up free
3. Drag & drop the `build/` folder onto the Netlify dashboard
4. Your website is live instantly with a free URL!

### Deploy to Vercel (Free)
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel` in the project folder
3. Follow the prompts — website goes live automatically!

---

## 🎨 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero, featured products, stats, CTA |
| `/about` | About | Company story, advantages, industries served |
| `/products` | Products | All 8 label & sticker products |
| `/printers` | Printers | Citizen & Postek barcode printer catalog |
| `/scanners` | Scanners | TVS & Honeywell barcode scanners |
| `/services` | Services | AMC & Technical Support |
| `/contact` | Contact | Quote request form |

---

## ✨ Animation Features

| Animation | Where Used |
|-----------|-----------|
| `fadeUp` | Hero headline, badges, buttons |
| `barcode-bg` | Hero & CTA — animated scrolling barcode lines |
| `float` | Hero decorative rings |
| `pulse-ring` | Hero live indicator dots |
| `counter` | Stats section — animated number counting |
| `scroll reveal` | All cards, sections (Intersection Observer) |
| `hover lift` | All product cards, printer cards |
| `image zoom` | Product image hover zoom |
| `dropdown` | Navbar Products dropdown with arrow rotation |
| `page fade` | Every page transition |

---

## 🎨 Customization

### Change Colors
Edit `src/index.css` — update CSS variables at the top:
```css
:root {
  --green:        #1b9e2d;   /* Main brand green */
  --green-dark:   #0e6b1b;   /* Darker green */
  --green-accent: #3dd958;   /* Bright accent green */
}
```

### Add/Edit Products
Edit `src/pages/Products.jsx` — update the `labels` array.

### Update Company Info
Edit `src/pages/Contact.jsx` — update address, email, phone.

### Replace Logo
Replace `src/assets/images/logo.png` with your updated logo file.

---

## 🆘 Common Issues

**`npm install` fails?**
```bash
npm install --legacy-peer-deps
```

**Port 3000 already in use?**
```bash
npm start -- --port 3001
```
Or set environment variable: `PORT=3001 npm start`

**`node_modules` errors?**
Delete the folder and reinstall:
```bash
rm -rf node_modules
npm install
```

---

## 📞 Support

For any issues or customizations, contact the development team.

---

*Built with ❤️ for Label Park, Chennai*
