import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button/Button';
import FeatureCard from '../components/FeatureCard/FeatureCard';
import siteConfig from '../config/site.config';

const HomeNew = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-[#0d2f43] to-primary text-white py-20 md:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-300"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-2 bg-accent/30 rounded-full backdrop-blur-sm border border-accent/50"
              variants={fadeInUp}
            >
              <span className="text-accent font-bold drop-shadow-lg">🚀 Transforming Ideas into Digital Excellence</span>
            </motion.div>
            
            <motion.h1 
              className="text-accent font-dm-sans text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Transform Your Business with</span>
              <span className="block mt-2 text-accent drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Professional Web Solutions
              </span>
            </motion.h1>
            
            <motion.p 
              className="font-source-sans text-xl md:text-2xl mb-8 text-white leading-relaxed"
              variants={fadeInUp}
              style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.3)' }}
            >
              Custom-built, high-performance websites that drive results. Delivered in <span className="text-accent font-bold drop-shadow-lg">weeks, not months</span>. Starting from <span className="text-accent font-bold drop-shadow-lg">₹25,000</span>
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Link to="/contact">
                <Button variant="primary" size="lg" className="shine group">
                  Get Free Quote
                  <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300">
                  View Services
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="mt-12 flex flex-wrap justify-center gap-8 text-sm"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{siteConfig.stats.projectsCompleted} Projects Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Fast Delivery (1-3 weeks)</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Affordable Pricing</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-white opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(siteConfig.stats).map(([key, value], index) => (
              <motion.div 
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative inline-block">
                  <h3 className="font-dm-sans text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                    {value}
                  </h3>
                  <div className="absolute -inset-2 bg-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <p className="font-source-sans text-gray-600 group-hover:text-primary transition-colors capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-primary rounded-full font-semibold mb-4">
              💼 Service Packages
            </span>
            <h2 className="font-dm-sans text-3xl md:text-4xl font-bold text-primary mb-4">
              Choose Your Perfect <span className="gradient-text">Package</span>
            </h2>
            <p className="font-source-sans text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options designed for businesses of all sizes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {siteConfig.services.packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-3xl shadow-xl p-8 ${pkg.popular ? 'border-4 border-accent transform scale-105' : 'border-2 border-gray-100'} hover:shadow-2xl transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-primary px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                  <p className="text-sm text-gray-600">Delivery: {pkg.duration}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-xs text-gray-500 mb-6 p-3 bg-gray-50 rounded-lg">
                  <strong>Ideal for:</strong> {pkg.ideal}
                </div>

                <Link to="/contact">
                  <Button 
                    variant={pkg.popular ? "primary" : "outline"} 
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-dm-sans text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose My Services?
            </h2>
            <p className="font-source-sans text-xl text-gray-600 max-w-3xl mx-auto">
              Professional web development with personal touch
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <FeatureCard
                  icon={<span className="text-4xl">{feature.icon}</span>}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-dm-sans text-3xl md:text-4xl font-bold mb-4">
              Modern Technologies
            </h2>
            <p className="font-source-sans text-xl text-gray-200 max-w-3xl mx-auto">
              Built with the latest and most reliable web technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {Object.entries(siteConfig.technologies).map(([category, techs], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
              >
                <h3 className="font-bold text-accent mb-4 capitalize">{category}</h3>
                <ul className="space-y-2">
                  {techs.map((tech, idx) => (
                    <li key={idx} className="text-sm text-gray-200 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="font-dm-sans text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Get Your Website?
          </h2>
          <p className="font-source-sans text-xl text-textPrimary mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Get Free Quote
              </Button>
            </Link>
            <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                💬 WhatsApp Me
              </Button>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomeNew;
