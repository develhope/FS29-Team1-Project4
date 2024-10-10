import { useEffect, useState } from "react";
import axios from "axios";

export function useGetDataDB() {
  const [data, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Errore nel recupero dei dati:", error));
  }, []);

  return { users: data };
}
