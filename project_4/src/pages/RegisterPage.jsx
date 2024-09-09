import { useState } from "react";
// import {} from "../styles/RegisterPage.module.css";

export function RegisterPage() {
  const [isPro, setIsPro] = useState(true);
  const [contact, setcontact] = useState("");

  function handleIsProfessionist(event) {
    event.preventDefault();
    const value = event.target.value;

    if (value === "NO") {
      setIsPro(false);
    } else {
      setIsPro(true);
    }
  }
  function handleUserContact(event) {
    event.preventDefault();
    const values = event.target.value;
    setcontact(values);
  }

  return (
    <div>
      <h1>Register Page</h1>
      <form action="">
        <h3>USERNAME</h3>
        <input type="text" />
        <h3>PASSWORD</h3>
        <input type="Password" placeholder="Your Password" />
        <h3>MAIL</h3>
        <input type="mail" placeholder="Example@libero.it" />
        <h3>SEI UN PROFESSIONISTA</h3>
        <label>SI</label>
        <input
          type="radio"
          name="pro"
          onChange={handleIsProfessionist}
          value="SI"
        />

        <label>NO</label>
        <input
          type="radio"
          name="pro"
          onChange={handleIsProfessionist}
          value="NO"
        />
        {isPro ? (
          <div>
            <h3>CHE RUOLO RICOPRI?</h3>
            <input type="text" />
            <h3>CHE PROGRAMMA USI?</h3>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <h3>QUANTO COSTA IL TUO SERVIZIO</h3>
            <input type="text" />
            <h3>IN CHE CITTA'LAVORI</h3>
            <input type="text" />
            <h3>SEI DISPOSTO A SPOSTARTI</h3>
            <label>SI</label>
            <input type="checkbox" />
            <label>NO</label>
            <input type="checkbox" />
            <h3>COME VUOI ESSERE CONTATTATO DALLE AZIENDE</h3>
            <select name="" id="" onChange={handleUserContact}>
              <option value="mail">EMAIL</option>
              <option value="phone">TELEFONO</option>
              <option value="facebook">FACEBOOK</option>
              <option value="instagram">INSTAGRAM</option>
              <option value="twitter">TWITTER</option>
              <option value="linkedin">LINKEDIN</option>
            </select>
            {contact === "mail" && (
              <div>
                <h3>INSERISCI MAIL</h3>
                <input type="mail" />
              </div>
            )}
            {contact === "phone" && (
              <div>
                <h3>INSERISCI IL TUO CONTATTO TELEFONCIO</h3>
                <input type="text" />
              </div>
            )}
            {contact === "facebook" && (
              <div>
                <h3>INSERISCI IL TUO CONTATTO FACEBOOK</h3>
                <input type="text" />
              </div>
            )}
            {contact === "instagram" && (
              <div>
                <h3>INSERISCI CONTATTO INSTAGRAM</h3>
                <input type="text" />
              </div>
            )}
            {contact === "twitter" && (
              <div>
                <h3>INSERISCI IL TUO CONTATTO TWITTER</h3>
                <input type="text" />
              </div>
            )}
            {contact === "linkedin" && (
              <div>
                <h3>INSERISCI IL TUO CONTATTO LINKEDIN</h3>
                <input type="text" />
              </div>
            )}
          </div>
        ) : (
          <div>
            <h3>NOME DELL'AZIENDA</h3>
            <input type="text" />
            <h3>CHE TIPO DI PROFESSIONISTA CERCHI</h3>
            <select name="" id="">
              <option value="">WEB DEVELOPER</option>
              <option value="">WEB DESIGNER</option>
              <option value="">GAME DESIGNER</option>
              <option value="">3D DESIGNER</option>
            </select>
            <h3>COME VUOI ESSERE CONTATTATO DAI PROFESSIONISTI</h3>
            <select name="" id="" onChange={handleUserContact}>
              <option value="mail">EMAIL</option>
              <option value="phone">TELEFONO</option>
              <option value="facebook">FACEBOOK</option>
              <option value="instagram">INSTAGRAM</option>
              <option value="twitter">TWITTER</option>
              <option value="linkedin">LINKEDIN</option>
            </select>
            {contact === "mail" && (
              <div>
                <h3>INSERISCI MAIL</h3>
                <input type="mail" />
              </div>
            )}
            {contact === "phone" && (
              <div>
                <h3>INSERISCI IL TUO CONTATTO TELEFONICO</h3>
                <input type="text" />
              </div>
            )}
            {contact === "facebook" && (
              <div>
                <h3>INSERISCI IL TUO CONTATTO FACEBOOK</h3>
                <input type="text" />
              </div>
            )}
            {contact === "instagram" && (
              <div>
                <h3>INSERISCI CONTATTO INSTAGRAM</h3>
                <input type="text" />
              </div>
            )}
            {contact === "twitter" && (
              <div>
                <h3>INSERISCI IL TUO CONTATTO TWITTER</h3>
                <input type="text" />
              </div>
            )}
            {contact === "linkedin" && (
              <div>
                <h3>INSERISCI IL TUO CONTATTO LINKEDIN</h3>
                <input type="text" />
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
}
