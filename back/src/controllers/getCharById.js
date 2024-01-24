const axios = require("axios");

module.exports.getCharById = (res, id) => {
  axios
    .get(`https://rym2.up.railway.app/api/character/${id}?key=pi-nicolaspratg`)
    .then((response) => {
      const { id, name, gender, species, origin, image, status } =
        response.data;
      const character = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(error.message);
    });
};
