# 📸 Screenshot Guide for Portfolio

## How to Add Federal Bank Screenshots

I've set up a professional image carousel using Swiper that will auto-scroll through your Federal Bank project screenshots.

---

## 📁 Folder Structure

Create this folder structure in your project:

```
wexl-platform/public/portfolio/
├── federal-bank/
│   ├── home.jpg
│   ├── products.jpg
│   ├── mobile.jpg
│   ├── screenshot-1.jpg
│   ├── screenshot-2.jpg
│   └── ... (add more as needed)
├── edtech/
│   └── screenshots...
└── other-projects/
    └── screenshots...
```

---

## 📷 How to Capture Screenshots

### **For Desktop Views:**

1. **Open Federal Bank website** in Chrome/Edge
2. **Press F12** to open DevTools
3. **Press Ctrl+Shift+P** (Windows) or Cmd+Shift+P (Mac)
4. **Type "screenshot"** and select "Capture full size screenshot"
5. **Save** with descriptive names

### **For Mobile Views:**

1. **Open DevTools** (F12)
2. **Click device toolbar** icon (or Ctrl+Shift+M)
3. **Select device** (iPhone 12 Pro, Samsung Galaxy, etc.)
4. **Capture screenshot** as above
5. **Save** as mobile-view.jpg

### **Recommended Screenshots to Capture:**

For Federal Bank project, capture:
1. ✅ Homepage (desktop)
2. ✅ Products/Services page
3. ✅ Account opening page
4. ✅ Mobile banking page
5. ✅ Customer login page
6. ✅ Mobile responsive view
7. ✅ Any unique features you built
8. ✅ Footer section
9. ✅ Navigation menu
10. ✅ Forms/interactive elements

---

## 🎨 Screenshot Specifications

### **Optimal Sizes:**
- **Desktop:** 1920x1080px or 1440x900px
- **Mobile:** 375x812px (iPhone) or 360x740px (Android)
- **Format:** JPG (for photos) or PNG (for UI with transparency)
- **Quality:** 80-90% (balance between quality and file size)

### **File Naming Convention:**
```
federal-bank-home.jpg
federal-bank-products.jpg
federal-bank-mobile-view.jpg
federal-bank-login.jpg
federal-bank-forms.jpg
```

---

## 🔧 Adding Screenshots to Portfolio

### **Step 1: Add Images to Folder**

Place your screenshots in:
```
wexl-platform/public/portfolio/federal-bank/
```

### **Step 2: Update Portfolio.jsx**

Edit the Federal Bank project screenshots array:

```javascript
screenshots: [
  {
    url: "/portfolio/federal-bank/home.jpg",
    title: "Homepage",
    description: "Main landing page with hero section and quick links"
  },
  {
    url: "/portfolio/federal-bank/products.jpg",
    title: "Products & Services",
    description: "Comprehensive banking products showcase"
  },
  {
    url: "/portfolio/federal-bank/mobile.jpg",
    title: "Mobile Banking",
    description: "Responsive mobile interface for on-the-go banking"
  },
  {
    url: "/portfolio/federal-bank/account-opening.jpg",
    title: "Account Opening",
    description: "Streamlined digital account opening process"
  },
  {
    url: "/portfolio/federal-bank/customer-portal.jpg",
    title: "Customer Portal",
    description: "Secure login and dashboard for customers"
  }
  // Add as many as you want - carousel will auto-scroll
]
```

---

## 🎬 Carousel Features

Your screenshot carousel includes:

✅ **Auto-scroll** - Automatically cycles through images every 4 seconds
✅ **Navigation arrows** - Manual control with left/right arrows
✅ **Pagination dots** - Shows current slide position
✅ **Fade effect** - Smooth transitions between images
✅ **Pause on hover** - Stops auto-scroll when user hovers
✅ **Loop** - Continuous scrolling
✅ **Responsive** - Works on all screen sizes
✅ **Touch/swipe** - Mobile-friendly gestures

---

## 💡 Pro Tips for Great Screenshots

### **Do's:**
✅ Capture full pages (use full-page screenshot)
✅ Show real content (not lorem ipsum)
✅ Include both desktop and mobile views
✅ Highlight unique features you built
✅ Show interactive elements (forms, buttons)
✅ Capture different sections of the site
✅ Use consistent browser/device frames

### **Don'ts:**
❌ Don't include personal/sensitive information
❌ Don't use blurry or low-quality images
❌ Don't crop important elements
❌ Don't include browser UI (unless intentional)
❌ Don't use screenshots with errors/broken layouts

---

## 🖼️ Image Optimization

Before adding screenshots, optimize them:

### **Online Tools (Free):**
- TinyPNG.com - Compress JPG/PNG
- Squoosh.app - Google's image optimizer
- Compressor.io - Batch compression

### **Recommended Settings:**
- **Format:** JPG for photos, PNG for UI
- **Quality:** 80-85% (good balance)
- **Max width:** 1920px (desktop), 750px (mobile)
- **File size:** Under 500KB per image

---

## 📊 Example Configuration

Here's a complete example with multiple screenshots:

```javascript
{
  name: "Federal Bank Website",
  category: "Enterprise Banking",
  screenshots: [
    {
      url: "/portfolio/federal-bank/home.jpg",
      title: "Homepage",
      description: "Modern landing page with quick access to banking services"
    },
    {
      url: "/portfolio/federal-bank/products.jpg",
      title: "Products Page",
      description: "Comprehensive showcase of banking products and services"
    },
    {
      url: "/portfolio/federal-bank/mobile-banking.jpg",
      title: "Mobile Banking",
      description: "Responsive mobile interface for seamless banking"
    },
    {
      url: "/portfolio/federal-bank/account-opening.jpg",
      title: "Digital Account Opening",
      description: "Streamlined online account opening process"
    },
    {
      url: "/portfolio/federal-bank/customer-login.jpg",
      title: "Customer Portal",
      description: "Secure login and personalized dashboard"
    },
    {
      url: "/portfolio/federal-bank/loan-calculator.jpg",
      title: "Loan Calculator",
      description: "Interactive loan EMI calculator"
    },
    {
      url: "/portfolio/federal-bank/branch-locator.jpg",
      title: "Branch Locator",
      description: "Find nearest branch with map integration"
    },
    {
      url: "/portfolio/federal-bank/responsive.jpg",
      title: "Responsive Design",
      description: "Optimized for all devices and screen sizes"
    }
  ],
  // ... rest of project details
}
```

---

## 🚀 Quick Start

### **Option 1: Provide Screenshots**

Send me your Federal Bank screenshots and I'll:
1. Optimize them
2. Add them to the project
3. Configure the carousel
4. Test everything

### **Option 2: Do It Yourself**

1. **Capture screenshots** from federalbank.co.in
2. **Optimize images** using TinyPNG
3. **Create folder:** `public/portfolio/federal-bank/`
4. **Add images** to folder
5. **Update** Portfolio.jsx with image paths
6. **Test** the carousel

---

## 📝 Screenshot Checklist

For Federal Bank project, capture:

- [ ] Homepage (desktop view)
- [ ] Homepage (mobile view)
- [ ] Products/Services page
- [ ] Account opening flow
- [ ] Customer login page
- [ ] Mobile banking interface
- [ ] Branch locator
- [ ] Loan calculator
- [ ] Credit card section
- [ ] Footer with links
- [ ] Any unique features you built

---

## 🎯 Result

Once screenshots are added, your portfolio will have:

✨ **Professional carousel** with auto-scroll
🖼️ **Multiple views** of your Federal Bank work
📱 **Desktop & mobile** screenshots
🎨 **Smooth transitions** and animations
👆 **Interactive controls** for visitors
💼 **Impressive showcase** of enterprise experience

---

## 📞 Ready to Add Screenshots?

**Option 1:** Send me the screenshots and I'll integrate them

**Option 2:** Follow this guide and add them yourself

**Option 3:** I can help you capture and optimize them

Let me know how you'd like to proceed!

---

**UiTECH** - Showcasing Enterprise-Level Expertise

*Created: ${new Date().toLocaleDateString('en-IN')}*
