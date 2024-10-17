import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../contexts/UsersContext";

export function useFindUserID(username, password) {
  const { users } = useContext(UsersContext);
  const [userFind, setUserFind] = useState();

  useEffect(
    () =>
      setUserFind(
        users.find(
          (user) =>
            user.username.toUpperCase() === username.toUpperCase() &&
            user.password === password
        )
      ),
    [username, password]
  );

  return { userFind };
}
