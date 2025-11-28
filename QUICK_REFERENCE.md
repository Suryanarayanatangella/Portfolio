# WeXL Platform - Quick Reference Card

## 🚀 Start Servers

```bash
# Terminal 1 - Backend
cd wexl-backend
npm run dev

# Terminal 2 - Frontend
cd wexl-platform
npm run dev
```

## 🌐 URLs

- **Frontend:** http://localhost:5175
- **Backend:** http://localhost:5000
- **Health Check:** http://localhost:5000/api/health
- **Test Email:** http://localhost:5000/api/leads/test-email

## 📧 Email Setup (5 Minutes)

1. **Get Gmail App Password:**
   - https://myaccount.google.com/security
   - Enable 2-Step Verification
   - App passwords → Mail → Generate

2. **Update `wexl-backend/.env`:**
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-16-char-password
   ADMIN_EMAIL=narayana0249766@gmail.com
   ```

3. **Restart backend & test:**
   - http://localhost:5000/api/leads/test-email

## 📁 Key Files

### Frontend
- `src/pages/` - All pages
- `src/components/` - Reusable components
- `src/features/leads/leadsSlice.js` - Redux logic
- `.env` - Frontend config

### Backend
- `server.js` - Main server
- `controllers/leadsController.js` - Lead handling
- `utils/emailTemplates.js` - Email templates
- `.env` - Backend config ⚠️ CONFIGURE THIS

## 🧪 Test Checklist

- [ ] Backend running (port 5000)
- [ ] Frontend running (port 5175)
- [ ] Health check works
- [ ] Test email received
- [ ] Form submits
- [ ] Confirmation email received
- [ ] Admin notification received

## 🐛 Quick Fixes

### Backend won't start
```bash
cd wexl-backend
rm -rf node_modules
npm install
npm run dev
```

### Frontend won't start
```bash
cd wexl-platform
rm -rf node_modules
npm install
npm run dev
```

### Emails not sending
1. Check `.env` has correct Gmail credentials
2. Use App Password (not regular password)
3. Enable 2-Step Verification
4. Remove spaces from password

### CORS errors
- Backend must be on port 5000
- Frontend must be on port 5175
- Check `VITE_API_BASE_URL` in frontend `.env`

## 📊 API Endpoints

```bash
# Health check
GET http://localhost:5000/api/health

# Test email
GET http://localhost:5000/api/leads/test-email

# Submit lead
POST http://localhost:5000/api/leads
Content-Type: application/json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "institutionName": "ABC School",
  "institutionType": "School",
  "consent": true
}
```

## 🎨 Design Tokens

```css
/* Colors */
--primary: #113e59;
--accent: #f6b519;
--background: #F5F7FA;
--text: #2E3A59;

/* Fonts */
--heading: 'DM Sans';
--body: 'Source Sans 3';
```

## 📝 Environment Variables

### Frontend `.env`
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### Backend `.env`
```env
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=narayana0249766@gmail.com
SALES_EMAIL=sales@wexledu.com
```

## 📚 Documentation

- `FINAL_SUMMARY.md` - Complete summary
- `INTEGRATION_COMPLETE.md` - Integration guide
- `QUICK_START.md` - 5-minute setup
- `wexl-backend/SETUP_GUIDE.md` - Email setup
- `DEPLOYMENT_GUIDE.md` - Deployment

## 🎯 Pages

1. **Home** (`/`) - Landing page
2. **About** (`/about`) - Company info
3. **Products** (`/products`) - Features
4. **Solutions** (`/solutions`) - Solutions
5. **Contact** (`/contact`) - Contact + form
6. **Demo** (`/demo`) - Demo request

## ✅ Success Indicators

- ✅ No errors in terminal
- ✅ Pages load correctly
- ✅ Form submits successfully
- ✅ Emails arrive in inbox
- ✅ Both servers running

## 🔧 Commands

```bash
# Install dependencies
npm install

# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📞 Need Help?

1. Check server logs
2. Check browser console (F12)
3. Test endpoints
4. Verify `.env` files
5. Read `FINAL_SUMMARY.md`

---

**Quick Start:** Configure email → Start servers → Test form → Done! 🎉
