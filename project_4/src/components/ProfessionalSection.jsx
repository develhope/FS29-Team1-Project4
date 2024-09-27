// import "./Arrow.css";
// import { LeftArrow } from "./LeftArrow";
// import { RightArrow } from "./RightArrow";
import { ProfessionalCard } from "./ProfessionalCard";

export function ProfessionalSection({ professional, onClose }) {
  return (
    <div>
      {/* <LeftArrow /> */}
      <ProfessionalCard professional={professional} onClose={onClose} />
      {/* <RightArrow /> */}
    </div>
  );
}
