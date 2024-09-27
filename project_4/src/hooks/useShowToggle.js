import { useState } from "react";

export function useShowToggle() {
  const [toggle, setToggle] = useState();

  function handleToggle() {
    toggle ? setToggle(false) : setToggle(true);
  }

  return [toggle, handleToggle];
}
