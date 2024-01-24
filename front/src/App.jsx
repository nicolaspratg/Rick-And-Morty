import axios from "axios";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./views/About/About.jsx";
import Detail from "./views/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./views/Favorites/Favorites.jsx";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const URL = `http://localhost:3001/rickandmorty/character/`;
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

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (id) => {
    if (!id) return alert("Enter an ID");
    if (characters.find((char) => char.id === parseInt(id)))
      return alert(`A character with ID ${id} already exists.`);
    axios
      .get(`${URL}${id}`)
      .then(({ data }) => {
        if (data.id) {
          setCharacters([data, ...characters]);
        } else {
          alert("There are no characters with that ID.");
        }
      })
      .catch((err) => {
        alert("A character with that ID does not exist.");
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div className="App">
      {!isHomePage && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
