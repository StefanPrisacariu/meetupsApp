import { Button } from "react-bootstrap";
import "./Header.css";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <header>
      <div className="lang-select">
        <Button variant="primary" value="ro" onClick={handleLanguageChange}>
          {/* <img
            className="lang-icon"
            src="https://cdn3.iconfinder.com/data/icons/world-flags-circled-vol-3/48/Romania-512.png"
            alt="ro"
          /> */}RO
        </Button>{' '}
        <Button variant="primary" value="en" onClick={handleLanguageChange}>
          {/* <img
            className="lang-icon"
            src="https://cdn2.iconfinder.com/data/icons/european-flags-3/100/Britain-512.png"
            alt="en"
          /> */}EN
        </Button>
      </div>
      <h1 className="header-h1">{t("header-title")}</h1>
      <h2 className="header-h2">Leokai Skarri</h2>
    </header>
  );
}

export default Header;
