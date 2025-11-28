import React from 'react';
import LeadForm from '../components/LeadForm/LeadForm';

const Demo = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-[#0d2f43] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-dm-sans text-4xl md:text-5xl font-bold mb-6 text-center">
            Request a Demo
          </h1>
          <p className="font-source-sans text-xl text-center max-w-3xl mx-auto text-gray-200">
            Experience the power of AI-driven education. Schedule your personalized demo today.
          </p>
        </div>
      </section>

      {/* Demo Benefits */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-dm-sans text-2xl font-bold text-primary mb-8 text-center">
              What You'll Experience in the Demo
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <span className="text-accent text-2xl mr-3">✓</span>
                <div>
                  <h3 className="font-semibold text-textPrimary mb-1">Platform Walkthrough</h3>
                  <p className="text-gray-600 text-sm">Complete tour of all features and capabilities</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-accent text-2xl mr-3">✓</span>
                <div>
                  <h3 className="font-semibold text-textPrimary mb-1">AI Features Demo</h3>
                  <p className="text-gray-600 text-sm">See our AI-powered tools in action</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-accent text-2xl mr-3">✓</span>
                <div>
                  <h3 className="font-semibold text-textPrimary mb-1">Custom Solutions</h3>
                  <p className="text-gray-600 text-sm">Discuss tailored solutions for your needs</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-accent text-2xl mr-3">✓</span>
                <div>
                  <h3 className="font-semibold text-textPrimary mb-1">Q&A Session</h3>
                  <p className="text-gray-600 text-sm">Get answers to all your questions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <LeadForm />
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-dm-sans text-xl font-bold text-primary mb-4">
              What Happens Next?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h4 className="font-semibold text-textPrimary mb-2">Submit Form</h4>
                <p className="text-gray-600 text-sm">Fill out the demo request form with your details</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h4 className="font-semibold text-textPrimary mb-2">Get Contacted</h4>
                <p className="text-gray-600 text-sm">Our team will reach out within 24 hours</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h4 className="font-semibold text-textPrimary mb-2">Schedule Demo</h4>
                <p className="text-gray-600 text-sm">Choose a convenient time for your personalized demo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
