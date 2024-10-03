import { ProfessionalCard } from "./ProfessionalCard";

export function ProfessionalSection({ professional, onClose }) {
  return (
    <div>
      <div>
        <ProfessionalCard professional={professional} onClose={onClose} />
      </div>
    </div>
  );
}
