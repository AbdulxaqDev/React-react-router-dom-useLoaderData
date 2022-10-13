# Implementation of useLoaderData, new hook of react-router-dom

## [From reactrouter.com :](https://reactrouter.com/en/main/hooks/use-loader-data)

```
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";

function loader() {
  return fetchFakeAlbums();
}

export function Albums() {
  const albums = useLoaderData();
  // ...
}

const router = createBrowserRouter([
  {
    path: "/",
    loader: loader,
    element: <Albums />,
  },
]);

ReactDOM.createRoot(el).render(
  <RouterProvider router={router} />
);
```

In this project, Pokemon API is used.
To run project locally: 
```
git clone https://github.com/AbdulxaqDev/React-react-router-pom-useLoaderData.git

cd router-loader
npm install
npm run dev
```

I used two loaders: 
1. Pokemon names loader: 
```
// ./loaders/PokemonsLoader.jsx

export default async function PokemonsLoader() {
 try {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
  const data = await response.json()
  return data
 } catch (error) {
  console.error("Error on fetching: ", error)
 }
}
```

2. Loader for individual pokemon data based of passed parametr, parametr passed through path of Pakemon.jsx component and this loader called in Pokemon component, so it get passed parametr from App components. Look to App and Pakemon components below.

```
// ./loaders/PokemonLoader.jsx

export default async function PokemonLoader({params}) {
 try {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
  const data = await response.json()
  return data
 } catch (error) {
  console.error("Error on fetching: ", error)
 }
}
```

> **Note**
> Do not confuse **PokemonsLoader.jsx** and **PokemonLoader.jsx**

Loader are passed in Router to components. So it loades (fetchs) before component render.

```
import { createBrowserRouter } from "react-router-dom";
import App from "./routes/App";
import Error from "./routes/Error";
import Pokemon from "./routes/Pokemon";
import PokemonsLoader from "./loaders/PokemonsLoader";
import PokemonLoader from "./loaders/PokemonLoader";
export default createBrowserRouter([
 {
  path: "/",
  element: <App />,
  errorElement: <Error />,
  loader: PokemonsLoader,
  children: [
   {
    path: "pokemon/:name",
    element: <Pokemon />,
    loader: PokemonLoader,
    errorElement: <Error />,
   },
  ],
 },
]);
```

In App component, useLoaderData() handles passed loader by default and PokemonsLader returns names of pokemons. Then we mapping all names on Link,  <code> to={`pokemon/${pokemon.name}`} </code>:

```
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
      to={`pokemon/${pokemon.name}`} // passing every name as a parametr
     >
      {pokemon.name}
     </Link>
    ))}
   </header>
   <Outlet />
  </>
 );
}
```

In Pokemon component, we get every pokemon name and image source url, then render them:

```
export default function Pokemon() {
 const pokemon = useLoaderData();
 return (
  <div>
   <h2>{pokemon.name}</h2>
   <img src={pokemon.sprites.front_default} alt={pokemon.name} />
  </div>
 );
}
```


You can see the live [preview](https://react-react-router-dom-useloaderdata.netlify.app/).




