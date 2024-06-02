let API = "https://jsonplaceholder.typicode.com/users";

let list = document.querySelector(".list");

fetch(API)
  .then((data) => data.json())
  .then((unp) => {
    unp.forEach((el) => {
      console.log(unp);
      list.innerHTML += `
        <div class="card">
        <h2>${el.username}<h2/>
        <img src ="https://storage.yandexcloud.net/yandexpro/storage/images/originals/qZEALznNzzFc0pO7igFzH1qNsrhvp2pOpvNjVzcv.jpg"alt=""/>
        <h3>City: ${el.address.city}<h3/>
        <h4>Phone: ${el.phone}<h4/>
        <h3>${el.address.street}<h3/>
              `;
    });
  });
