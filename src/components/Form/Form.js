import { useRef, useState, useContext } from "react";
import PostsContext from "../../store/PostsContext";

import "./Form.css";

function Form(props) {
  const postsContext = useContext(PostsContext);

  const [hideTitleError, setHideTitleError] = useState(true);
  // const [hideImageError, setHideImageError] = useState(true);
  // const [hideTextError, setHideTextError] = useState(true);

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const textInputRef = useRef();

  const [titleValue, setTitleValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const validateField = (e) => {
    if (e.target.value.length === 0) {
      setHideTitleError(false);
    } else {
      setHideTitleError(true);
    }
  };

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredText = textInputRef.current.value;

    if (hideTitleError === true) {
      const postData = {
        title: enteredTitle,
        image: enteredImage,
        text: enteredText,
      };
      postsContext.addPost(postData);
      setTitleValue("");
      setImageValue("");
      setTextValue("");
    } else {
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
          {hideTitleError === false && <label>This field is Required</label>}
          <input
            type="text"
            ref={titleInputRef}
            value={titleValue}
            onChange={handleUserInputTitle}
            onBlur={validateField}
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
