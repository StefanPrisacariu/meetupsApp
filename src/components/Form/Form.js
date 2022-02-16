import { useRef, useState, useContext } from "react";
import PostsContext from "../../store/PostsContext";

import "./Form.css";

function Form(props) {
  const postsContext = useContext(PostsContext);

  const [titleError, setTitleError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [textError, setTextError] = useState(false);

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const textInputRef = useRef();

  const [titleValue, setTitleValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const validateTitle = (e) => {
    if (e.target.value.length === 0) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }
  };
  const validateImage = (e) => {
    if (e.target.value.length === 0) {
      setImageError(true);
    } else {
      setImageError(false);
    }
  };
  const validateText = (e) => {
    if (e.target.value.length === 0) {
      setTextError(true);
    } else {
      setTextError(false);
    }
  };

  function checkFieldEmpty(inputRef, inputState) {
    if (inputRef.current.value.length === 0) {
      inputState(true);
      return false;
    } else {
      inputState(false);
      return true;
    }
  }


  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredText = textInputRef.current.value;

    const checkTitle = checkFieldEmpty(titleInputRef, setTitleError)
    const checkImage = checkFieldEmpty(imageInputRef, setImageError)
    const checkText = checkFieldEmpty(textInputRef, setTextError)

    if (checkTitle && checkImage && checkText) {
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
          <input
            type="text"
            ref={titleInputRef}
            value={titleValue}
            onChange={handleUserInputTitle}
            onBlur={validateTitle}
            placeholder="Title"
          />
          {titleError && <span>Title is required</span>}
        </div>

        <div className="element">
          <input
            type="text"
            ref={imageInputRef}
            value={imageValue}
            onChange={handleUserInputImage}
            onBlur={validateImage}
            placeholder="Image URL"
          ></input>
          {imageError && <span>Image URL is required</span>}
        </div>

        <div className="element">
          <textarea
            type="text-area"
            rows="4"
            ref={textInputRef}
            value={textValue}
            onChange={handleUserInputText}
            onBlur={validateText}
            placeholder="Text"
          ></textarea>
          {textError && <span>Text is required</span>}
        </div>
        <div className="button-elem">
          <button className="form-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
