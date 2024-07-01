import { jsx as _jsx } from 'react/jsx-runtime';

const MyComponent = () => {
  return (
    _jsx('div', { className: 'my-container' },
      _jsx('h1', { className: 'title' }, 'Hello, React!'),
      _jsx('p', null, 'This is a simple example using _jsx from react/jsx-runtime.')
    )
  );
};

export default MyComponent;
