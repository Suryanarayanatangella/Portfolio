import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import ScreenshotCarousel from '../components/ScreenshotCarousel/ScreenshotCarousel';
import siteConfig from '../config/site.config';

const Portfolio = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Real projects portfolio
  const projects = [
    {
      name: "Federal Bank Website",
      category: "Enterprise Banking",
      description: "Developed 250+ frontend pages for Federal Bank, one of India's leading private sector banks. Large-scale enterprise project serving millions of customers with secure, responsive, and accessible web interfaces.",
      screenshots: [
        {
          url: `${import.meta.env.BASE_URL}portfolio/federal-bank/homepge.png`,
          title: "Business Loans",
          description: "Business banking solutions and loan products"
        },
        {
          url: `${import.meta.env.BASE_URL}portfolio/federal-bank/product-page.png`,
          title: "Personal Banking",
          description: "Personal banking services and features"
        },
        {
          url: `${import.meta.env.BASE_URL}portfolio/federal-bank/businessloan-product.png`,
          title: "Digital Banking",
          description: "FedPoint digital banking platform"
        }
      ],
      features: [
        "250+ responsive frontend pages",
        "Enterprise-grade security implementation",
        "Cross-browser compatibility",
        "WCAG accessibility standards",
        "Performance optimized for scale",
        "Mobile-first responsive design"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "Responsive Design"],
      link: "https://www.federal.bank.in",
      color: "from-blue-600 to-indigo-700"
    },
    {
      name: "ICICI Bank Retirement Journey",
      category: "Enterprise Banking",
      description: "Developed 170+ pages for ICICI Bank's retirement planning platform. Built 120+ theme-based dashboard static pages and 50+ Angular-based UI pages for comprehensive retirement journey management system.",
      screenshots: [
        {
          url: `${import.meta.env.BASE_URL}portfolio/icici-bank/retirement-journey.png`,
          title: "Retirement Dashboard",
          description: "Theme-based retirement planning dashboard"
        },
        {
          url: `${import.meta.env.BASE_URL}portfolio/icici-bank/icici-investments.png`,
          title: "ICICI Investments",
          description: "Interactive retirement planning dashboards"
        },
        {
          url: `${import.meta.env.BASE_URL}portfolio/icici-bank/personal-investment.png`,
          title: "Personal Investment",
          description: "Angular-based portfolio tracking interface"
        },
        {
          url: `${import.meta.env.BASE_URL}portfolio/icici-bank/income.png`,
          title: "Income Page",
          description: "Angular-based portfolio tracking interface"
        }
      ],
      features: [
        "120+ theme-based dashboard pages",
        "50+ Angular UI components",
        "Interactive retirement calculators",
        "Real-time portfolio tracking",
        "Responsive design across devices",
        "Secure data visualization"
      ],
      technologies: ["Angular", "Material UI", "TypeScript", "HTML5", "CSS3", "JavaScript", "Chart.js"],
      link: "https://www.icicibank.com",
      color: "from-orange-600 to-red-700"
    },
    {
      name: "WEXL & BET Apps Platform",
      category: "EdTech & Enterprise",
      description: "Complete UI development for WEXL educational technology platform and BET Apps (sister concern). Built entire application interface from scratch including website, platform dashboard, and all user-facing components with modern Angular architecture and Material UI design system.",
      screenshots: [
        {
          url: `${import.meta.env.BASE_URL}portfolio/wexl-betapps/dashboard.png`,
          title: "WEXL Homepage",
          description: "Modern educational platform landing page"
        },
        {
          url: `${import.meta.env.BASE_URL}portfolio/wexl-betapps/about-wexl.png`,
          title: "About WEXL",
          description: "Interactive learning management dashboard"
        },
        {
          url: `${import.meta.env.BASE_URL}portfolio/wexl-betapps/bet-apps.png`,
          title: "BET Apps Platform",
          description: "Sister concern enterprise application"
        }
      ],
      features: [
        "Complete UI/UX design and development",
        "Multi-page Angular application",
        "Material UI component library",
        "Email integration with backend",
        "Responsive design system",
        "Modern animations and transitions",
        "Component-based architecture",
        "TypeScript implementation"
      ],
      technologies: ["Angular", "Material UI", "TypeScript", "HTML5", "CSS3", "RxJS", "Node.js", "Express"],
      link: "https://console.wexledu.com/teacher/#/home",
      color: "from-purple-600 to-pink-700"
    }
  ];

  const testimonials = [
    {
      name: "Mustafizur",
      business: "Infosys Client",
      image: "MF",
      text: "Excellent work! The website was delivered on time and looks professional. Very happy with the service.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      business: "Infosys Agile Team",
      image: "PS",
      text: "Great communication throughout the project. The website has helped us get more student inquiries.",
      rating: 5
    },
    {
      name: "Amit Patel",
      business: "Patel Enterprises",
      image: "AP",
      text: "Professional service at affordable price. Highly recommend for small businesses looking for quality websites.",
      rating: 5
    }
  ];

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
              className="text-5xl md:text-6xl font-bold mb-6 text-accent"
              variants={fadeInUp}
            >
              My Portfolio
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200"
              variants={fadeInUp}
            >
              Recent projects showcasing modern web development with React
            </motion.p>

            <motion.div 
              className="flex items-center justify-center gap-8 text-sm"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{siteConfig.stats.projectsCompleted} Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{siteConfig.stats.happyClients} Happy Clients</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Grid */}
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
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Examples of websites I've built for clients across different industries
            </p>
          </motion.div>

          <div className="space-y-16 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-accent transition-all duration-500 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex`}>
                  {/* Project Screenshots Carousel */}
                  <div className="md:w-1/2 relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-8 flex items-center justify-center">
                    <div className="w-full h-96">
                      <ScreenshotCarousel 
                        screenshots={project.screenshots || []}
                        projectName={project.name}
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="md:w-1/2 p-8 md:p-12">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-accent/20 text-primary rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a href={project.link} target='_blank' className="inline-block">
                      <Button variant="primary">
                        View Project
                        <svg className="w-4 h-4 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What my clients say about working with me
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-accent transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.business}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-accent">
              Technologies I Use
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
            Want a Website Like These?
          </h2>
          <p className="text-xl text-textPrimary mb-8 max-w-2xl mx-auto">
            Let's create something amazing for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Start Your Project
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                View Pricing
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Portfolio;
