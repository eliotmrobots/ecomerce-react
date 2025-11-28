
import "./buttonPrimary.css";

function buttonPrimary({ children , onClick }) {
  return (
    <button className="inicio-button" onClick={onClick}>
      {children}
    </button>
  );
}

export default buttonPrimary;