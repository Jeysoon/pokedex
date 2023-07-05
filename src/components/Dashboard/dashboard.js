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
        const pokemons = response.data.results;
        // Fetch the image URL for each Pokemon
        const requests = pokemons.map((pokemon) =>
          axios.get(pokemon.url).then((res) => res.data.sprites.front_default)
        );

        // Wait for all requests to complete
        Promise.all(requests)
          .then((imageUrls) => {
            // Combine Pokemon data with image URLs
            const pokemonData = pokemons.map((pokemon, index) => ({
              name: pokemon.name,
              url: pokemon.url,
              imageUrl: imageUrls[index],
            }));
            setPokemonList(pokemonData);
          })
          .catch((error) => {
            console.error('Error fetching Pokémon images:', error);
          });
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
            <Card
              title={pokemon.name}
              content={pokemon.url}
              imageUrl={pokemon.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
