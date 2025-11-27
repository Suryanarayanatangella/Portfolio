const { createTransporter } = require('../config/email');
const {
  leadConfirmationTemplate,
  adminNotificationTemplate,
  leadConfirmationText,
} = require('../utils/emailTemplates');

/**
 * Submit a new lead
 * POST /api/leads
 */
const submitLead = async (req, res) => {
  debugger
  try {
    const leadData = req.body;

    // Validate required fields
    const requiredFields = ['fullName', 'email', 'phone', 'institutionName', 'institutionType'];
    const missingFields = requiredFields.filter(field => !leadData[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(', ')}`,
      });
    }

    let emailSent = false;
    let emailError = null;

    // Try to send emails if email is configured
    if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
      try {
        // Create email transporter
        const transporter = createTransporter();

        // Send confirmation email to customer
        const customerEmailOptions = {
          from: {
            name: 'WeXL Team',
            address: process.env.EMAIL_USER,
          },
          to: leadData.email,
          subject: 'Thank You for Your Interest in WeXL!',
          html: leadConfirmationTemplate(leadData),
          text: leadConfirmationText(leadData),
        };

        // Send notification email to admin/sales team
        const adminEmailOptions = {
          from: {
            name: 'WeXL Lead System',
            address: process.env.EMAIL_USER,
          },
          to: [process.env.ADMIN_EMAIL, process.env.SALES_EMAIL].filter(Boolean),
          subject: `🎯 New Lead: ${leadData.fullName} - ${leadData.institutionName}`,
          html: adminNotificationTemplate(leadData),
        };

        // Send both emails
        const [customerEmail, adminEmail] = await Promise.all([
          transporter.sendMail(customerEmailOptions),
          transporter.sendMail(adminEmailOptions),
        ]);

        console.log('✅ Emails sent successfully');
        console.log('Customer email ID:', customerEmail.messageId);
        console.log('Admin email ID:', adminEmail.messageId);
        emailSent = true;
      } catch (emailErr) {
        console.error('⚠️ Email sending failed:', emailErr.message);
        emailError = emailErr.message;
        // Continue even if email fails - lead is still captured
      }
    } else {
      console.log('⚠️ Email not configured - lead saved without email notification');
      console.log('💡 Configure EMAIL_USER and EMAIL_PASSWORD in .env to enable emails');
    }

    // Log lead data (in production, save to database)
    console.log('📝 New Lead Received:');
    console.log(JSON.stringify(leadData, null, 2));

    // Return success response
    res.status(200).json({
      success: true,
      message: emailSent 
        ? 'Lead submitted successfully! Check your email for confirmation.'
        : 'Lead submitted successfully! Email notifications are not configured.',
      data: {
        leadId: `LEAD-${Date.now()}`,
        submittedAt: new Date().toISOString(),
        emailSent: emailSent,
        emailError: emailError,
      },
    });

  } catch (error) {
    console.error('❌ Error submitting lead:', error);
    
    res.status(500).json({
      success: false,
      message: 'Failed to submit lead. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

/**
 * Get all leads (for admin dashboard - future implementation)
 * GET /api/leads
 */
const getAllLeads = async (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Lead retrieval endpoint - to be implemented with database',
    data: [],
  });
};

/**
 * Test email configuration
 * GET /api/leads/test-email
 */
const testEmail = async (req, res) => {
  try {
    const transporter = createTransporter();
    
    const testEmailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to self for testing
      subject: 'WeXL Email Service Test',
      html: '<h1>Email Service is Working!</h1><p>Your WeXL backend email configuration is correct.</p>',
      text: 'Email Service is Working! Your WeXL backend email configuration is correct.',
    };

    const info = await transporter.sendMail(testEmailOptions);

    res.status(200).json({
      success: true,
      message: 'Test email sent successfully!',
      messageId: info.messageId,
    });

  } catch (error) {
    console.error('❌ Test email failed:', error);
    
    res.status(500).json({
      success: false,
      message: 'Test email failed. Check your email configuration.',
      error: error.message,
    });
  }
};

module.exports = {
  submitLead,
  getAllLeads,
  testEmail,
};
