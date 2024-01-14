import axios from "axios";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./views/About.jsx";
import Detail from "./views/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const URL = `https://rickandmortyapi.com/api/character/`;
  const [access, setAccess] = useState(false);
  const EMAIL = "ndepratg@gmail.com";
  const PASSWORD = "notrichyet";
  const navigate = useNavigate();

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (id) => {
    if (!id) return alert("Ingresa un ID");
    if (characters.find((char) => char.id === parseInt(id)))
      return alert(`Ya existe el personaje con el id ${id}`);
    axios
      .get(`${URL}${id}`)
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

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div className="App">
      {!isHomePage && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
