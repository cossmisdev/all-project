let name = document.querySelector(".name");
let lastName = document.querySelector(".lastName");
let image = document.querySelector(".image");
let block_2 = document.querySelector(".block_2");
let btn_create = document.querySelector(".btn_create");
let inputs = document.querySelectorAll("input");

readName();
btn_create.addEventListener("click", () => {
  if (!name.value || !lastName.value || !image.value) {
    alert("заполните все поля!!");
    return;
  }

  let data = JSON.parse(localStorage.getItem("data")) || [];
  let obj = {
    name: name.value,
    lastName: lastName.value,
    image: image.value,
  };

  data.push(obj);
  localStorage.setItem("data", JSON.stringify(data));

  for (let i of inputs) {
    i.value = "";
  }
  readName();
});

function readName() {
  let newData = JSON.parse(localStorage.getItem("data")) || [];
  block_2.innerHTML = "";

  newData.forEach((el, index) => {
    let card = document.createElement("div");
    let image = document.createElement("img");
    let card_name = document.createElement("div");
    let name = document.createElement("p");
    let last = document.createElement("p");
    let btns = document.createElement("div");
    let btn_edit = document.createElement("button");
    let btn_delete = document.createElement("button");

    block_2.append(card);
    card.append(image);
    card.append(card_name);
    card_name.append(name);
    card_name.append(last);
    card.append(btns);
    btns.append(btn_delete);
    btns.append(btn_edit);

    card.classList.add("card");
    btns.classList.add("btns");

    name.innerText = el.name;
    last.innerText = el.lastName;
    image.src = el.image;
    btn_delete.innerHTML = `<ion-icon name="trash-outline"></ion-icon>`;
    btn_edit.innerHTML = `<ion-icon name="create-outline"></ion-icon>`;

    btn_delete.addEventListener("click", () => {
      deleteproduct(index);
    });

    btn_edit.addEventListener("click", () => {
      editCard(index);
    });
  });
}

function deleteproduct(id) {
  let data = JSON.parse(localStorage.getItem("data")) || [];
  data.splice(id, 1);
  localStorage.setItem("data", JSON.stringify(data));
  readName();
}

function editCard(index) {
  let data = JSON.parse(localStorage.getItem("data")) || [];

  name.value = data[index].name;
  lastName.value = data[index].lastName;
  image.value = data[index].image;
}
