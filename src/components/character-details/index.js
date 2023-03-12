import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { fetchService } from "../../services/services";
import Spinner from "../spinner/spinner";
import "./characterDetails.scss";

//I decided not to move out to separate component
function CharacterField({ label, value }) {
  return (
    <div className="CharacterField">
      <span className="CharacterField__label">{label}</span>
      <span className="CharacterField__value">{value}</span>
      <hr className="CharacterField__underline" />
    </div>
  );
}

function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchService
      .getCharacterById(id)
      .then((data) => setCharacter(data))
      .catch((error) => {
        console.log(error);
        navigate("/404");
      });
  }, [id, navigate]);

  if (!character) {
    return <Spinner />;
  }

  return (
    <div className="CharacterDetails">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} className="CharacterDetails__backIcon" /> GO BACK
      </button>
      <div className="CharacterDetails__info">
        <img src={character.image} alt={character.name} className="CharacterDetails__image" />
        <h2 className="CharacterDetails__name">{character.name}</h2>
        <h6 className="CharacterDetails__informations">Informations</h6>
        <CharacterField label="Gender" value={character.gender || "unknown"} />
        <CharacterField label="Status" value={character.status || "unknown"} />
        <CharacterField label="Species" value={character.species || "unknown"} />
        <CharacterField label="Origin" value={character.origin.name || "unknown"} />
        <CharacterField label="Type" value={character.type || "unknown"} />
      </div>
    </div>
  );
}

export default CharacterDetails;
