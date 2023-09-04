import { useEffect, useState } from 'react';
import Buscador from './Buscador';

function MiApi() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchData() {
      let allCharacters = [];
      let nextPageUrl = 'https://rickandmortyapi.com/api/character';

      while (nextPageUrl) {
        const response = await fetch(nextPageUrl);
        const data = await response.json();
        allCharacters = allCharacters.concat(data.results);
        nextPageUrl = data.info.next;
      }

      setCharacters(allCharacters);
    }

    fetchData();
  }, []);

  const sortedCharacters = characters.sort((a, b) => a.name.localeCompare(b.name));

  const filteredCharacters = characters.filter(character => 
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container'>
      <Buscador onSearch={term => setSearchTerm(term)} />
      <div className='row'>
        {filteredCharacters.map((character) => {
          return (
            <div className='col-md-4' key={character.id}>
              <h3>{character.name}</h3>
              <img className="img-fluid rounded-pill " src={character.image} alt={character.name} />
              <p>{character.origin.name}</p>
              <p>{character.status}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MiApi;


