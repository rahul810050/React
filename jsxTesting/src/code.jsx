import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

const MyComponent = () => {
  return (
    _jsxs('div', { className: 'my-container', children: [
      _jsx('h1', { className: 'title', children: 'Hello, React!' }),
      _jsx('p', { children: 'This is a simple example using _jsx from react/jsx-runtime.' })
    ]})
  );
};

export default MyComponent;
