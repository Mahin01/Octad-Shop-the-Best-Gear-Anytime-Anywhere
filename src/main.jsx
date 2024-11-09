import React, { StrictMode } from 'react'
import * as ReactDOM from "react-dom/client";
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/MainRoutes';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="w-screen">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);