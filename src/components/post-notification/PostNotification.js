import { Alert } from "react-bootstrap";
import "./PostNotification.css";

function PostNotification({ msg }) {
  return (
    <Alert
      variant="success"
      style={({ margin: 0 }, { position: "fixed" })}
      className="success-notif"
    >
      <img
        className="success-check-icon"
        src="https://cdn-icons-png.flaticon.com/512/3699/3699516.png"
        alt=""
      />
      <Alert.Heading style={{ margin: 0 }}>{msg}</Alert.Heading>
    </Alert>
  );
}

export default PostNotification;
