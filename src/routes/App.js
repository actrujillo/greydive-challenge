import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "../components/Form";
import Users from "../components/Users";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Form />}></Route>
          <Route exact path="/users" element={<Users />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
