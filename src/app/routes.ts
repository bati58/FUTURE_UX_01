import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Homepage } from "./pages/Homepage";
import { ServiceDetail } from "./pages/ServiceDetail";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Homepage },
      { path: "about", Component: About },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "services/:serviceSlug", Component: ServiceDetail },
      { path: "contact", Component: Contact },
    ],
  },
]);

