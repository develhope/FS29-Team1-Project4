import "./styles/App.css";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Container } from "./Container";
import { Hero } from "./components/Hero";

export function App() {
  return (
    <Container navbar={<Navbar />} footer={<Footer />}>
      <Hero />
      <Body />
    </Container>
  );
}
