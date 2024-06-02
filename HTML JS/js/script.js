// let li = document.querySelectorAll("li");

// for (let i = 5; i < 10; i++) {
//   li[i].innerText = "JavaScript-11";

//   if (i % 2 !== 0) {
//     li[i].style.fontWeight = "bold";
//     li[i].classList.remove("item");
//   } else {
//     li[i].style.color = "red";
//     li[i].classList.add("red");
//   }
// }

let body = document.querySelector("body");
let container = document.createElement("div");
let boxHtml = document.createElement("div");
let imgHtml = document.createElement("img");
let h4 = document.createElement("h4");
let imgCss = document.createElement("img");
let boxCss = document.createElement("div");
let h4Css = document.createElement("h4");

let boxJs = document.createElement("div");
let imgJs = document.createElement("img");
let h4Js = document.createElement("h4");

//? class
container.classList.add("container");
boxHtml.classList.add("box");
boxCss.classList.add("box");
boxJs.classList.add("box");
//? class

//? style
imgHtml.style.width = "500px";
imgCss.style.width = "500px";
imgJs.style.width = "500px";

h4.style.fontSize = "50px";
h4Css.style.fontSize = "50px";
h4Js.style.fontSize = "50px";

//===
container.style.display = "flex";
container.style.justifyContent = "space-around";
container.style.height = "100vh";
container.style.alignItems = "center";

//===
boxHtml.style.textAlign = "center";
boxCss.style.textAlign = "center";
boxJs.style.textAlign = "center";
//? style

//? link
imgHtml.src = "https://itproger.com/img/courses/1476977240.jpg";
imgCss.src = "https://itproger.com/img/courses/1476977488.jpg";
imgJs.src = "https://itproger.com/img/courses/1476977754.jpg";
//? link

//? text
h4.innerText = "HTML";
h4Css.innerText = "CSS";
h4Js.innerText = "JS";
//? text

//! append
body.append(container);
boxHtml.append(imgHtml);
boxHtml.append(h4);
container.append(boxHtml);
//===
boxCss.append(imgCss);
boxCss.append(h4Css);
container.append(boxCss);
//===
boxJs.append(imgJs);
boxJs.append(h4Js);
container.append(boxJs);
//! append
