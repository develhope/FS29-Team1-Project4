import { ProfessionalCard } from "./ProfessionalCard";

export function ProfessionalSection({ professional, onClose }) {
  return (
    <div>
      {/* </> */}
      <ProfessionalCard professional={professional} onClose={onClose} />
      {/* </> */}
    </div>
  );
}
