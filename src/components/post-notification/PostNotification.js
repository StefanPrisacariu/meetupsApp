import "./PostNotification.css";

function PostNotification({msg}) {
  return (
    <div className="notification">
      <div className="notification-check-icon">
        <img src="https://cdn-icons-png.flaticon.com/512/3699/3699516.png" />
      </div>
      <p className="notification-text">{msg}</p>
    </div>
  );
}

export default PostNotification;
