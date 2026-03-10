# VKSTech — vkstech.com

Personal website & app showcase by **Vivek Kumar** — M.Tech (GATE), Mechanical Engineer, NIT Uttarakhand.

---

## 📁 Project Structure

```
vkstech/
├── index.html          ← Main website (single-page)
├── vercel.json         ← Vercel deployment config
├── images/
│   ├── ankit.png       ← ✅ Ankit Bhardwaj photo (included)
│   ├── papa.jpeg       ← ⚠️ ADD YOUR FATHER'S PHOTO HERE
│   └── mom.jpeg        ← ⚠️ ADD YOUR MOTHER'S PHOTO HERE
└── README.md           ← This file
```

---

## 🖼️ Step 1 — Add Your Photos

1. **Rename** your father's photo to: `papa.jpeg`
2. **Rename** your mother's photo to: `mom.jpeg`
3. **Place** both files inside the `images/` folder
4. Ankit's photo is already included ✅

> **Photo Tips:** Square or portrait orientation works best. Photos will be displayed in a circular crop.

---

## 🔥 Step 2 — Setup Firebase (for form data)

### Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** → Name it `vkstech` → Create
3. Go to **Project Settings** (⚙️ gear icon) → **General** → scroll to **"Your apps"**
4. Click **Web** (</>) icon → Register app name `vkstech-web`
5. **Copy the config object** — you'll need it in step 6

### Enable Firestore Database
1. In Firebase Console → **Build** → **Firestore Database**
2. Click **"Create database"**
3. Choose **"Start in test mode"** (you can secure rules later)
4. Select your region → **Enable**

### Add Config to Website
1. Open `index.html` in a text editor
2. Find this section near the top (search for `YOUR_API_KEY`):
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```
3. **Replace** with YOUR actual Firebase config values

### Secure Firestore (after testing)
Go to Firestore → **Rules** tab → Replace with:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /app-requests/{document=**} {
      allow create: if true;          // Anyone can submit
      allow read, update, delete: if false; // Only you via console
    }
  }
}
```

---

## 🚀 Step 3 — Deploy to Vercel

### Method A: Via GitHub (Recommended)

1. **Create GitHub repo:**
   - Go to [github.com/new](https://github.com/new)
   - Name: `vkstech` (or `vkstech.com`)
   - Make it **Public** or Private
   - Click **"Create repository"**

2. **Upload files:**
   - Click **"uploading an existing file"** link
   - Drag & drop ALL files from this `vkstech/` folder
   - Include: `index.html`, `vercel.json`, `images/` folder
   - Click **"Commit changes"**

3. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com) → Sign in with GitHub
   - Click **"Add New..."** → **"Project"**
   - Find your `vkstech` repo → Click **"Import"**
   - Framework: **Other** (it's static HTML)
   - Click **"Deploy"** ✅
   - Your site goes live at: `vkstech.vercel.app`

### Method B: Direct Upload to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Open terminal in this folder
3. Run: `vercel`
4. Follow the prompts → deployed!

---

## 🌐 Step 4 — Custom Domain (vkstech.com)

1. **Buy domain** from [Namecheap](https://namecheap.com), [GoDaddy](https://godaddy.com), or [Google Domains](https://domains.google)
2. In **Vercel Dashboard** → your project → **Settings** → **Domains**
3. Add: `vkstech.com`
4. Vercel will show you **DNS records** to add
5. Go to your domain registrar → **DNS settings** → Add the records:
   - Type: `A` → Value: `76.76.21.21`
   - Type: `CNAME` → Name: `www` → Value: `cname.vercel-dns.com`
6. Wait 5-30 minutes → Your site is live at **vkstech.com** 🎉

---

## 📱 Responsive Design

The website is fully responsive:
- **Desktop** (1024px+): Full two-column layouts, all nav items visible
- **Tablet** (768-1024px): Stacked layouts, language pills visible
- **Mobile** (< 768px): Hamburger menu, touch-friendly, optimized spacing
- **Small Mobile** (< 480px): Full-width buttons, compact cards

---

## 🌍 Multi-Language Support

Built-in languages: **English**, **Hindi**, **Odia**, **Kannada**, **Bengali**

To add/edit translations, search for the `T` object in `index.html`:
```javascript
const T = {
  en: { ... },
  hi: { ... },
  // Add more languages here
};
```

---

## 📋 Checklist Before Going Live

- [ ] Added `papa.jpeg` to `images/` folder
- [ ] Added `mom.jpeg` to `images/` folder
- [ ] Replaced Firebase config with real values
- [ ] Tested form submission (check Firestore Console)
- [ ] Updated `[Father's Name]` and `[Mother's Name]` in the translations
- [ ] Connected custom domain (optional)
- [ ] Shared the link! 🎉

---

## 🛠️ Tech Stack

- **Frontend:** Pure HTML/CSS/JS (no build step needed)
- **Backend/DB:** Firebase Firestore (serverless)
- **Hosting:** Vercel (free tier)
- **Fonts:** Google Fonts (Playfair Display, Plus Jakarta Sans, etc.)
- **Design:** Responsive, multi-language, animated

---

Built with ❤️ from Haryana, India
