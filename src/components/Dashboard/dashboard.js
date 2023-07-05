import React, { useEffect, useState } from 'react';
import Card from '../Card/card';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((response) => {
        console.log('response', response);
        setPokemonList(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching Pokémon:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-4">Dashboard</h2>
      <div className="row justify-content-center">
        {pokemonList.map((pokemon) => (
          <div className="col-sm-6 col-md-4" key={pokemon.name}>
            <Card title={pokemon.name} content={pokemon.url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

