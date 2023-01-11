import { Link } from "react-router-dom";
import "../assets/css/Message.css";

export default function Message(props) {
  const { showMessage, handleClose } = props;

  if (!showMessage) {
    return null;
  }

  return (
    <>
      <section className="message">
        <div className="container-message">
          <p>Su formulario ha sido registrado con éxito.</p>
          <button onClick={handleClose}>Cerrar ventana</button>
          <button>
            <Link to="users">Ver respuestas</Link>
          </button>
        </div>
      </section>
    </>
  );
}
