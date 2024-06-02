let list_dogs = document.querySelector(".list_dogs");
let list_dogs2 = document.querySelector(".list_dogs2");

function getAll() {
  let API = "https://dog.ceo/api/breeds/list/all";
  fetch(API)
    .then((data) => data.json())
    .then((unp) => {
      Object.keys(unp.message).forEach((el) => {
        list_dogs.innerHTML += `
        <button>${el}</button>
        `;
      });
    })
    .then(() => getBtn());
}
getAll();

function getImg(name) {
  let API = `https://dog.ceo/api/breed/${name}/images/random`;
  fetch(API)
    .then((data) => data.json())
    .then((unp) => {
      list_dogs2.innerHTML = `<img src=${unp.message} alt="dog">`;
    });
}
getImg("boxer");

function getBtn() {
  let btns = document.querySelectorAll("button");
  btns.forEach((el) => {
    el.addEventListener("click", () => getImg(el.innerHTML));
  });
}
getBtn();
