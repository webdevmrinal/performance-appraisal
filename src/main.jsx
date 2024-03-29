import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Sidebar from "./components/Sidebar.jsx"
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="app-box">
      <div className="app-header" />
      <div className="app-sidebar">
        <input type="text" placeholder="Search"/>
        <Sidebar />
      </div>
      <div className="app-body" />
      <App />
    </div>
  </React.StrictMode>
);
