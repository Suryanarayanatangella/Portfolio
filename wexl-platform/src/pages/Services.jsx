import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import siteConfig from '../config/site.config';

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-[#0d2f43] to-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <motion.div 
          className="container mx-auto px-4 relative z-10"
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div className="max-w-4xl mx-auto text-center" variants={fadeInUp}>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              variants={fadeInUp}
            >
              Services & Pricing
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200"
              variants={fadeInUp}
            >
              Transparent pricing for professional web development services
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All packages include responsive design, email integration, and support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {siteConfig.services.packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden ${
                  pkg.popular ? 'border-4 border-accent transform md:scale-110 z-10' : 'border-2 border-gray-100'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-accent text-primary text-center py-2 font-bold text-sm">
                    ⭐ MOST POPULAR
                  </div>
                )}
                
                <div className={`p-8 ${pkg.popular ? 'pt-14' : ''}`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{pkg.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    </div>
                    <p className="text-gray-600">Delivery: {pkg.duration}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4">What's Included:</h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl mb-6">
                    <p className="text-sm text-gray-600">
                      <strong className="text-gray-900">Perfect for:</strong> {pkg.ideal}
                    </p>
                  </div>

                  <Link to="/contact">
                    <Button 
                      variant={pkg.popular ? "primary" : "outline"}
                      className="w-full"
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Add-on Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your website with additional features
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {siteConfig.services.addons.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-gray-100 hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{addon.name}</h3>
                  <span className="text-xl font-bold text-accent">{addon.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Monthly Maintenance Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keep your website running smoothly with ongoing support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(siteConfig.services.maintenance).map(([key, plan], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-accent transition-all"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2 capitalize">{key}</h3>
                <div className="text-3xl font-bold text-primary mb-6">{plan.price}</div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="block mt-6">
                  <Button variant="outline" className="w-full">
                    Choose Plan
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple and transparent process from start to finish
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Consultation", desc: "Free consultation to understand your needs" },
              { step: "2", title: "Proposal", desc: "Detailed proposal with timeline and pricing" },
              { step: "3", title: "Development", desc: "Weekly updates as I build your website" },
              { step: "4", title: "Launch", desc: "Final review, training, and go live!" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "What's included in the price?",
                a: "All packages include responsive design, email integration, basic SEO, and the specified support period. Hosting and domain are separate."
              },
              {
                q: "How long does it take?",
                a: "Starter packages take 1-2 weeks, Business packages 2-3 weeks, and Enterprise packages 4-6 weeks depending on complexity."
              },
              {
                q: "Do you provide hosting?",
                a: "Yes, I can set up hosting for you at an additional cost, or you can use your own hosting provider."
              },
              {
                q: "What if I need changes later?",
                a: "Minor changes are included during the support period. After that, you can opt for a maintenance plan or pay per change."
              },
              {
                q: "Do you offer refunds?",
                a: "I offer revisions during development. If you're not satisfied, we'll work together to make it right."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-md"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Let's discuss your project and find the perfect package for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Get Free Quote
              </Button>
            </Link>
            <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                💬 WhatsApp Me
              </Button>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
