import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import Card from "../../components/Card/Card";
import styles from "./Favorites.module.css";

const Favorites = (e) => {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const handleOrder = () => {
    dispatch(orderCards(e.target.value));
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };
  return (
    <div className={styles.bgFavs}>
      <div>
        <div className={styles.filterSection}>
          <h2>My Favorites</h2>
          <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
          <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div className={styles.cardContainer}>
          {myFavorites.map(({ id, name, species, gender, image, origin }) => {
            return (
              <Card
                key={id}
                id={id}
                name={name}
                species={species}
                gender={gender}
                origin={origin}
                image={image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
