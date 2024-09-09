import { useState } from "react";

export function useShowToggle() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    toggle ? setToggle(false) : setToggle(true);
  }

  return {
    toggle: toggle,
    onToggle: handleToggle,
  };
}
