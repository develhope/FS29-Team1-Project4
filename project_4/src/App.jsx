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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function App() {
  return (
    <Container navbar={<Navbar />} footer={<Footer />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/all_category" element={<CategoryPage />} />
        <Route path="/web_developer" element={<WebDeveloper />} />
        <Route path="/web_design" element={<WebDesign />} />
        <Route path="/3D_design" element={<Design3D />} />
      </Routes>
    </Container>
  );
}
