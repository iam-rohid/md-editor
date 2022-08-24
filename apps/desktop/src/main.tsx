import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return <h1>Hello Desktop</h1>;
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
