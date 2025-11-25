/**
 * Mock API for development
 * Replace with actual backend API endpoints in production
 */

export const mockSubmitLead = async (leadData) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Simulate random success/failure for testing
  const isSuccess = Math.random() > 0.1; // 90% success rate

  if (isSuccess) {
    return {
      success: true,
      leadId: `LEAD-${Date.now()}`,
      message: 'Lead submitted successfully',
      data: {
        ...leadData,
        submittedAt: new Date().toISOString(),
      },
    };
  } else {
    throw new Error('Failed to submit lead. Please try again.');
  }
};

/**
 * Mock email service
 * In production, this should be handled by backend
 */
export const mockSendEmail = async (emailData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  console.log('Email sent:', emailData);
  
  return {
    success: true,
    message: 'Email sent successfully',
  };
};
