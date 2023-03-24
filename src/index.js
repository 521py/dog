import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from './layout';
import { Products } from './pages/Products';
import { UserMe } from './pages/UserMe';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <Layout />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "user/me",
        element: <UserMe />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);