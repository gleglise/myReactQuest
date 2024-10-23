import "./App.css";
import { useState } from "react";
// import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";
function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClick = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  const handleClick2 = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <div>
      <PokemonCard
        name={pokemonList[pokemonIndex].name}
        imgSrc={pokemonList[pokemonIndex].imgSrc}
      />
      {pokemonIndex > 0 ? (
        <button type="button" onClick={handleClick2}>
          Précédent
        </button>
      ) : null}

      {pokemonIndex < pokemonList.length - 1 ? (
        <button type="button" onClick={handleClick}>
          Suivant
        </button>
      ) : null}
    </div>
  );
}
export default App;
