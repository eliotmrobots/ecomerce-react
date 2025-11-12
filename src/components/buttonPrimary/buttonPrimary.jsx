
import "./buttonPrimary.css";

function buttonPrimary({ children , onClick }) {
  return (
    <button className="button-primary" onClick={onClick}>
      {children}
    </button>
  );
}

export default buttonPrimary;