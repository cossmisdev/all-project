let menu = document.querySelector(".menu");

readProduct();
console.log(menu);

function readProduct() {
  let newData = JSON.parse(localStorage.getItem("food")) || [];
  menu.innerHTML += "";
  newData.forEach((el) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let img = document.createElement("img");
    img.classList.add("menu_img");
    let menu_text = document.createElement("div");
    menu_text.classList.add("menu_text");
    let text_name = document.createElement("p");
    text_name.classList.add("text_name");
    let text_price = document.createElement("p");
    text_price.classList.add("text_price");
    let actin_btn = document.createElement("div");
    actin_btn.classList.add("actin_btn");
    let btn_delete = document.createElement("button");
    btn_delete.classList.add("btn_delete");
    let btn_edit = document.createElement("button");
    btn_edit.classList.add("btn_edit");
    let btn_buy = document.createElement("button");
    btn_buy.classList.add("btn_buy");

    img.src = el.image;
    text_name.innerHTML = el.name;
    text_price.innerHTML = `${el.price} $`;

    btn_delete.innerHTML = `<ion-icon name="trash"></ion-icon>`;
    btn_edit.innerHTML = `<ion-icon name="create"></ion-icon>`;
    btn_buy.innerHTML = `<ion-icon name="happy-outline"></ion-icon>`;

    menu.append(card);
    card.append(img);
    menu_text.append(text_name);
    menu_text.append(text_price);
    actin_btn.append(btn_buy);
    actin_btn.append(btn_edit);
    actin_btn.append(btn_delete);
    card.append(menu_text);
    card.append(actin_btn);
  });
}
