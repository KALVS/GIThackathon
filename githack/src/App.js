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
import Login from "./pages/userlogs/Login";
import Home from "./pages/home/Home";
import Investor from "./pages/investor/Investor";
import SecondFlow from "./pages/userlogs/SecondFlow";
import ThirdHouseHoldFlow from "./pages/userlogs/ThirdHouseHoldFlow";
import ThirdInvestorFlow from "./pages/userlogs/ThirdInvestorFlow";
import AboutUs from "./pages/about/About";
import ContactUs from "./pages/contact/Contact";
import InvestorAccount from "./pages/accounts/InvestorAccount";
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
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },

      {
        path: "/individual",
        element: <Individual />,
      },
      {
        path: "/investors",
        element: <Investor />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/flow2",
        element: <SecondFlow />,
      },
      {
        path: "/householdflow3",
        element: <ThirdHouseHoldFlow />,
      },
      {
        path: "/investorflow3",
        element: <ThirdInvestorFlow />,
      },
      {
        path: "/myaccount",
        element: <InvestorAccount />,
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
