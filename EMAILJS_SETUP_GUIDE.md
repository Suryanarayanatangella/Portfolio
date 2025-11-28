# 📧 EmailJS Setup Guide - Easy Email Solution!

## ✅ What is EmailJS?

EmailJS is a **FREE** service that sends emails directly from your website without needing a backend email server!

**Benefits:**
- ✅ No Gmail App Password needed
- ✅ No backend configuration
- ✅ Free tier: 200 emails/month
- ✅ Setup in 5 minutes
- ✅ Works immediately

---

## 🚀 Step-by-Step Setup (5 Minutes)

### Step 1: Sign Up for EmailJS

1. **Go to:** https://www.emailjs.com/
2. **Click "Sign Up"** (top right corner)
3. **Sign up with Google** using: `suryanarayanatangella66@gmail.com`
4. **Verify your email** (check inbox)
5. **Log in** to EmailJS dashboard

---

### Step 2: Add Email Service

1. **In EmailJS Dashboard**, click **"Email Services"** (left sidebar)
2. **Click "Add New Service"**
3. **Select "Gmail"**
4. **Click "Connect Account"**
5. **Sign in with your Gmail** (suryanarayanatangella66@gmail.com)
6. **Allow EmailJS** to send emails on your behalf
7. **Copy the Service ID** (looks like: `service_abc123`)
8. **Click "Create Service"**

---

### Step 3: Create Email Template

1. **Click "Email Templates"** (left sidebar)
2. **Click "Create New Template"**
3. **Template Name:** `WeXL Lead Notification`

4. **Paste this template:**

```html
Subject: Thank You for Your Interest in WeXL!

Hello {{to_name}},

Thank you for reaching out to WeXL! We've received your inquiry and our team is excited to help transform {{institution_name}} with our AI-powered educational platform.

Your Details:
- Institution: {{institution_name}}
- Type: {{institution_type}}
- Phone: {{phone}}
- Role: {{role}}
- State: {{state}}
- Students: {{number_of_students}}
- Interest: {{area_of_interest}}
- Source: {{hear_about_us}}

Message: {{message}}

What happens next?
✓ Our team will review your requirements
✓ We'll contact you within 24 hours
✓ Schedule a personalized demo
✓ Discuss customized solutions

If you have any immediate questions, please reply to this email.

Best regards,
The WeXL Team

WeXL - AI-Powered Academic Excellence
Jubilee Hills, Hyderabad, Telangana
Email: info@wexledu.com
Website: www.wexledu.com
```

5. **Settings:**
   - **From Name:** `WeXL Team`
   - **From Email:** `{{from_email}}` (your Gmail)
   - **To Email:** `{{to_email}}`
   - **Reply To:** `{{reply_to}}`

6. **Click "Save"**
7. **Copy the Template ID** (looks like: `template_xyz789`)

---

### Step 4: Get Your Public Key

1. **Click "Account"** (left sidebar)
2. **Go to "General" tab**
3. **Find "Public Key"** section
4. **Copy your Public Key** (looks like: `AbCdEfGhIjKlMnOp`)

---

### Step 5: Update Frontend Configuration

1. **Open file:** `wexl-platform/.env`

2. **Replace these lines:**
   ```env
   VITE_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID
   VITE_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID
   VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
   ```

3. **With your actual values:**
   ```env
   VITE_EMAILJS_SERVICE_ID=service_abc123
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOp
   ```

4. **Save the file**

---

### Step 6: Restart Frontend

```bash
# Stop frontend (Ctrl+C in terminal)
# Start again
cd wexl-platform
npm run dev
```

---

### Step 7: Test!

1. **Go to:** http://localhost:5175/contact
2. **Fill out the form** with your email
3. **Submit**
4. **Check your Gmail inbox!** 📧

You should receive a professional email with all the lead details!

---

## ✅ What You Get

After setup, every lead submission will:
1. ✅ Submit to backend API (logged in console)
2. ✅ Send email via EmailJS to customer
3. ✅ Show success message
4. ✅ All automatic!

---

## 📧 Email Template Variables

The template uses these variables from your form:
- `{{to_name}}` - Customer's full name
- `{{to_email}}` - Customer's email
- `{{institution_name}}` - Institution name
- `{{institution_type}}` - School/College/etc
- `{{phone}}` - Phone number
- `{{role}}` - Their role
- `{{state}}` - State/region
- `{{number_of_students}}` - Number of students
- `{{area_of_interest}}` - Areas of interest
- `{{hear_about_us}}` - How they found you
- `{{message}}` - Their message

---

## 🎨 Customize Email Template

You can customize the email template in EmailJS dashboard:
1. Go to "Email Templates"
2. Click on your template
3. Edit the content
4. Add HTML for styling
5. Save

**Example with HTML:**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: #113e59; color: white; padding: 20px; text-align: center;">
    <h1>WeXL</h1>
    <p>AI-Powered Academic Excellence</p>
  </div>
  
  <div style="padding: 20px; background: #f5f5f5;">
    <h2>Hello {{to_name}},</h2>
    <p>Thank you for your interest in WeXL!</p>
    <!-- Add more HTML here -->
  </div>
</div>
```

---

## 🐛 Troubleshooting

### Emails not sending?

**Check:**
1. EmailJS Service ID is correct
2. Template ID is correct
3. Public Key is correct
4. Gmail account is connected in EmailJS
5. Check EmailJS dashboard for errors
6. Check browser console (F12) for errors

### "Failed to send email" error?

**Solution:**
1. Verify all IDs are correct in .env
2. Make sure .env file is saved
3. Restart frontend (Ctrl+C, then npm run dev)
4. Check EmailJS dashboard → Usage

### Emails going to spam?

**Solution:**
1. Check spam folder
2. Mark as "Not Spam"
3. Add sender to contacts
4. This is normal for new senders

---

## 💰 EmailJS Pricing

**Free Tier:**
- 200 emails/month
- Perfect for testing and small businesses

**Paid Plans:**
- $15/month - 1,000 emails
- $35/month - 5,000 emails
- $75/month - 15,000 emails

For most businesses, the free tier is enough!

---

## 🔄 Alternative: Send to Multiple Recipients

To send emails to both customer AND admin:

1. **Create 2 templates:**
   - Template 1: Customer confirmation
   - Template 2: Admin notification

2. **Update code** to send both:
   ```javascript
   // Send to customer
   await sendLeadEmail(leadData, 'template_customer');
   
   // Send to admin
   await sendLeadEmail(leadData, 'template_admin');
   ```

---

## 📊 Monitor Email Usage

**In EmailJS Dashboard:**
1. Click "Usage" (left sidebar)
2. See how many emails sent
3. Check success/failure rate
4. View email history

---

## ✅ Success Checklist

- [ ] Signed up for EmailJS
- [ ] Connected Gmail account
- [ ] Created email service (got Service ID)
- [ ] Created email template (got Template ID)
- [ ] Copied Public Key
- [ ] Updated .env file with all 3 IDs
- [ ] Restarted frontend
- [ ] Tested form submission
- [ ] Received email in inbox

---

## 🎉 You're Done!

Once configured, your WeXL platform will automatically send professional emails for every lead submission!

**No backend email configuration needed!**
**No Gmail App Password needed!**
**Just works!** ✨

---

## 📞 Need Help?

**EmailJS Support:**
- Documentation: https://www.emailjs.com/docs/
- Support: support@emailjs.com

**Check These:**
1. EmailJS dashboard for errors
2. Browser console (F12) for frontend errors
3. Make sure all 3 IDs are correct in .env
4. Restart frontend after changing .env

---

**Start here:** https://www.emailjs.com/ 🚀
