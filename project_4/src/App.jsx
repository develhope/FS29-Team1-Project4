import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Container } from "./Container";
import { Home } from "./pages/Home";
import { SearchPage } from "./pages/SearchPage";
import { RegisterPage } from "./pages/RegisterPage";
import { CategoryPage } from "./pages/CategoryPage";
import { WebDeveloper } from "./pages/WebDeveloper";
import { WebDesign } from "./pages/WebDesign";
import { Design3D } from "./pages/Design3D";
import { UserPage } from "./pages/UserPage";
import { AdminPage } from "./pages/AdminPage";
import { GeneralSetting } from "./pages/GeneralSetting";
import { ExperienceSetting } from "./pages/ExperienceSetting";
import { ProjectSetting } from "./pages/ProjectSetting";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

import { ProfessionalSection } from "./components/ProfessionalSection";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { CompanyPage } from "./pages/CompanyPage";
import { PermissionUser } from "./pages/PermissionPage";

export function App() {
  const serviceRef = useRef(null);
  const professionITSectionRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container
      navbar={
        <Navbar
          serviceSrollFunction={() => {
            scrollToSection(serviceRef);
          }}
          professionScrollFunction={() => {
            scrollToSection(professionITSectionRef);
          }}
        />
      }
      footer={<Footer />}
    >
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <Home
              serviceSectionRef={serviceRef}
              professionITSectionRef={professionITSectionRef}
            />
          }
        />

        {/* Pages of searching */}
        <Route path="/search" element={<SearchPage />} />
        <Route path="/all_category" element={<CategoryPage />} />
        <Route path="/web_developer" element={<WebDeveloper />} />
        <Route path="/web_design" element={<WebDesign />} />
        <Route path="/3D_design" element={<Design3D />} />

        {/* Pages of setting */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user/general_setting/:id" element={<GeneralSetting />} />
        <Route
          path="/user/presentation_setting/:id"
          element={<ExperienceSetting />}
        />
        <Route path="/user/project_setting/:id" element={<ProjectSetting />} />
        <Route path="/user/permission_user/:id" element={<PermissionUser />} />

        {/* Admin/User/Company Page setting*/}
        <Route path="/admin/:id" element={<AdminPage />} />
        <Route path="/user_setting/:id" element={<UserPage />} />
        <Route path="/company_setting/:id" element={<CompanyPage />} />

        {/* Pop up Cards */}
        <Route path="/pop_up" element={<ProfessionalSection />} />

        {/* Footer */}
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
      </Routes>
    </Container>
  );
}
