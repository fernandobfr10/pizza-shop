import { createBrowserRouter } from "react-router-dom";

import { Dashboard } from "@/pages/app/Dashboard";
import { Signin } from "@/pages/auth/Signin";

export const router = createBrowserRouter([
  { path: "/", element: <Dashboard />},
  { path: "/sign-in", element: <Signin />}
])