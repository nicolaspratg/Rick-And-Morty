import Card from "./Card";

export default function Cards(props) {
  // console.log(props);
  const { characters, onClose } = props;
  return (
    <div className="cards-container">
      {characters.map((char) => (
        <Card
          key={char.id}
          name={char.name}
          status={char.status}
          species={char.species}
          gender={char.gender}
          origin={char.origin.name}
          image={char.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
