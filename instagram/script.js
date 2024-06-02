let inst_btn = document.querySelector(".insta-icon-more button");
let list = document.querySelector(".list");
let body = document.querySelector("body");
let new_ava_inp = document.querySelector(".new_ava_inp");
let modal_new_ava = document.querySelector(".modal_new_ava");
let btn_ava_save = document.querySelector(".btn_ava_save");
let profile_img = document.querySelector(".profile_img");
let nav_img = document.querySelector(".nav_img");

inst_btn.addEventListener("click", () => {
  list.style.display = "block";
});
body.addEventListener("mousedown", () => {
  list.style.display = "none";
  // modal_new_ava.style.display = 'none'
});

readAva();
profile_img.addEventListener("click", () => {
  modal_new_ava.style.display = "flex";
});

btn_ava_save.addEventListener("click", () => {
  let data = JSON.parse(localStorage.getItem("foto")) || [];
  let obj = {
    ava: new_ava_inp.value,
  };
  data.push(obj);
  localStorage.setItem("foto", JSON.stringify(data));
  readAva()
});

function readAva() {
  let newData = JSON.parse(localStorage.getItem("foto")) || [];
  newData.forEach((el) => {
    profile_img.src = el.ava;
    nav_img.src= el.ava
  });
}
