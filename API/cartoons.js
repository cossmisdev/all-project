let API = "https://api.sampleapis.com/cartoons/cartoons2D";
let list = document.querySelector(".list");

fetch(API)
  .then((data) => data.json())
  .then((unp) => {
    unp.forEach((el) => {
      list.innerHTML += `
        <div class="card">
        <h2>${el.creator}<h2/>
        <img src = ${el.image} alt=""/>
        <h2>${el.title}<h2/>
        <h3>${el.episodes}<h3/>
        <h3>${el.genre}<h3/>
        <h3>Year: ${el.year}<h3/>
              `;
    });
  });
