# 🧪 Test Email Configuration

## ⚠️ Current Issue

Your Gmail credentials are being rejected. This means:
- Either the email address is wrong
- Or the App Password is wrong
- Or the App Password is for a different email

## 📧 Your Current Configuration

In `wexl-backend/.env`:
```
EMAIL_USER=narayana0249766@gmail.com
EMAIL_PASSWORD=ohjjvymvuznomckk
```

## ✅ How to Fix

### Step 1: Verify Which Gmail Account

You have two emails in your system:
1. `narayana0249766@gmail.com` (in backend .env)
2. `suryanarayanatangella66@gmail.com` (used in form)

**Which one did you create the App Password for?**

### Step 2: Generate New App Password

Let's start fresh:

1. **Go to:** https://myaccount.google.com/security

2. **Make sure you're signed in** with the correct Gmail account

3. **Enable 2-Step Verification** (if not already)

4. **Go to App Passwords:**
   - Direct link: https://myaccount.google.com/apppasswords
   - Or scroll down to "App passwords" section

5. **Generate NEW password:**
   - App: Mail
   - Device: Other (WeXL Backend)
   - Click Generate

6. **Copy the 16-character password**
   - Example: `abcd efgh ijkl mnop`
   - **IMPORTANT: Remove ALL spaces**
   - Result: `abcdefghijklmnop`

### Step 3: Update .env File

Open `wexl-backend/.env` and update:

```env
# Use the SAME email you generated the App Password for
EMAIL_USER=your-actual-email@gmail.com
EMAIL_PASSWORD=your16charpasswordnospaces
ADMIN_EMAIL=your-actual-email@gmail.com
```

**Example:**
```env
EMAIL_USER=narayana0249766@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
ADMIN_EMAIL=narayana0249766@gmail.com
```

### Step 4: Restart Backend

Backend should restart automatically, or manually:
```bash
# Stop backend (Ctrl+C)
cd wexl-backend
npm run dev
```

### Step 5: Test

Open browser:
```
http://localhost:5000/api/leads/test-email
```

Check your Gmail inbox!

## 🐛 Common Mistakes

### ❌ Wrong:
```env
EMAIL_PASSWORD=ohjj vymv uzno mckk  # Has spaces!
```

### ✅ Correct:
```env
EMAIL_PASSWORD=ohjjvymvuznomckk  # No spaces!
```

### ❌ Wrong:
```env
EMAIL_USER=email1@gmail.com
# But App Password was generated for email2@gmail.com
```

### ✅ Correct:
```env
EMAIL_USER=email1@gmail.com
# App Password generated for email1@gmail.com
```

## 🔍 Verify Your Setup

1. **Which Gmail account are you using?**
   - [ ] narayana0249766@gmail.com
   - [ ] suryanarayanatangella66@gmail.com
   - [ ] Other: _______________

2. **Did you generate App Password for THIS account?**
   - [ ] Yes
   - [ ] No (generate it now!)

3. **Did you remove ALL spaces from password?**
   - [ ] Yes
   - [ ] No (remove them now!)

4. **Is 2-Step Verification enabled?**
   - [ ] Yes
   - [ ] No (enable it now!)

## 💡 Alternative: Use EmailJS Instead

If Gmail is giving you trouble, use EmailJS (much easier!):

1. Sign up: https://www.emailjs.com/
2. Connect Gmail (no App Password needed!)
3. Get Service ID, Template ID, Public Key
4. Update frontend .env
5. Done!

See: `EMAILJS_SETUP_GUIDE.md`

## 📞 Still Not Working?

### Check:
1. You're signed into the correct Gmail account
2. 2-Step Verification is enabled
3. App Password is for the correct email
4. No spaces in password
5. .env file is saved
6. Backend restarted

### Try:
1. Generate a NEW App Password
2. Use a different Gmail account
3. Use EmailJS instead (easier!)

---

**Let's get this working! Follow the steps above carefully.** 🚀
