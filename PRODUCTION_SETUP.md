# Production Setup Guide

## Current Status

✅ Frontend deployed to GitHub Pages: https://suryanarayanatangella.github.io/Portfolio/
⚠️ Backend not yet deployed (optional for now)

## Option 1: EmailJS Only (Quick Setup - Recommended for UAT)

The site currently works with EmailJS only. To enable form submissions:

### Setup EmailJS (5 minutes)

1. Go to https://www.emailjs.com/ and sign up (free)
2. Create a new Email Service (Gmail recommended)
3. Create an Email Template with these variables:
   - `{{from_name}}` - Full name
   - `{{from_email}}` - Email
   - `{{phone}}` - Phone number
   - `{{institution_name}}` - Institution name
   - `{{message}}` - Message
4. Get your credentials:
   - Service ID
   - Template ID
   - Public Key

### Update Production Environment

Edit `wexl-platform/.env.production`:

```env
VITE_API_BASE_URL=

VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key

VITE_ENV=production
```

### Redeploy

```bash
git add .
git commit -m "Configure EmailJS for production"
git push
```

The GitHub Actions workflow will automatically rebuild and deploy.

---

## Option 2: Full Backend Deployment (Complete Solution)

For production with database and full features, deploy the backend:

### Deploy Backend to Render (Free Tier)

1. Go to https://render.com/ and sign up
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: wexl-backend
   - **Root Directory**: wexl-backend
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

5. Add Environment Variables:
   ```
   NODE_ENV=production
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-gmail-app-password
   ADMIN_EMAIL=narayana0249766@gmail.com
   FRONTEND_URL=https://suryanarayanatangella.github.io/Portfolio
   ```

6. Deploy and copy the URL (e.g., `https://wexl-backend.onrender.com`)

### Update Frontend Configuration

Edit `wexl-platform/.env.production`:

```env
VITE_API_BASE_URL=https://wexl-backend.onrender.com/api

VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key

VITE_ENV=production
```

### Redeploy Frontend

```bash
git add .
git commit -m "Connect to production backend"
git push
```

---

## Alternative Backend Hosting Options

### Railway (Free Tier)
- https://railway.app/
- Easy GitHub integration
- Automatic deployments

### Heroku (Paid)
- https://www.heroku.com/
- Reliable but no longer free

### Vercel (Serverless)
- https://vercel.com/
- Good for serverless functions
- Free tier available

---

## Testing Your Deployment

1. Visit: https://suryanarayanatangella.github.io/Portfolio/
2. Navigate to Contact or Quote page
3. Submit a test form
4. Check for success message
5. Verify email received (if EmailJS configured)

---

## Current UAT Link

🔗 **https://suryanarayanatangella.github.io/Portfolio/**

Status: ✅ Live (form submissions require EmailJS setup)

---

## Next Steps

1. ✅ Site is live on GitHub Pages
2. ⚠️ Configure EmailJS for form submissions (5 min)
3. 📧 Test form submission
4. 🚀 (Optional) Deploy backend for full features
