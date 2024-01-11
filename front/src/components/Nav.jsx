import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

export default function Nav({ onSearch }) {
  return (
    <div className="nav">
      <SearchBar onSearch={onSearch} />
      <NavLink to="/about">About</NavLink>
      <NavLink to="/home">Home</NavLink>
    </div>
  );
}
