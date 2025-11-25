/**
 * Email Templates for Web Development Service Business
 * Customized for client inquiries and quote requests
 */

/**
 * Email template for client confirmation (sent to potential client)
 */
const clientConfirmationTemplate = (clientData) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #2E3A59; margin: 0; padding: 0; }
    .container { max-width: 650px; margin: 0 auto; background: #ffffff; }
    .header { background: linear-gradient(135deg, #113e59 0%, #0d2f43 100%); color: white; padding: 40px 30px; text-align: center; }
    .header h1 { margin: 0 0 10px 0; font-size: 32px; }
    .header p { margin: 0; opacity: 0.9; font-size: 16px; }
    .content { padding: 40px 30px; }
    .greeting { font-size: 18px; color: #113e59; margin-bottom: 20px; }
    .info-box { background: #f8f9fa; padding: 20px; border-left: 4px solid #f6b519; margin: 25px 0; border-radius: 4px; }
    .info-box h3 { margin-top: 0; color: #113e59; }
    .info-box ul { margin: 10px 0; padding-left: 20px; }
    .info-box li { margin: 8px 0; }
    .details-card { background: #ffffff; border: 2px solid #f6b519; padding: 20px; border-radius: 8px; margin: 25px 0; }
    .details-row { margin: 10px 0; }
    .details-label { font-weight: 600; color: #113e59; display: inline-block; min-width: 100px; }
    .button { display: inline-block; background: #f6b519; color: #113e59; padding: 14px 35px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 20px 0; }
    .button:hover { background: #e5a615; }
    .contact-info { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0; }
    .contact-info p { margin: 8px 0; }
    .footer { background: #113e59; color: white; padding: 30px; text-align: center; }
    .footer p { margin: 5px 0; opacity: 0.9; }
    .social-links { margin: 15px 0; }
    .social-links a { color: #f6b519; text-decoration: none; margin: 0 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✨ Thank You for Your Inquiry!</h1>
      <p>Professional React Web Development Services</p>
    </div>
    
    <div class="content">
      <p class="greeting">Hi ${clientData.name},</p>
      
      <p>Thank you for reaching out! I'm excited about the opportunity to help bring your website vision to life.</p>
      
      <p>I've received your inquiry and I'm reviewing your requirements. Here's what happens next:</p>
      
      <div class="info-box">
        <h3>📋 Next Steps</h3>
        <ul>
          <li><strong>Within 24 hours:</strong> I'll send you a personalized response</li>
          <li><strong>Free Consultation:</strong> We'll discuss your project in detail</li>
          <li><strong>Custom Proposal:</strong> You'll receive a detailed quote and timeline</li>
          <li><strong>Portfolio Review:</strong> I'll share relevant examples of my work</li>
        </ul>
      </div>
      
      <div class="details-card">
        <h3 style="margin-top: 0; color: #113e59;">Your Inquiry Details</h3>
        <div class="details-row">
          <span class="details-label">Name:</span>
          <span>${clientData.name}</span>
        </div>
        <div class="details-row">
          <span class="details-label">Email:</span>
          <span>${clientData.email}</span>
        </div>
        ${clientData.phone ? `
        <div class="details-row">
          <span class="details-label">Phone:</span>
          <span>${clientData.phone}</span>
        </div>
        ` : ''}
        ${clientData.company ? `
        <div class="details-row">
          <span class="details-label">Company:</span>
          <span>${clientData.company}</span>
        </div>
        ` : ''}
        ${clientData.interest ? `
        <div class="details-row">
          <span class="details-label">Interest:</span>
          <span><strong>${clientData.interest}</strong></span>
        </div>
        ` : ''}
        <div class="details-row">
          <span class="details-label">Submitted:</span>
          <span>${new Date().toLocaleString('en-IN', { 
            timeZone: 'Asia/Kolkata',
            dateStyle: 'medium',
            timeStyle: 'short'
          })}</span>
        </div>
      </div>
      
      <div class="info-box">
        <h3>💡 Why Work With Me?</h3>
        <ul>
          <li>✅ Fast delivery (1-3 weeks)</li>
          <li>✅ Affordable pricing for small businesses</li>
          <li>✅ Modern React technology</li>
          <li>✅ Integrated email systems</li>
          <li>✅ Responsive design for all devices</li>
          <li>✅ Ongoing support included</li>
        </ul>
      </div>
      
      <center>
        <a href="https://wa.me/919494549004" class="button">💬 Chat on WhatsApp</a>
      </center>
      
      <div class="contact-info">
        <h3 style="margin-top: 0; color: #113e59;">📞 Contact Information</h3>
        <p><strong>Email:</strong> <a href="mailto:narayana0249766@gmail.com" style="color: #f6b519;">narayana0249766@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+919494549004" style="color: #f6b519;">+91-9494549004</a></p>
        <p><strong>Location:</strong> Hyderabad, Telangana, India</p>
        <p><strong>Response Time:</strong> Within 24 hours</p>
      </div>
      
      <p>Feel free to reach out if you have any immediate questions. I'm here to help!</p>
      
      <p style="margin-top: 30px;">Best regards,<br><strong>Suryanarayana T</strong><br>Web Developer</p>
    </div>
    
    <div class="footer">
      <p><strong>Professional React Web Development</strong></p>
      <p>Building modern websites for small businesses</p>
      <div class="social-links">
        <a href="https://www.linkedin.com/in/narayana-t-a8765930a/">LinkedIn</a> |
        <a href="mailto:narayana0249766@gmail.com">Email</a> |
        <a href="https://wa.me/919494549004">WhatsApp</a>
      </div>
      <p style="font-size: 12px; margin-top: 20px; opacity: 0.7;">
        © ${new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  </div>
</body>
</html>
  `;
};

/**
 * Email template for admin notification (sent to you)
 */
const adminNotificationTemplate = (clientData) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 700px; margin: 0 auto; background: #ffffff; }
    .header { background: linear-gradient(135deg, #113e59 0%, #0d2f43 100%); color: white; padding: 40px 30px; text-align: center; }
    .header h1 { margin: 0 0 10px 0; font-size: 32px; }
    .header p { margin: 0; opacity: 0.9; font-size: 16px; }
    .content { padding: 40px 30px; background: #f8f9fa; }
    .alert-box { background: #fff3cd; border-left: 4px solid #f6b519; padding: 20px; margin-bottom: 25px; border-radius: 4px; }
    .alert-box strong { color: #856404; font-size: 16px; }
    .alert-box p { margin: 10px 0 0 0; color: #856404; }
    .info-card { background: white; margin: 20px 0; padding: 25px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .info-card h2 { margin-top: 0; color: #113e59; border-bottom: 2px solid #f6b519; padding-bottom: 10px; }
    .info-row { margin: 15px 0; display: flex; align-items: flex-start; }
    .label { font-weight: 600; color: #113e59; min-width: 140px; display: inline-block; }
    .value { color: #555; flex: 1; }
    .value a { color: #f6b519; text-decoration: none; font-weight: 600; }
    .value a:hover { text-decoration: underline; }
    .message-box { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-top: 10px; border-left: 4px solid #f6b519; }
    .action-buttons { margin-top: 30px; text-align: center; background: white; padding: 25px; border-radius: 8px; }
    .btn { display: inline-block; padding: 14px 30px; margin: 8px; background: #f6b519; color: #113e59; text-decoration: none; border-radius: 6px; font-weight: 600; }
    .btn-secondary { background: #113e59; color: white; }
    .btn:hover { opacity: 0.9; }
    .priority-badge { display: inline-block; background: #dc3545; color: white; padding: 6px 16px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-left: 10px; }
    .tips-box { background: #e7f3ff; border-left: 4px solid #0066cc; padding: 20px; margin: 25px 0; border-radius: 4px; }
    .tips-box h3 { margin-top: 0; color: #0066cc; }
    .tips-box ul { margin: 10px 0; padding-left: 20px; }
    .tips-box li { margin: 8px 0; color: #333; }
    .footer { text-align: center; padding: 30px; color: #666; font-size: 13px; background: #f8f9fa; border-top: 2px solid #dee2e6; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎉 New Website Inquiry!</h1>
      <p>A potential client is interested in your services</p>
    </div>
    
    <div class="content">
      <div class="alert-box">
        <strong>⚡ ACTION REQUIRED</strong>
        <p>Respond within 24 hours for best conversion rate! Quick response = Higher chance of closing the deal.</p>
      </div>

      <div class="info-card">
        <h2>👤 Client Information</h2>
        <div class="info-row">
          <span class="label">Name:</span>
          <span class="value"><strong style="font-size: 18px;">${clientData.name}</strong></span>
        </div>
        <div class="info-row">
          <span class="label">📧 Email:</span>
          <span class="value"><a href="mailto:${clientData.email}">${clientData.email}</a></span>
        </div>
        <div class="info-row">
          <span class="label">📱 Phone:</span>
          <span class="value">${clientData.phone ? `<a href="tel:${clientData.phone}">${clientData.phone}</a>` : '<em>Not provided</em>'}</span>
        </div>
        ${clientData.company ? `
        <div class="info-row">
          <span class="label">🏢 Company:</span>
          <span class="value"><strong>${clientData.company}</strong></span>
        </div>
        ` : ''}
      </div>

      ${clientData.interest ? `
      <div class="info-card">
        <h2>💼 Project Interest</h2>
        <div class="info-row">
          <span class="label">Package:</span>
          <span class="value"><strong style="font-size: 16px; color: #f6b519;">${clientData.interest}</strong></span>
        </div>
      </div>
      ` : ''}

      ${clientData.message ? `
      <div class="info-card">
        <h2>💬 Client Message</h2>
        <div class="message-box">
          ${clientData.message.replace(/\n/g, '<br>')}
        </div>
      </div>
      ` : ''}

      <div class="info-card">
        <h2>📊 Inquiry Details</h2>
        <div class="info-row">
          <span class="label">🕐 Received:</span>
          <span class="value">${new Date().toLocaleString('en-IN', { 
            timeZone: 'Asia/Kolkata',
            dateStyle: 'full',
            timeStyle: 'short'
          })}</span>
        </div>
        <div class="info-row">
          <span class="label">📍 Source:</span>
          <span class="value">Website Contact Form</span>
        </div>
      </div>

      <div class="action-buttons">
        <h3 style="margin-top: 0; color: #113e59;">Quick Actions</h3>
        <a href="mailto:${clientData.email}?subject=Re: Your Website Inquiry&body=Hi ${clientData.name},%0D%0A%0D%0AThank you for your interest in my web development services!%0D%0A%0D%0A" class="btn">
          📧 Reply via Email
        </a>
        ${clientData.phone ? `
        <a href="tel:${clientData.phone}" class="btn btn-secondary">
          📞 Call Now
        </a>
        <a href="https://wa.me/${clientData.phone.replace(/[^0-9]/g, '')}?text=Hi ${clientData.name}, thank you for your inquiry!" class="btn">
          💬 WhatsApp
        </a>
        ` : ''}
      </div>

      <div class="tips-box">
        <h3>💡 Quick Response Tips</h3>
        <ul>
          <li><strong>Respond Fast:</strong> Reply within 24 hours (ideally within 2-4 hours)</li>
          <li><strong>Personalize:</strong> Reference their specific needs/message</li>
          <li><strong>Show Portfolio:</strong> Share 2-3 relevant project examples</li>
          <li><strong>Clear Next Steps:</strong> Suggest a call/meeting time</li>
          <li><strong>Build Trust:</strong> Mention your experience and client testimonials</li>
          <li><strong>Create Urgency:</strong> Mention current availability/special offers</li>
        </ul>
      </div>

      <div class="info-card" style="background: #f0f9ff; border-left: 4px solid #0066cc;">
        <h3 style="margin-top: 0; color: #0066cc;">📝 Response Template</h3>
        <p style="margin: 0; color: #333; line-height: 1.8;">
          Hi ${clientData.name},<br><br>
          Thank you for reaching out! I'd love to help you with your website project.<br><br>
          Based on your inquiry${clientData.interest ? ` for the ${clientData.interest}` : ''}, I can deliver a professional, responsive website that will help grow your business.<br><br>
          I have ${clientData.interest === 'Starter Package' ? '1-2 weeks' : clientData.interest === 'Business Package' ? '2-3 weeks' : '4-6 weeks'} availability starting next week. Would you be available for a quick 15-minute call to discuss your requirements?<br><br>
          Looking forward to working with you!<br><br>
          Best regards,<br>
          Suryanarayana T
        </p>
      </div>
    </div>

    <div class="footer">
      <p><strong>📊 Lead Management Tips</strong></p>
      <p>✓ Log this lead in your CRM/spreadsheet<br>
      ✓ Set a follow-up reminder for 2 days if no response<br>
      ✓ Track conversion rate to improve your process</p>
      <hr style="margin: 20px 0; border: none; border-top: 1px solid #dee2e6;">
      <p>This is an automated notification from your Web Development Business Platform</p>
      <p style="font-size: 11px; color: #999; margin-top: 10px;">
        © ${new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  </div>
</body>
</html>
  `;
};

/**
 * Plain text versions for email clients that don't support HTML
 */
const clientConfirmationText = (clientData) => {
  return `
Thank You for Your Inquiry!

Hi ${clientData.name},

Thank you for reaching out! I'm excited about the opportunity to help bring your website vision to life.

I've received your inquiry and I'm reviewing your requirements. Here's what happens next:

NEXT STEPS:
- Within 24 hours: I'll send you a personalized response
- Free Consultation: We'll discuss your project in detail
- Custom Proposal: You'll receive a detailed quote and timeline
- Portfolio Review: I'll share relevant examples of my work

YOUR INQUIRY DETAILS:
Name: ${clientData.name}
Email: ${clientData.email}
${clientData.phone ? `Phone: ${clientData.phone}` : ''}
${clientData.company ? `Company: ${clientData.company}` : ''}
${clientData.interest ? `Interest: ${clientData.interest}` : ''}
Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

WHY WORK WITH ME?
✓ Fast delivery (1-3 weeks)
✓ Affordable pricing for small businesses
✓ Modern React technology
✓ Integrated email systems
✓ Responsive design for all devices
✓ Ongoing support included

CONTACT INFORMATION:
Email: narayana0249766@gmail.com
Phone: +91-9494549004
WhatsApp: https://wa.me/919494549004
Location: Hyderabad, Telangana, India

Feel free to reach out if you have any immediate questions. I'm here to help!

Best regards,
Suryanarayana T
Web Developer

---
Professional React Web Development
Building modern websites for small businesses
  `;
};

const adminNotificationText = (clientData) => {
  return `
🚀 NEW WEBSITE INQUIRY!

⚡ ACTION REQUIRED: Respond within 24 hours!

CLIENT INFORMATION:
━━━━━━━━━━━━━━━━━━━━
Name: ${clientData.name}
Email: ${clientData.email}
Phone: ${clientData.phone || 'Not provided'}
${clientData.company ? `Company: ${clientData.company}` : ''}

${clientData.interest ? `PROJECT INTEREST:\n${clientData.interest}\n` : ''}
${clientData.message ? `\nCLIENT MESSAGE:\n${clientData.message}\n` : ''}
RECEIVED: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

QUICK ACTIONS:
- Reply: ${clientData.email}
${clientData.phone ? `- Call: ${clientData.phone}\n- WhatsApp: https://wa.me/${clientData.phone.replace(/[^0-9]/g, '')}` : ''}

RESPONSE TIPS:
✓ Respond within 24 hours (ideally 2-4 hours)
✓ Personalize your response
✓ Share relevant portfolio examples
✓ Suggest a call/meeting time
✓ Create urgency with availability

---
This is an automated notification from your Web Development Business Platform
  `;
};

module.exports = {
  clientConfirmationTemplate,
  adminNotificationTemplate,
  clientConfirmationText,
  adminNotificationText,
};
