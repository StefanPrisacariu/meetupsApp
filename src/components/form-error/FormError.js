import "./FormError.css";

function FormError({msg}) {
  return (
    <div className="error-notif">
      <div className="error-check-icon">
        <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678069-sign-error-512.png" alt='' />
      </div>
      <p className="error-notif-text">{msg}</p>
    </div>
  );
}

export default FormError;
