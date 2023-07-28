import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import PostTripPage from "./pages/PostTripPage";
import RequestPage from "./pages/RequestPage";
import SearchPage from "./pages/SearchPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/request/:id" element={<RequestPage />} />
      <Route path="/dashboard">
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/post" element={<PostTripPage />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
