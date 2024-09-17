import { Titleh6 } from "./Titleh6";

export function CategorieProIT({ category, onClick }) {
  return (
    <li onClick={onClick} className="cursor-pointer">
      <Titleh6 title={category} />
    </li>
  );
}
