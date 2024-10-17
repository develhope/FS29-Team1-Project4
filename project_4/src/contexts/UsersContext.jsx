import React, { createContext } from "react";
import { useGetDataDB } from "../hooks/useGetDataDB";

export const UsersContext = createContext();

export function UsersProvider({ children }) {
  const { users, onRefresh } = useGetDataDB();

  return (
    <UsersContext.Provider value={{ users, onRefresh }}>
      {children}
    </UsersContext.Provider>
  );
}
