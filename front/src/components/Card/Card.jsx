import React, { useState, useEffect } from "react";
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
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    }
    if (!isFav) {
      setIsFav(true);
      dispatch(addFav({ id, name, status, species, gender, origin, image }));
    }
  };
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  return (
    <div className={styles.card}>
      <button
        onClick={handleFavorite}
        className={isFav ? styles.favFilled : styles.favEmpty}
      >
        {/* {isFav ? "Remove from Favorites" : "Add to Favorites"} */}
      </button>
      <button onClick={() => onClose(id)} className={styles.closeBtn}></button>
      <div className={styles.cardContent}>
        <Link to={`/detail/${id}`} className={styles.cardName}>
          <h2 className={styles.cardText}>{name}</h2>
        </Link>
        {/* <h2>{species}</h2>
      <h2>{status}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2> */}
        <img src={image} alt={name}  />
      </div>
    </div>
  );
}
