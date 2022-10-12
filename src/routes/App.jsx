import React from "react";
import { Outlet, useLoaderData, Link } from "react-router-dom";

export default function App() {
 const { results } = useLoaderData();

 return (
  <>
   <header>
    {results.map((pokemon) => (
     <Link
      style={{ marginLeft: 20 }}
      key={pokemon.name}
      to={`pokemon/${pokemon.name}`}
     >
      {pokemon.name}
     </Link>
    ))}
   </header>
   <Outlet />
  </>
 );
}
