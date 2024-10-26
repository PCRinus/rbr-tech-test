import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/root/root";
import { TechTest01 } from "./pages/techTest01/techTest01";
import { TechTest02 } from "./pages/techTest02/techTest02";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "tech-test-01",
    element: <TechTest01 />,
  },
  {
    path: "tech-test-02",
    element: <TechTest02 />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
