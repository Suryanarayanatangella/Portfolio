# WeXL Platform - Quick Start Guide

## 🚀 Get Up and Running in 5 Minutes

### Step 1: Navigate to Project
```bash
cd wexl-platform
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
Open [http://localhost:5173](http://localhost:5173)

---

## 🎯 What You'll See

### Available Pages
- **Home** - `http://localhost:5173/`
- **About** - `http://localhost:5173/about`
- **Products** - `http://localhost:5173/products`
- **Solutions** - `http://localhost:5173/solutions`
- **Contact** - `http://localhost:5173/contact`
- **Demo** - `http://localhost:5173/demo`

### Test the Lead Form
1. Navigate to Contact or Demo page
2. Fill out the form
3. Submit to see mock API in action
4. Check browser console for submission details

---

## 🔧 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 📱 Test Responsive Design

### Desktop View
- Open in browser normally
- Test navigation and all features

### Mobile View
1. Open DevTools (F12)
2. Click device toolbar icon
3. Select mobile device
4. Test hamburger menu and mobile layout

### Tablet View
1. Open DevTools (F12)
2. Select tablet device (iPad, etc.)
3. Test responsive grid layouts

---

## ✅ Quick Feature Checklist

Test these features:

- [ ] Navigation works on all pages
- [ ] Mobile menu opens/closes
- [ ] Lead form validates fields
- [ ] Form submission shows success message
- [ ] All buttons have hover effects
- [ ] Cards have hover animations
- [ ] Footer links work
- [ ] Responsive on mobile/tablet/desktop

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:5173 | xargs kill -9
```

### Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Tailwind Styles Not Working
```bash
# Restart dev server
# Press Ctrl+C to stop
npm run dev
```

---

## 📝 Making Your First Change

### Change Homepage Hero Text

1. Open `wexl-platform/src/pages/Home.jsx`
2. Find the hero section (around line 50)
3. Change the heading text
4. Save file
5. See instant update in browser (Hot Module Replacement)

### Change Primary Color

1. Open `wexl-platform/tailwind.config.js`
2. Find `colors.primary`
3. Change the hex value
4. Save file
5. See color update across entire site

---

## 🎨 Design System Quick Reference

### Colors
```jsx
className="text-primary"      // #113e59 (Teal Blue)
className="text-accent"       // #f6b519 (Golden Yellow)
className="bg-background"     // #F5F7FA (Cool Gray)
className="text-textPrimary"  // #2E3A59 (Charcoal Gray)
```

### Typography
```jsx
className="font-dm-sans"      // Headings
className="font-source-sans"  // Body text
```

### Spacing
```jsx
className="p-4"   // padding: 1rem (16px)
className="m-8"   // margin: 2rem (32px)
className="gap-6" // gap: 1.5rem (24px)
```

---

## 📚 Next Steps

1. **Explore the Code**
   - Check out `src/components/` for reusable components
   - Look at `src/pages/` for page implementations
   - Review `src/features/leads/` for Redux state management

2. **Read Documentation**
   - `README.md` - Comprehensive project documentation
   - `DEVELOPMENT.md` - Development guidelines
   - `PROJECT_SUMMARY.md` - Project overview

3. **Start Building**
   - Add new pages
   - Create custom components
   - Integrate with backend API

---

## 🎉 You're Ready!

The WeXL platform is now running locally. Start exploring, testing, and building!

**Need Help?**
- Check `DEVELOPMENT.md` for detailed guides
- Review component code for examples
- Test the lead form to see Redux in action

---

**Happy Coding! 🚀**
