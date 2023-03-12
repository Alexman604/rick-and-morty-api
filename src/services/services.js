import axios from "axios";

class RmServices {
  getAllCharacters = async () => {
    const url = "https://rickandmortyapi.com/api/character";
    try {
      let allData = [];
      let nextPageUrl = url;
      while (nextPageUrl) {
        const response = await axios.get(nextPageUrl);
        const { results, info } = response.data;
        allData.push(...results);
        nextPageUrl = info.next;
      }
      return allData;
    } catch (error) {
      throw error;
    }
  };


  getCharacterById = async (id) => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
}

export const fetchService = new RmServices();