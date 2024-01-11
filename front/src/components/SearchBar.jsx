import { useState } from "react";
import diceIcon from "../assets/dices.png";

export default function SearchBar(props) {
  // console.log(props);
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };
  const search = () => {
    props.onSearch(id);
    setId("");
  };
  const getRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    props.onSearch(randomId.toString());
    setId("");
  };
  return (
    <div className="search-bar">
      <input
        type="search"
        onChange={handleChange}
        placeholder="Ingresa un ID"
        value={id}
      />
      <button onClick={search}>Agregar</button>
      <button onClick={getRandomCharacter}>
        <img src={diceIcon} alt="" style={{ width: "15px", height: "15px" }} />
      </button>
    </div>
  );
}
