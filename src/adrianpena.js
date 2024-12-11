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
        
        // Extraemos los data originales de los personajes
        const data = await response.json();

        // Filtramos los personajes vivos, los cuales 
        // poseen el campo [status: 'Alive']
        const alive_characters = data.results
                                     .filter((character) => character.status === 'Alive');

        // Reemplazamos espacios en los nombres por guiones bajos con un map y una REGEX,
        // y devolvemos la informacion con el formato JSON deseado
        const processed_characters = alive_characters.map((character) => ({
            id: character.id,
            name: character.name.replace(/ /g, '_'),
            status: character.status,
            gender: character.gender,
        }))
        console.log("Personajes con nombres modificados", processed_characters);
    } catch(error) {
        console.log("Error en la GET request");
    }
}

// Llamamos a la funcion
FiltrarPersonajesVivos();