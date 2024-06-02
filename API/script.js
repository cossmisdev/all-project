let list = document.querySelector(".list");
let search = document.querySelector(".search");
let icon_search = document.querySelector(".icon_search");

let allData = null;

function getAPI(API_NAME) {
  let API = `https://restcountries.com/v3.1/${API_NAME}`;
  fetch(API)
    .then((data) => data.json())
    .then((unp) => {
      renderFlags(unp);
      allData = unp;
    });
}

getAPI("all");

function renderFlags(data) {
  list.innerHTML += "";
  data.forEach((el) => {
    list.innerHTML += `
  <div class="card">
  <h2>${el.name.common}<h2/>
  <img src = ${el.flags.png} alt="${el.flags.alt}"/>
  <h2>region: ${el.region}<h2/>
  <h3>capital: ${el.capital}<h3/>
  <h3>population: ${el.population}<h3/>
  <h3>area: ${el.area}<h3/>
        `;
  });
}

search.addEventListener("input", () => {
  icon_search.style.display = "none";
  getAPI(`/name/${search.value}`);
});
