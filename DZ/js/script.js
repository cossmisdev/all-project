// События Native JS. Классная работа
// ! Все HTML элементы которыми нужно манипулировать пропишите отдельно в файле index.html

//? элемент.addEventListener("события", функция)
//? mouseover / mouseout – когда мышь наводится на / покидает элемент.
//? mousemove – при движении мыши.
//? события change работает с input
//? события input влтяет на каждое изменение
//? focus – пользователь фокусируется на элементе, например нажимает на <input>.
//? mousedown когда нажал на кнопку
//? mouseup когда отрустил кнопку
//? dblclick
//? contextmenu

// Задание №1
// По нажатию клавиш меняйте цвет заднего фона
// div - элемента:
// R - red;
// G - green;
// B - blue;
// w - white;
// SHIFT + B - black;
// SHIFT + G - gray;

// let box = document.querySelector(".box");
// let body = document.querySelector("body");
// body.addEventListener("keydown", function (event) {
//   switch (event.key) {
//     case "r":
//       box.style.backgroundColor = "red";
//       break;
//     case "g":
//       box.style.backgroundColor = "green";
//       break;
//     case "b":
//       box.style.backgroundColor = "blue";
//       break;
//     case "w":
//       box.style.backgroundColor = "white";
//       break;
//     case "B":
//       box.style.backgroundColor = "black";
//       break;
//     case "G":
//       box.style.backgroundColor = "gray";
//       break;
//   }
// });

// Задание №2
// Создайте переменную let i = 0, по нажатию
// на кнопку выводите в консоль переменную i
// и увеличивайте её в 2 раза;

// let i = 0;

// let btn = document.querySelector(".btn");

// btn.addEventListener("click", function(){
//   i *=2
//   console.log(i);
// });

// Задание №3
// Создайте div размером 500px * 500px,
// по нажатию на неё выводите в консоль
// позицию места куда вы нажали
// относительно div- а;




// Задание №4
// Создайте input type color.
// При изменении инпута меняйте цвет
// заднего фона body на значение
// из этого инпута

// let body = document.querySelector("body");

// let color = document.getElementById("color");

// color.addEventListener("input", function (e) {
//   body.style.backgroundColor = e.target.value;
// });
