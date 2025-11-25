# 📧 Email Setup - Do This Now!

## ✅ Your Lead Was Received!

The backend received your lead submission:
- Name: Surya Narayana
- Email: suryanarayanatangella66@gmail.com
- Institution: Surya Institute

**But emails didn't send because Gmail isn't configured yet.**

---

## 🚀 Quick Email Setup (3 Minutes)

### Step 1: Get Gmail App Password

1. **Open this link:** https://myaccount.google.com/security

2. **Enable 2-Step Verification** (if not already enabled)
   - Click "2-Step Verification"
   - Follow the setup wizard
   - This is required for App Passwords

3. **Generate App Password**
   - Scroll down to "App passwords" section
   - Click "App passwords"
   - You might need to sign in again
   - Select app: **Mail**
   - Select device: **Other (Custom name)**
   - Type: "WeXL Backend"
   - Click **Generate**
   - **COPY THE 16-CHARACTER PASSWORD**
   - Example: `abcd efgh ijkl mnop`
   - Remove spaces: `abcdefghijklmnop`

### Step 2: Update Backend Configuration

Open the file: `wexl-backend/.env`

Replace these lines:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
```

With YOUR actual credentials:

```env
EMAIL_USER=suryanarayanatangella66@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
```

**IMPORTANT:** 
- Use the 16-character App Password (NOT your regular Gmail password)
- Remove all spaces from the password
- Don't use quotes around the values

### Step 3: Save and Test

1. **Save the .env file**
2. **Backend will restart automatically** (nodemon)
3. **Test email:**
   - Open browser: http://localhost:5000/api/leads/test-email
   - Check your inbox!

### Step 4: Submit Lead Again

1. Go to: http://localhost:5175/contact
2. Fill the form
3. Submit
4. **Check your email inbox!** 📧

You should receive:
- ✅ Confirmation email (professional HTML template)
- ✅ Admin notification email

---

## 🐛 Troubleshooting

### "Invalid login" error
- Make sure you're using App Password (16 characters)
- Not your regular Gmail password
- Enable 2-Step Verification first

### Can't find "App passwords"
- Make sure 2-Step Verification is enabled
- Sign out and sign in again
- Try this direct link: https://myaccount.google.com/apppasswords

### Still not working?
1. Check backend terminal for errors
2. Make sure .env file is saved
3. Restart backend manually:
   ```bash
   # Stop backend (Ctrl+C)
   cd wexl-backend
   npm run dev
   ```

---

## 📧 Alternative: Use Different Email

If you don't want to use Gmail, you can use:

### Brevo (Sendinblue) - FREE 300 emails/day

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

---

## ✅ Once Configured

After you configure email, every lead submission will:
1. ✅ Save the lead data
2. ✅ Send confirmation email to customer
3. ✅ Send notification email to admin
4. ✅ Log everything in backend console

---

**Do this now and test! It only takes 3 minutes! 🚀**
