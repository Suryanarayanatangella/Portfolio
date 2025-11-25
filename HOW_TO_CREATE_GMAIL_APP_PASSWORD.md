# 📧 How to Create Gmail App Password - Step by Step

## 🎯 What is an App Password?

An App Password is a 16-character code that lets apps (like our WeXL backend) access your Gmail account securely **without using your regular Gmail password**.

---

## 📝 Step-by-Step Instructions

### Step 1: Open Google Account Security

1. **Click this link:** https://myaccount.google.com/security
2. **Sign in** with your Gmail account: `suryanarayanatangella66@gmail.com`

---

### Step 2: Enable 2-Step Verification (Required)

**If you already have 2-Step Verification enabled, skip to Step 3.**

1. On the Security page, scroll down to find **"2-Step Verification"**
2. Click on **"2-Step Verification"**
3. Click **"Get Started"**
4. Follow the setup wizard:
   - Enter your phone number
   - Receive verification code via SMS
   - Enter the code
   - Click **"Turn On"**

**Why needed?** Google requires 2-Step Verification before you can create App Passwords.

---

### Step 3: Generate App Password

1. **Go back to Security page:** https://myaccount.google.com/security

2. **Scroll down** to find **"App passwords"** section
   - It's usually under "Signing in to Google"
   - If you don't see it, make sure 2-Step Verification is enabled

3. **Click "App passwords"**
   - You might need to sign in again for security

4. **You'll see a page titled "App passwords"**

5. **Select app:** Click the dropdown and select **"Mail"**

6. **Select device:** Click the dropdown and select **"Other (Custom name)"**

7. **Type a name:** Enter `WeXL Backend` or `WeXL Email Service`

8. **Click "Generate"**

9. **IMPORTANT:** You'll see a yellow box with a 16-character password like:
   ```
   abcd efgh ijkl mnop
   ```

10. **COPY THIS PASSWORD IMMEDIATELY!**
    - You won't be able to see it again
    - Remove the spaces: `abcdefghijklmnop`

---

### Step 4: Update Your Backend Configuration

1. **Open the file:** `wexl-backend/.env`

2. **Find these lines:**
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-specific-password
   ```

3. **Replace with YOUR details:**
   ```env
   EMAIL_USER=suryanarayanatangella66@gmail.com
   EMAIL_PASSWORD=abcdefghijklmnop
   ```
   
   **Replace `abcdefghijklmnop` with the actual 16-character password you copied!**

4. **Also update admin email:**
   ```env
   ADMIN_EMAIL=suryanarayanatangella66@gmail.com
   SALES_EMAIL=suryanarayanatangella66@gmail.com
   ```

5. **Save the file** (Ctrl+S or Cmd+S)

---

### Step 5: Test Email Service

1. **Backend will restart automatically** (you'll see it in the terminal)

2. **Open your browser** and go to:
   ```
   http://localhost:5000/api/leads/test-email
   ```

3. **Check your Gmail inbox!** You should receive a test email from yourself.

4. **If you got the email:** ✅ SUCCESS! Email is configured!

---

### Step 6: Test Lead Submission

1. **Go to your website:** http://localhost:5175/contact

2. **Fill out the lead form** with your email

3. **Submit the form**

4. **Check your Gmail inbox!** You should receive:
   - ✅ **Confirmation email** (professional HTML template)
   - ✅ **Admin notification email** (with lead details)

---

## 🐛 Troubleshooting

### Can't find "App passwords" option?

**Solution:**
1. Make sure 2-Step Verification is **enabled**
2. Sign out of Google and sign back in
3. Try this direct link: https://myaccount.google.com/apppasswords
4. If still not visible, your account might have restrictions (work/school account)

### "Invalid login" error

**Solution:**
1. Make sure you're using the **App Password** (16 characters)
2. **NOT your regular Gmail password**
3. Remove all **spaces** from the password
4. Don't use **quotes** around the password in .env file

### "Less secure app access" message

**Solution:**
- This is old advice - ignore it
- Use App Passwords instead (which is what we're doing)

### Email not sending

**Solution:**
1. Check backend terminal for errors
2. Verify .env file is saved
3. Make sure EMAIL_USER and EMAIL_PASSWORD are correct
4. Restart backend manually:
   ```bash
   cd wexl-backend
   npm run dev
   ```

---

## 📧 Alternative: Use a Different Email Service

If you can't use Gmail or prefer another service:

### Option 1: Brevo (Sendinblue) - FREE 300 emails/day

1. **Sign up:** https://www.brevo.com/
2. **Go to:** Settings → SMTP & API
3. **Get your SMTP credentials**
4. **Update .env:**
   ```env
   EMAIL_SERVICE=smtp
   EMAIL_HOST=smtp-relay.brevo.com
   EMAIL_PORT=587
   EMAIL_USER=your-brevo-email@example.com
   EMAIL_PASSWORD=your-brevo-smtp-key
   ```

### Option 2: SendGrid - FREE 100 emails/day

1. **Sign up:** https://sendgrid.com/
2. **Create API key**
3. **Use SendGrid's SMTP settings**

---

## ✅ Success Checklist

After completing all steps, you should have:

- [x] 2-Step Verification enabled on Gmail
- [x] App Password generated (16 characters)
- [x] .env file updated with your credentials
- [x] Backend restarted automatically
- [x] Test email received in inbox
- [x] Lead form sends confirmation emails
- [x] Admin notification emails received

---

## 🎉 You're Done!

Once configured, every lead submission will automatically:
1. ✅ Save the lead data
2. ✅ Send professional confirmation email to customer
3. ✅ Send detailed notification email to admin
4. ✅ Log everything in backend console

---

## 📞 Still Need Help?

### Check These:
1. **Backend logs** in terminal for error messages
2. **Browser console** (F12) for frontend errors
3. **Gmail spam folder** - emails might be there initially
4. **Test endpoint:** http://localhost:5000/api/leads/test-email

### Common Issues:
- Password has spaces → Remove them
- Using regular password → Use App Password
- 2-Step not enabled → Enable it first
- .env not saved → Save the file

---

## 🔐 Security Notes

- ✅ App Passwords are **safer** than regular passwords
- ✅ You can **revoke** them anytime from Google Account
- ✅ Each app gets its **own password**
- ✅ If compromised, revoke and generate a new one
- ❌ **Never share** your App Password
- ❌ **Never commit** .env file to Git (it's in .gitignore)

---

**Follow these steps and you'll have email working in 5 minutes! 🚀**
