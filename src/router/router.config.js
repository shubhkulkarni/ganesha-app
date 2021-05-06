import React, { lazy } from "react";

export const appRouter = [
  { path: "/donate", component: lazy(() => import("../pages/Home/Home")) },
  {
    path: "/payment-history",
    component: lazy(() => import("../pages/Profile/Profile")),
  },
  {
    path: "/statistics",
    component: lazy(() => import("../pages/Categories/Categories")),
  },
  {
    path: "/contact",
    component: lazy(() => import("../pages/Categories/Categories")),
  },
];

export const authRouter = [
  { path: "/login", component: lazy(() => import("../pages/Login/Login")) },
];
