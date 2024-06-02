let btn = document.querySelectorAll("#b1");
let lift = document.querySelector("#lift");

let newTop = [
  { 16: "40px" },
  { 15: "90px" },
  { 14: "140px" },
  { 13: "190px" },
  { 12: "240px" },
  { 11: "290px" },
  { 10: "340px" },
  { 9: "390px" },
  { 8: "440px" },
  { 7: "490px" },
  { 6: "540px" },
  { 5: "590px" },
  { 4: "640px" },
  { 3: "690px" },
  { 2: "740px" },
  { 1: "790px" },
];

btn.forEach((el) => {
  el.addEventListener("click", () => {
    for (let i in newTop) {
      lift.style.top = newTop[i][el.innerHTML];
    }
  });
});
