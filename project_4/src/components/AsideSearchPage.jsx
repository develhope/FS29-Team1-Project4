import { useShowToggle } from "../hooks/useShowToggle";
import customSearch from "../styles/SearchPage.module.css";
import iconX from "../assets/xmark-solid.svg";
import { useEffect, useState } from "react";
import { DATA } from "../database";

const db = DATA;

export function AsideSearchPage({ onFiltered }) {
  const [toggleAsideHamburger, onToggleAsideHamburger] = useShowToggle();

  const [pro, setPro] = useState({
    professional: false,
    company: false,
  });
  const [specialization, setSpecialization] = useState({
    webDeveloper: false,
    softwareEngineer: false,
    webDesigner: false,
    designer3d: false,
  });
  const [price, setPrice] = useState({
    range0_50: false,
    range51_100: false,
    range101_150: false,
    over150: false,
  });
  const [program, setProgram] = useState({
    html5: false,
    mySQL: false,
    python: false,
    cPlusPlus: false,
    javascript: false,
  });
  const [location, setLocation] = useState({
    milano: false,
    torino: false,
    roma: false,
    palermo: false,
    londra: false,
    berlino: false,
    parigi: false,
    madrid: false,
  });
  const [contact, setContact] = useState({
    facebook: false,
    whatsapp: false,
    linkedIn: false,
    telegram: false,
    email: false,
  });
  const [transfer, setTransfer] = useState({
    si: false,
    no: false,
  });

  function handleChangePro(e) {
    const { name, checked } = e.target;
    setPro({ ...pro, [name]: checked });
  }
  function handleChangeSpecialization(e) {
    const { name, checked } = e.target;
    setSpecialization({ ...specialization, [name]: checked });
  }
  function handleChangePrice(e) {
    const { name, checked } = e.target;
    setPrice({ ...price, [name]: checked });
  }
  function handleChangeProgram(e) {
    const { name, checked } = e.target;
    setProgram({ ...program, [name]: checked });
  }
  function handleChangeLocation(e) {
    const { name, checked } = e.target;
    setLocation({ ...location, [name]: checked });
  }
  function handleChangeContact(e) {
    const { name, checked } = e.target;
    setContact({ ...contact, [name]: checked });
  }
  function handleChangeTransfer(e) {
    const { name, checked } = e.target;
    setTransfer({ ...transfer, [name]: checked });
  }

  const test = db.filter((user) => {
    const { professional, company } = pro;
    const { webDeveloper, softwareEngineer, webDesigner, designer3d } =
      specialization;
    const { range0_50, range51_100, range101_150, over150 } = price;
    const { html5, mySQL, python, cPlusPlus, javascript } = program;
    const { berlino, londra, madrid, milano, palermo, parigi, roma, torino } =
      location;
    const { email, facebook, linkedIn, telegram, whatsapp } = contact;
    const { si, no } = transfer;

    switch (true) {
      case professional && user.isPro === true:
        return true;
      case company && user.isPro === false:
        return true;

      case webDeveloper && user.job.includes("Web Developer"):
        return true;
      case softwareEngineer && user.job.includes("Software Engineer"):
        return true;
      case webDesigner && user.job.includes("Web Designer"):
        return true;
      case designer3d && user.job.includes("3D Designer"):
        return true;

      case range0_50 && user.price.min > 0 && user.price.min <= 50:
        return true;
      case range51_100 && user.price.min > 50 && user.price.min <= 100:
        return true;
      case range101_150 && user.price.min > 100 && user.price.min <= 150:
        return true;
      case over150 && user.price.min > 150:
        return true;

      case html5 && !!user.program.find((p) => p.name === "HTML"):
        return true;
      case mySQL && !!user.program.find((p) => p.name === "MySQL"):
        return true;
      case python && !!user.program.find((p) => p.name === "Python"):
        return true;
      case cPlusPlus && !!user.program.find((p) => p.name === "C++"):
        return true;
      case javascript && !!user.program.find((p) => p.name === "JS"):
        return true;

      case berlino && user.luogo === "Berlino":
        return true;
      case londra && user.luogo === "Londra":
        return true;
      case madrid && user.luogo === "Madrid":
        return true;
      case milano && user.luogo === "Milano":
        return true;
      case palermo && user.luogo === "Palermo":
        return true;
      case parigi && user.luogo === "Parigi":
        return true;
      case roma && user.luogo === "Roma":
        return true;
      case torino && user.luogo === "Torino":
        return true;

      case email && !!user.contact.find((c) => c.tipo === "email"):
        return true;
      case facebook && !!user.contact.find((c) => c.tipo === "facebook"):
        return true;
      case linkedIn && !!user.contact.find((c) => c.tipo === "linkedin"):
        return true;
      case telegram && !!user.contact.find((c) => c.tipo === "telegram"):
        return true;
      case whatsapp && !!user.contact.find((c) => c.tipo === "whatsapp"):
        return true;

      case si && user.transfert === true:
        return true;
      case no && user.transfert === false:
        return true;

      default:
        return (
          !professional &&
          !company &&
          !webDeveloper &&
          !softwareEngineer &&
          !webDesigner &&
          !designer3d &&
          !range0_50 &&
          !range51_100 &&
          !range101_150 &&
          !over150 &&
          !html5 &&
          !mySQL &&
          !python &&
          !cPlusPlus &&
          !javascript &&
          !palermo &&
          !torino &&
          !roma &&
          !parigi &&
          !milano &&
          !madrid &&
          !londra &&
          !berlino &&
          !facebook &&
          !whatsapp &&
          !linkedIn &&
          !telegram &&
          !email &&
          !si &&
          !no
        );
    }
  });

  useEffect(() => {
    onFiltered(test);
  }, [pro, specialization, price, program, location, contact, transfer]);

  return (
    <div>
      <div
        className={
          toggleAsideHamburger
            ? customSearch.bs_none
            : customSearch.hamburger_container
        }
      >
        <div
          onClick={onToggleAsideHamburger}
          className={
            toggleAsideHamburger ? customSearch.dn : customSearch.hamburger
          }
        >
          <div className={customSearch.hamburger_line}></div>
          <div className={customSearch.hamburger_line}></div>
          <div className={customSearch.hamburger_line}></div>
        </div>
        <div
          className={
            toggleAsideHamburger
              ? customSearch.hamburger_content
              : customSearch.dn
          }
        >
          <div className={customSearch.asidehamburger_content}>
            <div className={customSearch.asidefilter}>
              <h2>Filter</h2>
              <img
                src={iconX}
                className={customSearch.aside_iconX}
                onClick={onToggleAsideHamburger}
                alt=""
              />
            </div>
            <div className={customSearch.asidefilter_content}>
              <h3> Looking for : </h3>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="Professional"> Professional </label>
              </div>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="Company"> Company </label>
              </div>
              <hr />
              <br />
              <h3> Specialization : </h3>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="Web Developer"> Web Developer </label>
              </div>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="3D Designer"> 3D Designer </label>
              </div>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="Software Engineer"> Software Engineer </label>
              </div>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="Web Designer"> Web Designer </label>
              </div>
              <hr />
              <br />
              <h3> Price </h3>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="0-50€"> 0-50€ </label>
              </div>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="51-100€"> 51-100€ </label>
              </div>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="101-150€"> 101-150€ </label>
              </div>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="Over 151€"> Over 151€ </label>
              </div>
              <hr />
              <br />
              <h3> Languages: </h3>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="HTML5"> HTML5 </label>
              </div>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="MySQL"> MySQL </label>
              </div>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="Python"> Python </label>
              </div>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="C++"> C++ </label>
              </div>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="Javascript"> Javascript </label>
              </div>
              <hr />
              <br />
              <h3> Location : </h3>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="Milano"> Milano </label>
              </div>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="Torino"> Torino </label>
              </div>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="Roma"> Roma </label>
              </div>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="Palermo"> Palermo </label>
              </div>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="Londra"> Londra </label>
              </div>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="Berlino"> Berlino </label>
              </div>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="Parigi"> Parigi </label>
              </div>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="Madrid"> Madrid </label>
              </div>
              <hr />
              <br />
              <h3> Contatti: </h3>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="Facebook"> Facebook </label>
              </div>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="Whatsapp"> Whatsapp </label>
              </div>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="LinkedIn"> LinkedIn </label>
              </div>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="Telegram"> Telegram </label>
              </div>
              <div className={customSearch.aside_checkbox}>
                <input type="checkbox" />
                <label htmlFor="Email"> E-mail </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={customSearch.aside}>
        <div className="">
          <h3> Looking for : </h3>
          <div>
            <input
              type="checkbox"
              name="professional"
              onChange={handleChangePro}
            />
            <label htmlFor="professional"> Professional </label>
          </div>
          <div>
            <input type="checkbox" name="company" onChange={handleChangePro} />
            <label htmlFor="company"> Company </label>
          </div>
          <hr />
          <br />
          <h3> Specialization: </h3>
          <div>
            <input
              type="checkbox"
              name="webDeveloper"
              onChange={handleChangeSpecialization}
            />
            <label htmlFor="Web Developer"> Web Developer </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="designer3d"
              onChange={handleChangeSpecialization}
            />
            <label htmlFor="3D Designer"> 3D Designer </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="softwareEngineer"
              onChange={handleChangeSpecialization}
            />
            <label htmlFor="Software Engineer"> Software Engineer </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="webDesigner"
              onChange={handleChangeSpecialization}
            />
            <label htmlFor="Web Designer"> Web Designer </label>
          </div>
          <hr />
          <br />
          <h3> Price </h3>
          <div>
            <input
              type="checkbox"
              name="range0_50"
              onChange={handleChangePrice}
            />
            <label htmlFor="0-50€"> 0-50€ </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="range51_100"
              onChange={handleChangePrice}
            />
            <label htmlFor="51-100€"> 51-100€ </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="range101_150"
              onChange={handleChangePrice}
            />
            <label htmlFor="101-150€"> 101-150€ </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="over150"
              onChange={handleChangePrice}
            />
            <label htmlFor="Over 151€"> Over 151€ </label>
          </div>
          <hr />
          <br />
          <h3> Languages: </h3>
          <div>
            <input
              type="checkbox"
              name="html5"
              onChange={handleChangeProgram}
            />
            <label htmlFor="HTML5"> HTML5 </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="mySQL"
              onChange={handleChangeProgram}
            />
            <label htmlFor="MySQL"> MySQL </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="python"
              onChange={handleChangeProgram}
            />
            <label htmlFor="Python"> Python </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="cPlusPlus"
              onChange={handleChangeProgram}
            />
            <label htmlFor="CPlusPlus"> C++ </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="javascript"
              onChange={handleChangeProgram}
            />
            <label htmlFor="Javascript"> Javascript </label>
          </div>
          <hr />
          <br />
          <h3> Location : </h3>
          <div>
            <input
              type="checkbox"
              name="milano"
              onChange={handleChangeLocation}
            />
            <label htmlFor="Milano"> Milano </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="torino"
              onChange={handleChangeLocation}
            />
            <label htmlFor="Torino"> Torino </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="roma"
              onChange={handleChangeLocation}
            />
            <label htmlFor="Roma"> Roma </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="palermo"
              onChange={handleChangeLocation}
            />
            <label htmlFor="Palermo"> Palermo </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="londra"
              onChange={handleChangeLocation}
            />
            <label htmlFor="Londra"> Londra </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="berlino"
              onChange={handleChangeLocation}
            />
            <label htmlFor="Berlino"> Berlino </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="parigi"
              onChange={handleChangeLocation}
            />
            <label htmlFor="Parigi"> Parigi </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="madrid"
              onChange={handleChangeLocation}
            />
            <label htmlFor="Madrid"> Madrid </label>
          </div>
          <hr />
          <br />
          <h3> Contatti: </h3>
          <div>
            <input
              type="checkbox"
              name="facebook"
              onChange={handleChangeContact}
            />
            <label htmlFor="Facebook"> Facebook </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="whatsapp"
              onChange={handleChangeContact}
            />
            <label htmlFor="Whatsapp"> Whatsapp </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="linkedIn"
              onChange={handleChangeContact}
            />
            <label htmlFor="LinkedIn"> LinkedIn </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="telegram"
              onChange={handleChangeContact}
            />
            <label htmlFor="Telegram"> Telegram </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="email"
              onChange={handleChangeContact}
            />
            <label htmlFor="Email"> E-mail </label>
          </div>
          <hr />
          <br />
          <h3> Disponibilità trasferimento: </h3>
          <div>
            <input type="checkbox" name="si" onChange={handleChangeTransfer} />
            <label htmlFor="Si"> Si </label>
          </div>
          <div>
            <input type="checkbox" name="no" onChange={handleChangeTransfer} />
            <label htmlFor="No"> No </label>
          </div>
        </div>
      </div>
    </div>
  );
}
