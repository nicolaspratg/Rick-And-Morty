import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import styles from "./Card.module.css";

export default function Card({
  name,
  species,
  id,
  status,
  gender,
  origin,
  image,
  onClose,
}) {
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);
  const isFavorite = myFavorites.some((fav) => fav.id === id);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    }
    if (!isFav) {
      setIsFav(true);
      dispatch(addFav({ id, name, status, species, gender, origin, image }));
    }
    setIsFav(!isFav);
  };

  return (
    <div className={styles.card}>
      <button onClick={() => onClose(id)} className={styles.closeBtn}>
        X
      </button>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2>{species}</h2>
      <h2>{status}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
      <img src={image} alt={name} />
      <button onClick={handleFavorite}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}
