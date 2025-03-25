import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // ✅ Correct relative path

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
