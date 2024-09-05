import { useState } from "react";

export function RegisterPage() {
  const [isPro, setIsPro] = useState(true);
  const [contact, setcontact] = useState("")

  function handleIsProfessionist(event) {
    event.preventDefault();
    const value = event.target.value;
    if (value === "NO") {
      setIsPro(false);
    }
  }
  function handleUserContact(event) {
    event.preventDefault();
    const values = event.target.value;
    setcontact(values)
    if(values==="MAIL") {
      <div><h3>INSERISCI MAIL</h3>
      <input type="mail" /></div>
    } else if (values === "PHONE") {
      <div>
      <h3>INSERISCI IL TUO NUMERO DI TELEFONO</h3>
      <input type="number" />
      </div>
    } else if (values === "FACE") {
      <div>
      <h3>INSERISCI IL TUO CONTATTO FACEBOOK</h3>
      <input type="text" />
      </div>
    } else if (values === "INSTA") {
      <div>
      <h3>INSERISCI IL TUO CONTATTO INSTAGRAM</h3>
      <input type="text" />
      </div> }
      else {<div>
        <h3>INSERISCI IL TUO CONTATTO TWITTER</h3>
        <input type="text" />
      </div>}
    


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
        <input type="checkbox" onClick={handleIsProfessionist} value="SI" />
        <label>NO</label>
        <input type="checkbox" onClick={handleIsProfessionist} value="NO" />
        {isPro ? <div>
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
          <label >SI</label>
          <input type="checkbox" />
          <label>NO</label>
          <input type="checkbox" />
          <h3>COME VUOI ESSERE CONTATTATO DALLE AZIENDE</h3>
          <select name="" id="" onChange={handleUserContact}>
            <option value="MAIL">EMAIL</option>
            <option value="PHONE">TELEFONO</option>
            <option value="FACE">FACEBOOK</option>
            <option value="INSTA">INSTAGRAM</option>
            <option value="TWI">TWITTER</option>
          </select>
        </div> : 
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
            {/* {contact === "MAIL" ? <div><h3>INSERIRE CONTATTO MAIL</h3>
            <input type="email" /></div>} :  */}
            </div>}
        
      </form>
    </div>
  );
}
