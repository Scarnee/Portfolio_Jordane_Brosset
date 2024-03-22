import { useState } from "react";
import i18n from "../../i18n";
import "./LanguageSelector.scss";
import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const {t} = useTranslation()
    const chooseLanguage = (e) => {
        let dropdownTop = document.querySelector(`#dropdown .dropdownTop`);
        e.preventDefault();
        i18n.changeLanguage(e.target.value); //i18n.changeLanguage used to change language
        setSelectedLanguage(e.target.value);
        dropdownTop.click()

    };
    const [open, setOpen] = React.useState(false);

    function handleOpen() {
        //State to handle open and close
        setOpen(!open);

        let dropdownText = document.querySelector(`#dropdown .dropdownText`);
        let dropdownTop = document.querySelector(`#dropdown .dropdownTop`);
        let childElement = document.querySelector(`#dropdown .dropdownText ul`);

        // Changing styles when closed and open
        if (dropdownText.style.height === "" || dropdownText.style.height === "0px") {
            dropdownText.style.height = `${childElement.offsetHeight}px`;
            dropdownTop.style.borderBottomLeftRadius = "0px";
            dropdownTop.style.borderBottomRightRadius = "0px";
        } else {
            dropdownText.style.height = "0px";
            dropdownTop.style.borderBottomLeftRadius = "7px";
            dropdownTop.style.borderBottomRightRadius = "7px";
        }
    }

    return (
        <div id="dropdown" className="dropdown">
            <div className="dropdownTop" onClick={handleOpen}>
                <p className="dropdownTitle">{t("selectedLanguage")}</p>
                <button className={"btnValeurs" + (open ? " btnOpen" : "")}>
                    <i className="fa-solid fa-chevron-down"></i>
                </button>
            </div>
            <div className="dropdownText">
                <ul defaultValue={selectedLanguage} onChange={chooseLanguage}>
                    <option value="en" onClick={chooseLanguage} className={ selectedLanguage =='en' ? "hidden" : ""}>
                        English
                    </option>
                    <option value="fr" onClick={chooseLanguage} className={ selectedLanguage =='fr' ? "hidden" : ""}>
                        Français
                    </option>
                    <option value="es" onClick={chooseLanguage} className={ selectedLanguage =='es' ? "hidden" : ""}>
                        Español
                    </option>
                </ul>
            </div>
        </div>
    );
}
