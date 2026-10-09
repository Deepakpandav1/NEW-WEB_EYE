import { StrictMode, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import "./styles.css";
import reportWebVitals from "./reportWebVitals";

import { Landing } from "./routes/index";
import Header from "./components/header";
import Footer from "./components/footer";
import MeetOurTeam from "./routes/MeetOurTeam";
import ServicesLayout from "./routes/services/index";
import Service from "./routes/services/$service";
import TermsOfService from "./routes/termsOfService";
import PrivacyPolicy from "./routes/privacyPolicy";
import BookAnAppointment from "./routes/bookAnAppointment";
import FacilityTour from "./routes/facilityTour";
import Login from "./routes/login";
import ContactUs from "./routes/ContactUs";
import AboutUs from "./routes/AboutUs";
import CashlessInsurancePage from "./routes/cashlessInsurance";

// 🌐 Root layout (includes Header/Footer)
const rootRoute = createRootRoute({
  component: () => (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main id="main-content" tabIndex={-1} className="flex min-h-0 w-full min-w-0 flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
      {/* <TanStackRouterDevtools /> */}
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Landing,
});
const meetOurTeamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/meetourteam",
  component: MeetOurTeam,
});
const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesLayout,
});
const serviceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/$service",
  component: Service,
});
const termsOfServiceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/termsofservices",
  component: TermsOfService,
});
const privacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacypolicy",
  component: PrivacyPolicy,
});
const bookAnAppointmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bookAnAppointment",
  component: BookAnAppointment,
});
const facilityTourRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/facilityTour",
  component: FacilityTour,
});
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});
const ContactUsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ContactUs",
  component: ContactUs,
});
const AboutUsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/AboutUs",
  component: AboutUs,
});
const cashlessInsuranceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cashless-insurance",
  component: CashlessInsurancePage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  meetOurTeamRoute,
  servicesRoute,
  serviceRoute,
  termsOfServiceRoute,
  privacyPolicyRoute,
  bookAnAppointmentRoute,
  facilityTourRoute,
  loginRoute,
  ContactUsRoute,
  AboutUsRoute,
  cashlessInsuranceRoute,
]);

const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

/** 📊 Google Analytics Listener */
function AnalyticsListener({ router }) {
  useEffect(() => {
    const unsub = router.subscribe("onBeforeLoad", (event) => {
      if (window.gtag) {
        window.gtag("config", "G-K0CVCQHWH7", {
          page_path: event.toLocation.pathname,
        });
      }
    });
    return () => unsub?.();
  }, [router]);

  return null;
}

const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <HelmetProvider>
        <RouterProvider router={router}>
          <AnalyticsListener router={router} />
        </RouterProvider>
      </HelmetProvider>
    </StrictMode>
  );
}

reportWebVitals();
