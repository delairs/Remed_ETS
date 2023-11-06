fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response);
    const data = response.results;
    let cards = "";
    data.forEach((m) => {
      cards += `
      
      <div class="col-xl-3 col-md-6 my-4">
      <div class="card border-primary  shadow bg-body rounded" style="max-width: 18rem">
        <div class="card-body text-primary text-center">
          <p class="card-text text-dark">
            ${m.name}
          </p>
          <a href="${m.url}" class="btn btn-primary">Button</a>
        </div>
      </div>

      
      </div>
      `;
    });
    const pokemonContainer = document.querySelector("#card");
    pokemonContainer.innerHTML = cards;
  });
