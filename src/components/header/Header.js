import { Button, ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
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
        <ButtonGroup>
          <DropdownButton
            as={ButtonGroup}
            title={t("header-language")}
            variant=""
          >
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
          </DropdownButton>
        </ButtonGroup>
      </div>
      <h1 className="header-h1">{t("header-title")}</h1>
      <h2 className="header-h2">Leokai Skarri</h2>
    </header>
  );
}

export default Header;
