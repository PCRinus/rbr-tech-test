import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "@@pages/root/Root";
import { Homepage } from "@@pages/homepage/Homepage";
import { TechTest01 } from "@@pages/tech-test-01/techTest01";
import { TechTest02 } from "@@pages/tech-test-02/techTest02";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/tech-test-01",
        element: <TechTest01 />,
      },
      {
        path: "/tech-test-02",
        element: <TechTest02 />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
