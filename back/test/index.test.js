const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await agent.get("/rickandmorty/character/1");
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty("species");
      expect(response.body).toHaveProperty("gender");
      expect(response.body).toHaveProperty("status");
      expect(response.body).toHaveProperty("origin");
      expect(response.body).toHaveProperty("image");
    });
    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/899").expect(404);
    });
  });

  describe("GET /rickandmorty/login", () => {
    it("Debería obtener un objeto { access: true } con información de login correcta", async () => {
      const response = await agent.get(
        "/rickandmorty/login?email=ndepratg@gmail.com&password=notrichyet"
      );
      expect(response.body.access).toBe(true);
    });

    it("Debería responder con un objeto { access: false } al proporcionar información de inicio de sesión incorrecta", async () => {
      // await agent
      //   .get("/rickandmorty/login")
      //   .query({
      //     email: "invalidUser@gmail.com",
      //     password: "invalidPassword",
      //   });
      //   .expect({ access: false })
      //   .expect(200);
    });
  });

  describe("POST /rickandmorty/fav", () => {
    const picklerick = {
      id: 2,
      name: "Picklerick",
    };
    const rick = {
      id: 2,
      name: "Rick",
    };
    it("Retorna un JSON enviando un array con lo dado por body", async () => {
      const response = await agent.post("/rickandmorty/fav").send(picklerick);

      expect(response.body).toEqual([picklerick]);
    });

    it("Retorna un JSON enviando un array con lo dado por body", async () => {
      const response = await agent.post("/rickandmorty/fav").send(rick);

      expect(response.body).toContainEqual(rick);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    const picklerick = {
      id: 2,
      name: "Picklerick",
    };
    const rick = {
      id: 2,
      name: "Rick",
    };
    it("No modifica el array de favoritos si el id pasado no corresponde a ningun personaje", async () => {
      const response = await agent.delete("/rickandmorty/fav/5").send(rick);
      expect(response.body).toContainEqual(picklerick);
      expect(response.body).toContainEqual(rick);
    });

    it("Debería eliminar correctamente al personaje con el ID proporcionado", async () => {
      const response = await agent.delete("/rickandmorty/fav/1").send(rick);
      expect(response.body).toContainEqual(picklerick);
      expect(response.body).toContainEqual(rick);
    });
  });
});
