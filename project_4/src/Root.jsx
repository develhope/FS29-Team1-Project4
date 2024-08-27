import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Navbar } from "./components/Navbar";

export function Root() {
  return (
    <BrowserRouter>
      <App />
      <Navbar />
    </BrowserRouter>
  );
}
