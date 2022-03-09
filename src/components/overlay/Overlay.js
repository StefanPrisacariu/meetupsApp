import { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import "./Overlay.css";
import PostsContext from "../../store/PostsContext";

function Overlay({ elem, elemId, toggleOverlay, action }) {
  const replaceContext = useContext(PostsContext);

  const [{ title, image, text }, setState] = useState({
    title: elem.title,
    image: elem.image,
    text: elem.text,
  });

  function handleTextFieldChange({ target: { name, value } }) {
    setState((prevState) => ({ ...prevState, [name]: value }));
  }

  function editCurrentPost() {
    const newTitle = title;
    const newImage = image;
    const newText = text;
    const embed = {
      title: newTitle,
      image: newImage,
      text: newText,
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

  return (
    <>
      {/* delete */}
      {action === "delete" && (
        <div className="darkened">
          <div className="check-box">
            <div className="container">
              <h2 className="overlay-title">
                Are you sure you want to delete this post?
              </h2>
              <div className="buttons">
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    elem.removePost(elemId);
                  }}
                >
                  Delete
                </Button>
                <Button variant="outline-primary" onClick={toggleOverlay}>
                  Cancel
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
            <div className="container">
              <Form className="editor">
                <h2 className="editor-title">Edit Post</h2>
                <Form.Group className="mb-3" controlId="formGroupTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    className="editor-field"
                    defaultValue={elem.title}
                    onChange={handleTextFieldChange}
                    name="title"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupImageURL">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    className="editor-field"
                    defaultValue={elem.image}
                    onChange={handleTextFieldChange}
                    name="image"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupText">
                  <Form.Label>Title</Form.Label>
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
                  Save Changes
                </Button>
                <Button variant="outline-primary" onClick={toggleOverlay}>
                  Cancel
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
