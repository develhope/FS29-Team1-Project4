import { useState } from "react";
import style from "../styles/RegisterPage.module.css";
import { json, useNavigate } from "react-router-dom";
import { usePostDataDB } from "../hooks/usePostDataDB";

export function RegisterPage() {
  // const [isPro, setIsPro] = useState(true);
  const [contact, setcontact] = useState([]);
  // const [job, setJob] = useState();
  // const [price, setPrice] = useState();
  // const [location, setLocation] = useState();
  // const [move, setMove] = useState(true);
  // const [mailSelect, setMailSelect] = useState();
  // const [phoneSelect, setPhoneSelect] = useState();
  // const [facebookSelect, setFacebookSelect] = useState();
  // const [instagramSelect, setInstagramSelect] = useState();
  // const [twitterSelect, setTwitterSelect] = useState();
  // const [linkedinSelect, setLinkedinSelect] = useState();
  // const [nameCompany, setNameCompany] = useState();
  // const [professionist, setProfessionist] = useState();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    isPro: true,
    isAdmin: false,
    job: [],
    image: "",
    description: "",
    program: [],
    project: [],
    someExperience: [],
    price: [],
    luogo: "",
    transfert: null,
    general: null,
    reviews: "",
    comments: [],
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    setFormData({
      ...formData,
      [name]: e.target.value,
    });
  };

  // function handleIsProfessionist(event) {
  //   event.preventDefault();
  //   const value = event.target.value;

  //   if (value === "NO") {
  //     setIsPro(false);
  //   } else {
  //     setIsPro(true);
  //   }
  // }
  function handleUserContact(event) {
    event.preventDefault();

    const values = event.target.value;
    setcontact((prev) => [...prev, values]);
  }

  // const handleChangeJob = (e) => {
  //   const job = e.target.value;
  //   setJob(job);
  // };
  // const handleChangePrice = (e) => {
  //   const price = e.target.value;
  //   setPrice(price);
  // };
  // const handleChangeLocation = (e) => {
  //   const location = e.target.value;
  //   setLocation(location);
  // };
  // const handleChangeMove = (e) => {
  //   event.preventDefault();
  //   const move = event.target.value;

  //   if (move === "NO") {
  //     setMove(false);
  //   } else {
  //     setMove(true);
  //   }
  // };
  // const handleChangeMailSelect = (e) => {
  //   const mailSelect = e.target.value;
  //   setMailSelect(mailSelect);
  // };
  // const handleChangePhoneSelect = (e) => {
  //   const phoneSelect = e.target.value;
  //   setPhoneSelect(phoneSelect);
  // };
  // const handleChangeFacebookSelect = (e) => {
  //   const facebookSelect = e.target.value;
  //   setFacebookSelect(facebookSelect);
  // };
  // const handleChangeInstagramSelect = (e) => {
  //   const instagramSelect = e.target.value;
  //   setInstagramSelect(instagramSelect);
  // };
  // const handleChangeTwitterSelect = (e) => {
  //   const twitterSelect = e.target.value;
  //   setTwitterSelect(twitterSelect);
  // };
  // const handleChangeLinkedinSelect = (e) => {
  //   const linkedinSelect = e.target.value;
  //   setLinkedinSelect(linkedinSelect);
  // };
  // const handleChangeNameCompany = (e) => {
  //   const nameCompany = e.target.value;
  //   setNameCompany(nameCompany);
  // };
  // const handleChangeProfessionist = (event) => {
  //   event.preventDefault();
  //   const professionist = event.target.value;
  //   setProfessionist(professionist);
  // };

  const handleSave = async (e) => {
    e.preventDefault();

    const data = {
      ...formData,
      contact,
    };
    try {
      const response = await fetch(`http://localhost:3001/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(data);

      if (response.ok) {
        setMessage("User created successfully");
        navigate("/");
      }
    } catch (error) {
      setMessage("Failed to create user:", error);
    }
  };

  return (
    <div className={style.container}>
      <h1 className={style.h1}>Register Page</h1>
      <form className={style.form}>
        <h3 className={style.h3}>INSERISCI USERNAME</h3>
        <input
          onChange={handleChange}
          name="username"
          value={formData.username}
          type="text"
          className={style.input}
        />

        <h3 className={style.h3}>INSERISCI PASSWORD</h3>
        <input
          onChange={handleChange}
          value={formData.password}
          name="password"
          type="password"
          className={style.input}
        />

        <h3 className={style.h3}>INSERISCI MAIL</h3>
        <input
          onChange={handleChange}
          value={formData.email}
          name="email"
          type="text"
          className={style.input}
        />
        <h3 className={style.h3}>SEI UN PROFESSIONISTA?</h3>
        <label className={style.label}>SI</label>
        <input
          type="radio"
          name="pro"
          onChange={handleChange}
          value="SI"
          className={style.check}
        />

        <label className={style.label}>NO</label>
        <input
          className={style.check}
          type="radio"
          name="pro"
          onChange={handleChange}
          value="NO"
        />
        {formData.isPro ? (
          <div>
            <h3 className={style.h3}>CHE RUOLO RICOPRI?</h3>
            <input
              type="text"
              className={style.input}
              onChange={handleChange}
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
                  src="../src/assets/react.svg"
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
              onChange={handleChange}
            />
            <h3 className={style.h3}>IN CHE CITTÀ LAVORI?</h3>
            <input
              type="text"
              className={style.input}
              onChange={handleChange}
            />
            <h3 className={style.h3}>SEI DISPOSTO A SPOSTARTI?</h3>
            <label className={style.label}>SI</label>
            <input
              type="radio"
              name="SI"
              className={style.check}
              onChange={handleChange}
              value={"SI"}
            />
            <label className={style.label}>NO</label>
            <input
              type="radio"
              name="SI"
              className={style.check}
              onChange={handleChange}
              value={"NO"}
            />
            <h3 className={style.h3}>COME VUOI ESSERE CONTATTATO?</h3>
            <select
              id=""
              multiple
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
            {contact.includes("mail") && (
              <div>
                <h3 className={style.h3}>INSERISCI MAIL</h3>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  className={style.input}
                  onChange={handleUserContact}
                />
              </div>
            )}
            {contact.includes("phone") && (
              <div>
                <h3 className={style.h3}>
                  INSERISCI IL TUO CONTATTO TELEFONICO
                </h3>
                <input
                  type="text"
                  className={style.input}
                  onChange={handleUserContact}
                />
              </div>
            )}
            {contact.includes("facebook") && (
              <div>
                <h3 className={style.h3}>INSERISCI IL TUO CONTATTO FACEBOOK</h3>
                <input
                  type="text"
                  className={style.input}
                  onChange={handleUserContact}
                />
              </div>
            )}
            {contact.includes("instagram") && (
              <div>
                <h3 className={style.h3}>INSERISCI CONTATTO INSTAGRAM</h3>
                <input
                  type="text"
                  className={style.input}
                  onChange={handleUserContact}
                />
              </div>
            )}
            {contact.includes("twitter") && (
              <div>
                <h3 className={style.h3}>INSERISCI IL TUO CONTATTO TWITTER</h3>
                <input
                  type="text"
                  className={style.input}
                  onChange={handleUserContact}
                />
              </div>
            )}
            {contact.includes("linkedin") && (
              <div>
                <h3 className={style.h3}>INSERISCI IL TUO CONTATTO LINKEDIN</h3>
                <input
                  type="text"
                  className={style.input}
                  onChange={handleUserContact}
                />
              </div>
            )}
          </div>
        ) : (
          <div>
            <h3 className={style.h3}>NOME DELL'AZIENDA</h3>
            <input
              type="text"
              className={style.input}
              onChange={handleUserContact}
            />
            <h3 className={style.h3}>CHE TIPO DI PROFESSIONISTA CERCHI</h3>
            <select
              name=""
              id=""
              className={style.contact}
              onChange={handleUserContact}
            >
              <option value="WEB DEVELOPER">WEB DEVELOPER</option>
              <option value="WEB DESIGNER">WEB DESIGNER</option>
              <option value="GAME DESIGNER">GAME DESIGNER</option>
              <option value="3D DESIGNER">3D DESIGNER</option>
            </select>
            <h3 className={style.h3}>
              COME VUOI ESSERE CONTATTATO DAI PROFESSIONISTI?
            </h3>
            <select
              className={style.contact}
              multiple
              onChange={handleUserContact}
            >
              <option value="mail">EMAIL</option>
              <option value="phone">TELEFONO</option>
              <option value="facebook">FACEBOOK</option>
              <option value="instagram">INSTAGRAM</option>
              <option value="twitter">TWITTER</option>
              <option value="linkedin">LINKEDIN</option>
            </select>
            {contact.includes("mail") && (
              <div>
                <h3 className={style.h3}>INSERISCI MAIL</h3>
                <input
                  type="text"
                  className={style.input}
                  onChange={handleUserContact}
                />
              </div>
            )}
            {contact.includes("phone") && (
              <div>
                <h3 className={style.h3}>
                  INSERISCI IL TUO CONTATTO TELEFONICO
                </h3>
                <input
                  type="text"
                  className={style.input}
                  onChange={handleUserContact}
                />
              </div>
            )}
            {contact.includes("facebook") && (
              <div>
                <h3 className={style.h3}>INSERISCI IL TUO CONTATTO FACEBOOK</h3>
                <input
                  type="text"
                  className={style.input}
                  onChange={handleUserContact}
                />
              </div>
            )}
            {contact.includes("instagram") && (
              <div>
                <h3 className={style.h3}>INSERISCI CONTATTO INSTAGRAM</h3>
                <input
                  type="text"
                  className={style.input}
                  onChange={handleUserContact}
                />
              </div>
            )}
            {contact.includes("twitter") && (
              <div>
                <h3 className={style.h3}>INSERISCI IL TUO CONTATTO TWITTER</h3>
                <input
                  type="text"
                  className={style.input}
                  onChange={handleUserContact}
                />
              </div>
            )}
            {contact.includes("linkedin") && (
              <div>
                <h3 className={style.h3}>INSERISCI IL TUO CONTATTO LINKEDIN</h3>
                <input
                  type="text"
                  className={style.input}
                  onChange={handleUserContact}
                />
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
