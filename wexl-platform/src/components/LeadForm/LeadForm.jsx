import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { submitLead, resetSubmitStatus } from '../../features/leads/leadsSlice';
import Button from '../Button/Button';

// Validation schema using Yup
const leadValidationSchema = Yup.object({
  fullName: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters')
    .required('Full name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[+]?[\d\s\-()]+$/, 'Invalid phone number')
    .required('Phone number is required'),
  institutionName: Yup.string()
    .required('Institution name is required'),
  institutionType: Yup.string()
    .required('Please select institution type'),
  role: Yup.string(),
  state: Yup.string(),
  numberOfStudents: Yup.string(),
  areaOfInterest: Yup.array(),
  hearAboutUs: Yup.string(),
  message: Yup.string()
    .max(500, 'Message must not exceed 500 characters'),
  consent: Yup.boolean()
    .oneOf([true], 'You must accept the privacy policy')
    .required('Consent is required'),
  newsletter: Yup.boolean(),
});

const LeadForm = () => {
  const dispatch = useDispatch();
  const { status, submitSuccess, error } = useSelector((state) => state.leads);

  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => {
        dispatch(resetSubmitStatus());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitSuccess, dispatch]);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await dispatch(submitLead(values)).unwrap();
      resetForm();
    } catch (err) {
      console.error('Failed to submit lead:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-card-hover">
      <h2 className="font-dm-sans text-3xl font-bold text-primary mb-2 text-center">
        Get Started Today
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Fill out the form below and our team will contact you within 24 hours
      </p>

      {submitSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
          <p className="font-semibold">Thank you for your interest!</p>
          <p className="text-sm">Our team will contact you soon.</p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
          <p className="font-semibold">Something went wrong</p>
          <p className="text-sm">{error}</p>
        </div>
      )}

      <Formik
        initialValues={{
          fullName: '',
          email: '',
          phone: '',
          institutionName: '',
          institutionType: '',
          role: '',
          state: '',
          numberOfStudents: '',
          areaOfInterest: [],
          hearAboutUs: '',
          message: '',
          consent: false,
          newsletter: false,
        }}
        validationSchema={leadValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-textPrimary font-semibold mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <Field
                id="fullName"
                name="fullName"
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Enter your full name"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-textPrimary font-semibold mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-textPrimary font-semibold mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <Field
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="+91 XXXXXXXXXX"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            {/* Institution Name and Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="institutionName" className="block text-textPrimary font-semibold mb-2">
                  Institution Name <span className="text-red-500">*</span>
                </label>
                <Field
                  id="institutionName"
                  name="institutionName"
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your institution name"
                />
                <ErrorMessage
                  name="institutionName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="institutionType" className="block text-textPrimary font-semibold mb-2">
                  Institution Type <span className="text-red-500">*</span>
                </label>
                <Field
                  as="select"
                  id="institutionType"
                  name="institutionType"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Select type</option>
                  <option value="School">School (K-12)</option>
                  <option value="College">College</option>
                  <option value="University">University</option>
                  <option value="Corporate">Corporate</option>
                  <option value="EdTech">EdTech Company</option>
                </Field>
                <ErrorMessage
                  name="institutionType"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            {/* Role and State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="role" className="block text-textPrimary font-semibold mb-2">
                  Your Role
                </label>
                <Field
                  as="select"
                  id="role"
                  name="role"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Select role</option>
                  <option value="Principal">Principal</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Admin">Administrator</option>
                  <option value="Decision Maker">Decision Maker</option>
                  <option value="Other">Other</option>
                </Field>
              </div>

              <div>
                <label htmlFor="state" className="block text-textPrimary font-semibold mb-2">
                  State/Region
                </label>
                <Field
                  as="select"
                  id="state"
                  name="state"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Select state</option>
                  {indianStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </Field>
              </div>
            </div>

            {/* Number of Students */}
            <div>
              <label htmlFor="numberOfStudents" className="block text-textPrimary font-semibold mb-2">
                Number of Students/Employees
              </label>
              <Field
                as="select"
                id="numberOfStudents"
                name="numberOfStudents"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              >
                <option value="">Select range</option>
                <option value="1-100">1-100</option>
                <option value="101-500">101-500</option>
                <option value="501-1000">501-1000</option>
                <option value="1001-5000">1001-5000</option>
                <option value="5000+">5000+</option>
              </Field>
            </div>

            {/* How did you hear about us */}
            <div>
              <label htmlFor="hearAboutUs" className="block text-textPrimary font-semibold mb-2">
                How did you hear about us?
              </label>
              <Field
                as="select"
                id="hearAboutUs"
                name="hearAboutUs"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              >
                <option value="">Select option</option>
                <option value="Search Engine">Search Engine</option>
                <option value="Social Media">Social Media</option>
                <option value="Referral">Referral</option>
                <option value="Event">Event</option>
                <option value="Advertisement">Advertisement</option>
                <option value="Other">Other</option>
              </Field>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-textPrimary font-semibold mb-2">
                Additional Requirements
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your specific needs..."
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
              <p className="text-sm text-gray-500 mt-1">
                {values.message.length}/500 characters
              </p>
            </div>

            {/* Consent Checkbox */}
            <div className="space-y-3">
              <div className="flex items-start">
                <Field
                  type="checkbox"
                  id="consent"
                  name="consent"
                  className="mt-1 mr-3 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label htmlFor="consent" className="text-sm text-gray-700">
                  I agree to the <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> and 
                  <a href="/terms" className="text-primary hover:underline ml-1">Terms of Service</a>
                  <span className="text-red-500 ml-1">*</span>
                </label>
              </div>
              <ErrorMessage
                name="consent"
                component="div"
                className="text-red-500 text-sm"
              />

              <div className="flex items-start">
                <Field
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  className="mt-1 mr-3 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-700">
                  Subscribe to our newsletter for updates and educational insights
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting || status === 'loading'}
              className="w-full"
            >
              {isSubmitting || status === 'loading' ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit Request'
              )}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LeadForm;
