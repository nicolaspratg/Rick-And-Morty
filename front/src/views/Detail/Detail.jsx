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
      .get(`https://rickandmortyapi.com/api/character/${id}`)
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
        <h2>{character.name}</h2>
        <div>
          <img src={character.image} alt="" className={styles.detailImg} />
        </div>
        <div>
          <p>
            <strong>Species: </strong>
            {character.species}
          </p>
          <p>
            <strong>Gender: </strong>
            {character.gender}
          </p>
          <p>
            <strong>Origin: </strong>
            {character.origin && character.origin.name}
          </p>
          <p>
            <strong>Status: </strong>
            {character.status}
          </p>
          <p>
            <strong>Location: </strong>
            {character.location && character.location.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
