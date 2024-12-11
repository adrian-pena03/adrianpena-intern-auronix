// Adrian Pena (adrian.pena@cimat.mx)


// Declaramos el link de la API
// Esta URL se asocia a los personajes de RickAndMorty
const RickAndMortyAPIURL = "https://rickandmortyapi.com/api/character";


// Definimos la funcion objetivo
async function FiltrarPersonajesVivos() {
    try {
        const response = await fetch(RickAndMortyAPIURL);

        if (!response.ok) {
            console.log("Error en la GET request");
        }
        
        // Extraemos los datos originales de los personajes
        const data = await response.json();
        console.log(data);

        // Filtramos los personajes vivos, los cuales 
        // poseen el campo [status: 'Alive']
        const alive_characters = data.results.filter((character) => character.status === 'Alive');
        console.log("Personajes vivos: ", alive_characters);


    } catch(error) {
        console.log("Error en la GET request");
    }
}

// Llamamos a la funcion
FiltrarPersonajesVivos();