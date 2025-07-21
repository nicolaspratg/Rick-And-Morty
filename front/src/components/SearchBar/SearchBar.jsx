import { useState } from "react";
import diceIcon from "../../assets/whiteDice.png";
import styles from "./SearchBar.module.css";
import { NavLink, useLocation } from "react-router-dom";

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
        <NavLink to="/about">
          <button className={styles.searchBarBtn}>About</button>
        </NavLink>
        <NavLink to="/home">
          <button className={styles.searchBarBtn}>Home</button>
        </NavLink>
        <NavLink to="/favorites">
          <button className={styles.searchBarBtn}>Favorites</button>
        </NavLink>
      </div>
      <div className={styles.inputContainer}>
        <input
          type="search"
          onChange={handleChange}
          placeholder="Enter an ID"
          value={id}
          onKeyDown={(e) => {
            if (e.key === "Enter") search();
          }}
        />
      </div>
      <div>
        <button onClick={search} className={styles.searchBarBtn}>
          Add
        </button>
        <button onClick={getRandomCharacter} className={styles.searchBarBtn}>
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
