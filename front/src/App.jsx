import axios from "axios";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./views/About.jsx";
import Detail from "./views/Detail.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  const URL = `https://rym2.up.railway.app/api/character/`;
  const API_KEY = "henrystaff";

  const onSearch = (id) => {
    if (!id) return alert("Ingresa un ID");
    if (characters.find((char) => char.id === parseInt(id)))
      return alert(`Ya existe el personaje con el id ${id}`);
    axios
      .get(`${URL}${id}?key=${API_KEY}`)
      .then(({ data }) => {
        if (data.id) {
          setCharacters([data, ...characters]);
        } else {
          alert("No hay personajes con ese ID!");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About/>} />
        <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;
