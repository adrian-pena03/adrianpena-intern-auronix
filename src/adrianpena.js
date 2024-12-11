// Adrian Pena (adrian.pena@cimat.mx)

// Declaramos el link de la API
const RickAndMortyAPIURL = "https://rickandmortyapi.com/api/character";


// Definimos la funcion objetivo
async function FiltrarPersonajesVivos() {
    try {
        const response = await fetch(RickAndMortyAPIURL);

        if (!response.ok) {
            console.log("Error en la GET request");
        }
        
        // Extraemos los datos originales
        const data = await response.json();
        console.log(data);

    } catch(error) {
        console.log("Error en la GET request");
    }
}

// Llamamos a la funcion
FiltrarPersonajesVivos();