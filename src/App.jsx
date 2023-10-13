import { Route, Routes } from "react-router-dom";
import "./App.css";
import Page from "./components/Page";
import CareersPage from "./pages/CareersPage";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ServicesPage from "./pages/ServicesPage";
import OurWorkPage from "./pages/OurWorkPage";
import ResourcesPage from "./pages/ResourcesPage";
import InsightsPage from "./pages/InsightsPage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<HomePage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="our-work" element={<OurWorkPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="insights" element={<InsightsPage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
