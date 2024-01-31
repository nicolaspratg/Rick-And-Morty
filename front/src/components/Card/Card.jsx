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
      <div>
        <button
          onClick={handleFavorite}
          className={isFav ? styles.favFilled : styles.favEmpty}
        ></button>
        <button
          onClick={() => onClose(id)}
          className={styles.closeBtn}
        ></button>
      </div>
      <Link to={`/detail/${id}`} className={styles.cardName}>
        <div className={styles.cardContent}>
          <div className={styles.cardText}>
              <h3>{name}</h3>
          </div>
          <img src={image} alt={name} />
        </div>
      </Link>
    </div>
  );
}
