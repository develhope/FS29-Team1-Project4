import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { UsersProvider } from "./contexts/UsersContext.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";

export function Root() {
  return (
    <BrowserRouter>
      <UsersProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </UsersProvider>
    </BrowserRouter>
  );
}
