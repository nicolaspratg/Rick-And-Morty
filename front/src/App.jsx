import axios from "axios";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const URL = `https://rym2.up.railway.app/api/character/`;
  const API_KEY = "henrystaff";

  const onSearch = (id) => {
    if (!id) return alert("Ingresa un ID");
    if (characters.find((char) => char.id === parseInt(id)))
      return alert(`Ya existe el personaje con el id ${id}`);
    console.log(id);
    axios
      .get(`${URL}${id}?key=${API_KEY}`)
      .then(({ data }) => {
        console.log("API Response:", data);
        if (data.id) {
          // Assuming that if 'id' property exists, it's a valid character
          setCharacters([data, ...characters]);
        } else {
          alert("No hay personajes con ese ID!");
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        alert(err.message);
      });
  };
  
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
