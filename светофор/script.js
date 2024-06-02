let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  renderRead();
});

function renderRead() {
  let count = 5;
  let count2 = 5;
  let count3 = 5;

  green.style.background = "rgb(55, 52, 52)";
  yellow.style.background = "rgb(55, 52, 52)";

  setInterval(() => {
    red.innerHTML = count--;
    if (count < -1) {
      red.style.background = "rgb(55, 52, 52)";
      green.style.background = "rgb(55, 52, 52)";
      red.innerHTML = "";
      yellow.innerHTML = count2--;
      yellow.style.background = "yellow";
    }
    if (count2 < -1) {
      yellow.innerHTML = "";
      yellow.style.background = "rgb(55, 52, 52)";
      green.innerHTML = count3--;
      green.style.background = "green";
    }
    if (count3 < -1) {
      green.innerHTML = "";
      red.style.background = "red";
      green.style.background = "rgb(55, 52, 52)";
    }
  }, 1000);
}
