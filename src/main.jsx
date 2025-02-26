import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

console.log("Root element:", document.getElementById("root"));
console.log("Checking #root:", document.getElementById("root"));
alert("index.js is running!");


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

