import { useState } from "react";
import i18n from "../../i18n";
import "./LanguageSelector.scss";

export default function LanguageSelector() {
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value); //i18n.changeLanguage used tp change language
        setSelectedLanguage(e.target.value);
    };

    /*const openMenu = () =>{
        let select = document.getElementById('dropdown')
        select.click()
        select.addEventListener('click',(e) => {
            console.log(e)
        })

    }*/

    return (
        <select id="dropdown" defaultValue={selectedLanguage} onChange={chooseLanguage} /*onMouseEnter={openMenu}*/>
            <option value="en">English</option>
            <option value="fr">Francais</option>
            <option value="es">Espanol</option>
        </select>
    );
}
