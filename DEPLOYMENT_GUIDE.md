# WeXL Platform - Deployment Guide

## 🚀 Deployment Options

This guide covers three deployment options for the WeXL platform.

---

## Option 1: Vercel (Recommended for Quick Deploy)

### Prerequisites
- GitHub/GitLab/Bitbucket account
- Vercel account (free tier available)

### Steps

1. **Push Code to Git Repository**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel**
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd wexl-platform
vercel
```

3. **Configure Environment Variables**
In Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add:
  - `VITE_API_BASE_URL` = your API URL
  - `VITE_EMAIL_SERVICE_URL` = your email service URL
  - `VITE_ENV` = production

4. **Custom Domain (Optional)**
- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

### Vercel Configuration File
Create `vercel.json` in project root:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## Option 2: Netlify

### Prerequisites
- GitHub/GitLab/Bitbucket account
- Netlify account (free tier available)

### Steps

1. **Push Code to Git Repository**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy via Netlify CLI**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
cd wexl-platform
netlify init

# Deploy
netlify deploy --prod
```

3. **Or Deploy via Netlify Dashboard**
- Go to Netlify dashboard
- Click "New site from Git"
- Connect your repository
- Configure build settings:
  - Build command: `npm run build`
  - Publish directory: `dist`
- Click "Deploy site"

4. **Configure Environment Variables**
In Netlify dashboard:
- Go to Site Settings → Environment Variables
- Add:
  - `VITE_API_BASE_URL`
  - `VITE_EMAIL_SERVICE_URL`
  - `VITE_ENV=production`

### Netlify Configuration File
Create `netlify.toml` in project root:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

---

## Option 3: Custom Server (AWS/DigitalOcean/VPS)

### Prerequisites
- Server with Node.js installed
- Domain name
- SSL certificate (Let's Encrypt recommended)

### Steps

1. **Build the Application**
```bash
cd wexl-platform
npm run build
```

2. **Set Up Server**

#### Install Nginx
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nginx

# Start Nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

#### Configure Nginx
Create `/etc/nginx/sites-available/wexl`:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    root /var/www/wexl/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/wexl /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

3. **Set Up SSL with Let's Encrypt**
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Auto-renewal is set up automatically
```

4. **Deploy Application**
```bash
# Copy build files to server
scp -r dist/* user@your-server:/var/www/wexl/dist/

# Or use rsync
rsync -avz dist/ user@your-server:/var/www/wexl/dist/
```

5. **Set Up CI/CD (Optional)**

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Server

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: |
          cd wexl-platform
          npm ci
      
      - name: Build
        run: |
          cd wexl-platform
          npm run build
      
      - name: Deploy to Server
        uses: easingthemes/ssh-deploy@main
        env:
          SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
          REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
          REMOTE_USER: ${{ secrets.REMOTE_USER }}
          SOURCE: "wexl-platform/dist/"
          TARGET: "/var/www/wexl/dist/"
```

---

## 🔧 Environment Variables

### Required Variables
```env
VITE_API_BASE_URL=https://api.your-domain.com
VITE_EMAIL_SERVICE_URL=https://api.your-domain.com/email
VITE_ENV=production
```

### Optional Variables
```env
VITE_GA_TRACKING_ID=UA-XXXXXXXXX-X
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_CHAT=false
```

---

## 📊 Post-Deployment Checklist

### Verification
- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Navigation works
- [ ] Forms submit successfully
- [ ] Images load properly
- [ ] Fonts render correctly
- [ ] Mobile responsive
- [ ] SSL certificate valid
- [ ] No console errors

### Performance
- [ ] Run Lighthouse audit
- [ ] Check page load times
- [ ] Verify image optimization
- [ ] Test on slow connections
- [ ] Check bundle sizes

### SEO
- [ ] Meta tags present
- [ ] Sitemap accessible
- [ ] Robots.txt configured
- [ ] Google Search Console setup
- [ ] Analytics tracking works

### Monitoring
- [ ] Set up uptime monitoring
- [ ] Configure error tracking (Sentry)
- [ ] Set up analytics (Google Analytics)
- [ ] Configure alerts
- [ ] Set up logging

---

## 🔍 Monitoring & Analytics

### Uptime Monitoring
**Recommended Services:**
- UptimeRobot (free)
- Pingdom
- StatusCake

### Error Tracking
**Sentry Setup:**
```bash
npm install @sentry/react
```

```javascript
// src/main.jsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "your-sentry-dsn",
  environment: import.meta.env.VITE_ENV,
});
```

### Analytics
**Google Analytics Setup:**
```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🐛 Troubleshooting

### Issue: 404 on Page Refresh
**Solution**: Configure server to serve index.html for all routes
- Vercel/Netlify: Handled automatically
- Nginx: Use `try_files` directive (see config above)

### Issue: Environment Variables Not Working
**Solution**: 
- Ensure variables start with `VITE_`
- Rebuild after adding variables
- Check deployment platform settings

### Issue: Slow Load Times
**Solution**:
- Enable gzip compression
- Optimize images
- Use CDN for static assets
- Enable browser caching

### Issue: SSL Certificate Errors
**Solution**:
- Verify certificate installation
- Check certificate expiration
- Ensure all resources use HTTPS
- Update DNS records if needed

---

## 🔄 Continuous Deployment

### GitHub Actions Example
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: cd wexl-platform && npm ci
      - run: cd wexl-platform && npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
          working-directory: ./wexl-platform
```

---

## 📝 Rollback Strategy

### Vercel/Netlify
- Go to Deployments
- Select previous deployment
- Click "Promote to Production"

### Custom Server
```bash
# Keep previous builds
/var/www/wexl/
  ├── dist/           # Current
  ├── dist-backup/    # Previous
  └── dist-old/       # Older

# Rollback
sudo mv dist dist-failed
sudo mv dist-backup dist
sudo systemctl reload nginx
```

---

## 🎯 Production Checklist

Before going live:

- [ ] All environment variables configured
- [ ] SSL certificate installed
- [ ] Custom domain configured
- [ ] Analytics tracking setup
- [ ] Error monitoring configured
- [ ] Backup strategy in place
- [ ] Performance optimized
- [ ] Security headers configured
- [ ] GDPR compliance verified
- [ ] Terms of service and privacy policy pages
- [ ] Contact information updated
- [ ] Social media links configured
- [ ] Sitemap submitted to search engines
- [ ] Team trained on platform

---

## 📞 Support

For deployment issues:
- Check platform documentation (Vercel/Netlify/AWS)
- Review server logs
- Test in staging environment first
- Contact hosting support if needed

---

**Ready to Deploy! 🚀**
