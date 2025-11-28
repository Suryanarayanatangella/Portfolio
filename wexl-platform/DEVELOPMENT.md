# WeXL Platform - Development Guide

## 🎯 Getting Started

### First Time Setup

1. **Clone and Install**
```bash
cd wexl-platform
npm install
```

2. **Environment Setup**
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. **Start Development Server**
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Architecture Overview

### Technology Stack

- **Frontend Framework**: React 19.2
- **State Management**: Redux Toolkit
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Form Management**: Formik + Yup
- **Build Tool**: Vite

### Design Patterns

1. **Component Structure**: Atomic Design
   - Atoms: Button, Input fields
   - Molecules: FeatureCard, Form fields
   - Organisms: Header, Footer, LeadForm
   - Templates: MainLayout
   - Pages: Home, About, Products, etc.

2. **State Management**: Redux Toolkit
   - Feature-based slices
   - Async thunks for API calls
   - Normalized state structure

3. **Routing**: Nested routes with layouts
   - MainLayout wraps all pages
   - Consistent header/footer across pages

## 📝 Development Workflow

### Adding a New Page

1. Create page component in `src/pages/`:
```jsx
// src/pages/NewPage.jsx
import React from 'react';

const NewPage = () => {
  return (
    <div>
      <h1>New Page</h1>
    </div>
  );
};

export default NewPage;
```

2. Add route in `src/App.jsx`:
```jsx
<Route path="new-page" element={<NewPage />} />
```

3. Add navigation link in `src/components/Header/Header.jsx`

### Adding a New Component

1. Create component directory:
```bash
mkdir src/components/NewComponent
```

2. Create component file:
```jsx
// src/components/NewComponent/NewComponent.jsx
import React from 'react';

const NewComponent = ({ prop1, prop2 }) => {
  return (
    <div className="...">
      {/* Component content */}
    </div>
  );
};

export default NewComponent;
```

3. Use component in pages or other components

### Adding Redux State

1. Create slice in `src/features/`:
```javascript
// src/features/newFeature/newFeatureSlice.js
import { createSlice } from '@reduxjs/toolkit';

const newFeatureSlice = createSlice({
  name: 'newFeature',
  initialState: { /* ... */ },
  reducers: { /* ... */ },
});

export default newFeatureSlice.reducer;
```

2. Add to store in `src/store/store.js`:
```javascript
import newFeatureReducer from '../features/newFeature/newFeatureSlice';

export const store = configureStore({
  reducer: {
    leads: leadsReducer,
    newFeature: newFeatureReducer, // Add here
  },
});
```

## 🎨 Styling Guidelines

### Tailwind CSS Classes

Use Tailwind utility classes for styling:

```jsx
<div className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all">
  <h2 className="font-dm-sans text-2xl font-bold text-primary mb-4">
    Title
  </h2>
  <p className="font-source-sans text-gray-700">
    Content
  </p>
</div>
```

### Custom Colors

Use the predefined color palette:
- `text-primary` - #113e59
- `text-accent` - #f6b519
- `bg-background` - #F5F7FA
- `text-textPrimary` - #2E3A59

### Typography

- Headings: `font-dm-sans`
- Body text: `font-source-sans`

### Responsive Design

Use Tailwind breakpoints:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Responsive grid */}
</div>
```

## 🔧 Common Tasks

### Form Validation

Using Formik + Yup:

```jsx
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

<Formik
  initialValues={{ email: '' }}
  validationSchema={validationSchema}
  onSubmit={handleSubmit}
>
  {/* Form fields */}
</Formik>
```

### API Calls

Using Redux Toolkit async thunks:

```javascript
export const fetchData = createAsyncThunk(
  'feature/fetchData',
  async (params, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/endpoint');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
```

### Navigation

Using React Router:

```jsx
import { Link, useNavigate } from 'react-router-dom';

// Link component
<Link to="/about">About</Link>

// Programmatic navigation
const navigate = useNavigate();
navigate('/contact');
```

## 🧪 Testing

### Component Testing (Future)

```bash
npm install -D @testing-library/react @testing-library/jest-dom vitest
```

### Manual Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation works on all devices
- [ ] Forms validate properly
- [ ] Lead submission works
- [ ] Responsive design on mobile/tablet/desktop
- [ ] Accessibility with keyboard navigation
- [ ] Browser compatibility (Chrome, Firefox, Safari, Edge)

## 🐛 Debugging

### Common Issues

1. **Tailwind classes not working**
   - Check `tailwind.config.js` content paths
   - Ensure `@tailwind` directives in `index.css`

2. **Redux state not updating**
   - Check reducer logic
   - Verify action dispatch
   - Use Redux DevTools

3. **Form validation not working**
   - Check Yup schema
   - Verify field names match
   - Check ErrorMessage components

### Development Tools

- **React DevTools**: Browser extension for React debugging
- **Redux DevTools**: Browser extension for Redux state inspection
- **Vite DevTools**: Built-in HMR and error overlay

## 📦 Building for Production

### Build Process

```bash
npm run build
```

This creates optimized production files in `dist/` folder.

### Build Optimization

- Code splitting by route
- Tree shaking unused code
- Minification of JS/CSS
- Image optimization
- Font optimization

### Preview Production Build

```bash
npm run preview
```

## 🚀 Deployment

### Vercel Deployment

```bash
npm install -g vercel
vercel login
vercel
```

### Netlify Deployment

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Environment Variables

Set these in your deployment platform:
- `VITE_API_BASE_URL`
- `VITE_EMAIL_SERVICE_URL`
- `VITE_ENV=production`

## 📚 Resources

### Documentation
- [React Docs](https://react.dev)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [React Router](https://reactrouter.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Formik](https://formik.org)
- [Yup](https://github.com/jquense/yup)

### Learning Resources
- React patterns and best practices
- Redux state management patterns
- Tailwind CSS utility-first approach
- Form handling with Formik

## 🤝 Code Review Checklist

Before submitting code:

- [ ] Code follows project structure
- [ ] Components are properly documented
- [ ] No console.log statements
- [ ] Proper error handling
- [ ] Responsive design tested
- [ ] Accessibility considerations
- [ ] Performance optimized
- [ ] Git commit messages are clear

## 📞 Getting Help

- Check existing documentation
- Review similar components
- Ask team members
- Check official library documentation

---

Happy coding! 🎉
