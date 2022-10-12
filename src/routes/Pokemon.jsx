import { useLoaderData } from "react-router-dom";

export default function Pokemon() {
 const pokemon = useLoaderData();
 return (
  <div>
   <h2>{pokemon.name}</h2>
   <img src={pokemon.sprites.front_default} alt={pokemon.name} />
  </div>
 );
}
