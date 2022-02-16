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

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredText = textInputRef.current.value;

    if (!titleError && !imageError && !textError) {
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
            onBlur={validateImage}
            ref={imageInputRef}
            value={imageValue}
            onChange={handleUserInputImage}
            placeholder="Image URL"
          ></input>
          {imageError && <span>Title is required</span>}
        </div>

        <div className="element">
          <textarea
            type="text-area"
            rows="4"
            onBlur={validateText}
            ref={textInputRef}
            value={textValue}
            onChange={handleUserInputText}
            placeholder="Text"
          ></textarea>
          {textError && <span>Title is required</span>}
        </div>
        <div className="button-elem">
          <button className="form-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
