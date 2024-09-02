import { Link } from "react-router-dom";
import { CircleButton } from "./CircleButton";

export function Logo() {
  return (
    <div>
      <Link to="/">
        <CircleButton />
      </Link>
    </div>
  );
}
