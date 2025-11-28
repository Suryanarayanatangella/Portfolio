const nodemailer = require('nodemailer');

/**
 * Create email transporter
 * Supports Gmail and other SMTP services
 */
const createTransporter = () => {
  const config = {
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  };

  // For Gmail, enable less secure apps or use App-Specific Password
  if (process.env.EMAIL_SERVICE === 'gmail') {
    config.auth.type = 'OAuth2';
    // Fallback to basic auth if OAuth2 not configured
    delete config.auth.type;
  }

  return nodemailer.createTransport(config);
};

/**
 * Verify email configuration
 */
const verifyEmailConfig = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('✅ Email service is ready');
    return true;
  } catch (error) {
    console.error('❌ Email service error:', error.message);
    console.log('💡 Make sure to configure EMAIL_USER and EMAIL_PASSWORD in .env');
    return false;
  }
};

module.exports = {
  createTransporter,
  verifyEmailConfig,
};
