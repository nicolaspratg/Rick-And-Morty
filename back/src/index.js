const http = require("http");
const { getCharById } = require("./controllers/getCharById");
http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const url = req.url;
    url.includes("/rickandmorty/character")
      ? getCharById(res, url.split("/").pop())
      : res.end("Invalid route");
  })
  .listen(3001);
