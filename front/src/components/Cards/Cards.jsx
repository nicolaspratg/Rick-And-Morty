import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  
  const { characters, onClose } = props;
  return (
    <div className={styles.bodyCards}>
      <div className={styles.container}>
        {characters.map((char) => (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            location={char.location}
            onClose={onClose}
          />
        ))}
      </div>
    </div>
  );
}
