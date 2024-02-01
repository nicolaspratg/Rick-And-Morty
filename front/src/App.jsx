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
  const navigate = useNavigate();

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      setAccess(data.access);
      !access ? navigate("/home") : alert("Incorrect credentials");
    } catch (error) {
      console.log(error.message);
    }
  }

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  useEffect(() => {
    // !access && navigate("/home"); // con este no pide login
    !access && navigate("/");  //con este nos pide login
  }, [access]);

  const onSearch = async (id) => {
    try {
      if (!id) return alert("Enter an ID");
      if (characters.find((char) => char.id === parseInt(id)))
        return alert(`A character with ID ${id} already exists.`);
      const { data } = await axios.get(`${URL}${id}`);
      if (data.id) {
        setCharacters([data, ...characters]);
      } else {
        alert(`There are no characters with ID ${id}.`);
      }
    } catch (error) {
      alert(`A character with ID ${id} does not exist.`);
    }
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
