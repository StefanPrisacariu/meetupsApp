import { useRef, useState, useContext } from "react";
import PostsContext from "../../store/PostsContext";

import "./Form.css";

function Form(props) {
  const postsContext = useContext(PostsContext);

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
          <label>Title</label>
          <input
            type="text"
            required
            ref={titleInputRef}
            value={titleValue}
            onChange={handleUserInputTitle}
          ></input>
        </div>

        <div className="element">
          <label>Image URL</label>
          <input
            type="text"
            required
            ref={imageInputRef}
            value={imageValue}
            onChange={handleUserInputImage}
          ></input>
        </div>

        <div className="element">
          <label>Text</label>
          <textarea
            type="text-area"
            rows="4"
            required
            ref={textInputRef}
            value={textValue}
            onChange={handleUserInputText}
          ></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
