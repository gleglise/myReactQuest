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
  const handleClick = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  const handleClick2 = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <>
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
    </>
  );
}

export default NavBar;
