import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "@@pages/root/Root";
import { Homepage } from "@@pages/homepage/Homepage";
import { TechTest01 } from "@@pages/tech-test-01/TechTest01";
import { TechTest02 } from "@@pages/tech-test-02/TechTest02";
import { CardRail } from "@@pages/card-rail/CardRail";
import { HeroElement } from "@@pages/hero-element/HeroElement";
import { ParallaxProvider } from "react-scroll-parallax";

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
      { path: "/card-rail/card-01", element: <h1>You clicked on Card 01</h1> },
      { path: "/card-rail/card-02", element: <h1>You clicked on Card 02</h1> },
      { path: "/card-rail/card-03", element: <h1>You clicked on Card 03</h1> },
    ],
  },
  {
    path: "/card-rail",
    element: <CardRail />,
  },
  { path: "/hero-element", element: <HeroElement /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
  </StrictMode>,
);
