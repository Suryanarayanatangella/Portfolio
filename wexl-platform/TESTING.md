# Testing Guide

## Overview

This project uses **Jest** and **React Testing Library** for unit testing.

## Setup

All testing dependencies are already installed:
- `jest` - Testing framework
- `@testing-library/react` - React component testing utilities
- `@testing-library/jest-dom` - Custom Jest matchers
- `@testing-library/user-event` - User interaction simulation
- `babel-jest` - Babel transformer for Jest

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in watch mode
```bash
npm run test:watch
```

### Run tests with coverage
```bash
npm run test:coverage
```

## Test Structure

Tests are located alongside their components with the `.test.jsx` or `.test.js` extension:

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   └── Button.test.jsx
│   └── FeatureCard/
│       ├── FeatureCard.jsx
│       └── FeatureCard.test.jsx
├── config/
│   ├── site.config.js
│   └── site.config.test.js
└── utils/
    ├── mockApi.js
    └── mockApi.test.js
```

## Current Test Coverage

### ✅ Components Tested

1. **Button Component** (`src/components/Button/Button.test.jsx`)
   - Renders with text
   - Handles click events
   - Renders with children
   - Button is clickable

2. **Site Configuration** (`src/config/site.config.test.js`)
   - Business information validation
   - Contact information validation
   - Theme colors validation
   - Statistics validation
   - Service packages validation
   - Technology stack validation

## Writing New Tests

### Example: Testing a Component

```javascript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  test('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  test('handles user interaction', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();
    
    render(<MyComponent onClick={handleClick} />);
    await user.click(screen.getByRole('button'));
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Example: Testing a Utility Function

```javascript
import { myUtilityFunction } from './myUtility';

describe('myUtilityFunction', () => {
  test('returns expected output', () => {
    const result = myUtilityFunction('input');
    expect(result).toBe('expected output');
  });

  test('handles edge cases', () => {
    expect(myUtilityFunction(null)).toBeNull();
    expect(myUtilityFunction('')).toBe('');
  });
});
```

## Test Configuration

### jest.config.js
- Test environment: jsdom (browser-like environment)
- Transform: Babel for JSX/ES6+
- Module name mapping for CSS and images
- Coverage collection from src directory

### jest.setup.js
- Imports @testing-library/jest-dom matchers
- Mocks window.matchMedia
- Mocks IntersectionObserver
- Polyfills TextEncoder/TextDecoder

### babel.config.cjs
- Babel presets for React and modern JavaScript
- Configured for Jest compatibility

## Best Practices

1. **Test Behavior, Not Implementation**
   - Focus on what the component does, not how it does it
   - Test from the user's perspective

2. **Use Descriptive Test Names**
   ```javascript
   test('displays error message when form is invalid', () => {
     // test code
   });
   ```

3. **Arrange-Act-Assert Pattern**
   ```javascript
   test('example test', () => {
     // Arrange: Set up test data
     const data = { name: 'Test' };
     
     // Act: Perform the action
     render(<Component data={data} />);
     
     // Assert: Verify the result
     expect(screen.getByText('Test')).toBeInTheDocument();
   });
   ```

4. **Keep Tests Independent**
   - Each test should run independently
   - Don't rely on test execution order
   - Clean up after each test

5. **Mock External Dependencies**
   ```javascript
   jest.mock('./api', () => ({
     fetchData: jest.fn(() => Promise.resolve({ data: 'mock' }))
   }));
   ```

## Common Testing Patterns

### Testing User Events
```javascript
import userEvent from '@testing-library/user-event';

test('handles button click', async () => {
  const user = userEvent.setup();
  render(<Button onClick={handleClick} />);
  await user.click(screen.getByRole('button'));
});
```

### Testing Async Operations
```javascript
test('loads data', async () => {
  render(<DataComponent />);
  expect(await screen.findByText('Loaded')).toBeInTheDocument();
});
```

### Testing Forms
```javascript
test('submits form', async () => {
  const user = userEvent.setup();
  const handleSubmit = jest.fn();
  
  render(<Form onSubmit={handleSubmit} />);
  
  await user.type(screen.getByLabelText('Name'), 'John');
  await user.click(screen.getByRole('button', { name: /submit/i }));
  
  expect(handleSubmit).toHaveBeenCalled();
});
```

## Troubleshooting

### Tests Failing Due to CSS Modules
- CSS imports are mocked using `identity-obj-proxy`
- No action needed, already configured

### Tests Failing Due to Images
- Image imports are mocked using `fileMock.js`
- No action needed, already configured

### Tests Failing Due to Router
- Wrap components in `BrowserRouter` for testing
- Use `MemoryRouter` for isolated tests

### Tests Failing Due to Redux
- Wrap components in Redux `Provider`
- Use a test store with initial state

## Coverage Goals

Aim for:
- **80%+ statement coverage**
- **80%+ branch coverage**
- **80%+ function coverage**
- **80%+ line coverage**

Check coverage with:
```bash
npm run test:coverage
```

## Continuous Integration

Tests should run automatically on:
- Every commit
- Every pull request
- Before deployment

## Resources

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## Next Steps

1. Add more component tests
2. Add integration tests
3. Add E2E tests with Cypress or Playwright
4. Set up CI/CD pipeline with automated testing
5. Increase test coverage to 80%+

---

**Last Updated:** November 29, 2025
