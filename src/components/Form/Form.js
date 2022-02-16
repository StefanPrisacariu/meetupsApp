import { useRef, useState, useContext } from "react";
import PostsContext from "../../store/PostsContext";

import "./Form.css";

function Form(props) {
  const postsContext = useContext(PostsContext);

  const [{ title, image, text, titleError, imageError, textError }, setState] =
    useState({
      title: "",
      image: "",
      text: "",
      titleError: "",
      imageError: "",
      textError: "",
    });

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const textInputRef = useRef();

  function handleTextFieldBlur({ target: { name, value } }) {
    if (value.length === 0) {
      setState((prevState) => ({ ...prevState, [`${name}Error`]: prevState }));
    }
  }

  function handleTextFieldChange({ target: { name, value } }) {
    setState((prevState) => ({ ...prevState, [name]: value }));
  }

  // function checkAllFields(name) {
  //   if (`${name}Enter`.value === "" || `${name}Enter`.value === null) {
  //     setState({
  //       [`${name}Error`]: true,
  //     });
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  function submitHandler(event) {
    event.preventDefault();
    const titleEnter = titleInputRef.current.value;
    const imageEnter = imageInputRef.current.value;
    const textEnter = textInputRef.current.value;

    // if (checkAllFields(title)) {
    //   console.log('SUCCES')
    // } else{
    //   console.log('FAIL')
    // }

    const postData = {
      title: titleEnter,
      image: imageEnter,
      text: textEnter,
    };

    postsContext.addPost(postData);
    setState({
      title: "",
      image: "",
      text: "",
    });
  }

  return (
    <div className="bgd">
      <h2>Add new Post</h2>
      <form onSubmit={submitHandler}>
        <div className="element">
          <input
            type="text"
            ref={titleInputRef}
            value={title}
            name="title"
            onChange={handleTextFieldChange}
            onBlur={handleTextFieldBlur}
            placeholder="Title"
          />
          {titleError && <span>Title is required</span>}
        </div>

        <div className="element">
          <input
            type="text"
            ref={imageInputRef}
            value={image}
            name="image"
            onChange={handleTextFieldChange}
            onBlur={handleTextFieldBlur}
            placeholder="Image URL"
          ></input>
          {imageError && <span>Image URL is required</span>}
        </div>

        <div className="element">
          <textarea
            type="text-area"
            rows="4"
            ref={textInputRef}
            value={text}
            name="text"
            onChange={handleTextFieldChange}
            onBlur={handleTextFieldBlur}
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
