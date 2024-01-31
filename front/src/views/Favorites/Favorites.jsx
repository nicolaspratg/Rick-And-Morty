import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import Card from "../../components/Card/Card";
import styles from "./Favorites.module.css";

const Favorites = () => {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.favFilter);
  const handleOrder = (e) => {
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
              <option value="A">Ascending</option>
              <option value="D">Descending</option>
            </select>
            <select onChange={handleFilter}>
              <option value="all">All</option>
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
