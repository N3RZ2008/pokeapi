const pokeCount = 151;

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

const mainTypes = Object.keys(colors);

async function fetchPoke(id) {
    const url = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    return data;
}

async function createCards(data) {
    for (let i = 1; i <= pokeCount; i++) {
        const card = document.createElement('div');
        card.classList.add("card");
        const data = await fetchPoke(i);

        const name = data.name[0].toUpperCase() + data.name.slice(1);
        const id = data.id.toString().padStart(3, "0");

        const types = data.types.map(type => type.type.name);
        let type = `${mainTypes.find(type => types.indexOf(type) > -1)}`;
        const color = colors[type];

        card.style.backgroundColor = color;

        const pokeInnerHTML = `
            <div class="imgContainer">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="Name">
            </div>

            <div class="info">
                <p class="number">#${id}</p>
                <p class="name">${name}</p>
                <p class="type">Type: ${type}</p>
            </div>
        `

        card.innerHTML = pokeInnerHTML;
        document.querySelector("#pokeContainer").appendChild(card);
    }
}

createCards()