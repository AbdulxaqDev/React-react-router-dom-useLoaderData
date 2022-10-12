export default async function PokemonLoader({params}) {
 try {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
  const data = await response.json()
  return data
 } catch (error) {
  console.error("Error on fetching: ", error)
 }
}