import { Alert } from "react-bootstrap";
import "./FormError.css";

function FormError({ msg }) {
  //Oricat ii dau din css aici sa imi ia margin 0 cu position fixed, nu vrea efectiv
  //am incercat de toate si se pare ca numai asta merge

  return (
    <Alert
      variant="danger"
      style={{ margin: 0, position: "fixed" }}
      className="alert-notif"
    >
      <img
        className="error-check-icon"
        src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678069-sign-error-512.png"
        alt=""
      />
      <Alert.Heading style={{ margin: 0 }}>{msg}</Alert.Heading>
    </Alert>
  );
}

export default FormError;
