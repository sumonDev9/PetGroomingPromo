import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router/router.jsx'
import { RouterProvider } from 'react-router-dom'
import React from 'react'

createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <RouterProvider router={router} />
 </React.StrictMode>
)
