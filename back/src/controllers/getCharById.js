const axios = require("axios");
const BASE_URL = "https://rym2.up.railway.app/api/character/";
const API_KEY = "pi-nicolaspratg";

module.exports.getCharById = async (req, res) => {
  try {
    const charId = req.params.id;
    const URL = `${BASE_URL}${charId}?key=${API_KEY}`;
    const { data } = await axios.get(URL);
    const { id, name, gender, species, origin, image, status } = data;
    const character = {
      id,
      status,
      name,
      species,
      origin,
      image,
      gender,
    };

    res
      .status(character.id ? 200 : 404) // obtiene char.id? status 200 sino 404
      .json(character.id ? character : { error: "Not Found" }); // si esta el char.id devuelve json char, sino json error
  } catch (error) {
    res
      .status(error.response ? error.response.status : 500)
      .json({ error: error.message });
  }
};
