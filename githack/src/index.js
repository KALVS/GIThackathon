import React from "react";
import ReactDOM from "react-dom/client";
import { UserAuthContextProvider } from "./auth/AuthContext";
import App from "./App";
import "./inndex.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <App />
    </UserAuthContextProvider>
  </React.StrictMode>
);

//ReactDOM.render(
 // <React.StrictMode>
  //  <App />
 // </React.StrictMode>,
  //document.getElementById('root')
//);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
