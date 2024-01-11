import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";

export default function Nav({ onSearch }) {

  return (
    <div className={style.nav}>
      <SearchBar onSearch={onSearch} />
      <NavLink to="/about">About</NavLink>
      <NavLink to="/home">Home</NavLink>
    </div>
  );
}
