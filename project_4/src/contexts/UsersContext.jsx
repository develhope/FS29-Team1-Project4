import React, { createContext, useState } from "react";
import { useGetDataDB } from "../hooks/useGetDataDB";

export const UsersContext = createContext();

export function UsersProvider({ children }) {
  const { users } = useGetDataDB();

  return (
    <UsersContext.Provider value={{ users }}>{children}</UsersContext.Provider>
  );
}
