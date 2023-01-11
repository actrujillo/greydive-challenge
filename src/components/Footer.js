import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <section
        style={{
          minHeight: "8vh",
        }}
      >
        <Link to="/">Volver al Inicio</Link>
      </section>
    </>
  );
}
