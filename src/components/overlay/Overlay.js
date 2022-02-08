import "./Overlay.css";

function Overlay({ elem, elemId, toggleOverlay }) {
  return (
    <div className="darkened">
      <div className="check-box">
        <div className="container">
          <h2 className="overlay-title">Are you sure you want to delete this post?</h2>
          <div className="buttons">
            <button className="delete-btn" onClick={() => elem.removePost(elemId)}>Delete</button>
            <button className="cancel-btn" onClick={toggleOverlay}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
