let image = document.querySelector(".image");
let name = document.querySelector(".name");
let price = document.querySelector(".price");
let btn_create = document.querySelector(".btn_create");

btn_create.addEventListener("click", () => {
  
  let newProduct = {
    name: name.value,
    price: price.value,
    image: image.value,
  };

  let data = JSON.parse(localStorage.getItem("food")) || [];
  data.push(newProduct);
  localStorage.setItem("food", JSON.stringify(data));
});
