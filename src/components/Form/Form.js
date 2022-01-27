import { useRef } from "react";

import "./Form.css";

function Form(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const textInputRef = useRef();

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
    props.onAddPost(postData);
  }

    

  return (
    <div className="bgd">
      <h2>Add new Post</h2>
      <form onSubmit={submitHandler}>
        <div className="element">
          <label>Title</label>
          <input type="text" required ref={titleInputRef}></input>
        </div>

        <div className="element">
          <label>Image URL</label>
          <input type="text" required ref={imageInputRef}></input>
        </div>

        <div className="element">
          <label>Text</label>
          <textarea
            type="text-area"
            rows="4"
            required
            ref={textInputRef}
          ></textarea>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
