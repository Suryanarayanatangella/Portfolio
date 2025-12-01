# Dark Mode Implementation Guide

## Overview
Complete dark/light mode theme system using Tailwind CSS and React Context.

## Setup Complete ✅

### 1. Tailwind Configuration
- Dark mode enabled with `class` strategy
- Custom color palette for light/dark themes
- Extended shadows for dark mode

### 2. Theme Context
- `ThemeContext` provides theme state
- `useTheme()` hook for accessing theme
- Persists theme preference in localStorage
- Applies `dark` class to document root

### 3. Theme Toggle Component
- Sun/Moon icon toggle button
- Smooth transitions
- Accessible with aria-label

## Usage in Components

### Basic Dark Mode Classes

```jsx
// Background colors
<div className="bg-white dark:bg-gray-900">

// Text colors
<p className="text-gray-900 dark:text-gray-100">

// Borders
<div className="border-gray-200 dark:border-gray-700">

// Shadows
<div className="shadow-md dark:shadow-gray-800">
```

### Using Custom Theme Colors

```jsx
// Primary colors
<div className="bg-primary-light dark:bg-primary-dark">

// Accent colors
<button className="bg-accent-light dark:bg-accent-dark">

// Text colors
<p className="text-text-primary-light dark:text-text-primary-dark">
```

### Component Example

```jsx
const MyComponent = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-card dark:shadow-card-dark">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Title
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
        Description text
      </p>
      <button className="bg-accent-light dark:bg-accent-dark text-primary-light dark:text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-400 dark:hover:bg-yellow-500 transition-colors">
        Click Me
      </button>
    </div>
  );
};
```

## Color Palette

### Light Mode
- **Primary**: `#113e59` (Dark Blue)
- **Accent**: `#f6b519` (Yellow/Gold)
- **Background**: `#F5F7FA` (Light Gray)
- **Surface**: `#ffffff` (White)
- **Text Primary**: `#2E3A59` (Dark Blue-Gray)
- **Text Secondary**: `#64748b` (Gray)

### Dark Mode
- **Primary**: `#1a5a7f` (Lighter Blue)
- **Accent**: `#ffc940` (Brighter Yellow)
- **Background**: `#0f172a` (Very Dark Blue)
- **Surface**: `#1e293b` (Dark Blue-Gray)
- **Text Primary**: `#e2e8f0` (Light Gray)
- **Text Secondary**: `#94a3b8` (Medium Gray)

## Common Patterns

### Cards
```jsx
<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900 p-6 border border-gray-200 dark:border-gray-700">
  {/* Card content */}
</div>
```

### Buttons
```jsx
// Primary Button
<button className="bg-primary-light dark:bg-primary-dark text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
  Primary
</button>

// Accent Button
<button className="bg-accent-light dark:bg-accent-dark text-primary-light dark:text-gray-900 px-6 py-2 rounded-lg hover:bg-yellow-400 dark:hover:bg-yellow-500 transition-colors">
  Accent
</button>

// Outline Button
<button className="border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark px-6 py-2 rounded-lg hover:bg-primary-light dark:hover:bg-primary-dark hover:text-white transition-all">
  Outline
</button>
```

### Forms
```jsx
<input 
  type="text"
  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark focus:border-transparent transition-all"
  placeholder="Enter text..."
/>
```

### Gradients
```jsx
// Background gradient
<div className="bg-gradient-to-br from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark">

// Text gradient
<h1 className="bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark bg-clip-text text-transparent">
  Gradient Text
</h1>
```

### Hover Effects
```jsx
<div className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
  Hover me
</div>
```

## Updating Existing Components

### Step-by-Step Process

1. **Identify background colors**
   ```jsx
   // Before
   className="bg-white"
   
   // After
   className="bg-white dark:bg-gray-900"
   ```

2. **Update text colors**
   ```jsx
   // Before
   className="text-gray-900"
   
   // After
   className="text-gray-900 dark:text-gray-100"
   ```

3. **Fix borders**
   ```jsx
   // Before
   className="border-gray-200"
   
   // After
   className="border-gray-200 dark:border-gray-700"
   ```

4. **Update shadows**
   ```jsx
   // Before
   className="shadow-lg"
   
   // After
   className="shadow-lg dark:shadow-gray-800"
   ```

5. **Handle images/icons**
   ```jsx
   // Add opacity for dark mode if needed
   className="opacity-100 dark:opacity-80"
   ```

## Testing Checklist

- [ ] Toggle works in header
- [ ] Theme persists on page reload
- [ ] All text is readable in both modes
- [ ] Buttons have proper contrast
- [ ] Forms are visible and usable
- [ ] Images look good in both modes
- [ ] Shadows are visible but not too harsh
- [ ] Hover states work in both modes
- [ ] Mobile menu works in both modes
- [ ] No flash of unstyled content (FOUC)

## Best Practices

1. **Always pair light and dark classes**
   ```jsx
   // ✅ Good
   className="bg-white dark:bg-gray-900"
   
   // ❌ Bad
   className="bg-white"
   ```

2. **Use semantic color names**
   ```jsx
   // ✅ Good
   className="bg-primary-light dark:bg-primary-dark"
   
   // ❌ Bad
   className="bg-blue-600 dark:bg-blue-400"
   ```

3. **Test contrast ratios**
   - Use browser DevTools to check WCAG compliance
   - Minimum 4.5:1 for normal text
   - Minimum 3:1 for large text

4. **Consider images**
   ```jsx
   // Add subtle opacity in dark mode
   <img 
     src="logo.png" 
     className="dark:opacity-90" 
     alt="Logo"
   />
   ```

5. **Smooth transitions**
   ```jsx
   className="transition-colors duration-300"
   ```

## Quick Reference

### Most Common Classes

```jsx
// Backgrounds
bg-white dark:bg-gray-900
bg-gray-50 dark:bg-gray-800
bg-gray-100 dark:bg-gray-700

// Text
text-gray-900 dark:text-gray-100
text-gray-700 dark:text-gray-300
text-gray-600 dark:text-gray-400

// Borders
border-gray-200 dark:border-gray-700
border-gray-300 dark:border-gray-600

// Shadows
shadow-md dark:shadow-gray-800
shadow-lg dark:shadow-gray-900

// Hover
hover:bg-gray-100 dark:hover:bg-gray-800
hover:text-primary-light dark:hover:text-accent-dark
```

## Troubleshooting

### Theme not persisting
- Check localStorage in DevTools
- Verify ThemeProvider wraps entire app
- Ensure useEffect in ThemeContext is running

### Flash of wrong theme on load
- Theme is applied in useEffect after mount
- This is expected behavior
- Can be improved with SSR/SSG

### Colors not changing
- Verify `darkMode: 'class'` in tailwind.config.js
- Check that `dark` class is on `<html>` element
- Clear browser cache and rebuild

### Custom colors not working
- Ensure colors are defined in tailwind.config.js
- Use correct syntax: `bg-primary-light` not `bg-primary.light`
- Rebuild Tailwind CSS

---

**Theme system is ready! Start updating components with dark mode classes.** 🌙✨
