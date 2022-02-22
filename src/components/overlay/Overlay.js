import "./Overlay.css";

function Overlay({ elem, elemId, toggleOverlay, action }) {
  function editCurrentPost(event) {}

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
                ></input>
                <label>Image URL</label>
                <input
                  className="editor-field"
                  defaultValue={elem.image}
                ></input>
                <label>Text</label>
                <textarea
                  className="editor-field"
                  defaultValue={elem.text}
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
