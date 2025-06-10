import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import PetBlogPage from '../pages/PetBlogPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/pet",
    element: <PetBlogPage />
  }
]);
export default router;