
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Precios from "./pages/Precios";

const router = createBrowserRouter([
 
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/",
    element: <Precios/>,
  }
])

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
