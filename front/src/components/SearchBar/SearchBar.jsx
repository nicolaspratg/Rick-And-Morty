import { useState } from "react";
import diceIcon from "../../assets/whiteDice.png";
import styles from "./SearchBar.module.css";
import { NavLink } from "react-router-dom";

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
    <div className={styles.searchBar}>
      <div>
        <NavLink className={styles.button} to="/about">
          About
        </NavLink>
        <NavLink className={styles.button} to="/home">
          Home
        </NavLink>
      </div>
      <div className={styles.inputContainer}>
        <input
          type="search"
          onChange={handleChange}
          placeholder="Ingresa un ID"
          value={id}
        />
      </div>
      <div>
        <button onClick={search} className={styles.button}>
          Agregar
        </button>
        <button onClick={getRandomCharacter} className={styles.button}>
          <img
            src={diceIcon}
            alt=""
            style={{ width: "15px", height: "15px" }}
          />
        </button>
      </div>
    </div>
  );
}
