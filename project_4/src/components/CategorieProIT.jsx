import { Titleh6 } from "./Titleh6";

export function CategorieProIT({ category, onClick }) {
  return (
    <li onClick={onClick} className="cursor-pointer text-[1.5rem] text-[#94c4f5]">
      <Titleh6 title={category} />
    </li>
  );
}
