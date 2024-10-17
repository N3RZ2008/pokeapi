const pokeContainer = document.querySelector("#pokeContainer");

const pokeCount = 151;

async function fetchPoke(id) {
    const url = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    return data;
}

async function getCard() {
    for (let i = 1; i <= pokeCount; i++) {
        const data = await fetchPoke(i);
        console.log(`Name: ${data.name}, Number: ${i}, Type: ${data.types[0].type.name}`);
    }
}
