interface Pokemon {
  name: string;
  imgSrc?: string;
}
function PokemonCard({ name, imgSrc }: Pokemon) {
  return (
    <figure>
      {name ? <img src={imgSrc} alt={name} /> : <p>???</p>}
      <figcaption>{name}</figcaption>
    </figure>
  );
}
export default PokemonCard;
