import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import DataContext from "./provider/DataProvider";
import { Router } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Route";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataContext>
  <div>
  <RouterProvider router={router}/>
  </div>
  </DataContext>
);

{
  /* <React.StrictMode>*/
}
