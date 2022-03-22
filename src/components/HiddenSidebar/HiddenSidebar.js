import { Offcanvas, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import "./HiddenSidebar.css";

function HiddenSidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { t } = useTranslation();

  return (
    <>
      <div className="sidebar-button">
        <Button variant="primary" onClick={handleShow}>
          {t("sidebar-button")}
        </Button>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{t("sidebar-title")}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{t("sidebar-content")}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default HiddenSidebar;
