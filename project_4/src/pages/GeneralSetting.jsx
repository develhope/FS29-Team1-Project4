import { DATA } from "../database";

const db = DATA;
export function GeneralSetting() {
  const general = db.general;

  return (
    <div>
      <h1>General Setting</h1>
      <h3>Nome</h3>
      <p>{general.firstName}</p>
      <p>{general.surName}</p>
      <p>Anno di nascita</p>
      <p>{general.annoNascita}</p>
      <p>Luogo di Nascita</p>
      <p>{general.luogoNascita}</p>
    </div>
  );
}
