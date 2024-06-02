// let title = document.querySelector(".title");

// title.style.color = "green";
// title.style.fontSize = "50px";

// let body = document.querySelector("body");

// console.log(body);

// let strong = document.querySelectorAll("strong");

// strong.forEach((el) => {
//   el.style.color = "green";
// });

// Найдите все HTML-теги <em> и добавьте им класс selected.

// let em = document.querySelectorAll("em");

// em.forEach((el) => {
//   el.classList.add("selected");
// });

// Найдите все HTML-теги <mark>, которые находятся в <div> с классом row и
//задайте им класс selected.

// let mark = document.querySelectorAll(".row mark");

// mark.forEach((el) => {
//     el.classList.add("selected");
//   });

// Найдите все гиперссылки и удалите у них подчеркивания.

// let a = document.querySelectorAll("a");

// a.forEach((el) => {
//   el.style.textDecoration = "none";
// });

// Переключите HTML-теги <strong> с классом some в состояние без этого класса,
// а тем элементам (<strong>), у которых небыло этого класса — добавьте.

// let strong = document.querySelectorAll("strong");

// strong.forEach((el) => {
//   el.classList.toggle("some");
// });

// Среди набора элементов с классом row, удалите этот класс у второго элемента.

// let row = document.querySelectorAll(".row");
// row[1].classList.remove("row");

// Задайте третьему элементу с классом row дополнительный класс third.

// let row = document.querySelectorAll(".row");

// row[2].classList.add("third");

// Обратитесь к элементу с классом row-inner и задайте ему розовый цвет текста.

// let rowInner = document.querySelectorAll(".row-inner");

// rowInner.forEach((el) => {
//   el.style.color = "pink";
// });

// Добавтье элемент:
// <input type="text">
// с классом input внутри <div> с классом row-input.

// let rowInput = document.querySelector(".row-input");

// rowInput.innerHTML += '<input type="text">';

// let input = document.querySelector("input");

// Home Work

// Сделайте фон желтым у нового элемента <input>.

// input.style.backgroundColor = "yellow";

// Добавтье placeholder этому элементу <input> с классом input.

// input.placeholder = "islam";

// Обратитесь к элементу с классом row-outer и задайте ему размер шрифта 20px.

// let rowOuter = document.querySelector(".row-outer");

// rowOuter.style.fontSize = "20px";

// Обратитесь к элементу с классом last и добавьте ему текст:
// Last but not least

// let last = document.querySelector(".last");

// last.innerHTML = "Last but not least";

// Сделайте последний текст, который вы добавили, жирным.

// last.style.fontWeight = "bold";

// Найдите все HTML-теги <em> и окрасьте их в оранжевый цвет.

// let em = document.querySelectorAll("em");

// em.forEach((el) => {
//   el.style.color = "orange";
// });

// Поменяйте тегу <div> c классом container background-color на зеленый.

// let container = document.querySelector(".container");

// container.style.backgroundColor = "green";

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

// Задание 1
/* <form action=""> 
<input value="Name" type="text">
<input value="Surname" type="text">
<input value="Email" type="text">
<input value="Number" type="text">
</form> */

// Создайте HTML-форму и при нажатии на кнопку проверяйте заполненность всех полей.
// Если останутся незаполненные поля — выводите предупреждение в span.

// let btn = document.querySelector("button");
// let name = document.querySelector(".name");
// let surname = document.querySelector(".surname");
// let email = document.querySelector(".emile");
// let password = document.querySelector(".password");

// btn.addEventListener("click", (e) => {
//   if (!name.value || !surname.value || !email.value || !password.value) {
//     alert('заполните поле')
//     return
//   }
// });

// Задание 2
/* <div id="square" style="background-color: blue;width: 100px;height: 100px;"></div>
<button id="left">Left</button>
<button id="right">Right</button> */
// Создайте обработчик события, который при нажатии кнопок направлений (влево, вправо)
// анимированно сдвигает div влево или вправо на 100px.

// let square = document.querySelector("#square");
// let left = document.querySelector("#left");
// let right = document.querySelector("#right");
// let counOne = 0;

// right.addEventListener("click", () => {
//   counOne += 100;
//   square.style.marginLeft = `${counOne}px`;
// });
// left.addEventListener("click", () => {
//   counOne -= 100;
//   square.style.marginRight = `${counOne}px`;
// });

// Задание 3
// Навесьте на событие движения мыши обработчик, который будет выводить
// в консоль координаты движения.
// Например:
// мышка на позиции 100, 360
// Вывод:
// "100 360"
// Событие надо «повесить» на document body

// let h4 = document.querySelector('h4')
// let body = document.querySelector("body");
// document.addEventListener("mousemove", function (e) {
//   h4.innerHTML = `Y:${e.offsetY} X:${e.offsetX}`;
// });

// Задание 4

// Создайте две кнопки в HTML - "увеличить" с id 'plus' и "уменьшить" с id 'minus'.
// В JS файле создайте глобальную переменную counter. Навесьте на ваши кнопки
// обработчики событий, которые увеличивают, либо уменьшают ваш counter на одну
// единицу при нажатии на соответствующую кнопку.
// В теге p должно отображаться текущее значение counter.

/* <button id = "plus">+1</button>
<p> 0 </p>
<button id = "minus">-1</button> */

// let plus = document.querySelector("#plus");
// let p = document.querySelector(".p");
// let minus = document.querySelector("#minus");

// let counter = 0;
// plus.addEventListener("click", () => {
//   counter++;
//   p.innerHTML = counter;
// });

// minus.addEventListener("click", () => {
//   counter--;
//   return
//   p.innerHTML = counter;
// });

// Задание 5
// Создайте в HTML параграф с текстом. В JS файле напишите обработчик события,
// который при нажатии на текст, выводит количество букв и пробелов в вашем тексте.
// Например:

/* <p> He found rain fascinating yet unpleasant</p> */
// Вывод:
// "Буквы: 35, пробелы: 5"

// let p = document.querySelector("p");

// p.addEventListener("mousemove", (e) => {
//   let a = p.innerHTML.split("").filter((el) => el === " ");
//   let b = p.innerHTML.split("").filter((el) => el !== " ");
//   console.log(`Буквы :${b.length} пробелы: ${a.length}`);
// });

// p.addEventListener("mousemove", () => {

// });

// Задание 6
// Создайте кнопку и нумерованный список с 6 li элементами в HTML.
// Навесьте на кнопку обработчик события, который при нажатии проходится
// циклом по элементам списка и меняет их цвет на зеленый.

// let btn = document.querySelector("button");

// let li = document.querySelectorAll("li");

// for (let i = 0; i < li.length; i++) {
//   btn.addEventListener("click", () => {
//     li[i].style.color = "green";
//   });
// }

// li.forEach((el) => {
//   btn.addEventListener("click", () => {
//     el.style.color = "green";
//   });
// });

// Good luck!

// Создайте кнопку button. Далее создайте обработчик событий,
//  который при клике выводить модальное окно с приветствием "Hello!"

// let btn1 = document.querySelector(".o");
// let btn2 = document.querySelector(".c");
// let h2 = document.querySelector("h2");

// btn1.addEventListener("click", () => {
//   h2.innerHTML += "Hello!";
// });
// btn2.addEventListener("click", () => {
//   h2.innerHTML = "";
// });

// Создайте событие input, где при каждом нажатии кнопки на клавиатуре будет
//  выводить в консоль текущее содержимое инпута

// let input = document.querySelector("input");
// let btn = document.querySelector("button");
// let ol = document.querySelector("ol");
// btn.addEventListener("click", () => {
//   let obj = {
//     name:input.value
//   }

// });

// Вам даны заголовки h4 с числами. При нажатию на число в нем должен появится квадрат числа, которое он содержит.

// <h4>5</h4>
// <h4>3</h4>
// <h4>10</h4>
// <h4>34</h4>
// <h4>7</h4>
// <h4>1</h4>
// <h4>9</h4>

// let h4 = document.querySelectorAll("h4");
// h4.forEach((el) => {
//   el.addEventListener("click", () => {
//     el.innerText = el.innerHTML ** 2;
//   });
// });

// Напишите код который будет создавать h1 тэг в тэге body и выводить в тэг h1
// информацию о размере окна (ширину и высоту) браузера, каждый раз как вы меняете размер окна.
//  Вы должны отображать информацию в браузере в таком виде 'Ширина: 1920, высота: 1080'

// let title = document.querySelector(".title");

// window.addEventListener("resize", () => {
//   title.innerHTML = `Ширина: ${window.innerWidth}, высота: ${window.innerHeight}`;
// });

let title = document.querySelector(".title");

window.addEventListener("resize", () => {
  title.innerHTML = `Ширина: ${window.innerWidth}, высота: ${window.innerHeight}`;
});
