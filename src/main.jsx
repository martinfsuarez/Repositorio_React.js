import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { initializeApp } from "firebase/app";
import App from "./App.jsx";
import "./index.css";


const firebaseConfig = {
  apiKey: "AIzaSyC9N7WsGlBQhmJnIDi_hAtmAxZ5n0m0TbI",
  authDomain: "coder-react-ab348.firebaseapp.com",
  projectId: "coder-react-ab348",
  storageBucket: "coder-react-ab348.appspot.com",
  messagingSenderId: "481946645377",
  appId: "1:481946645377:web:bcc70e64f3d3a55c93ee80",
  measurementId: "G-B7X6F330T2"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
