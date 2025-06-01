import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Counter from "remote/Counter"

const App = () => (
  <div className="container">
    <div>Name: host</div>
    <div>Framework: react-18</div>
    <Counter />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);