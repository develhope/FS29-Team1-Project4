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
import { PresentationSetting } from "./pages/PresentationSetting";
import { ProjectSettings } from "./pages/ProjectSetting";
import { PrivacySetting } from "./pages/PrivacySetting";

export function App() {
  return (
    <Container navbar={<Navbar />} footer={<Footer />}>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Pages of searching */}
        <Route path="/search" element={<SearchPage />} />
        <Route path="/all_category" element={<CategoryPage />} />
        <Route path="/web_developer" element={<WebDeveloper />} />
        <Route path="/web_design" element={<WebDesign />} />
        <Route path="/3D_design" element={<Design3D />} />

        {/* Pages of user */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user" element={<UserPage />}>
          <Route path="general_setting" element={<GeneralSetting />} />
          <Route
            path="presentation_setting"
            element={<PresentationSetting />}
          />
          <Route path="project_setting" element={<ProjectSettings />} />
          <Route path="privacy_setting" element={<PrivacySetting />} />
        </Route>

        {/* Admin page */}
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Container>
  );
}
