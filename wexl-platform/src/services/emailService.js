import emailjs from '@emailjs/browser';

/**
 * EmailJS Configuration
 * Get these from: https://dashboard.emailjs.com/
 */
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
};

/**
 * Initialize EmailJS
 */
export const initEmailJS = () => {
  if (EMAILJS_CONFIG.publicKey && EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY') {
    emailjs.init(EMAILJS_CONFIG.publicKey);
    console.log('✅ EmailJS initialized');
  } else {
    console.warn('⚠️ EmailJS not configured. Add credentials to .env');
  }
};

/**
 * Send lead notification email using EmailJS
 * @param {Object} leadData - Lead information
 * @returns {Promise} EmailJS response
 */
export const sendLeadEmail = async (leadData) => {
  try {
    // Check if EmailJS is configured
    if (EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY') {
      console.warn('⚠️ EmailJS not configured - skipping email');
      return {
        success: false,
        message: 'Email service not configured',
      };
    }

    // Prepare email parameters
    const templateParams = {
      to_email: leadData.email,
      to_name: leadData.fullName,
      from_name: 'WeXL Team',
      institution_name: leadData.institutionName,
      institution_type: leadData.institutionType,
      phone: leadData.phone,
      role: leadData.role || 'Not specified',
      state: leadData.state || 'Not specified',
      number_of_students: leadData.numberOfStudents || 'Not specified',
      area_of_interest: leadData.areaOfInterest?.join(', ') || 'Not specified',
      hear_about_us: leadData.hearAboutUs || 'Not specified',
      message: leadData.message || 'No additional message',
      reply_to: leadData.email,
    };

    // Send email via EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    console.log('✅ Email sent successfully:', response);
    
    return {
      success: true,
      message: 'Email sent successfully',
      response,
    };

  } catch (error) {
    console.error('❌ Email sending failed:', error);
    
    return {
      success: false,
      message: error.text || error.message || 'Failed to send email',
      error,
    };
  }
};

/**
 * Check if EmailJS is configured
 */
export const isEmailConfigured = () => {
  return (
    EMAILJS_CONFIG.serviceId !== 'YOUR_SERVICE_ID' &&
    EMAILJS_CONFIG.templateId !== 'YOUR_TEMPLATE_ID' &&
    EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY'
  );
};
