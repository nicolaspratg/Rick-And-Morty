import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Detail.module.css";
const Detail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
    return setCharacter({});
  }, [id]);
  return (
    <div className={styles.bgDetail}>
      <div className={styles.detail}>
        <h2 className={styles.subtitle}>{character.name}</h2>
        <div>
          <img src={character.image} alt="" className={styles.detailImg} />
        </div>
        <div className={styles.detailText}>
          <p>
            <strong className={styles.subtitle}>Species: </strong>
            {character.species}
          </p>
          <p>
            <strong className={styles.subtitle}>Gender: </strong>
            {character.gender}
          </p>
          <p>
            <strong className={styles.subtitle}>Origin: </strong>
            {character.origin && character.origin.name}
          </p>
          <p>
            <strong className={styles.subtitle}>Status: </strong>
            {character.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
