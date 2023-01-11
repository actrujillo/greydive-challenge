import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <section
        style={{
          maxHeight: "20vh",
        }}
      >
        <Link to="/">
          <img
            src="https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/612ff6936ef1a98f2a9b29cf_logo-greydive-gris.png"
            alt="logo greydive"
            width="170px"
            style={{ padding: "30px 0 0 30px" }}
          />
        </Link>
      </section>
    </>
  );
}
