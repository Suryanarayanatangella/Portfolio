/**
 * Site Configuration
 * Centralized configuration for easy customization per client
 */

const siteConfig = {
  // Business Information
  business: {
    name: "UiTECH",
    tagline: "Transforming Ideas into Digital Excellence",
    description: "Crafting high-performance, conversion-focused websites that elevate your brand and drive business growth through cutting-edge React technology",
    founder: "Suryanarayana T",
    established: "2024"
  },

  // Contact Information
  contact: {
    email: "narayana0249766@gmail.com",
    phone: "+91-9494549004",
    whatsapp: "+91-9494549004",
    location: "Hyderabad, Telangana, India",
    linkedin: "https://www.linkedin.com/in/narayana-t-a8765930a/",
    availability: "Monday - Saturday, 9 AM - 6 PM IST"
  },

  // Brand Colors (easily customizable)
  theme: {
    primary: "#113e59",      // Dark Blue
    secondary: "#113e59",    // Dark Blue
    accent: "#f6b519",       // Yellow/Gold
    background: "#F5F7FA",   // Light Gray
    textPrimary: "#2E3A59"   // Dark Gray-Blue
  },

  // Services Offered
  services: {
    packages: [
      {
        name: "Starter Package",
        price: "₹25,000 - ₹40,000",
        duration: "1-2 weeks",
        features: [
          "5-page responsive website",
          "Contact form with email notifications",
          "Mobile-friendly design",
          "Basic SEO optimization",
          "Social media integration",
          "1 month free support"
        ],
        ideal: "Small businesses, Startups, Personal portfolios"
      },
      {
        name: "Business Package",
        price: "₹60,000 - ₹1,00,000",
        duration: "2-3 weeks",
        popular: true,
        features: [
          "8-10 page website",
          "Advanced animations & interactions",
          "Lead management system",
          "Email automation",
          "Blog/News section",
          "Analytics integration",
          "3 months free support"
        ],
        ideal: "Growing businesses, Service providers, Consultants"
      },
      {
        name: "Enterprise Package",
        price: "₹1,50,000+",
        duration: "4-6 weeks",
        features: [
          "Unlimited pages",
          "Custom features & integrations",
          "Admin dashboard",
          "Payment gateway integration",
          "Multi-language support",
          "Advanced SEO",
          "6 months support & maintenance"
        ],
        ideal: "Large businesses, E-commerce, SaaS platforms"
      }
    ],
    addons: [
      { name: "Blog System", price: "₹15,000" },
      { name: "Payment Integration", price: "₹20,000" },
      { name: "Live Chat", price: "₹10,000" },
      { name: "Analytics Dashboard", price: "₹25,000" },
      { name: "Multi-language", price: "₹18,000" }
    ],
    maintenance: {
      basic: { price: "₹3,000/month", features: ["Content updates", "Bug fixes", "Email support"] },
      standard: { price: "₹5,000/month", features: ["All Basic +", "Performance monitoring", "Security updates", "Priority support"] },
      premium: { price: "₹8,000/month", features: ["All Standard +", "Feature additions", "24/7 support", "Monthly reports"] }
    }
  },

  // Technologies Used
  technologies: {
    frontend: ["React", "Redux Toolkit", "Tailwind CSS", "Framer Motion", "React Router"],
    backend: ["Node.js", "Express", "SMTP/Nodemailer", "EmailJS"],
    tools: ["Git", "VS Code", "Vite", "npm"],
    deployment: ["Vercel", "Netlify", "AWS", "Heroku"]
  },

  // Portfolio/Demo Projects
  portfolio: [
    {
      name: "Federal Bank Website",
      category: "Enterprise Banking",
      description: "Developed 250+ frontend pages for Federal Bank, one of India's leading private sector banks",
      features: ["250+ responsive pages", "Enterprise-grade security", "Cross-browser compatibility", "WCAG accessibility"],
      image: "/portfolio/federal-bank.jpg",
      link: "https://www.federalbank.co.in"
    },
    {
      name: "Educational Platform",
      category: "EdTech",
      description: "Comprehensive educational technology platform with multiple solution pages",
      features: ["Multi-page website", "Email integration", "Responsive design", "Modern animations"],
      image: "/portfolio/edtech.jpg"
    }
  ],

  // Social Proof
  stats: {
    projectsCompleted: "250+",
    happyClients: "10+",
    yearsExperience: "11+",
    responseTime: "< 24 hours"
  },

  // Features of Your Service
  features: [
    {
      title: "Fast Delivery",
      description: "Get your website live in 1-3 weeks, not months",
      icon: "⚡"
    },
    {
      title: "Cost-Effective",
      description: "Professional websites at affordable prices for small businesses",
      icon: "💰"
    },
    {
      title: "Modern Design",
      description: "Beautiful, responsive designs that work on all devices",
      icon: "🎨"
    },
    {
      title: "Email Integration",
      description: "Built-in contact forms with SMTP email notifications",
      icon: "📧"
    },
    {
      title: "SEO Optimized",
      description: "Search engine friendly structure for better visibility",
      icon: "🔍"
    },
    {
      title: "Ongoing Support",
      description: "Technical support and maintenance packages available",
      icon: "🛠️"
    }
  ]
};

export default siteConfig;
