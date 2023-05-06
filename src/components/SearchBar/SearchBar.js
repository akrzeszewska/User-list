import React, { useState } from "react";

export const SearchBar = (props) => {
  const [searchPhrase, setPhrase] = useState("");

  const handleSearchPhraseChange = (event) => {
    setPhrase(event.target.value);
    props.onSearchPhraseChange(event.target.value);
  };

  return (
    <input
      value={searchPhrase}
      onChange={handleSearchPhraseChange}
      type="text"
      placeholder="Search"
      className="search"
    />
  );
};
