# WeXL Backend API

Node.js/Express backend for WeXL platform with email service integration.

## 🚀 Features

- ✅ Lead submission API
- ✅ Email notifications (customer + admin)
- ✅ Professional HTML email templates
- ✅ CORS enabled for frontend integration
- ✅ Error handling and validation
- ✅ Free email service support (Gmail)

## 📋 Prerequisites

- Node.js (v14 or higher)
- Gmail account (for free email service)
- Gmail App-Specific Password

## 🔧 Setup Instructions

### 1. Install Dependencies

```bash
cd wexl-backend
npm install
```

### 2. Configure Gmail App Password

**Important:** Don't use your regular Gmail password!

1. Go to your Google Account: https://myaccount.google.com/
2. Select **Security**
3. Under "Signing in to Google," select **2-Step Verification** (enable if not already)
4. At the bottom, select **App passwords**
5. Select app: **Mail**
6. Select device: **Other (Custom name)** → Enter "WeXL Backend"
7. Click **Generate**
8. Copy the 16-character password (remove spaces)

### 3. Configure Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Edit `.env` file:

```env
PORT=5000
NODE_ENV=development

# Your Gmail credentials
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password

# Where to send lead notifications
ADMIN_EMAIL=narayana0249766@gmail.com
SALES_EMAIL=sales@wexledu.com

# Frontend URL
FRONTEND_URL=http://localhost:5175
```

### 4. Start the Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

Server will run on: **http://localhost:5000**

## 📡 API Endpoints

### 1. Health Check
```
GET /api/health
```

Response:
```json
{
  "status": "OK",
  "message": "WeXL Backend API is running"
}
```

### 2. Submit Lead
```
POST /api/leads
```

Request Body:
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "institutionName": "ABC School",
  "institutionType": "School",
  "role": "Principal",
  "state": "Telangana",
  "numberOfStudents": "501-1000",
  "areaOfInterest": ["Academic Excellence", "English Proficiency"],
  "hearAboutUs": "Search Engine",
  "message": "Interested in demo",
  "consent": true,
  "newsletter": true
}
```

Response:
```json
{
  "success": true,
  "message": "Lead submitted successfully! Check your email for confirmation.",
  "data": {
    "leadId": "LEAD-1234567890",
    "submittedAt": "2025-11-22T12:00:00.000Z",
    "emailSent": true
  }
}
```

### 3. Test Email Configuration
```
GET /api/leads/test-email
```

Sends a test email to verify configuration.

## 📧 Email Templates

### Customer Confirmation Email
- Professional HTML template
- WeXL branding
- Next steps information
- Contact details

### Admin Notification Email
- Complete lead details
- Formatted for easy reading
- Action items
- Timestamp

## 🔗 Frontend Integration

Update frontend `.env`:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Update `src/features/leads/leadsSlice.js`:

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
        throw new Error('Failed to submit lead');
      }
      
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
```

## 🧪 Testing

### Test Email Configuration

```bash
curl http://localhost:5000/api/leads/test-email
```

### Test Lead Submission

```bash
curl -X POST http://localhost:5000/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "+91 9876543210",
    "institutionName": "Test School",
    "institutionType": "School",
    "consent": true
  }'
```

## 🐛 Troubleshooting

### Issue: "Invalid login" error

**Solution:** 
- Make sure 2-Step Verification is enabled
- Use App-Specific Password, not regular password
- Remove spaces from the 16-character password

### Issue: Emails not sending

**Solution:**
- Check EMAIL_USER and EMAIL_PASSWORD in .env
- Verify Gmail account is active
- Check spam folder
- Try test-email endpoint first

### Issue: CORS errors

**Solution:**
- Make sure backend is running on port 5000
- Frontend should be on port 5175
- CORS is already configured in server.js

## 🔒 Security Notes

- Never commit `.env` file to Git
- Use App-Specific Passwords, not regular passwords
- Keep EMAIL_PASSWORD secure
- Enable 2-Step Verification on Gmail
- Use environment variables in production

## 📦 Alternative Email Services

### Brevo (Sendinblue) - 300 emails/day free

1. Sign up at https://www.brevo.com/
2. Get API key from Settings → SMTP & API
3. Update `.env`:

```env
EMAIL_SERVICE=brevo
BREVO_API_KEY=your-api-key
```

### SendGrid - 100 emails/day free

1. Sign up at https://sendgrid.com/
2. Create API key
3. Update configuration accordingly

## 🚀 Deployment

### Deploy to Heroku

```bash
heroku create wexl-backend
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASSWORD=your-app-password
heroku config:set ADMIN_EMAIL=narayana0249766@gmail.com
git push heroku main
```

### Deploy to Railway

1. Connect GitHub repository
2. Add environment variables in dashboard
3. Deploy automatically

## 📝 Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Lead management dashboard
- [ ] Authentication & authorization
- [ ] Rate limiting
- [ ] Email queue system
- [ ] Analytics and reporting
- [ ] CRM integration

## 📞 Support

For issues or questions:
- Check logs: `npm run dev`
- Test email: `GET /api/leads/test-email`
- Verify .env configuration

---

**Ready to receive leads! 📧**
