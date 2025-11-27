# Complete React Application Development Guide

## Table of Contents
1. [Project Setup](#1-project-setup)
2. [Development Workflow](#2-development-workflow)
3. [Debugging Techniques](#3-debugging-techniques)
4. [Testing with Jest](#4-testing-with-jest)
5. [Best Practices](#5-best-practices)

---

## 1. Project Setup

### Step 1.1: Initialize Project

```bash
# Create new Vite + React project
npm create vite@latest my-app -- --template react

# Navigate to project
cd my-app

# Install dependencies
npm install

# Install additional packages
npm install react-router-dom @reduxjs/toolkit react-redux
npm install axios formik yup
npm install -D tailwindcss postcss autoprefixer
```

### Step 1.2: Configure Tailwind CSS

```bash
npx tailwindcss init -p
```

**tailwind.config.js:**
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**src/index.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 1.3: Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button/
│   │   ├── Button.jsx
│   │   ├── Button.test.jsx
│   │   └── Button.module.css
│   └── Header/
├── pages/              # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── features/           # Redux slices
│   └── user/
│       ├── userSlice.js
│       └── userSlice.test.js
├── services/           # API calls
│   └── api.js
├── hooks/              # Custom hooks
│   └── useAuth.js
├── utils/              # Helper functions
│   └── validation.js
├── store/              # Redux store
│   └── store.js
├── App.jsx
└── main.jsx
```

---

## 2. Development Workflow

### Step 2.1: Component Development

**Example: Button Component**

```jsx
// src/components/Button/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false,
  type = 'button'
}) => {
  const baseStyles = 'font-semibold rounded transition-all duration-300';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
  };
  
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default Button;
```

### Step 2.2: Redux Setup

**store/store.js:**
```javascript
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
```

**features/user/userSlice.js:**
```javascript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for API call
export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/users/${userId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearUser: (state) => {
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
```

### Step 2.3: API Service Layer

**services/api.js:**
```javascript
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log('Request:', config.method.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    console.log('Response:', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('Response Error:', error.response?.status, error.message);
    
    if (error.response?.status === 401) {
      // Handle unauthorized
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);

// API methods
export const userAPI = {
  getUser: (id) => api.get(`/users/${id}`),
  createUser: (data) => api.post('/users', data),
  updateUser: (id, data) => api.put(`/users/${id}`, data),
  deleteUser: (id) => api.delete(`/users/${id}`),
};

export default api;
```

---

## 3. Debugging Techniques

### 3.1: Browser DevTools

**Console Debugging:**
```javascript
// Basic logging
console.log('Variable value:', myVar);

// Grouped logs
console.group('User Data');
console.log('Name:', user.name);
console.log('Email:', user.email);
console.groupEnd();

// Table format
console.table([
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 }
]);

// Timing
console.time('API Call');
await fetchData();
console.timeEnd('API Call');

// Conditional logging
console.assert(user.age > 18, 'User must be adult');
```

**Breakpoints:**
```javascript
function calculateTotal(items) {
  debugger; // Execution will pause here
  
  const total = items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
  
  return total;
}
```

### 3.2: React DevTools

**Component Inspection:**
```javascript
// Add display name for better debugging
Button.displayName = 'Button';

// Use React DevTools Profiler
import { Profiler } from 'react';

function onRenderCallback(
  id, phase, actualDuration, baseDuration, startTime, commitTime
) {
  console.log(`${id} (${phase}) took ${actualDuration}ms`);
}

<Profiler id="App" onRender={onRenderCallback}>
  <App />
</Profiler>
```

### 3.3: Redux DevTools

**Time Travel Debugging:**
```javascript
// In store.js
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: {
    trace: true,
    traceLimit: 25,
  },
});
```

### 3.4: Custom Debug Hook

**hooks/useDebug.js:**
```javascript
import { useEffect, useRef } from 'react';

export const useDebug = (componentName, props) => {
  const prevProps = useRef(props);
  
  useEffect(() => {
    console.group(`${componentName} Updated`);
    console.log('Current Props:', props);
    console.log('Previous Props:', prevProps.current);
    
    // Find changed props
    Object.keys(props).forEach(key => {
      if (props[key] !== prevProps.current[key]) {
        console.log(`Changed: ${key}`, {
          from: prevProps.current[key],
          to: props[key]
        });
      }
    });
    
    console.groupEnd();
    prevProps.current = props;
  });
};

// Usage
function MyComponent(props) {
  useDebug('MyComponent', props);
  return <div>...</div>;
}
```

### 3.5: Error Boundaries

**components/ErrorBoundary.jsx:**
```javascript
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({ error, errorInfo });
    
    // Log to error reporting service
    // logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1>Something went wrong</h1>
          <details>
            <summary>Error Details</summary>
            <pre>{this.state.error?.toString()}</pre>
            <pre>{this.state.errorInfo?.componentStack}</pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

---

## 4. Testing with Jest

### 4.1: Setup Testing Environment

```bash
# Install testing dependencies
npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
npm install -D vitest jsdom @vitest/ui
```

**vite.config.js:**
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    css: true,
  },
});
```

**src/test/setup.js:**
```javascript
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// Cleanup after each test
afterEach(() => {
  cleanup();
});
```

**package.json:**
```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

### 4.2: Component Testing

**Button.test.jsx:**
```javascript
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies correct variant styles', () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByText('Primary');
    expect(button).toHaveClass('bg-blue-600');
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disables button when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByText('Disabled');
    
    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-50');
  });

  it('renders different sizes correctly', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByText('Small')).toHaveClass('px-3 py-1');
    
    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByText('Large')).toHaveClass('px-6 py-3');
  });
});
```

### 4.3: Redux Testing

**userSlice.test.js:**
```javascript
import { describe, it, expect, beforeEach } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import userReducer, { clearUser, fetchUser } from './userSlice';

describe('User Slice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: { user: userReducer },
    });
  });

  it('should handle initial state', () => {
    expect(store.getState().user).toEqual({
      data: null,
      loading: false,
      error: null,
    });
  });

  it('should handle clearUser', () => {
    store.dispatch(clearUser());
    expect(store.getState().user.data).toBeNull();
  });

  it('should handle fetchUser.pending', () => {
    store.dispatch(fetchUser.pending());
    expect(store.getState().user.loading).toBe(true);
  });

  it('should handle fetchUser.fulfilled', () => {
    const userData = { id: 1, name: 'John' };
    store.dispatch(fetchUser.fulfilled(userData));
    
    expect(store.getState().user.loading).toBe(false);
    expect(store.getState().user.data).toEqual(userData);
  });

  it('should handle fetchUser.rejected', () => {
    const error = 'Failed to fetch';
    store.dispatch(fetchUser.rejected(null, '', null, error));
    
    expect(store.getState().user.loading).toBe(false);
    expect(store.getState().user.error).toBe(error);
  });
});
```

### 4.4: Integration Testing

**App.test.jsx:**
```javascript
import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import userReducer from './features/user/userSlice';

const renderWithProviders = (component) => {
  const store = configureStore({
    reducer: { user: userReducer },
  });

  return render(
    <Provider store={store}>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </Provider>
  );
};

describe('App Integration', () => {
  it('renders home page by default', () => {
    renderWithProviders(<App />);
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });

  it('navigates to about page', async () => {
    renderWithProviders(<App />);
    
    const aboutLink = screen.getByText(/about/i);
    fireEvent.click(aboutLink);
    
    await waitFor(() => {
      expect(screen.getByText(/about us/i)).toBeInTheDocument();
    });
  });
});
```

### 4.5: API Mocking

**test/mocks/handlers.js:**
```javascript
import { rest } from 'msw';

export const handlers = [
  rest.get('/api/users/:id', (req, res, ctx) => {
    const { id } = req.params;
    
    return res(
      ctx.status(200),
      ctx.json({
        id,
        name: 'John Doe',
        email: 'john@example.com',
      })
    );
  }),

  rest.post('/api/users', async (req, res, ctx) => {
    const body = await req.json();
    
    return res(
      ctx.status(201),
      ctx.json({
        id: Date.now(),
        ...body,
      })
    );
  }),
];
```

**test/mocks/server.js:**
```javascript
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(...handlers);
```

**test/setup.js (updated):**
```javascript
import { expect, afterEach, beforeAll, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { server } from './mocks/server';

// Start server before all tests
beforeAll(() => server.listen());

// Reset handlers after each test
afterEach(() => {
  cleanup();
  server.resetHandlers();
});

// Close server after all tests
afterAll(() => server.close());
```

### 4.6: Custom Hook Testing

**useAuth.test.js:**
```javascript
import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useAuth from './useAuth';

describe('useAuth Hook', () => {
  it('initializes with no user', () => {
    const { result } = renderHook(() => useAuth());
    expect(result.current.user).toBeNull();
  });

  it('logs in user', async () => {
    const { result } = renderHook(() => useAuth());
    
    await act(async () => {
      await result.current.login('user@example.com', 'password');
    });
    
    expect(result.current.user).toBeTruthy();
    expect(result.current.isAuthenticated).toBe(true);
  });

  it('logs out user', async () => {
    const { result } = renderHook(() => useAuth());
    
    await act(async () => {
      await result.current.login('user@example.com', 'password');
      result.current.logout();
    });
    
    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
  });
});
```

---

## 5. Best Practices

### 5.1: Code Organization

```javascript
// ✅ Good: Single Responsibility
const UserProfile = ({ user }) => (
  <div>
    <UserAvatar user={user} />
    <UserInfo user={user} />
    <UserActions user={user} />
  </div>
);

// ❌ Bad: Too many responsibilities
const UserProfile = ({ user }) => (
  <div>
    {/* Avatar logic */}
    {/* Info logic */}
    {/* Actions logic */}
    {/* All mixed together */}
  </div>
);
```

### 5.2: Performance Optimization

```javascript
import { memo, useMemo, useCallback } from 'react';

// Memoize expensive components
const ExpensiveComponent = memo(({ data }) => {
  return <div>{/* Complex rendering */}</div>;
});

// Memoize expensive calculations
const MyComponent = ({ items }) => {
  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);
  
  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);
  
  return <div onClick={handleClick}>{total}</div>;
};
```

### 5.3: Error Handling

```javascript
// API calls with proper error handling
const fetchData = async () => {
  try {
    setLoading(true);
    setError(null);
    
    const response = await api.get('/data');
    setData(response.data);
  } catch (error) {
    console.error('Fetch error:', error);
    setError(error.message || 'Something went wrong');
  } finally {
    setLoading(false);
  }
};
```

### 5.4: Accessibility

```javascript
// ✅ Good: Accessible button
<button
  type="button"
  onClick={handleClick}
  aria-label="Close dialog"
  aria-pressed={isPressed}
>
  <span aria-hidden="true">×</span>
</button>

// ✅ Good: Accessible form
<form onSubmit={handleSubmit}>
  <label htmlFor="email">Email</label>
  <input
    id="email"
    type="email"
    aria-required="true"
    aria-invalid={!!errors.email}
    aria-describedby="email-error"
  />
  {errors.email && (
    <span id="email-error" role="alert">
      {errors.email}
    </span>
  )}
</form>
```

### 5.5: Environment Variables

```javascript
// .env.development
VITE_API_BASE_URL=http://localhost:5000/api
VITE_DEBUG=true

// .env.production
VITE_API_BASE_URL=https://api.production.com
VITE_DEBUG=false

// Usage
const API_URL = import.meta.env.VITE_API_BASE_URL;
const DEBUG = import.meta.env.VITE_DEBUG === 'true';
```

---

## Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build

# Testing
npm test                # Run tests
npm run test:ui         # Run tests with UI
npm run test:coverage   # Generate coverage report

# Debugging
npm run dev -- --debug  # Start with debug mode
```

---

## Debugging Checklist

- [ ] Check browser console for errors
- [ ] Use React DevTools to inspect component tree
- [ ] Use Redux DevTools to track state changes
- [ ] Add console.log at key points
- [ ] Use debugger statements for breakpoints
- [ ] Check network tab for API calls
- [ ] Verify environment variables
- [ ] Check for prop type warnings
- [ ] Use Error Boundaries
- [ ] Review component re-renders with Profiler

---

## Testing Checklist

- [ ] Unit tests for components
- [ ] Unit tests for Redux slices
- [ ] Unit tests for utility functions
- [ ] Integration tests for user flows
- [ ] API mocking with MSW
- [ ] Test error states
- [ ] Test loading states
- [ ] Test edge cases
- [ ] Achieve >80% code coverage
- [ ] Test accessibility

---

**Happy Coding! 🚀**
