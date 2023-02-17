import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import DataContext from "./provider/DataProvider";
import SearchProvider from "./provider/SearchProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataContext>
   
      <BrowserRouter>
        <App />
      </BrowserRouter>
   
  </DataContext>
);

{
  /* <React.StrictMode>*/
}
