import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import siteConfig from '../config/site.config';

const About = () => {
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
              Hi, I'm {siteConfig.business.founder}
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200"
              variants={fadeInUp}
            >
              React Developer | Web Solutions Specialist
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Building Digital Solutions That Drive Results
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I help small and medium businesses establish a powerful online presence through modern, 
                conversion-focused websites. With proven experience in large-scale enterprise projects and 
                a deep understanding of business needs, I create digital solutions that don't just look 
                good—they drive real results.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                My expertise includes working on major enterprise projects, including developing <strong>250+ 
                frontend pages for Federal Bank</strong>, one of India's leading private sector banks. This 
                experience has given me deep insights into building scalable, secure, and user-friendly web 
                applications that serve millions of users.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Now, I bring this enterprise-level expertise to small and medium businesses at affordable 
                prices. Whether you need a simple business website or a complex web application, I combine 
                technical excellence with business acumen to create websites that truly serve your goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              My Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How I work with clients to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                number: "01",
                title: "Listen First",
                description: "I start every project by understanding your business, your customers, and your goals. Your website should reflect your unique value proposition."
              },
              {
                number: "02",
                title: "Transparent Communication",
                description: "You'll never wonder what's happening with your project. I provide regular updates and welcome your feedback at every stage."
              },
              {
                number: "03",
                title: "Quality Over Quantity",
                description: "I take on a limited number of projects to ensure each client receives the attention and quality they deserve."
              },
              {
                number: "04",
                title: "Long-Term Partnership",
                description: "My relationship with clients doesn't end at launch. I'm here to support your growth with ongoing maintenance and enhancements."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-accent transition-all"
              >
                <div className="text-5xl font-bold text-accent mb-4">{item.number}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Modern, reliable technologies for building professional websites
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

      {/* Why Work With Me */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Work With Me
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "💬",
                title: "Direct Communication",
                description: "No account managers or middlemen—you work directly with the developer building your site."
              },
              {
                icon: "⚡",
                title: "Flexible & Responsive",
                description: "Need a quick change? Have a question? I'm just a message away."
              },
              {
                icon: "🎯",
                title: "Business-Focused",
                description: "I don't just write code—I solve business problems. Every feature is designed with your ROI in mind."
              },
              {
                icon: "💰",
                title: "Fair Pricing",
                description: "Quality work at honest prices. No hidden fees, no surprise charges."
              },
              {
                icon: "🇮🇳",
                title: "Local Understanding",
                description: "Based in Hyderabad, I understand the Indian market and can provide support in your timezone."
              },
              {
                icon: "🤝",
                title: "Long-Term Partner",
                description: "I'm invested in your success. Your growth is my success."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-textPrimary mb-8 max-w-2xl mx-auto">
            Whether you're ready to start a project or just exploring options, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Get In Touch
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                View My Work
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
