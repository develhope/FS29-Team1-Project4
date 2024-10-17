import { useShowToggle } from "../hooks/useShowToggle";
import customSearch from "../styles/SearchPage.module.css";
import iconX from "../assets/xmark-solid.svg"


export function AsideSearchPage() {
    const [toggleAsideHamburger, onToggleAsideHamburger] = useShowToggle();
    

    return (
    <div>
        <div className={toggleAsideHamburger ? customSearch.bs_none : customSearch.hamburger_container}>
            <div onClick={onToggleAsideHamburger} className={toggleAsideHamburger ? customSearch.dn : customSearch.hamburger}>
                <div className={customSearch.hamburger_line}></div>
                <div className={customSearch.hamburger_line}></div>
                <div className={customSearch.hamburger_line}></div>
            </div>
            <div className={toggleAsideHamburger ? customSearch.hamburger_content : customSearch.dn}>
                <div className={customSearch.asidehamburger_content}>
                    <div className={customSearch.asidefilter}>
                        <h2>
                            Filter
                        </h2>
                        <img src={iconX} className={customSearch.aside_iconX} onClick={onToggleAsideHamburger} alt="" />
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

        {/* Full screen Aside */}
            <div className={customSearch.aside}>
                <div className="">
                    <h3> Looking for : </h3>
                    <div>
                        <input type="checkbox" name="Professional" onClick={handleChange} />
                        <label htmlFor="Professional"> Professional </label>
                    </div>
                    <div>
                        <input type="checkbox" name="Company" onClick={handleChange} />
                        <label htmlFor="Company"> Company </label>
                    </div>
                    <hr />
                    <br />
                    <h3> Specialization: </h3>
                    <div>
                        <input type="checkbox" name="Web Developer" onClick={handleChange} />
                        <label htmlFor="Web Developer"> Web Developer </label>
                    </div>
                    <div>
                        <input type="checkbox" name="3D Designer" onClick={handleChange} />
                        <label htmlFor="3D Designer"> 3D Designer </label>
                    </div>
                    <div>
                        <input type="checkbox" name="Software Engineer" onClick={handleChange} />
                        <label htmlFor="Software Engineer"> Software Engineer </label>
                    </div>
                    <div>
                        <input type="checkbox" name="Web Designer" onClick={handleChange} />
                        <label htmlFor="Web Designer"> Web Designer </label>
                    </div>
                    <hr />
                    <br />
                    <h3> Price </h3>
                    <div>
                        <input type="checkbox" name="0-50€"onClick={handleChange} />
                        <label htmlFor="0-50€"> 0-50€ </label>
                    </div>
                    <div>
                        <input type="checkbox" name="51-100€"onClick={handleChange} />
                        <label htmlFor="51-100€"> 51-100€ </label>
                    </div>
                    <div>
                        <input type="checkbox" onClick={handleChange} />
                        <label htmlFor="101-150€"> 101-150€ </label>
                    </div>
                    <div>
                        <input type="checkbox" onClick={handleChange} />
                        <label htmlFor="Over 151€"> Over 151€ </label>
                    </div>
                    <hr />
                    <br />
                    <h3> Languages: </h3>
                    <div>
                        <input type="checkbox" name="HTML-5" onClick={handleChange} />
                        <label htmlFor="HTML5"> HTML5 </label>
                    </div>
                    <div>
                        <input type="checkbox" onClick={handleChange} />
                        <label htmlFor="MySQL"> MySQL </label>
                    </div>
                    <div>
                        <input type="checkbox" onClick={handleChange} />
                        <label htmlFor="Python"> Python </label>
                    </div>
                    <div>
                        <input type="checkbox" onClick={handleChange} />
                        <label htmlFor="C++"> C++ </label>
                    </div>
                    <div>
                        <input type="checkbox" onClick={handleChange} />
                        <label htmlFor="Javascript"> Javascript </label>
                    </div>
                    <hr />
                    <br />
                    <h3> Location : </h3>
                    <div>
                        <input type="checkbox" name="Milano" onClick={handleChange} />
                        <label htmlFor="Milano"> Milano </label>
                    </div>
                    <div>
                        <input type="checkbox" onClick={handleChange} />
                        <label htmlFor="Torino"> Torino </label>
                    </div>
                    <div>
                        <input type="checkbox" name="Roma"onClick={handleChange} />
                        <label htmlFor="Roma"> Roma </label>
                    </div>
                    <div>
                        <input type="checkbox" onClick={handleChange} />
                        <label htmlFor="Palermo"> Palermo </label>
                    </div>
                    <div>
                        <input type="checkbox" onClick={handleChange} />
                        <label htmlFor="Londra"> Londra </label>
                    </div>
                    <div>
                        <input type="checkbox" onClick={handleChange} />
                        <label htmlFor="Berlino"> Berlino </label>
                    </div>
                    <div>
                        <input type="checkbox" onClick={handleChange} />
                        <label htmlFor="Parigi"> Parigi </label>
                    </div>
                    <div>
                        <input type="checkbox" onClick={handleChange} />
                        <label htmlFor="Madrid"> Madrid </label>
                    </div>
                    <hr />
                    <br />
                    <h3> Contatti: </h3>
                    <div>
                        <input type="checkbox" name="Facebook" onClick={handleChange} />
                        <label htmlFor="Facebook"> Facebook </label>
                    </div>
                    <div>
                        <input type="checkbox" onClick={handleChange} />
                        <label htmlFor="Whatsapp"> Whatsapp </label>
                    </div>
                    <div>
                        <input type="checkbox" onClick={handleChange} />
                        <label htmlFor="LinkedIn"> LinkedIn </label>
                    </div>
                    <div>
                        <input type="checkbox" onClick={handleChange} />
                        <label htmlFor="Telegram"> Telegram </label>
                    </div>
                    <div>
                        <input type="checkbox" onClick={handleChange} />
                        <label htmlFor="Email"> E-mail </label>
                    </div>
                    <hr />
                    <br />
                    <h3> Disponibilità trasferimento: </h3>
                    <div>
                        <input type="checkbox" onClick={handleChange} />
                        <label htmlFor="Si"> Si </label>
                    </div>
                    <div>
                        <input type="checkbox" onClick={handleChange} />
                        <label htmlFor="No"> No </label>
                    </div>
                </div>
            </div>
    </div>
    );
}