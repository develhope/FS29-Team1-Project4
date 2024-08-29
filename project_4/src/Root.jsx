import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Navbar } from "./components/Navbar";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export function Root() {
  return (
    <SWRConfig value={{ fetcher }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SWRConfig>
  );
}
