# Deploy Backend to Render (Free)

## Step 1: Push Code to GitHub

```bash
git add .
git commit -m "Add Render deployment config"
git push
```

## Step 2: Deploy on Render

1. Go to https://render.com/ and sign up (use GitHub login)

2. Click **"New +"** → **"Web Service"**

3. Connect your GitHub repository: `Suryanarayanatangella/Portfolio`

4. Configure the service:
   - **Name**: `wexl-backend`
   - **Region**: `Singapore` (closest to India)
   - **Branch**: `inital-branch`
   - **Root Directory**: `wexl-backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: `Free`

5. Click **"Advanced"** and add Environment Variables:

   ```
   NODE_ENV=production
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-gmail-app-password
   ADMIN_EMAIL=narayana0249766@gmail.com
   SALES_EMAIL=sales@wexledu.com
   FRONTEND_URL=https://suryanarayanatangella.github.io/Portfolio
   ```

   **Important**: Get Gmail App Password from:
   - https://myaccount.google.com/security
   - Enable 2-Step Verification
   - Generate App Password for "Mail"

6. Click **"Create Web Service"**

## Step 3: Wait for Deployment

- First deploy takes ~5 minutes
- You'll get a URL like: `https://wexl-backend.onrender.com`
- Test it: `https://wexl-backend.onrender.com/api/health`

## Step 4: Update Frontend

Once deployed, update `wexl-platform/.env.production`:

```env
VITE_API_BASE_URL=https://wexl-backend.onrender.com/api
```

Then push to redeploy frontend:

```bash
git add .
git commit -m "Connect frontend to Render backend"
git push
```

## Important Notes:

⚠️ **Free tier limitations:**
- Sleeps after 15 minutes of inactivity
- First request after sleep takes ~30 seconds to wake up
- 750 hours/month (enough for most use cases)

✅ **Advantages:**
- Automatic HTTPS
- Auto-deploys on git push
- Free SSL certificate
- No credit card required

## Troubleshooting:

### Backend not responding?
- Check Render logs in dashboard
- Verify environment variables are set
- Test health endpoint: `/api/health`

### Email not sending?
- Verify Gmail App Password (not regular password)
- Check EMAIL_USER and EMAIL_PASSWORD in Render dashboard
- Test email endpoint: `/api/leads/test-email`

### CORS errors?
- Verify FRONTEND_URL matches your GitHub Pages URL exactly
- Check Render logs for CORS errors

## Alternative: Keep EmailJS Only

If you don't want to deal with backend hosting:
- The frontend already works with EmailJS fallback
- Just configure EmailJS credentials in `.env.production`
- Forms will work without the backend

---

**Your backend will be live at**: `https://wexl-backend.onrender.com`
