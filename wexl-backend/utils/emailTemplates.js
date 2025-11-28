/**
 * Email template for lead confirmation (sent to customer)
 */
const leadConfirmationTemplate = (leadData) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #2E3A59; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #113e59 0%, #0d2f43 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #ffffff; padding: 30px; border: 1px solid #e0e0e0; }
    .footer { background: #F5F7FA; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; font-size: 14px; color: #666; }
    .button { display: inline-block; background: #f6b519; color: #113e59; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 20px 0; }
    .info-box { background: #F5F7FA; padding: 15px; border-left: 4px solid #113e59; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 28px;">WeXL</h1>
      <p style="margin: 10px 0 0 0; font-size: 16px;">AI-Powered Academic Excellence</p>
    </div>
    
    <div class="content">
      <h2 style="color: #113e59;">Thank You for Your Interest!</h2>
      
      <p>Dear ${leadData.fullName},</p>
      
      <p>Thank you for reaching out to WeXL! We've received your inquiry and our team is excited to help transform your institution with our AI-powered educational platform.</p>
      
      <div class="info-box">
        <strong>What happens next?</strong>
        <ul style="margin: 10px 0; padding-left: 20px;">
          <li>Our team will review your requirements</li>
          <li>We'll contact you within 24 hours</li>
          <li>Schedule a personalized demo</li>
          <li>Discuss customized solutions for your needs</li>
        </ul>
      </div>
      
      <p><strong>Your Submission Details:</strong></p>
      <ul style="list-style: none; padding: 0;">
        <li>📧 Email: ${leadData.email}</li>
        <li>📱 Phone: ${leadData.phone}</li>
        <li>🏫 Institution: ${leadData.institutionName}</li>
        <li>📚 Type: ${leadData.institutionType}</li>
      </ul>
      
      <p>In the meantime, feel free to explore our platform features and success stories on our website.</p>
      
      <center>
        <a href="${process.env.FRONTEND_URL}" class="button">Visit Our Website</a>
      </center>
      
      <p>If you have any immediate questions, please don't hesitate to reach out to us at <a href="mailto:narayana0249766@gmail.com" style="color: #113e59;">narayana0249766@gmail.com</a></p>
      
      <p style="margin-top: 30px;">Best regards,<br><strong>The WeXL Team</strong></p>
    </div>
    
    <div class="footer">
      <p><strong>WeXL - AI-Powered Academic Excellence</strong></p>
      <p>Jubilee Hills, Hyderabad, Telangana, India</p>
      <p>Email: narayana0249766@gmail.com | Website: www.wexledu.com</p>
      <p style="font-size: 12px; color: #999; margin-top: 15px;">
        © ${new Date().getFullYear()} WeXL. All rights reserved.
      </p>
    </div>
  </div>
</body>
</html>
  `;
};

/**
 * Email template for admin notification (sent to sales team)
 */
const adminNotificationTemplate = (leadData) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #2E3A59; }
    .container { max-width: 700px; margin: 0 auto; padding: 20px; }
    .header { background: #113e59; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #ffffff; padding: 30px; border: 1px solid #e0e0e0; }
    .lead-details { background: #F5F7FA; padding: 20px; border-radius: 6px; margin: 20px 0; }
    .detail-row { display: flex; padding: 10px 0; border-bottom: 1px solid #e0e0e0; }
    .detail-label { font-weight: bold; width: 200px; color: #113e59; }
    .detail-value { flex: 1; }
    .priority { background: #f6b519; color: #113e59; padding: 5px 15px; border-radius: 20px; display: inline-block; font-weight: bold; font-size: 12px; }
    .footer { background: #F5F7FA; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">🎯 New Lead Received!</h1>
      <p style="margin: 5px 0 0 0;">WeXL Platform</p>
    </div>
    
    <div class="content">
      <p><span class="priority">NEW LEAD</span></p>
      <p>A new lead has been submitted through the WeXL platform. Please review and follow up within 24 hours.</p>
      
      <div class="lead-details">
        <h3 style="margin-top: 0; color: #113e59;">Lead Information</h3>
        
        <div class="detail-row">
          <div class="detail-label">Full Name:</div>
          <div class="detail-value">${leadData.fullName}</div>
        </div>
        
        <div class="detail-row">
          <div class="detail-label">Email:</div>
          <div class="detail-value"><a href="mailto:${leadData.email}">${leadData.email}</a></div>
        </div>
        
        <div class="detail-row">
          <div class="detail-label">Phone:</div>
          <div class="detail-value"><a href="tel:${leadData.phone}">${leadData.phone}</a></div>
        </div>
        
        <div class="detail-row">
          <div class="detail-label">Institution Name:</div>
          <div class="detail-value">${leadData.institutionName}</div>
        </div>
        
        <div class="detail-row">
          <div class="detail-label">Institution Type:</div>
          <div class="detail-value">${leadData.institutionType}</div>
        </div>
        
        ${leadData.role ? `
        <div class="detail-row">
          <div class="detail-label">Role:</div>
          <div class="detail-value">${leadData.role}</div>
        </div>
        ` : ''}
        
        ${leadData.state ? `
        <div class="detail-row">
          <div class="detail-label">State:</div>
          <div class="detail-value">${leadData.state}</div>
        </div>
        ` : ''}
        
        ${leadData.numberOfStudents ? `
        <div class="detail-row">
          <div class="detail-label">Number of Students:</div>
          <div class="detail-value">${leadData.numberOfStudents}</div>
        </div>
        ` : ''}
        
        ${leadData.areaOfInterest && leadData.areaOfInterest.length > 0 ? `
        <div class="detail-row">
          <div class="detail-label">Area of Interest:</div>
          <div class="detail-value">${leadData.areaOfInterest.join(', ')}</div>
        </div>
        ` : ''}
        
        ${leadData.hearAboutUs ? `
        <div class="detail-row">
          <div class="detail-label">Source:</div>
          <div class="detail-value">${leadData.hearAboutUs}</div>
        </div>
        ` : ''}
        
        ${leadData.message ? `
        <div class="detail-row">
          <div class="detail-label">Message:</div>
          <div class="detail-value">${leadData.message}</div>
        </div>
        ` : ''}
        
        <div class="detail-row">
          <div class="detail-label">Newsletter:</div>
          <div class="detail-value">${leadData.newsletter ? 'Yes' : 'No'}</div>
        </div>
        
        <div class="detail-row" style="border-bottom: none;">
          <div class="detail-label">Submitted:</div>
          <div class="detail-value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</div>
        </div>
      </div>
      
      <p><strong>Action Required:</strong></p>
      <ul>
        <li>Review lead details</li>
        <li>Contact within 24 hours</li>
        <li>Schedule demo if qualified</li>
        <li>Update CRM system</li>
      </ul>
    </div>
    
    <div class="footer">
      <p>This is an automated notification from WeXL Lead Management System</p>
      <p>© ${new Date().getFullYear()} WeXL. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
  `;
};

/**
 * Plain text version for email clients that don't support HTML
 */
const leadConfirmationText = (leadData) => {
  return `
Thank You for Your Interest in WeXL!

Dear ${leadData.fullName},

Thank you for reaching out to WeXL! We've received your inquiry and our team is excited to help transform your institution with our AI-powered educational platform.

What happens next?
- Our team will review your requirements
- We'll contact you within 24 hours
- Schedule a personalized demo
- Discuss customized solutions for your needs

Your Submission Details:
Email: ${leadData.email}
Phone: ${leadData.phone}
Institution: ${leadData.institutionName}
Type: ${leadData.institutionType}

If you have any immediate questions, please reach out to us at narayana0249766@gmail.com

Best regards,
The WeXL Team

WeXL - AI-Powered Academic Excellence
Jubilee Hills, Hyderabad, Telangana, India
Email: narayana0249766@gmail.com | Website: www.wexledu.com
  `;
};

module.exports = {
  leadConfirmationTemplate,
  adminNotificationTemplate,
  leadConfirmationText,
};
