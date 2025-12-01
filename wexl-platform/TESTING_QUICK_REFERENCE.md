# Jest Testing - Quick Reference

## 🚀 Quick Start

```bash
# Run all tests
npm test

# Watch mode (auto-rerun)
npm run test:watch

# With coverage
npm run test:coverage
```

## ✅ Current Status

- **Test Suites:** 2 passing
- **Total Tests:** 11 passing
- **Components Tested:** Button, Site Config
- **Time:** ~6.5 seconds

## 📝 Test File Naming

```
ComponentName.jsx  →  ComponentName.test.jsx
utilityFile.js     →  utilityFile.test.js
```

## 🧪 Basic Test Template

```javascript
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  test('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

## 🎯 Common Assertions

```javascript
// Element exists
expect(element).toBeInTheDocument();

// Text content
expect(element).toHaveTextContent('text');

// CSS classes
expect(element).toHaveClass('className');

// Attributes
expect(element).toHaveAttribute('href', '/path');

// Disabled state
expect(button).toBeDisabled();

// Function calls
expect(mockFn).toHaveBeenCalled();
expect(mockFn).toHaveBeenCalledTimes(1);
```

## 👆 User Interactions

```javascript
import userEvent from '@testing-library/user-event';

test('handles click', async () => {
  const user = userEvent.setup();
  render(<Button onClick={handleClick} />);
  await user.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalled();
});
```

## 🔍 Query Methods

```javascript
// Get (throws error if not found)
screen.getByText('text');
screen.getByRole('button');
screen.getByLabelText('label');

// Query (returns null if not found)
screen.queryByText('text');

// Find (async, waits for element)
await screen.findByText('text');
```

## 📦 What's Mocked

- ✅ CSS imports (identity-obj-proxy)
- ✅ Image imports (fileMock.js)
- ✅ window.matchMedia
- ✅ IntersectionObserver
- ✅ TextEncoder/TextDecoder

## 📚 Documentation

- Full guide: `TESTING.md`
- Summary: `TEST_SUMMARY.md`
- This file: Quick reference

## 🎓 Learn More

- [Jest Docs](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [Common Mistakes](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
