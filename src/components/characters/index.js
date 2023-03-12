import React, { useState, useEffect } from "react";
import logo from "./RnM_logo.png";
import "./characters.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CharacterCard from "./characterCard";
import GoogleLogin from "../googleOAuth/google_login";
import Spinner from "../spinner/spinner";

function Characters({ characters }) {
  const [numToShow, setNumToShow] = useState(36);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    const storedSearchTerm = localStorage.getItem("searchTerm");
    if (storedSearchTerm) {
      setSearchTerm(storedSearchTerm);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("searchTerm", searchTerm);
    const filteredCharacters = characters.filter((character) => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredCharacters(filteredCharacters);
    setNumToShow(36);
  }, [searchTerm, characters]);

  const handleLoadMore = () => {
    setNumToShow(numToShow + 36);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  if (characters.length === 0) {
    return <Spinner />;
  }
  return (
    <div className="wrapper">
      <div id="login" className="login"> LOGIN</div>

      <GoogleLogin /> 
      <img src={logo} alt="Logo" className="wrapper__logo" />
      <div className="characters">
        <div className="characters__search">
          <input type="text" placeholder="Filter by name..." value={searchTerm} onChange={handleSearch} className="characters__search-input" />
          <FontAwesomeIcon icon={faSearch} className="characters__search-icon" />
        </div>
        <div className="characters__list">
          {filteredCharacters.slice(0, numToShow).map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
        {numToShow < filteredCharacters.length && (
          <button onClick={handleLoadMore} className="characters__load-more">
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default Characters;
