import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import CreativDivPage from './Pages/CreativeDiv/CreativDivPage.jsx';
import ComponentCreativity from './Pages/ComponentCreativity/Creativity.jsx';

import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProtectedRoute from './Components/ProtectedRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/creativdiv",
    element: (
      <ProtectedRoute>
        <CreativDivPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/componentCreativity",
    element: (
      <ProtectedRoute>
        <ComponentCreativity />
      </ProtectedRoute>
    ),
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-6tcff551bi0niygk.us.auth0.com"
      clientId="hRbWW09fRUeAAERCBmC5jMukXnyiV9Pk"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
