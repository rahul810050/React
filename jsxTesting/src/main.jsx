import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import MyComponent from './code.jsx';

import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Root from './route/root.jsx';
import ErrorPage from './error-page.jsx'
import Contact from './route/contact.jsx';
// import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

// const MyComponent = () => {
//   return (
//     _jsxs('div', { className: 'my-container', children: [
//       _jsx('h1', { className: 'title', children: 'Hello, React!' }),
//       _jsx('p', { children: 'This is a simple example using _jsx from react/jsx-runtime.' })
//     ]})
//   );
// };

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <>
  
//   <MyComponent/>
//   </>
// );


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      
        {
          path: "contacts/:contactId",
          element: <Contact />,
        },
      
    ]
  },
  // {
  //   path: 'contact',
  //   element: <Contact/>
  // }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <MyComponent />
  </React.StrictMode>
);