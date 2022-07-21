import './App.css';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Home } from './pages/Home';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  const getCharacter = async () => {
    // PROGRAMACIÓN POR RESULTATOS
    // fetch('https://rickandmortyapi.com/api/character')
    // .then(data => data.json())
    // .then(json => console.log(json.results));

    // ===========PROGRAMACIÓN DECLARATIVA=========================
    // const data = await fetch('https://rickandmortyapi.com/api/character');
    // const json = await data.json();

    // console.log(json.results);

    // const objeto = {
    //   name: 'Nicolas',
    //   lastName: "Cortez D'Elia",
    // };

    // const nombre = objeto.name

    // const { name, lastName } = objeto;

    // console.log(name, lastName);

    setIsLoading(true);

    const { data } = await axios('https://rickandmortyapi.com/api/character');
    setCharacters(data.results);

    setIsLoading(false);
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
      <BrowserRouter>
      {
        isLoading && <p>Loading</p>
      }
      {
        characters?.map(character => <p key={character.id}>{character.type}</p>)
      }
      <button onClick={getCharacter} disabled={isLoading} > Click Me!</button>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
