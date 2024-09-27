import { useState } from "react";
import style from "../styles/RegisterPage.module.css";
import { json } from "react-router-dom";

export function RegisterPage() {
  const [isPro, setIsPro] = useState(true);
  const [contact, setcontact] = useState("");
  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const [job, setJob] = useState()
  const [price, setPrice] = useState()
  const [location, setLocation] = useState()
  const [move, setMove] = useState(true)
  const [mailSelect, setMailSelect] = useState()
  const [phoneSelect, setPhoneSelect] = useState()


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
  const handleUserNameChange = (e) => {
    const user = e.target.value;
    setUserName(user)
    console.log(user);
    
  };

    const handlePasswordChange = (e) => {
      const pass = e.target.value;
      setPassword(pass);
    };

    const handleEmailChange = (e) => {
    const mail = e.target.value;
    setEmail(mail);
    };

    const handleChangeJob = (e) => {
      const job = e.target.value;
      setJob(job)
    }
    const handleChangePrice = (e) => {
      const price = e.target.value;
      setPrice(price)
    }
    const handleChangeLocation = (e) => {
      const location = e.target.value;
      setLocation(location)
    }
    const handleChangeMove = (e) => {
        event.preventDefault();
        const move = event.target.value;

        if (move === "NO") {
          setMove(false);
        } else {
          setMove(true);
        }

    }
    const handleChangeMailSelect = (e) => {
      const mailSelect = e.target.value;
      setMailSelect(mailSelect);
    };
    const handleChangePhoneSelect = (e) => {
      const phoneSelect = e.target.value;
      setPhoneSelect(phoneSelect);
    };

    const handleSave = (e) => {
      e.preventDefault()
      // console.log(userName, password, email);
      localStorage.setItem(
        "user",
        JSON.stringify({
          userName,
          password,
          email,
          isPro,
          job,
          price,
          location,
          move,
          contact,
          mailSelect,
          phoneSelect
        })
      );
      };

  return (
    <div className={style.container}>
      <h1 className={style.h1}>Register Page</h1>
      <form className={style.form}>
        <h3 className={style.h3}>INSERISCI USERNAME</h3>
        <input
          onChange={handleUserNameChange}
          value={userName}
          type="text"
          placeholder="ES.mario.rossi85"
          className={style.input}
        />

        <h3 className={style.h3}>INSERISCI PASSWORD</h3>
        <input
          onChange={handlePasswordChange}
          value={password}
          type="Password"
          placeholder="Your Password"
          className={style.input}
        />

        <h3 className={style.h3}>INSERISCI MAIL</h3>
        <input
          onChange={handleEmailChange}
          value={email}
          type="text"
          placeholder="Example@libero.it"
          className={style.input}
        />
        <h3 className={style.h3}>SEI UN PROFESSIONISTA?</h3>
        <label className={style.label}>SI</label>
        <input
          type="radio"
          name="pro"
          onChange={handleIsProfessionist}
          value="SI"
          className={style.check}
        />

        <label className={style.label}>NO</label>
        <input
          className={style.check}
          type="radio"
          name="pro"
          onChange={handleIsProfessionist}
          value="NO"
        />
        {isPro ? (
          <div>
            <h3 className={style.h3}>CHE RUOLO RICOPRI?</h3>
            <input
              type="text"
              className={style.input}
              onChange={handleChangeJob}
            />
            <h3 className={style.h3}>CHE PROGRAMMA USI?</h3>
            <div className={style.program}>
              <div className={style.plan}>
                <label className={style.textIcons}> HTML</label>
                <img
                  src="../src/assets/html5-brands-solid.svg"
                  alt=""
                  className={style.icons}
                />
              </div>
              <div className={style.plan}>
                <label className={style.textIcons}> CSS</label>
                <img
                  src="../src/assets/css3-alt-brands-solid.svg"
                  alt=""
                  className={style.icons}
                />
              </div>
              <div className={style.plan}>
                <label className={style.textIcons}> JS</label>

                <img
                  src="../src/assets/js-brands-solid.svg"
                  alt=""
                  className={style.icons}
                />
              </div>

              <div className={style.plan}>
                <label className={style.textIcons}> REACT</label>

                <img
                  src="../src/assets/react-brands-solid.svg"
                  alt=""
                  className={style.icons}
                />
              </div>
              <div className={style.plan}>
                <label className={style.textIcons}> T.SCRIPT</label>

                <img
                  src="../src/assets/typescript.svg"
                  alt=""
                  className={style.icons}
                />
              </div>
              <div className={style.plan}>
                <label className={style.textIcons}> C++</label>
                <img
                  src="../src/assets/c++.svg"
                  alt=""
                  className={style.icons}
                />
              </div>
              <div className={style.plan}>
                <label className={style.textIcons}> GITHUB</label>

                <img
                  src="../src/assets/github.svg"
                  alt=""
                  className={style.icons}
                />
              </div>
              <div className={style.plan}>
                <label className={style.textIcons}> C#</label>

                <img
                  src="../src/assets/c-sharp-c-icon-1822x2048-wuf3ijab.png"
                  alt=""
                  className={style.icons}
                />
              </div>
              <div className={style.plan}>
                <label className={style.textIcons}> PHYTON</label>
                <img
                  src="../src/assets/python-5.svg"
                  alt=""
                  className={style.icons}
                />
              </div>
              <div className={style.plan}>
                <label className={style.textIcons}> JAVA</label>

                <img
                  src="../src/assets/java-14.svg"
                  alt=""
                  className={style.icons}
                />
              </div>

              <div className={style.plan}>
                <label className={style.textIcons}> NODE</label>

                <img
                  src="../src/assets/nodejs.svg"
                  alt=""
                  className={style.icons}
                />
              </div>

              <div className={style.plan}>
                <label className={style.textIcons}> BLENDER</label>

                <img
                  src="../src/assets/blender-2.svg"
                  alt=""
                  className={style.icons}
                />
              </div>

              <div className={style.plan}>
                <label className={style.textIcons}>R.3D</label>

                <img
                  src="../src/assets/icons8-rhinoceros-6.svg"
                  alt=""
                  className={style.icons}
                />
              </div>
              <div className={style.plan}>
                <label className={style.textIcons}> UNITY</label>

                <img
                  src="../src/assets/unity-69.svg"
                  alt=""
                  className={style.icons}
                />
              </div>
            </div>
            <h3 className={style.h3}>QUANTO COSTA IL TUO SERVIZIO?</h3>
            <input
              type="text"
              className={style.input}
              onChange={handleChangePrice}
            />
            <h3 className={style.h3}>IN CHE CITTÀ LAVORI?</h3>
            <input
              type="text"
              className={style.input}
              onChange={handleChangeLocation}
            />
            <h3 className={style.h3}>SEI DISPOSTO A SPOSTARTI?</h3>
            <label className={style.label}>SI</label>
            <input
              type="radio"
              name="SI"
              className={style.check}
              onChange={handleChangeMove}
              value={"SI"}
            />
            <label className={style.label}>NO</label>
            <input
              type="radio"
              name="SI"
              className={style.check}
              onChange={handleChangeMove}
              value={"NO"}
            />
            <h3 className={style.h3}>COME VUOI ESSERE CONTATTATO?</h3>
            <select
              name=""
              id=""
              onChange={handleUserContact}
              className={style.contact}
            >
              <option value="mail">EMAIL</option>
              <option value="phone">TELEFONO</option>
              <option value="facebook">FACEBOOK</option>
              <option value="instagram">INSTAGRAM</option>
              <option value="twitter">TWITTER</option>
              <option value="linkedin">LINKEDIN</option>
            </select>
            {contact === "mail" && (
              <div>
                <h3 className={style.h3}>INSERISCI MAIL</h3>
                <input
                  type="text"
                  className={style.input}
                  onChange={handleChangeMailSelect}
                />
              </div>
            )}
            {contact === "phone" && (
              <div>
                <h3 className={style.h3}>
                  INSERISCI IL TUO CONTATTO TELEFONICO
                </h3>
                <input
                  type="text"
                  className={style.input}
                  onChange={handleChangePhoneSelect}
                />
              </div>
            )}
            {contact === "facebook" && (
              <div>
                <h3 className={style.h3}>INSERISCI IL TUO CONTATTO FACEBOOK</h3>
                <input type="text" className={style.input} />
              </div>
            )}
            {contact === "instagram" && (
              <div>
                <h3 className={style.h3}>INSERISCI CONTATTO INSTAGRAM</h3>
                <input type="text" className={style.input} />
              </div>
            )}
            {contact === "twitter" && (
              <div>
                <h3 className={style.h3}>INSERISCI IL TUO CONTATTO TWITTER</h3>
                <input type="text" className={style.input} />
              </div>
            )}
            {contact === "linkedin" && (
              <div>
                <h3 className={style.h3}>INSERISCI IL TUO CONTATTO LINKEDIN</h3>
                <input type="text" className={style.input} />
              </div>
            )}
          </div>
        ) : (
          <div>
            <h3 className={style.h3}>NOME DELL'AZIENDA</h3>
            <input type="text" className={style.input} />
            <h3 className={style.h3}>CHE TIPO DI PROFESSIONISTA CERCHI</h3>
            <select name="" id="" className={style.contact}>
              <option value="">WEB DEVELOPER</option>
              <option value="">WEB DESIGNER</option>
              <option value="">GAME DESIGNER</option>
              <option value="">3D DESIGNER</option>
            </select>
            <h3 className={style.h3}>
              COME VUOI ESSERE CONTATTATO DAI PROFESSIONISTI?
            </h3>
            <select className={style.contact} onChange={handleUserContact}>
              <option value="mail">EMAIL</option>
              <option value="phone">TELEFONO</option>
              <option value="facebook">FACEBOOK</option>
              <option value="instagram">INSTAGRAM</option>
              <option value="twitter">TWITTER</option>
              <option value="linkedin">LINKEDIN</option>
            </select>
            {contact === "mail" && (
              <div>
                <h3 className={style.h3}>INSERISCI MAIL</h3>
                <input type="text" className={style.input} />
              </div>
            )}
            {contact === "phone" && (
              <div>
                <h3 className={style.h3}>
                  INSERISCI IL TUO CONTATTO TELEFONICO
                </h3>
                <input type="text" className={style.input} />
              </div>
            )}
            {contact === "facebook" && (
              <div>
                <h3 className={style.h3}>INSERISCI IL TUO CONTATTO FACEBOOK</h3>
                <input type="text" className={style.input} />
              </div>
            )}
            {contact === "instagram" && (
              <div>
                <h3 className={style.h3}>INSERISCI CONTATTO INSTAGRAM</h3>
                <input type="text" className={style.input} />
              </div>
            )}
            {contact === "twitter" && (
              <div>
                <h3 className={style.h3}>INSERISCI IL TUO CONTATTO TWITTER</h3>
                <input type="text" className={style.input} />
              </div>
            )}
            {contact === "linkedin" && (
              <div>
                <h3 className={style.h3}>INSERISCI IL TUO CONTATTO LINKEDIN</h3>
                <input type="text" className={style.input} />
              </div>
            )}
          </div>
        )}
        <button onClick={handleSave} className={style.saveButton}>
          SAVE ME
        </button>
        {/* <div>
          <h3>Dati inseriti:</h3>
          <p>Nome: {userName}</p>
          <p>Email: {email}</p>
          <p>Età: {password}</p>
        </div> */}
      </form>
    </div>
  );
}
