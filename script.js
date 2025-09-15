//USING ASYNC
// fetchData();

async function fetchData(){

    try{
        let pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if(!response.ok){
            throw new Error("Could not fetch resource")
        }
              let data =  await response.json();
              let pokemonSprite = data.sprites.front_default;
              let imgElement = document.getElementById("pokemonSprite");

              imgElement.src = pokemonSprite;
              imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}


//OR Using Promises
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//         .then(response => {
//             if(!response.ok){
//                 throw new Error("Could not fetch resource");
//             }
//             return response.json();
//         })
//         .then(data => console.log(data))
//         .catch(error => console.log(error));
