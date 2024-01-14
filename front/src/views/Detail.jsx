import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
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
    <div>
      <h1>Character Details</h1>
      <div>
        <div>
          <img src={character.image} alt="" className="dice-icon"/>
        </div>
        <p>
          <strong>Name: </strong>
          {character.name}
        </p>
      </div>
      <div>
        <p>
          <strong>Gender: </strong>
          {character.gender}
        </p>
      </div>
      <div>
        <p>
          <strong>Species: </strong>
          {character.species}
        </p>
      </div>
    </div>
  );
};

export default Detail;
