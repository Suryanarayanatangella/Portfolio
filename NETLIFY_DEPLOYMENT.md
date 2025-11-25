# Deploy to Netlify (Frontend + Backend)

## Why Netlify?
- ✅ Hosts frontend AND backend (serverless functions)
- ✅ Custom domain support
- ✅ Automatic HTTPS
- ✅ No sleep time (unlike Render free tier)
- ✅ Fast global CDN
- ✅ Free tier: 100GB bandwidth, 300 build minutes/month

## Step 1: Push Code

```bash
git add .
git commit -m "Configure for Netlify deployment"
git push
```

## Step 2: Deploy on Netlify

1. Go to https://app.netlify.com/ and sign up (use GitHub)

2. Click **"Add new site"** → **"Import an existing project"**

3. Connect to GitHub and select: `Suryanarayanatangella/Portfolio`

4. Configure build settings:
   - **Branch**: `inital-branch`
   - **Base directory**: `wexl-platform`
   - **Build command**: `npm run build`
   - **Publish directory**: `wexl-platform/dist`

5. Click **"Show advanced"** → **"New variable"** and add:

   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password
   ADMIN_EMAIL=narayana0249766@gmail.com
   SALES_EMAIL=sales@wexledu.com
   ```

   **Get Gmail App Password**:
   - https://myaccount.google.com/security
   - Enable 2-Step Verification
   - App passwords → Generate for "Mail"

6. Click **"Deploy site"**

## Step 3: Wait for Deployment

- First deploy: ~3-5 minutes
- You'll get a URL like: `https://your-site-name.netlify.app`
- Can add custom domain later

## Step 4: Test

1. Visit your site: `https://your-site-name.netlify.app`
2. Test form submission on Contact or Quote page
3. Check email for confirmation

## API Endpoints

Your backend functions will be at:
- Health: `https://your-site.netlify.app/api/health`
- Submit lead: `https://your-site.netlify.app/api/leads`
- Test email: `https://your-site.netlify.app/api/test-email`

## Custom Domain (Optional)

1. In Netlify dashboard → **Domain settings**
2. Click **"Add custom domain"**
3. Follow DNS configuration instructions
4. Free SSL certificate auto-configured

## Advantages over GitHub Pages

| Feature | GitHub Pages | Netlify |
|---------|-------------|---------|
| Backend API | ❌ No | ✅ Yes (serverless) |
| Custom domain | ✅ Yes | ✅ Yes |
| HTTPS | ✅ Yes | ✅ Yes |
| Build time | ~2 min | ~3 min |
| Sleep time | N/A | ❌ No sleep |
| Email sending | ❌ No | ✅ Yes |

## Troubleshooting

### Build fails?
- Check build logs in Netlify dashboard
- Verify `wexl-platform/package.json` has all dependencies

### Functions not working?
- Check function logs in Netlify dashboard
- Verify environment variables are set
- Test: `https://your-site.netlify.app/api/health`

### Email not sending?
- Verify EMAIL_USER and EMAIL_PASSWORD in Netlify env vars
- Use Gmail App Password, not regular password
- Check function logs for errors

## Continuous Deployment

Once set up, every push to `inital-branch` automatically:
1. Triggers new build
2. Deploys frontend
3. Deploys backend functions
4. Goes live in ~3 minutes

---

**Your site will be live at**: `https://your-custom-name.netlify.app`
