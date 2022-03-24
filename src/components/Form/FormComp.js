import { useState, useContext, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import PostsContext from "../../store/PostsContext";
import FormError from "../form-error/FormError";
import { useTranslation } from "react-i18next";
import "./Form.css";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FormComp() {
  const postsContext = useContext(PostsContext);
  const [hideErrorMsg, setHideErrorMsg] = useState(true);
  const [validForm, setValidForm] = useState(false);

  const { t } = useTranslation();


  const [
    {
      title,
      image,
      text,
      location,
      titleError,
      imageError,
      textError,
      locationError,
    },
    setState,
  ] = useState({
    title: "",
    image: "",
    text: "",
    location: "",
    titleError: "",
    imageError: "",
    textError: "",
    locationError: "",
  });

  let today = new Date().toLocaleDateString();
  let [date,setDate] = useState(today);


  useEffect(() => {
    if (title === "" || image === "" || text === "" || location === "") {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  }, [title, image, text, location]);

  function handleTextFieldBlur({ target: { name, value } }) {
    if (value.length === 0) {
      setState((prevState) => ({
        ...prevState,
        [`${name}Error`]: `${name} is required!`,
      }));
    } else {
      setState((prevState) => ({ ...prevState, [`${name}Error`]: "" }));
    }
  }

  function handleTextFieldChange({ target: { name, value } }) {
    setState((prevState) => ({ ...prevState, [name]: value }));
  }

  function submitHandler(event) {
    event.preventDefault();

    if (validForm) {
      const postData = {
        title: title,
        image: image,
        text: text,
        location: location,
        date: date,
      };
      console.log(date);

      postsContext.addPost(postData);
      setState({
        title: "",
        image: "",
        text: "",
        location: "",
      });
    } else {
      setHideErrorMsg(false);
      setTimeout(() => setHideErrorMsg(true), 3000);
    }
  }

  return (
    <div className="bgd">
      <h2 className="form-title">{t("form-title")}</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formGroupTitle">
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder={t("form-field-title")}
                value={title}
                name="title"
                onChange={handleTextFieldChange}
                onBlur={handleTextFieldBlur}
              />
              {titleError && <span>{t("form-error-title")}</span>}
            </Col>
            <Col xs={3}>
              <Form.Select
                as="location"
                aria-label="Select the location"
                name="location"
                onChange={handleTextFieldChange}
                onBlur={handleTextFieldBlur}
              >
                <option value="">{t("form-field-location")}</option>
                <option value="carousel">
                  {t("form-field-location-carousel")}
                </option>
                <option value="main">{t("form-field-location-main")}</option>
              </Form.Select>
              {locationError && <span>{t("form-error-location")}</span>}
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupImage">
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder={t("form-field-image")}
                value={image}
                name="image"
                onChange={handleTextFieldChange}
                onBlur={handleTextFieldBlur}
              />
              {imageError && <span>{t("form-error-image")}</span>}
            </Col>
            <Col xs={3}>
              <ReactDatePicker
                className="form-control"
                value={date}
                name="date"
                onChange={(date:Date) => setDate(date.toLocaleDateString())}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupText">
          <Form.Control
            as="textarea"
            placeholder={t("form-field-text")}
            value={text}
            name="text"
            onChange={handleTextFieldChange}
            onBlur={handleTextFieldBlur}
            rows={4}
          />
          {textError && <span>{t("form-error-text")}</span>}
        </Form.Group>
        <Button variant="primary" type="submit">
          {t("form-button")}
        </Button>
      </Form>
      {!hideErrorMsg && <FormError msg={t("form-alert-error")} />}
    </div>
  );
}

export default FormComp;
