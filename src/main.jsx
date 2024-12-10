import React from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import AuthProviders from './Providers/AuthProviders';
import { router } from './routes/MainRoutes';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProviders>
        <div>
            <RouterProvider router={router} />
        </div>
      </AuthProviders>
  </React.StrictMode>
)