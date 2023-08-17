import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Register from "./pages/userlogs/Register";
import Root from "./pages/Root";
import Individual from "./pages/individual/Individual";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import Home from "./pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Register />,
      },
      {
        path: "/individual",
        element: <Individual />,
      },
    ],
    errorElement: <div>Handle wrong routing error page</div>,
  },
]);

function LocationProvider({ children }) {
  const location = useLocation();
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      {children(location)}
    </AnimatePresence>
  );
}

const routeVariants = {
  initial: {
    y: "100vh",
  },
  final: {
    y: "0vh",
    transition: {
      type: "spring",
      mass: 0.4,
    },
  },
};

function App() {
  return (
    <RouterProvider router={router}>
      <LocationProvider>
        {(location) => (
          <motion.div initial="initial" animate="final" exit="initial" variants={routeVariants}>
            {router.renderRoute(location)}
          </motion.div>
        )}
      </LocationProvider>
    </RouterProvider>
  );
}

export default App;
