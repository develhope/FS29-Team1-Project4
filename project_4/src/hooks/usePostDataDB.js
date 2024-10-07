import axios from "axios";
import { useGetDataDB } from "./useGetDataDB";
import { useState } from "react";

export function usePostDataDB(
  username,
  password,
  email,
  isPro,
  isAdmin = false,
  job = [],
  image = "",
  description = "",
  program,
  project = [],
  someExperience = [],
  price,
  luogo,
  transfert,
  contact = [],
  general = {},
  reviews = 0,
  comments = []
) {
  const { users } = useGetDataDB();
  const [usersState, setUsersState] = useState(users);

  const newUser = {
    id: users.length + 1,
    username,
    password,
    email,
    isPro,
    isAdmin,
    job,
    image,
    description,
    program,
    project,
    someExperience,
    price,
    luogo,
    transfert,
    contact,
    general,
    reviews,
    comments,
  };

  axios
    .post("/api/users", newUser)
    .then((response) => setUsersState([...usersState, response.data]))
    .catch((error) =>
      console.error("Errore nell'aggiunta dell'utente:", error)
    );
  //   return {};
}
