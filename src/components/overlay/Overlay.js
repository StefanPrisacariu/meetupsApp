import { useState , useContext} from "react";
import "./Overlay.css";
import PostsContext from "../../store/PostsContext";

function Overlay({ elem, elemId, toggleOverlay, action }) {
  
  const replaceContext = useContext(PostsContext);
  
  const [{ title, image, text }, setState] = useState({
    title: "",
    image: "",
    text: "",
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
    }; // adaug elementele noi in embed ca sa-l folosesc pt update

    replaceContext.editPost(embed,elemId)

    // fetch(
    //   `https://cosplaybyheart-default-rtdb.firebaseio.com/posts/${elem.id}.json`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // ).then((response) => {
    //   return response.json();
    // }).then((data)=>{
    //   const embed={
    //     title: newTitle,
    //     image: newImage,
    //     text: newText,
    //   }
    //   data.map(embed);
    // });
    //astea nu aveau ce cauta aici, mi-am dat seama tarziu
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
                <button
                  className="delete-btn"
                  onClick={() => elem.removePost(elemId)}
                >
                  Delete
                </button>
                <button className="cancel-btn" onClick={toggleOverlay}>
                  Cancel
                </button>
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
              <form className="editor">
                <h2 className="editor-title">Edit Post</h2>
                <label>Title</label>
                <input
                  className="editor-field"
                  defaultValue={elem.title}
                  onChange={handleTextFieldChange}
                  name="title"
                ></input>
                <label>Image URL</label>
                <input
                  className="editor-field"
                  defaultValue={elem.image}
                  onChange={handleTextFieldChange}
                  name="image"
                ></input>
                <label>Text</label>
                <textarea
                  className="editor-field"
                  defaultValue={elem.text}
                  onChange={handleTextFieldChange}
                  name="text"
                ></textarea>
              </form>
              <div className="buttons">
                <button className="save-btn" onClick={editCurrentPost}>
                  Save
                </button>
                <button className="cancel-btn" onClick={toggleOverlay}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Overlay;
