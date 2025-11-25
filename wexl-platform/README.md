# WeXL Platform - AI-Powered Educational Excellence

A modern, professional educational technology platform built with React, Redux Toolkit, and Tailwind CSS. This platform replicates the WeXL educational system with AI-powered learning, assessment tools, and comprehensive lead generation capabilities.

## 🚀 Features

### Core Platform Features
- **AI-Powered Learning**: Personalized learning paths and adaptive content
- **Assessment Center**: Automated grading with AI-powered subjective correction
- **English Proficiency**: Speech analysis and BET framework integration
- **Analytics Dashboard**: Comprehensive performance tracking and insights
- **Live Classes**: Integrated video conferencing (Zoom/Google Meet)
- **Content Library**: Extensive digital asset management system

### Technical Features
- **React 19.2** with functional components and hooks
- **Redux Toolkit** for state management
- **React Router v6** for navigation
- **Formik + Yup** for form handling and validation
- **Tailwind CSS** for responsive design
- **Mobile-first** responsive design
- **Accessibility compliant** (WCAG 2.1 AA)

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. Navigate to the project directory:
```bash
cd wexl-platform
```

2. Install dependencies:
```bash
npm install
```

## 🎯 Available Scripts

### Development
```bash
npm run dev
```
Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build
```bash
npm run build
```
Builds the app for production to the `dist` folder.

### Preview
```bash
npm run preview
```
Preview the production build locally.

### Lint
```bash
npm run lint
```
Runs ESLint to check code quality.

## 📁 Project Structure

```
wexl-platform/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button/
│   │   ├── FeatureCard/
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── LeadForm/
│   ├── features/            # Redux slices
│   │   └── leads/
│   ├── layouts/             # Layout components
│   │   └── MainLayout.jsx
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── Solutions.jsx
│   │   ├── Contact.jsx
│   │   └── Demo.jsx
│   ├── store/               # Redux store configuration
│   │   └── store.js
│   ├── utils/               # Utility functions
│   │   └── mockApi.js
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies

```

## 🎨 Design System

### Colors
- **Primary**: #113e59 (Teal Blue)
- **Secondary**: #113e59 (Sky Blue)
- **Accent**: #f6b519 (Golden Yellow)
- **Background**: #F5F7FA (Off-White/Cool Gray)
- **Text Primary**: #2E3A59 (Charcoal Gray)

### Typography
- **Headings**: DM Sans (400, 500, 600, 700)
- **Body**: Source Sans 3 (300, 400, 600)

### Spacing
- Based on 8px grid system
- Consistent padding and margins throughout

## 📄 Pages

1. **Home** (`/`) - Landing page with hero, features, stats, and testimonials
2. **About** (`/about`) - Company mission, vision, and values
3. **Products** (`/products`) - Platform features and capabilities
4. **Solutions** (`/solutions`) - Solutions for different institutions
5. **Contact** (`/contact`) - Contact information and lead form
6. **Demo** (`/demo`) - Demo request page with lead form

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.js` includes:
- Custom color palette
- Custom font families
- Extended spacing scale
- Custom box shadows

### Redux Store
State management for:
- Lead submissions
- Form status tracking
- Error handling

## 📝 Lead Generation Form

The platform includes a comprehensive lead generation form with:

**Required Fields:**
- Full Name
- Email Address
- Phone Number
- Institution Name
- Institution Type

**Optional Fields:**
- Role/Position
- State/Region
- Number of Students/Employees
- Area of Interest
- How did you hear about us?
- Additional Requirements

**Features:**
- Real-time validation with Yup
- Inline error messages
- Loading states
- Success/error notifications
- Accessibility compliant

## 🔌 API Integration

Currently using mock API (`src/utils/mockApi.js`) for development.

### To integrate with real backend:

1. Update `src/features/leads/leadsSlice.js`:
```javascript
// Replace mockSubmitLead with actual API call
const response = await fetch('/api/leads', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(leadData),
});
```

2. Configure API endpoints in environment variables:
```env
VITE_API_BASE_URL=https://your-api-url.com
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 📱 Responsive Design

The platform is fully responsive with breakpoints:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatible
- Sufficient color contrast (WCAG AA)
- Focus indicators

## 🔒 Security Considerations

- Input validation on all forms
- XSS protection
- CSRF tokens (implement in backend)
- Secure API communication (HTTPS)
- Data privacy compliance

## 📊 Performance

Target metrics:
- Lighthouse Performance: 90+
- Lighthouse Accessibility: 100
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s

## 🤝 Contributing

This is a proprietary project for WeXL. For internal development:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit for review

## 📞 Support

For technical support or questions:
- Email: narayana0249766@gmail.com
- Location: Jubilee Hills, Hyderabad, Telangana

## 📄 License

Proprietary - All rights reserved by WeXL

## 🎯 Next Steps

### Immediate Tasks:
1. ✅ Project setup and configuration
2. ✅ Core components development
3. ✅ Page implementations
4. ✅ Lead generation form
5. ✅ Redux state management
6. ⏳ Backend API integration
7. ⏳ Email service setup
8. ⏳ Testing and QA
9. ⏳ Performance optimization
10. ⏳ Production deployment

### Future Enhancements:
- User authentication system
- Admin dashboard for lead management
- Advanced analytics integration
- Multi-language support
- Progressive Web App (PWA) features
- Offline functionality
- Push notifications
- Integration with payment gateways

---

**Built with ❤️ for educational excellence**
