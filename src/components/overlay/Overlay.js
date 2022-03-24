import { useState, useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./Overlay.css";
import PostsContext from "../../store/PostsContext";
import { useDetectClickOutside } from "react-detect-click-outside";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Overlay({ elem, elemId, toggleOverlay, action }) {
  const replaceContext = useContext(PostsContext);

  const { t } = useTranslation();

  const [{ title, image, text, location }, setState] = useState({
    title: elem.title,
    image: elem.image,
    text: elem.text,
    location: elem.location,
  });

  const [date, setDate] = useState(elem.date);

  function handleTextFieldChange({ target: { name, value } }) {
    setState((prevState) => ({ ...prevState, [name]: value }));
  }

  function editCurrentPost() {
    const newTitle = title;
    const newImage = image;
    const newText = text;
    const newLocation = location;
    let newDate;

    if (date === undefined || date === null) {
      newDate = new Date().toLocaleDateString();
    }

    const embed = {
      title: newTitle,
      image: newImage,
      text: newText,
      location: newLocation,
      date: newDate,
    };

    replaceContext
      .editPost(embed, elemId)
      .then(() => {
        toggleOverlay(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const ref = useDetectClickOutside({ onTriggered: toggleOverlay });

  return (
    <>
      {/* delete */}
      {action === "delete" && (
        <div className="darkened">
          <div className="check-box">
            <div className="container" ref={ref}>
              <h2 className="overlay-title">{t("overlay-delete-title")}</h2>
              <div className="buttons">
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    elem.removePost(elemId);
                    toggleOverlay();
                  }}
                >
                  {t("overlay-delete-yes")}
                </Button>
                <Button variant="outline-primary" onClick={toggleOverlay}>
                  {t("overlay-delete-no")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* edit */}
      {action === "edit" && (
        <div className="darkened">
          <div className="edit-box">
            <div className="container" ref={ref}>
              <Form className="editor">
                <h2 className="editor-title">{t("overlay-edit")}</h2>
                <Form.Group className="mb-3" controlId="formGroupTitle">
                  <Row>
                    <Col>
                      <Form.Label>{t("form-field-title")}</Form.Label>
                      <Form.Control
                        type="text"
                        className="editor-field"
                        defaultValue={elem.title}
                        onChange={handleTextFieldChange}
                        name="title"
                      />
                    </Col>
                    <Col>
                      <Form.Label>{t("form-field-location")}</Form.Label>
                      <Form.Select
                        as="location"
                        aria-label="Select the location"
                        name="location"
                        onChange={handleTextFieldChange}
                      >
                        {/* <option value="carousel">
                          {t("form-field-location-carousel")}
                        </option>
                        <option value="main">
                          {t("form-field-location-main")}
                        </option> */}
                        {elem.location === "carousel" ? (
                          <>
                            <option selected value="carousel">
                              {t("form-field-location-carousel")}
                            </option>
                            <option value="main">
                              {t("form-field-location-main")}
                            </option>
                          </>
                        ) : (
                          <>
                            <option value="carousel">
                              {t("form-field-location-carousel")}
                            </option>
                            <option selected value="main">
                              {t("form-field-location-main")}
                            </option>
                          </>
                        )}
                      </Form.Select>
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupImageURL">
                  <Row>
                    <Col>
                      <Form.Label>{t("form-field-image")}</Form.Label>
                      <Form.Control
                        type="text"
                        className="editor-field"
                        defaultValue={elem.image}
                        onChange={handleTextFieldChange}
                        name="image"
                      />
                    </Col>
                    <Col>
                      <Form.Label>Date</Form.Label>
                      {/* <ReactDatePicker/> */}
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupText">
                  <Form.Label>{t("form-field-text")}</Form.Label>
                  <Form.Control
                    as="textarea"
                    className="editor-field"
                    defaultValue={elem.text}
                    onChange={handleTextFieldChange}
                    name="text"
                  />
                </Form.Group>
              </Form>
              <div className="buttons">
                <Button variant="outline-success" onClick={editCurrentPost}>
                  {t("overlay-edit-save")}
                </Button>
                <Button variant="outline-primary" onClick={toggleOverlay}>
                  {t("overlay-edit-cancel")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Overlay;
