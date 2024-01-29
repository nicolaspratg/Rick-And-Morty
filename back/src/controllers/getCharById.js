const axios = require("axios");
const BASE_URL = "https://rym2.up.railway.app/api/character/";
const API_KEY = "pi-nicolaspratg";

module.exports.getCharById = (req, res) => {
  const { id } = req.params;
  const URL = `${BASE_URL}${id}?key=${API_KEY}`;

  axios
    .get(URL)
    .then(({ data }) => {
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
        .status(character.id ? 200 : 404)
        .json(character.id ? character : { error: "Not Found" });
    })
    .catch((error) => {
      const errorMessage = error.response
        ? `Server responded with a non-2xx status code: ${error.response.status}`
        : error.request
        ? "No response received from the server"
        : `Error setting up the request: ${error.message}`;

      res
        .status(error.response ? error.response.status : 500)
        .json({ error: errorMessage });
    });
};
