import icon_error from "../assets/images/icon-error.svg";

const Error = ({ message }) => {
  return (
    <div className="container-error">
      <img src={icon_error} alt="icon-error" className="icon-error" />
      <p className="error">{message}</p>
    </div>
  );
};

export default Error;
