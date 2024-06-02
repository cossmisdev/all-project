let name = document.querySelector(".name");
let lastName = document.querySelector(".lastName");
let image = document.querySelector(".image");
let create = document.querySelector(".create");
let list = document.querySelector(".list");
let inputs = document.querySelectorAll("input");
let main_edit = document.querySelector(".main-edit");
let x = document.querySelector(".x");

readContact();

create.addEventListener("click", () => {
  inputs.forEach((el) => {
    if (!el.value) {
      alert("заполните поле!!!");
      return;
    }
  });

  let newObj = {
    name: name.value,
    lastName: lastName.value,
    image: image.value,
  };
  let data = JSON.parse(localStorage.getItem("contact")) || [];
  data.push(newObj);
  localStorage.setItem("contact", JSON.stringify(data));
  readContact();
});

function readContact() {
  let newData = JSON.parse(localStorage.getItem("contact")) || [];
  list.innerHTML = "";
  newData.forEach((el, index) => {
    let infoBox = document.createElement("div");
    let img = document.createElement("img");
    let info = document.createElement("div");
    let p_name = document.createElement("p");
    let p_lastName = document.createElement("p");
    let btns = document.createElement("div");
    let btn_delete = document.createElement("button");
    let btn_edit = document.createElement("button");

    //classlist
    infoBox.classList.add("infoBox");
    btns.classList.add("btns");
    //classlist

    img.src = el.image;
    p_name.innerText = el.name;
    p_lastName.innerText = el.lastName;
    btn_delete.innerHTML = `<ion-icon name="trash-outline"></ion-icon>`;
    btn_edit.innerHTML = `<ion-icon name="create-outline"></ion-icon>`;
    info.append(p_name);
    info.append(p_lastName);
    infoBox.append(img);
    infoBox.append(info);
    infoBox.append(btns);
    btns.append(btn_delete);
    btns.append(btn_edit);

    list.append(infoBox);

    btn_delete.addEventListener("click", () => {
      deleteContact(index);
    });

    btn_edit.addEventListener("click", () => {
      main_edit.style.display = "flex";
      editContact(index);
    });
    x.addEventListener("click", () => {
      main_edit.style.display = "none";
    });
  });
}
readContact();

// DELETE CONTACT

function deleteContact(id) {
  let data = JSON.parse(localStorage.getItem("contact")) || [];
  data.splice(id, 1);
  localStorage.setItem("contact", JSON.stringify(data));
  readContact();
}

// EDIT BOOK
let editName = document.querySelector(".editName");
let editLastName = document.querySelector(".editLastName");
let editImage = document.querySelector(".editImage");
let save = document.querySelector(".save");

function editContact(index) {
  let data = JSON.parse(localStorage.getItem("contact")) || [];

  editName.value = data[index].name;
  editLastName.value = data[index].lastName;
  editImage.value = data[index].image;

  editName.setAttribute("id", index);
  editLastName.setAttribute("id", index);
  editImage.setAttribute("id", index);
}

save.addEventListener("click", () => {
  let nameId = editName.id;
  let lastNameId = editLastName.id;
  let imageId = editImage.id;

  let editObj = {
    name: editName.value,
    lastName: editLastName.value,
    image: editImage.value,
  };

  let data = JSON.parse(localStorage.getItem("contact")) || [];
  data.splice(nameId, 1, editObj);
  data.splice(lastNameId, 1, editObj);
  data.splice(imageId, 1, editObj);
  localStorage.setItem("contact", JSON.stringify(data));
  readContact();
});
