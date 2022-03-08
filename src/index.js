import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { PostsContextProvider } from "./store/PostsContext";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <PostsContextProvider>
    <App />
  </PostsContextProvider>,
  document.getElementById("root")
);
