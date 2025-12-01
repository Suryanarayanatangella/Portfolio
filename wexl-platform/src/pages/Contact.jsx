import React from 'react';
import LeadForm from '../components/LeadForm/LeadForm';

const Contact = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-[#0d2f43] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-dm-sans text-4xl md:text-5xl font-bold mb-6 text-center text-accent">
            Contact Us
          </h1>
          <p className="font-source-sans text-xl text-center max-w-3xl mx-auto text-gray-200">
            Get in touch with our team. We're here to help transform your institution.
          </p>
        </div>
      </section>

      {/* Contact Info and Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="font-dm-sans text-2xl font-bold text-primary mb-6">
                  Get In Touch
                </h2>
                <p className="font-source-sans text-gray-700 mb-6">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              {/* Office Location */}
              <div className="bg-white p-6 rounded-lg shadow-card">
                <div className="flex items-centernav">
                  <svg className="w-6 h-6 text-primary mr-3 mt-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="font-dm-sans font-bold text-textPrimary m-0">Contact Details</h3>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-lg shadow-card">
                <div className="flex items-start mb-4">
                  <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font-dm-sans font-bold text-textPrimary mb-2">Email</h3>
                    <a href="mailto:narayana0249766@gmail.com" className="text-primary hover:text-accent transition-colors">
                      narayana0249766@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white p-6 rounded-lg shadow-card">
                <div className="flex items-start mb-4">
                  <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="font-dm-sans font-bold text-textPrimary mb-2">Phone</h3>
                    <p className="text-gray-600">+91-9494549004</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white p-6 rounded-lg shadow-card">
                <div className="flex items-start mb-4">
                  <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-dm-sans font-bold text-textPrimary mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 24/7 Available <br />
                      Sunday Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lead Form */}
            <div className="lg:col-span-2">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
