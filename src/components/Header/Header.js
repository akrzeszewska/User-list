import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";

export const Header = (props) => {
  return (
    <div className="header__container">
      <h1 className="header__heading">Live User Filter</h1>
      <p className="header__sub-heading">Search by name or location</p>
      <SearchBar onSearchPhraseChange={props.onSearchPhraseChange} />
    </div>
  );
};
