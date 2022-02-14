import { useRef, useState, useContext } from "react";
import PostsContext from "../../store/PostsContext";

import "./Form.css";

function Form(props) {
  const postsContext = useContext(PostsContext);

  const [hideElement, setHideElement] = useState(true);

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const textInputRef = useRef();

  const [titleValue, setTitleValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [textValue, setTextValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredText = textInputRef.current.value;

    if (enteredTitle.length === 0) {
      setHideElement(false);
    } else {
      setHideElement(true);
      const postData = {
        title: enteredTitle,
        image: enteredImage,
        text: enteredText,
      };
      postsContext.addPost(postData);
      setTitleValue("");
      setImageValue("");
      setTextValue("");
    }
  }

  const handleUserInputTitle = (e) => {
    setTitleValue(e.target.value);
  };

  const handleUserInputImage = (e) => {
    setImageValue(e.target.value);
  };

  const handleUserInputText = (e) => {
    setTextValue(e.target.value);
  };

  return (
    <div className="bgd">
      <h2>Add new Post</h2>
      <form onSubmit={submitHandler}>
        <div className="element">
          {hideElement === false && (
            <label toggleVisibility={() => setHideElement(!hideElement)}>
              This field is Required
            </label>
          )}
          <input
            type="text"
            ref={titleInputRef}
            value={titleValue}
            onChange={handleUserInputTitle}
            placeholder="Title"
          ></input>
        </div>

        <div className="element">
          <label>This field is Required</label>
          <input
            type="text"
            required
            ref={imageInputRef}
            value={imageValue}
            onChange={handleUserInputImage}
            placeholder="Image URL"
          ></input>
        </div>

        <div className="element">
          <label>This field is Required</label>
          <textarea
            type="text-area"
            rows="4"
            required
            ref={textInputRef}
            value={textValue}
            onChange={handleUserInputText}
            placeholder="Text"
          ></textarea>
        </div>
        <div className="button-elem">
          <button className="form-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
