# Rick and Morty Character Explorer

This project is a web application that allows users to search for characters from the Rick and Morty universe using their ID, access detailed information about them, mark characters as favorites, and filter through the list of characters. The application is built with Node.js, Express, React, JavaScript, and pure CSS.

## Features

- **Search by ID**: Find characters by their unique ID.
- **Character Details**: View detailed information about each character.
- **Mark Favorites**: Add characters to a list of favorites.
- **Filter Characters**: Filter characters based on various criteria.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express**: Web framework for Node.js.
- **React**: Frontend library for building user interfaces.
- **JavaScript**: Programming language used for both client and server-side code.
- **Pure CSS**: Styling the application without additional frameworks.


## Usage

1. **Start the backend server**:
    ```sh
    cd backend
    npm start
    ```

    The backend server will start on `http://localhost:3001`.

2. **Start the frontend server**:
    ```sh
    cd ../frontend
    npm run dev
    ```

    The frontend server will start on `http://localhost:5173`.

3. **Open your browser** and navigate to `http://localhost:3000` to use the application.

## API Endpoints

### Characters

- **GET /character/:id**: Get character details by ID.

### Favorites

- **POST /fav**: Add a character to the favorites list.
- **DELETE /fav/:id**: Remove a character from the favorites list.

## Screenshots

![Search by ID](./front/src/assets/RnM%20Home.png)
*Visualize characters as you search for them by their ID.*

![Character Details](./front/src/assets/RnM%20Detail.png)
*View detailed information about each character.*

![Favorites](./front/src/assets/RnM%20Favorites.png)
*Mark characters as favorites and view your favorite list.*


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Rick and Morty API](https://rickandmortyapi.com/) for providing the character data.
- [React](https://reactjs.org/) for the frontend framework.
- [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/) for the backend setup.

---

Developed by [Your Name](https://github.com/nicolaspratg)
