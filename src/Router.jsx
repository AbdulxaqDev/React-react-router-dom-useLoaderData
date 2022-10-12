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
