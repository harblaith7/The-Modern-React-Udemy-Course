import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PostTripPage from "./pages/PostTripPage";
import RequestPage from "./pages/RequestPage";
import SearchPage from "./pages/SearchPage";
import { store } from "./app/store";
import PrivateRoute from "./utils/PrivateRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/request/:id" element={<PrivateRoute />}>
        <Route path="/request/:id" element={<RequestPage />} />
      </Route>
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/post" element={<PostTripPage />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
