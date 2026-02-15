# 🏷️ Label Park — React Website

Multi-page React website for Label Park, Tiruppur — fully responsive, animated, with real email sending.

---

## ⚡ Quick Start (3 commands)

```bash
# 1. Enter the folder
cd labelpark-app

# 2. Install packages (one-time, ~2 min)
npm install

# 3. Start dev server
npm start
```
→ Opens automatically at **http://localhost:3000**

**Requires:** Node.js 14+ → download from https://nodejs.org (choose LTS)

---

## 📧 Activate Real Email Sending to labelparkcbe@gmail.com

The contact form sends enquiries to **labelparkcbe@gmail.com** using EmailJS (free, no backend needed).

### Step 1 — Sign up at EmailJS (free)
→ https://www.emailjs.com/  
Free plan: **200 emails/month**

### Step 2 — Add Gmail Service
1. Dashboard → **Email Services** → **Add New Service**
2. Choose **Gmail**
3. Click **Connect Account** → sign in with `labelparkcbe@gmail.com`
4. Service Name: `Label Park`
5. Click **Create Service**
6. Copy the **Service ID** (e.g. `service_abc1234`)

### Step 3 — Create Email Template
1. **Email Templates** → **Create New Template**
2. Fill in:

   **Subject:**
   ```
   New Enquiry from {{from_name}} – Label Park
   ```

   **Body:**
   ```
   Hello Label Park Team,

   You have received a new enquiry:

   Name:    {{from_name}}
   Company: {{company}}
   Email:   {{from_email}}
   Phone:   {{phone}}
   Product: {{product}}

   Message:
   {{message}}

   ---
   Sent via labelpark.in contact form
   ```

   **To Email:** `labelparkcbe@gmail.com`

3. Click **Save** → copy the **Template ID** (e.g. `template_xyz9876`)

### Step 4 — Get your Public Key
1. Top-right → **Account** → **General**
2. Copy **Public Key** (e.g. `ABC123XYZ456...`)

### Step 5 — Paste into Contact.jsx
Open `src/pages/Contact.jsx` and replace these 3 lines:

```js
const SERVICE_ID  = 'YOUR_SERVICE_ID';   // ← e.g. 'service_abc1234'
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // ← e.g. 'template_xyz9876'
const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';  // ← e.g. 'ABC123XYZ456...'
```

✅ Done! The form will now send real emails to **labelparkcbe@gmail.com**

> **Before EmailJS is set up:** The form still works — it opens the user's email app with a pre-filled message as a fallback.

---

## 📁 Project Structure

```
labelpark-app/
├── public/index.html
├── src/
│   ├── assets/images/       ← all product & logo images
│   ├── components/
│   │   ├── Navbar.jsx       ← fixed navbar, mobile hamburger, dropdown
│   │   └── Footer.jsx       ← 4-column footer
│   ├── hooks/
│   │   └── useScrollReveal.js  ← scroll animations
│   ├── pages/
│   │   ├── Home.jsx         ← landing page
│   │   ├── About.jsx        ← company story
│   │   ├── Products.jsx     ← labels & stickers
│   │   ├── Printers.jsx     ← Citizen & Postek printers
│   │   ├── Scanners.jsx     ← TVS & Honeywell scanners
│   │   ├── Services.jsx     ← AMC & Technical support
│   │   └── Contact.jsx      ← quote form → labelparkcbe@gmail.com
│   ├── App.jsx              ← router
│   ├── index.js             ← entry point
│   └── index.css            ← all styles + animations + responsive
└── package.json
```

---

## 📱 Responsive Breakpoints

| Screen | Layout |
|--------|--------|
| Desktop (>1200px) | Full 3–4 column grids |
| Tablet (900–1200px) | 2-column grids |
| Mobile (640–900px) | Single column, hamburger menu |
| Small (< 640px) | Compact layout, stacked buttons |

---

## 🏗️ Build for Production

```bash
npm run build
```
Creates optimized `build/` folder → upload to any web host.

### Deploy FREE on Netlify
1. `npm run build`
2. Go to https://app.netlify.com → drag & drop the `build/` folder
3. Site goes live instantly with a free HTTPS URL!

---

## 🛠️ Common Issues

```bash
# If npm install fails:
npm install --legacy-peer-deps

# If port 3000 is busy:
PORT=3001 npm start

# If node_modules is broken:
rm -rf node_modules && npm install
```
