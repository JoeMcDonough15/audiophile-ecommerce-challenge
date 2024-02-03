// // import { BrowserRouter as Router } from "react-router-dom";
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./components/App";

// const rootElement = document.getElementById("root");

// // New as of React v18.x
// const root = createRoot(rootElement!);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
