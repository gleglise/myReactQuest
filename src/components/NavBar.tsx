interface Pokemon {
  name: string;
  imgSrc?: string;
}
interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}
function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
  //   const handleClick = () => {
  //     setPokemonIndex(pokemonIndex + 1);
  //   };
  //   const handleClick2 = () => {
  //     setPokemonIndex(pokemonIndex - 1);
  //   };
  const Pikapika = pokemonList[pokemonIndex].name;
  if (Pikapika === "pikachu") {
    alert("pika pikachu !!!");
  }

  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <button
          type="button"
          key={pokemon.name}
          onClick={() => setPokemonIndex(index)}
        >
          {pokemon.name}
        </button>
      ))}
    </>
  );
}

export default NavBar;
