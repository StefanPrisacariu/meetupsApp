import { Button, Dropdown } from "react-bootstrap";
import "./Header.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Header() {
  const { t, i18n } = useTranslation();

  const [icn, setIcn] = useState(
    "https://cdn3.iconfinder.com/data/icons/world-flags-circled-vol-3/48/Romania-512.png"
  );

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
    if (e.target.value === "ro")
      setIcn(
        "https://cdn3.iconfinder.com/data/icons/world-flags-circled-vol-3/48/Romania-512.png"
      );
    else if (e.target.value === "en")
      setIcn(
        "https://cdn2.iconfinder.com/data/icons/european-flags-3/100/Britain-512.png"
      );
  };
  return (
    <header>
      <div className="lang-select">
        <Dropdown>
          <Dropdown.Toggle variant="">
            <img className="lang-icon" src={icn} alt="" />{" "}
            {t("header-language")}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              as={Button}
              value={"ro"}
              onClick={handleLanguageChange}
            >
              <img
                className="lang-icon"
                src="https://cdn3.iconfinder.com/data/icons/world-flags-circled-vol-3/48/Romania-512.png"
                alt="ro"
              />
              {t("header-language-ro")}
            </Dropdown.Item>
            <Dropdown.Item
              as={Button}
              value={"en"}
              onClick={handleLanguageChange}
            >
              <img
                className="lang-icon"
                src="https://cdn2.iconfinder.com/data/icons/european-flags-3/100/Britain-512.png"
                alt="en"
              />
              {t("header-language-en")}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <h1 className="header-h1">{t("header-title")}</h1>
      <h2 className="header-h2">Leokai Skarri</h2>
    </header>
  );
}

export default Header;
