# WeXL Backend - Quick Setup Guide

## 🎯 Step-by-Step Setup (5 Minutes)

### Step 1: Get Gmail App Password

1. **Open Google Account Settings**
   - Go to: https://myaccount.google.com/security

2. **Enable 2-Step Verification** (if not already enabled)
   - Click "2-Step Verification"
   - Follow the setup process

3. **Generate App Password**
   - Scroll down to "App passwords"
   - Click "App passwords"
   - Select app: **Mail**
   - Select device: **Other** → Type "WeXL Backend"
   - Click **Generate**
   - **Copy the 16-character password** (example: `abcd efgh ijkl mnop`)
   - Remove spaces: `abcdefghijklmnop`

### Step 2: Configure Backend

1. **Navigate to backend folder**
```bash
cd wexl-backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Create .env file**
```bash
# Copy example file
cp .env.example .env
```

4. **Edit .env file**

Open `.env` in your editor and update:

```env
PORT=5000
NODE_ENV=development

# Replace with YOUR Gmail
EMAIL_USER=your-actual-email@gmail.com

# Paste the 16-char password (no spaces!)
EMAIL_PASSWORD=abcdefghijklmnop

# Where to receive lead notifications
ADMIN_EMAIL=narayana0249766@gmail.com
SALES_EMAIL=sales@wexledu.com

# Frontend URL
FRONTEND_URL=http://localhost:5175
```

### Step 3: Test Email Service

```bash
# Start the server
npm run dev
```

Server should start on port 5000. You'll see:
```
🚀 WeXL Backend Server running on port 5000
📧 Email service: gmail
🌍 Environment: development
✅ Email service is ready
```

**Test the email:**

Open browser and go to:
```
http://localhost:5000/api/leads/test-email
```

You should receive a test email! ✅

### Step 4: Update Frontend

1. **Navigate to frontend folder**
```bash
cd ../wexl-platform
```

2. **Create/Update .env file**
```bash
# Create .env file
echo "VITE_API_BASE_URL=http://localhost:5000/api" > .env
```

3. **Update Redux slice**

The file `src/features/leads/leadsSlice.js` should already use the mock API. Update it to use real API:

```javascript
export const submitLead = createAsyncThunk(
  'leads/submit',
  async (leadData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to submit lead');
      }
      
      const result = await response.json();
      return result.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
```

### Step 5: Run Both Servers

**Terminal 1 - Backend:**
```bash
cd wexl-backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd wexl-platform
npm run dev
```

### Step 6: Test the Complete Flow

1. Open frontend: http://localhost:5175
2. Navigate to Contact or Demo page
3. Fill out the lead form
4. Submit
5. Check your email inbox! 📧

You should receive:
- ✅ Confirmation email (to customer)
- ✅ Notification email (to admin/sales)

## ✅ Verification Checklist

- [ ] Backend running on port 5000
- [ ] Frontend running on port 5175
- [ ] Test email sent successfully
- [ ] Lead form submits without errors
- [ ] Confirmation email received
- [ ] Admin notification email received

## 🐛 Common Issues & Solutions

### Issue 1: "Invalid login" error

**Cause:** Wrong password or not using App Password

**Solution:**
1. Make sure you're using App-Specific Password (16 characters)
2. Not your regular Gmail password
3. Remove all spaces from the password
4. Enable 2-Step Verification first

### Issue 2: "ECONNREFUSED" error

**Cause:** Backend not running

**Solution:**
```bash
cd wexl-backend
npm run dev
```

### Issue 3: CORS error in browser

**Cause:** Frontend trying to connect to wrong backend URL

**Solution:**
1. Check backend is running on port 5000
2. Verify VITE_API_BASE_URL in frontend .env
3. Restart frontend after changing .env

### Issue 4: Emails going to spam

**Solution:**
1. Check spam folder
2. Mark as "Not Spam"
3. Add sender to contacts
4. This is normal for new email senders

### Issue 5: "Cannot find module" error

**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📧 Email Service Alternatives

### If Gmail doesn't work, try these FREE alternatives:

### Option 1: Brevo (Sendinblue)
- **Free tier:** 300 emails/day
- **Setup:**
  1. Sign up: https://www.brevo.com/
  2. Get SMTP credentials
  3. Update .env:
  ```env
  EMAIL_SERVICE=smtp
  EMAIL_HOST=smtp-relay.brevo.com
  EMAIL_PORT=587
  EMAIL_USER=your-brevo-email
  EMAIL_PASSWORD=your-brevo-smtp-key
  ```

### Option 2: Mailgun
- **Free tier:** 5,000 emails/month (first 3 months)
- Similar setup to Brevo

### Option 3: SendGrid
- **Free tier:** 100 emails/day
- Similar setup to Brevo

## 🎉 Success!

If you've completed all steps and received test emails, you're all set!

Your WeXL platform now has:
- ✅ Working backend API
- ✅ Real-time email notifications
- ✅ Professional email templates
- ✅ Lead capture system

## 📞 Need Help?

1. Check server logs in terminal
2. Test email endpoint: http://localhost:5000/api/leads/test-email
3. Verify .env configuration
4. Check Gmail App Password is correct

---

**Happy coding! 🚀**
