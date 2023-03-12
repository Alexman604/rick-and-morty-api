import React from "react";
import { Link } from "react-router-dom";
import "./characterCard.scss";

function CharacterCard({ character }) {
  return (
    <Link to={`/character/${character.id}`} className="character-card">
      <img src={character.image} alt={character.name} className="character-card__image" />
      <h3 className="character-card__name">{character.name}</h3>
      <p className="character-card__species">{character.species}</p>
    </Link>
  );
}

export default CharacterCard;
