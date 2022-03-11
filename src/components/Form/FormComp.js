import { useState, useContext, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import PostsContext from "../../store/PostsContext";
import FormError from "../form-error/FormError";
import "./Form.css";

function FormComp() {
  const postsContext = useContext(PostsContext);
  const [hideErrorMsg, setHideErrorMsg] = useState(true);
  const [validForm, setValidForm] = useState(false);

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
      };

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
      <h2 className="form-title">Add new Post</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formGroupTitle">
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Title"
                value={title}
                name="title"
                onChange={handleTextFieldChange}
                onBlur={handleTextFieldBlur}
              />
              {titleError && <span>Title is required</span>}
            </Col>
            <Col xs={3}>
              <Form.Select
                as="location"
                aria-label="Select the location"
                name="location"
                onChange={handleTextFieldChange}
                onBlur={handleTextFieldBlur}
              >
                <option value="">Select the location</option>
                <option value="carousel">Carousel</option>
                <option value="main">Main</option>
              </Form.Select>
              {locationError && <span>Select a location</span>}
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupImage">
          <Form.Control
            type="text"
            placeholder="Image URL"
            value={image}
            name="image"
            onChange={handleTextFieldChange}
            onBlur={handleTextFieldBlur}
          />
          {imageError && <span>Image URL is required</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupText">
          <Form.Control
            as="textarea"
            placeholder="Text"
            value={text}
            name="text"
            onChange={handleTextFieldChange}
            onBlur={handleTextFieldBlur}
            rows={4}
          />
          {textError && <span>Text is required</span>}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {!hideErrorMsg && <FormError msg="All fields are required" />}
    </div>
  );
}

export default FormComp;
