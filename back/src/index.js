const http = require("http");
const data = require("./utils/data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { "Content-Type": "application/json" });
    const url = req.url;
    if (url.includes("/rickandmorty/character")) {
      const id = url.split("/").pop();
      const character = data.find((character) => character.id == id);
      if (!character) {
        return res.end(
          JSON.stringify([{ Mensaje: "No existe un character con ese id" }])
        );
      }
      return res.end(JSON.stringify(character));
    }

    res.end("No hay chorizo");
  })
  .listen(3001);
