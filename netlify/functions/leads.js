const nodemailer = require('nodemailer');

// Email templates
const leadConfirmationTemplate = (leadData) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #113e59 0%, #0d2f43 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
    .button { display: inline-block; padding: 12px 30px; background: #f6b519; color: #113e59; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 20px 0; }
    .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Your Interest!</h1>
    </div>
    <div class="content">
      <p>Dear ${leadData.fullName},</p>
      <p>Thank you for reaching out to UiTECH! We've received your inquiry and our team will get back to you within 24 hours.</p>
      <p><strong>Your Details:</strong></p>
      <ul>
        <li>Name: ${leadData.fullName}</li>
        <li>Email: ${leadData.email}</li>
        <li>Phone: ${leadData.phone}</li>
        ${leadData.institutionName ? `<li>Institution: ${leadData.institutionName}</li>` : ''}
      </ul>
      <p>We're excited to help you build something amazing!</p>
      <div class="footer">
        <p>Best regards,<br><strong>UiTECH Team</strong></p>
      </div>
    </div>
  </div>
</body>
</html>
`;

const adminNotificationTemplate = (leadData) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #113e59; color: white; padding: 20px; }
    .content { background: white; padding: 20px; border: 1px solid #ddd; }
    .field { margin: 10px 0; padding: 10px; background: #f9f9f9; border-left: 3px solid #f6b519; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>🎯 New Lead Received</h2>
    </div>
    <div class="content">
      <div class="field"><strong>Name:</strong> ${leadData.fullName}</div>
      <div class="field"><strong>Email:</strong> ${leadData.email}</div>
      <div class="field"><strong>Phone:</strong> ${leadData.phone}</div>
      ${leadData.institutionName ? `<div class="field"><strong>Institution:</strong> ${leadData.institutionName}</div>` : ''}
      ${leadData.message ? `<div class="field"><strong>Message:</strong> ${leadData.message}</div>` : ''}
      <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
    </div>
  </div>
</body>
</html>
`;

const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

exports.handler = async (event) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  // Health check
  if (event.httpMethod === 'GET' && event.path.endsWith('/health')) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ status: 'OK', message: 'API is running' }),
    };
  }

  // Test email
  if (event.httpMethod === 'GET' && event.path.includes('/test-email')) {
    try {
      const transporter = createTransporter();
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'Test Email',
        text: 'Email service is working!',
      });

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true, message: 'Test email sent!' }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ success: false, error: error.message }),
      };
    }
  }

  // Submit lead
  if (event.httpMethod === 'POST') {
    try {
      const leadData = JSON.parse(event.body);

      // Validate
      const required = ['fullName', 'email', 'phone'];
      const missing = required.filter(f => !leadData[f]);
      if (missing.length > 0) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ success: false, message: `Missing: ${missing.join(', ')}` }),
        };
      }

      let emailSent = false;

      // Send emails if configured
      if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
        try {
          const transporter = createTransporter();

          await Promise.all([
            transporter.sendMail({
              from: { name: 'UiTECH Team', address: process.env.EMAIL_USER },
              to: leadData.email,
              subject: 'Thank You for Your Interest in UiTECH!',
              html: leadConfirmationTemplate(leadData),
            }),
            transporter.sendMail({
              from: { name: 'UiTECH Lead System', address: process.env.EMAIL_USER },
              to: [process.env.ADMIN_EMAIL, process.env.SALES_EMAIL].filter(Boolean),
              subject: `🎯 New Lead: ${leadData.fullName}`,
              html: adminNotificationTemplate(leadData),
            }),
          ]);

          emailSent = true;
        } catch (err) {
          console.error('Email error:', err);
        }
      }

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: emailSent ? 'Lead submitted! Check your email.' : 'Lead submitted!',
          data: {
            leadId: `LEAD-${Date.now()}`,
            submittedAt: new Date().toISOString(),
            emailSent,
          },
        }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ success: false, message: error.message }),
      };
    }
  }

  return {
    statusCode: 405,
    headers,
    body: JSON.stringify({ error: 'Method not allowed' }),
  };
};
