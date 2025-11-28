# Professional Software Development Brief: WeXL Platform Migration

## ROLE

You are an expert software development consultant and mentor with comprehensive knowledge in modern web technologies. You possess deep expertise in React, Redux, state management patterns, and contemporary UI/UX frameworks. Your skills encompass full-stack development, creating scalable educational technology platforms, and implementing clean architecture principles with industry best practices.

---

## TASK

Develop a complete educational platform replicating the structure, functionality, and user experience of WeXL (https://www.wexledu.com/), an AI-powered academic excellence platform that serves K-12 schools, colleges, universities, and corporate clients. The platform should include exact replicas of all pages found on the reference website, with a specialized focus on implementing a robust Lead Generation Module that enables effective customer acquisition and follow-up for the educational technology platform.

---

## INSTRUCTIONS

### 1. Critical Requirement: Complete Page Replication

You must replicate ALL pages from https://www.wexledu.com/ exactly as they appear, including:

#### Comprehensive Page-by-Page Analysis & Replication
- Systematically examine every page on the WeXL website
- Identify all navigation menu items, footer links, and linked pages
- Replicate exact page structure, layout, and content organization
- Match visual hierarchy, spacing, and component placement precisely
- Reproduce all interactive elements and their exact behaviors
- Maintain consistent design language across all pages
- Capture the educational technology aesthetic and professional appearance


#### Content Structure Matching
- Replicate heading structures (H1, H2, H3, etc.) with precise hierarchy
- Match paragraph lengths, text flow, and content rhythm
- Reproduce call-to-action placements, styling, and messaging
- Mirror image placements, sizing, and aspect ratios
- Replicate icon usage, visual elements, and illustrations
- Match card layouts, grid systems, and spacing patterns
- Maintain consistency in content tone and educational focus

#### Functional Components Replication
- Replicate all forms with identical fields and validation
- Match dropdown options, selections, and filtering mechanisms
- Reproduce modal behaviors, overlays, and popup interactions
- Mirror accordion/collapse functionality and animations
- Replicate tab interfaces and switching behaviors
- Match carousel/slider behaviors and transitions
- Implement any interactive demos or preview features

#### Visual Fidelity Requirements
- Match color schemes exactly as specified
- Replicate typography hierarchy with precision
- Mirror spacing, padding, and margin systems
- Reproduce shadow effects, depth, and layering
- Match border styles, radius, and decorative elements
- Replicate hover, active, and focus states
- Implement smooth transitions and micro-interactions

---

### 2. Technical Stack Requirements

#### Frontend Framework
- **ReactJS** (Latest stable version - React 18+)
- **Redux Toolkit** for state management and data flow
- **Tailwind CSS** for styling and responsive design

#### Form Management
- **Formik** for form handling, submission workflow, and state management
- **Yup** for schema-based validation and comprehensive error handling


#### Design System Specifications

**Typography:**
- Headings: DM Sans font family (weights: 400, 500, 600, 700)
- Body/Text: Source Sans 3 font family (weights: 300, 400, 600)

**Color Palette:**
- Primary: Teal Blue (#113e59)
- Accent/Secondary: Sky Blue (#113e59)
- Background: Golden Yellow (#f6b519) and Off-White/Cool Gray (#F5F7FA)
- Text Primary: Charcoal Gray (#2E3A59)

*Note: The color scheme combines professional educational tones with warm accent colors to create an engaging and trustworthy appearance.*

---

### 3. Application Pages & Sections (Based on WeXL Website)

Create exact replicas of all pages found on https://www.wexledu.com/, including but not limited to:

#### Homepage (Main Landing Page)
- Hero section with compelling value proposition and tagline
- Platform features overview with icons and descriptions
- EEE Framework showcase (Education, English, Employability)
- Benefits and USP highlights for different user segments
- Statistics/metrics section demonstrating impact
- Testimonials from principals and educators
- Call-to-action sections strategically placed
- Lead generation form integration
- Partner/client logos section
- Any additional homepage sections

#### About/Platform Information Pages
- Company story and mission as a global leader in AI education
- Vision and values statements
- Team section (if present)
- Technology and innovation highlights
- Patented products and solutions showcase
- Key differentiators and competitive advantages
- Timeline or company history (if present)


#### Products/Solutions Pages
- WeXL Learn platform features and capabilities
- School and College solutions with digital education support
- Proficiency Program with AI-powered speech analysis
- Performance assessment and improvement tools
- Bharat English Test (BET) framework details
- LMS and DAM (Digital Asset Management) features
- AI-powered subjective correction tools
- Detailed feature descriptions with use cases
- Interactive elements showcasing platform capabilities

#### Target Audience Pages
- Schools (K-12) specific solutions and features
- Colleges and Universities offerings
- Corporate training solutions
- System Providers/EdTech Companies partnerships
- Teacher-specific tools and dashboards
- Student learning features and gamification
- Parent engagement and communication tools

#### Features/Services Pages
- Live Classes integration (Zoom/Google Meet)
- Assessment center and test management
- Analytics, reports, and performance tracking
- Content library (videos, worksheets, practices)
- Teacher aids and productivity tools
- Principal/Admin dashboards with insights
- Rewards and gamification system
- Communication channels
- Custom configuration capabilities

#### Pricing/Plans Page (if applicable)
- Pricing tiers for different institution sizes
- Feature comparison tables
- Plan selection interface
- Custom enterprise solutions
- Demo request or trial signup
- FAQ section related to pricing


#### Contact/Lead Generation Page
- Dedicated lead generation form with all required fields
- Multiple contact methods (phone, email, address)
- Office location: Jubilee Hills, Hyderabad, Telangana
- Contact numbers and email (narayana0249766@gmail.com)
- Map integration (if present)
- Business hours
- Quick inquiry form

#### Additional Pages to Discover and Replicate
- Testimonials/Reviews from educators and institutions
- Case Studies showcasing success stories
- BET Admission Exam information and gallery
- FAQ/Help Center
- Resources/Blog (if present)
- Terms of Service and Privacy Policy
- Career/Jobs page (if present)
- Partner Integration pages
- Platform documentation or guides
- Mobile app information (Android/iOS)
- Any other pages discovered during comprehensive analysis

#### Navigation & Footer Elements
- Main navigation menu with all links
- Mega menu (if applicable)
- Mobile hamburger menu
- Complete footer with multiple columns
- Newsletter subscription (if present)
- Social media links (LinkedIn, Facebook, etc.)
- Quick links and sitemap
- Legal and compliance links

---

### 4. Page Discovery & Replication Process

#### Comprehensive Site Mapping
- Navigate through the entire WeXL website systematically
- Document all pages in main navigation and dropdown menus
- Identify all pages in footer navigation sections
- Find pages linked from content sections and CTAs
- Check for hidden or secondary pages
- Create a complete sitemap with page hierarchy
- Note page relationships and navigation flow


#### Component Inventory & Cataloging
- List all unique components used across pages
- Identify reusable patterns and design elements
- Document component variations and states
- Note responsive behavior of each component
- Create a component library structure
- Identify shared layouts and templates

#### Content Analysis & Documentation
- Analyze content types on each page (text, images, videos)
- Document form structures, field types, and validations
- Identify all interactive elements and their triggers
- Note animation effects, transitions, and timing
- Capture data visualization patterns
- Document educational content presentation styles

---

### 5. Development Standards

#### Component Architecture
- Build professional, reusable components following React best practices
- Implement atomic design principles (atoms, molecules, organisms, templates, pages)
- Use functional components with React Hooks exclusively
- Ensure proper component composition and separation of concerns
- Create a comprehensive component library matching WeXL's design system
- Implement proper prop typing and validation
- Ensure components are easily testable, maintainable, and documented

#### State Management & Data Maintenance
- Utilize Redux Toolkit for global state management
- Implement proper slices with organized action creators and reducers
- Use Redux Toolkit Query (RTK Query) for efficient API integration
- Manage form state efficiently with Formik
- Implement proper loading, error, and success states
- Ensure data consistency and synchronization across the application
- Use Redux for cross-page state persistence
- Implement proper caching and optimization strategies
- Handle complex state transitions gracefully


#### Lead Generation Form Implementation
- Create a clean, minimal, and highly user-friendly form
- Implement comprehensive field validation using Yup schemas
- Provide clear, actionable, and helpful error messages
- Include proper loading states with visual feedback
- Add success confirmation messages with next steps
- Implement form analytics and tracking
- Add progressive disclosure for complex fields
- Ensure accessibility compliance
- Implement auto-save functionality (if needed)
- Add spam protection mechanisms

#### Responsive Design Excellence
- Ensure pixel-perfect responsiveness across all device sizes
- Implement mobile-first design approach matching WeXL's responsive behavior
- Test thoroughly on various screen resolutions (320px to 2560px+)
- Ensure touch-friendly interfaces for mobile users (44px minimum touch targets)
- Optimize images and assets for different screen densities (1x, 2x, 3x)
- Implement proper breakpoints using Tailwind CSS utility classes
- Match WeXL's mobile navigation patterns exactly
- Test on real devices and multiple browsers
- Ensure smooth scrolling and touch interactions

#### Code Quality & Documentation
- Write clean, professional-grade production-ready code
- Use clear, descriptive naming conventions (camelCase for variables, PascalCase for components)
- Include comprehensive inline comments and JSDoc documentation
- Structure code for easy debugging, testing, and maintenance
- Follow ESLint and Prettier configurations for consistency
- Implement React Error Boundaries for graceful error handling
- Add PropTypes or consider TypeScript for type safety
- Write self-documenting code with meaningful names
- Keep functions small and focused (single responsibility principle)

---

### 6. Backend Integration

#### Email Service Implementation
Integrate simple SMTP-based email service for lead notifications. Configure professional, branded email templates for:
- Lead submission confirmations to prospective customers
- Lead notifications to business/sales team with full details
- Welcome emails with next steps and resources
- Follow-up email sequences (if applicable)


**Additional Email Requirements:**
- Implement comprehensive error handling for email delivery failures
- Add email queuing system for reliability and retry logic
- Include email logs and tracking for monitoring
- Ensure HTML email templates are responsive
- Add plain text fallbacks for email clients

#### API Endpoints Structure
- `POST /api/leads` - Submit new lead with form data
- `GET /api/leads` - Retrieve all leads (admin access)
- `GET /api/leads/:id` - Get specific lead details
- `PUT /api/leads/:id` - Update lead status
- `DELETE /api/leads/:id` - Delete lead (soft delete)
- `POST /api/email/send` - Send email via SMTP

---

### 7. User Interface Requirements

#### Design Principles
- Simple, intuitive, and clean interface inspired by WeXL
- Minimal cognitive load with clear information hierarchy
- Professional appearance aligned with educational technology platforms
- Consistent spacing following 8px grid system
- Accessible design meeting WCAG 2.1 AA compliance standards
- Clear visual feedback for all user interactions
- Educational and trustworthy aesthetic

#### Lead Generation Form Fields

**Required Fields:**
- Full Name (min 2 chars, max 50 chars)
- Email Address (valid email format validation)
- Phone Number (international format with country code)
- Institution/Organization Name
- Institution Type (dropdown: School/College/University/Corporate/EdTech)

**Optional Fields:**
- Role/Position (dropdown: Principal/Teacher/Admin/Decision Maker/Other)
- State/Region (dropdown with Indian states)
- Number of Students/Employees (range selector)
- Area of Interest (multi-select: Academic Excellence/English Proficiency/Assessment/LMS/All)
- How did you hear about us? (dropdown: Search Engine/Social Media/Referral/Event/Advertisement/Other)
- Message/Additional Requirements (textarea, 500 char limit)


**Compliance Fields:**
- Consent checkbox for data processing and privacy policy (required)
- Newsletter subscription opt-in (optional)
- Terms and Conditions acceptance (required)

#### User Experience Features
- Real-time field validation with immediate inline feedback
- Clear success/error messages with helpful, actionable guidance
- Smooth transitions and delightful micro-interactions
- Loading indicators with percentage or spinner during submission
- Comprehensive confirmation message upon successful submission
- Progressive disclosure for complex or conditional fields
- Smart auto-formatting (phone numbers, capitalization)
- Keyboard navigation support with proper tab order
- Screen reader compatibility with ARIA labels
- Clear required field indicators (asterisks + labels)

---

### 8. Navigation & Routing

- Implement React Router v6 for client-side routing
- Create smooth page transitions with fade/slide effects
- Implement proper URL structure matching WeXL's routing pattern
- Add breadcrumbs for better navigation on deep pages
- Ensure proper browser back/forward button functionality
- Implement scroll restoration on navigation
- Add 404 Not Found page with helpful navigation
- Implement route guards if authentication is needed
- Use lazy loading for route-based code splitting

---

### 9. Performance Optimization

- Implement React code splitting and lazy loading for routes
- Optimize all images (WebP format with JPEG fallbacks)
- Implement lazy loading for images below the fold
- Minimize JavaScript bundle size (target: <200KB initial load)
- Implement proper caching strategies with service workers
- Use React.memo for expensive components
- Optimize re-renders with useMemo and useCallback hooks
- Implement virtual scrolling for long lists
- Defer non-critical JavaScript
- Optimize fonts loading with font-display: swap
- Achieve Lighthouse score: 90+ Performance, 100 Accessibility


### 10. Accessibility Standards

- Use semantic HTML5 elements throughout
- Implement proper ARIA labels, roles, and properties
- Ensure full keyboard navigation support
- Provide skip-to-content links
- Ensure sufficient color contrast (WCAG AA: 4.5:1 for text)
- Add visible focus indicators for keyboard navigation
- Associate error messages with form fields properly
- Provide alternative text for all images
- Ensure screen reader compatibility
- Test with keyboard-only navigation
- Support browser zoom up to 200%

---

## DATA

### Reference Website
**Primary Source:** https://www.wexledu.com/

### Comprehensive Analysis Requirements

#### 1. Complete Site Audit & Mapping
- Systematically map every page on the WeXL website
- Document the entire site structure and information architecture
- Identify all user journeys and conversion paths
- Take screenshots of each page and component for reference
- Document all interactive elements and their specific behaviors
- Note any dynamic content or data-driven sections
- Identify third-party integrations (maps, videos, chat, analytics)

#### 2. Content Structure Deep Analysis
- All page sections with exact content organization and hierarchy
- Heading structures (H1, H2, H3) and their nesting
- Call-to-action copy, placement, and styling patterns
- Feature descriptions focusing on AI-powered capabilities
- Benefits presentation for different segments (K-12, Colleges, Universities, Corporates)
- Educational content presentation styles
- Images, icons, illustrations, and their contexts
- Video embeds and multimedia content integration
- Product descriptions for assessment and proficiency tools
- PDF downloads and resource links
- Data visualizations and infographics


#### 3. Visual Design Replication Guide
- Exact layout patterns and grid systems (12-column, flexbox, etc.)
- Spacing scale (margins, padding following 4px/8px grid)
- Typography hierarchy with sizes, weights, and line heights
- Color usage throughout the site (primary, secondary, accents)
- Shadow definitions for elevation and depth
- Border styles, widths, and radius values
- Animation timing functions and transitions
- Hover states with color shifts and transformations
- Loading states and skeleton screens
- Button styles and variations (primary, secondary, outline, text)

#### 4. Component Catalog Creation

**Buttons:** All variations (primary, secondary, outline, ghost, disabled states)

**Form Inputs:** Text, email, tel, textarea, select, checkbox, radio, file upload

**Cards:** Content cards, feature cards, testimonial cards, product cards

**Navigation:** Main nav, mobile nav, breadcrumbs, pagination

**Modal/Dialog:** Overlays, popups, lightboxes

**Accordion/Collapse:** Expandable sections, FAQ items

**Tabs:** Horizontal tabs, vertical tabs, segmented controls

**Carousels/Sliders:** Image sliders, testimonial carousels, product showcases

**Tables:** Data tables, comparison tables, pricing tables

**Badge/Tag:** Status indicators, category tags, labels

**Progress Indicators:** Loading spinners, progress bars, stepper components

**Alert/Toast:** Success, error, warning, info notifications

**Dropdown:** Select dropdowns, menu dropdowns, mega menus


#### 5. User Experience Pattern Analysis
- Navigation structure (header, footer, mega menus)
- User flow through the website (landing → explore → convert)
- Interaction patterns (hover effects, click behaviors, drag interactions)
- Form placement and prominence in conversion funnels
- Mobile navigation patterns (hamburger, drawer, bottom nav)
- Scroll behaviors (sticky headers, parallax, reveal on scroll)
- Educational content presentation with videos and practice materials
- Micro-interactions that enhance engagement

#### 6. Functionality Mapping
- All interactive elements and their specific behaviors
- Form submission processes and validation patterns
- Search functionality (if present)
- Filter and sort mechanisms on listing pages
- Pagination or infinite scroll implementation
- Loading states and error handling approaches
- Success confirmation patterns
- Multi-step processes or wizards

#### 7. Responsive Behavior Documentation
- Mobile layout transformations (320px - 767px)
- Tablet-specific layouts (768px - 1023px)
- Desktop optimizations (1024px - 1439px)
- Large screen layouts (1440px+)
- Breakpoint definitions and component adaptations
- Touch interactions and gestures on mobile
- Menu transformations across devices
- Image scaling and art direction changes

#### 8. Educational Platform Specifics
- Academic excellence messaging and guarantees
- AI-powered features and innovation highlights
- Teacher tools and productivity features presentation
- Student engagement and gamification elements
- Parent communication channels showcase
- Assessment and performance tracking visualizations
- Trust signals and social proof (testimonials, logos, statistics)


### Business Context

**Target Users:** Educational institutions (K-12 schools, colleges, universities), corporate training departments, EdTech companies, teachers, students, parents

**Primary Goal:** Lead generation and customer acquisition for the educational platform

**User Journey:** Landing → Exploration of features → Trust building → Lead form submission → Sales team follow-up

**Value Proposition:** AI-powered academic excellence platform with patented solutions guaranteeing minimum 50% improvement in academic status

**Key Differentiators:** Make in India initiative, EEE Framework (Education, English, Employability), AI-driven assessments, comprehensive LMS

---

## EXAMPLES

### Example 1: Hero Section Component Structure

```jsx
// Hero.jsx - Homepage hero section
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#113e59] to-[#2E3A59] py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="font-dm-sans text-5xl font-bold mb-4">
              AI-Powered Academic Excellence Platform
            </h1>
            <p className="font-source-sans text-xl mb-6">
              Guaranteed 50% improvement in academic performance
            </p>
            <button className="bg-[#f6b519] text-[#113e59] px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Request Demo
            </button>
          </div>
          <div>
            {/* Hero image/illustration */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
```


### Example 2: Lead Generation Form with Formik & Yup

```jsx
// LeadForm.jsx - Lead generation form component
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const leadValidationSchema = Yup.object({
  fullName: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters')
    .required('Full name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[+]?[\d\s-()]+$/, 'Invalid phone number')
    .required('Phone number is required'),
  institutionName: Yup.string()
    .required('Institution name is required'),
  institutionType: Yup.string()
    .required('Please select institution type'),
  consent: Yup.boolean()
    .oneOf([true], 'You must accept the privacy policy')
    .required('Consent is required')
});

const LeadForm = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });
      
      if (response.ok) {
        alert('Thank you! Our team will contact you soon.');
        resetForm();
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        phone: '',
        institutionName: '',
        institutionType: '',
        consent: false
      }}
      validationSchema={leadValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="font-dm-sans text-3xl font-bold text-[#113e59] mb-6">
            Get Started Today
          </h2>
          
          <div className="mb-4">
            <label className="block text-[#2E3A59] font-semibold mb-2">
              Full Name *
            </label>
            <Field
              name="fullName"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#113e59] focus:border-transparent"
            />
            <ErrorMessage
              name="fullName"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Additional fields... */}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#f6b519] text-[#113e59] py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LeadForm;
```


### Example 3: Redux Slice for Lead Management

```javascript
// features/leads/leadsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const submitLead = createAsyncThunk(
  'leads/submit',
  async (leadData, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData)
      });
      
      if (!response.ok) throw new Error('Failed to submit lead');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const leadsSlice = createSlice({
  name: 'leads',
  initialState: {
    leads: [],
    status: 'idle',
    error: null,
    submitSuccess: false
  },
  reducers: {
    resetSubmitStatus: (state) => {
      state.submitSuccess = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitLead.pending, (state) => {
        state.status = 'loading';
        state.submitSuccess = false;
      })
      .addCase(submitLead.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.submitSuccess = true;
        state.leads.push(action.payload);
      })
      .addCase(submitLead.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export const { resetSubmitStatus } = leadsSlice.actions;
export default leadsSlice.reducer;
```


### Example 4: Responsive Feature Card Component

```jsx
// FeatureCard.jsx - Reusable feature card component
import React from 'react';

const FeatureCard = ({ icon, title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 group">
      <div className="w-16 h-16 bg-[#113e59] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#f6b519] transition-colors">
        <img src={icon} alt={title} className="w-8 h-8" />
      </div>
      
      <h3 className="font-dm-sans text-xl font-semibold text-[#2E3A59] mb-3">
        {title}
      </h3>
      
      <p className="font-source-sans text-gray-600 mb-4 leading-relaxed">
        {description}
      </p>
      
      {link && (
        <a
          href={link}
          className="text-[#113e59] font-semibold hover:text-[#f6b519] transition-colors inline-flex items-center"
        >
          Learn More
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      )}
    </div>
  );
};

export default FeatureCard;
```

### Example 5: Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#113e59',
        secondary: '#113e59',
        accent: '#f6b519',
        background: '#F5F7FA',
        textPrimary: '#2E3A59',
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        'source-sans': ['Source Sans 3', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};
```

---

## TONE AND STYLE

### Communication Guidelines

**Professional Yet Approachable:**
- Maintain a professional tone that reflects expertise in educational technology
- Use clear, jargon-free language when communicating with stakeholders
- Balance technical precision with accessibility for non-technical team members

**Educational Focus:**
- Emphasize the platform's mission to improve academic outcomes
- Highlight the transformative impact on students, teachers, and institutions
- Communicate the value of AI-powered learning and assessment tools

**Trust and Credibility:**
- Use data-driven language when discussing platform capabilities
- Reference the "guaranteed 50% improvement" value proposition
- Emphasize security, privacy, and compliance with educational standards
- Showcase testimonials and success stories prominently

**User-Centric Approach:**
- Prioritize user experience in all design and development decisions
- Use empathetic language that addresses pain points of educators and administrators
- Focus on solving real problems faced by educational institutions

**Action-Oriented:**
- Use clear calls-to-action throughout the platform
- Guide users toward lead generation and conversion goals
- Create urgency without being pushy (e.g., "Transform your institution today")

**Indian Market Context:**
- Emphasize "Make in India" initiative and local expertise
- Use language and examples relevant to Indian educational institutions
- Reference familiar frameworks like CBSE, ICSE, state boards where appropriate
- Include regional language support considerations

### Code Documentation Style

**Clear and Concise:**
- Write comments that explain "why" not just "what"
- Use JSDoc format for function documentation
- Include usage examples in component documentation

**Consistent Naming:**
- Use descriptive, self-explanatory variable and function names
- Follow React and JavaScript community conventions
- Maintain consistency across the entire codebase

**Example Documentation:**

```javascript
/**
 * Submits lead information to the backend API and triggers email notifications
 * 
 * @param {Object} leadData - The lead information collected from the form
 * @param {string} leadData.fullName - Full name of the lead
 * @param {string} leadData.email - Email address for contact
 * @param {string} leadData.institutionType - Type of educational institution
 * @returns {Promise<Object>} Response containing lead ID and confirmation
 * @throws {Error} If submission fails or validation errors occur
 * 
 * @example
 * const result = await submitLead({
 *   fullName: "Dr. Sharma",
 *   email: "sharma@school.edu",
 *   institutionType: "School"
 * });
 */
```

---

## DELIVERABLES CHECKLIST

### Phase 1: Analysis & Planning
- [ ] Complete site audit and page inventory
- [ ] Component library documentation
- [ ] Design system specification
- [ ] Technical architecture document
- [ ] Project timeline and milestones

### Phase 2: Development
- [ ] React project setup with Redux Toolkit
- [ ] Tailwind CSS configuration
- [ ] Component library implementation
- [ ] All pages replicated from WeXL website
- [ ] Lead generation form with validation
- [ ] Backend API endpoints
- [ ] Email service integration

### Phase 3: Testing & Optimization
- [ ] Cross-browser testing
- [ ] Responsive design testing
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Performance optimization (Lighthouse scores)
- [ ] Form validation testing
- [ ] Email delivery testing

### Phase 4: Deployment
- [ ] Production build optimization
- [ ] Deployment configuration
- [ ] Environment variables setup
- [ ] Monitoring and analytics integration
- [ ] Documentation for maintenance team

---

**END OF DOCUMENT**
