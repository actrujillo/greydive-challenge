import appFirebase from "../data/credenciales";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import "../assets/css/Users.css";

const db = getFirestore(appFirebase);

export default function Users() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "usuarios"));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setList(docs);
      } catch (error) {
        console.log(error);
      }
    };
    getList();
  }, [list]);

  return (
    <>
      <Header />
      <span className="back">
        <Link to="/">Volver al inicio</Link>
      </span>
      <section className="users">
        <h3>Usuarios registrados:</h3>
        <div className="container-users">
          {list.map((item) => (
            <ul key={item.id}>
              <li>
                {" "}
                <span>Nombre:</span> {item.full_name}
              </li>
              <li>
                <span>Email:</span> {item.email}{" "}
              </li>
              <li>
                <span>País de origen:</span> {item.country_of_origin}{" "}
              </li>
              <li>
                <span>Fecha de Nacimiento:</span> {item.birth_date}{" "}
              </li>
            </ul>
          ))}
        </div>
      </section>
    </>
  );
}
