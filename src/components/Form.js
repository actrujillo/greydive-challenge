import appFirebase from "../data/credenciales";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import data from "../data/datos.json";
import "../assets/css/Form.css";
import Header from "./Header";
import Message from "./Message";

const db = getFirestore(appFirebase);

function Form() {
  // Hice un import del JSON porque considero que son datos estaticos, de esta manera evito realizar solicitud HTTP
  const dataItems = data.items;

  const [formData, setFormData] = useState({});
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "usuarios"), { ...formData });
    } catch (error) {
      console.log(error);
    }
    setFormData({});
    setShowMessage(true);
  };

  const handleClose = () => {
    setShowMessage(false);
  };

  return (
    <>
      <Header />
      <form
        style={{ display: "flex", flexDirection: "column" }}
        method="post"
        onSubmit={handleSubmit}
      >
        {dataItems.map((item, index) => {
          if (item.type === "select") {
            return (
              <label key={index}>
                {item.label}:
                <select name={item.name} id="" onChange={handleChange}>
                  {item.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            );
          } else {
            return (
              <label key={index}>
                {item.label}:
                <input
                  placeholder="Escriba aquí"
                  type={item.type}
                  name={item.name}
                  required={item.required}
                  onChange={handleChange}
                />
              </label>
            );
          }
        })}
      </form>
      <Message showMessage={showMessage} handleClose={handleClose} />
    </>
  );
}

export default Form;
