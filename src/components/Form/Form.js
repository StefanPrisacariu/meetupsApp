import { useState, useContext, useEffect } from "react";
import PostsContext from "../../store/PostsContext";
import FormError from "../form-error/FormError";

import "./Form.css";

function Form(props) {
  const postsContext = useContext(PostsContext);

  const [count, setCount] = useState(0);

  const [{ title, image, text, titleError, imageError, textError }, setState] =
    useState({
      title: "",
      image: "",
      text: "",
      titleError: "",
      imageError: "",
      textError: "",
    });

    const [hideErrorMsg, setHideErrorMsg] = useState(true);

  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    if (title === "" || image === "" || text === "") {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  }, [title, image, text]);

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
      };

      postsContext.addPost(postData);
      setState({
        title: "",
        image: "",
        text: "",
      });
    } else {
      setHideErrorMsg(false);
      setTimeout(() => setHideErrorMsg(true), 3000);
    }
  }

  return (
    <div className="bgd">
      <h2>Add new Post</h2>
      <form onSubmit={submitHandler}>
        <div className="element">
          <input
            type="text"
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
            value={text}
            name="text"
            onChange={handleTextFieldChange}
            onBlur={handleTextFieldBlur}
            placeholder="Text"
          ></textarea>
          {textError && <span>Text is required</span>}
        </div>
        <div className="button-elem">
          <button className="form-button" onClick={() => setCount(count + 1)}>
            Submit
          </button>
        </div>
        <span className="button-counter">You clicked {count} times</span>
      </form>
      {!hideErrorMsg && <FormError msg="All fields are required" />}
    </div>
  );
}

export default Form;
