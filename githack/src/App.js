import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Register from './pages/userlogs/Register';
import Root from './pages/Root';
import Home from './pages/home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Register />
      }
    ],
    errorElement: <div>Handle wrong routing error page</div>
  }
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
