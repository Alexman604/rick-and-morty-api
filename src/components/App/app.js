import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Characters from "../characters";
import CharacterDetails from "../character-details";
import NoPageFound from "../no-page-found";
import Footer from "../footer/footer";
import PrivacyPolicy from "../policies/policies";
import TermsOfService from "../terms-of-cervice/termsOfService";
import { fetchService } from "../../services/services";

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  const fetchCharacters = async () => {
    try {
      const charactersData = await fetchService.getAllCharacters();
      setCharacters(charactersData.sort((a, b) => a.name.localeCompare(b.name)));
    } catch (error) {
      console.error("Error fetching characters:", error);
      navigate("/404");
    }
  };

  useEffect(() => {
    if (characters.length === 0) {
      fetchCharacters();
    }
  }, [characters]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Characters characters={characters} />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
