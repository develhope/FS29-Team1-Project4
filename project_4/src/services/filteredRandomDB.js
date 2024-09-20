import { DATA } from "../database";

const db = DATA;
export const filterRandomDB = [...db]
  .sort(() => Math.random() - 0.5)
  .slice(0, 10);
