
export default async function PokemonsLoader() {
 try {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
  const data = await response.json()
  return data
 } catch (error) {
  console.error("Error on fetching: ", error)
 }
}
