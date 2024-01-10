import { useState } from "react";

export default function SearchBar(props) {
  // console.log(props);
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };
  const search = () => {
    props.onSearch(id);
    setId("");
  };
  return (
    <div className="search-bar">
      <input
        type="search"
        onChange={handleChange}
        placeholder="Ingresa un ID"
        value={id}
      />
      <button onClick={search}>Agregar</button>
    </div>
  );
}
