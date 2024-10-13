import { useEffect } from "react";
import { useGetDataDB } from "./useGetDataDB";
import axios from "axios";

export function useRemoveUser(user) {
  const { users, setUsers } = useGetDataDB();

  function removeUser() {
    if (user) {
      axios
        .delete(`http://localhost:3001/api/users/${user.id}`)
        .then((response) => setUsers(users.filter((u) => u.id !== user.id)))
        .catch((error) =>
          console.error("Errore nel cancellare l'utente", error)
        );
    }
  }

  return { onRemove: removeUser };
}
