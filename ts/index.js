"use strict";
// // Дан массив: [1, 10, true, 'hello', 'JS', null, false, 0, {title: 'Samsung', price: 1000}],
// // задача, отфильтровать массив, оставив только строки и числа
// interface IArr {
//   title: string;
//   price: number;
// }
// type array =
//   | number
//   | number
//   | boolean
//   | string
//   | string
//   | null
//   | boolean
//   | number
//   | IArr;
// let arr: Array<array> = [
//   1,
//   10,
//   true,
//   "hello",
//   "JS",
//   null,
//   false,
//   0,
//   { title: "Samsung", price: 1000 },
// ];
// let res = arr.filter((el) => typeof el === "number" || typeof el === "string");
// console.log(res);
//   | IArr
// Islam | Frontend dev., [25.12.2023 18:51]
// Создайте функцию checkTask(arr), которая принимает в аргументы массив с числами.
// Функция должна вычислять сколько элементов с начала массива надо сложить, чтобы в сумме получилось 10.
// Для массива:
// [3, 1, 4, 2, 4, 5, 6]
// Функция должна возвратить:
// 4
// function checkTask(arr: number[]) {
//   let res = arr.reduce((acc: number, el: number): number => {
//     return acc + el;
//   });
//   console.log(res);
// }
// checkTask([3, 1, 4, 2, 4, 5, 6]);
// // Расчет премии сотрудникам, дан массив с объектами
// let employees = [
// { name: 'Jack', salary: 10000, overTime: 4 },
// { name: 'Tom', salary: 15000, overTime: 3 },
// { name: 'Jessica', salary: 20000, overTime: 9 },
// { name: 'Helen', salary: 25000, overTime: 2 },
// { name: 'Peter', salary: 30000, overTime: 7 },
// ];
// // salary- это заработная плата в месяц, overTime- количество часов,
// которое сотрудник взял сверхурочно, задача: создать функцию,
// которая будет добавлять к основной зарплате сверхурочное время(1час=200$),
// функция должна принимать массив с объектами и возвращать также массив,
// но уже с измененными данными пример:
// [{name: 'Jack', salary: 10000, overTime: 4}] -> [{name: 'Jack', salary: 10800}]
// interface IEm {
//   name: string;
//   salary: number;
//   overTime: number;
// }
// let employees: IEm = [
//   { name: "Jack", salary: 10000, overTime: 4 },
//   { name: "Tom", salary: 15000, overTime: 3 },
//   { name: "Jessica", salary: 20000, overTime: 9 },
//   { name: "Helen", salary: 25000, overTime: 2 },
//   { name: "Peter", salary: 30000, overTime: 7 },
// ];
// let res = employees.filter((el: IEm) => {});
// Строки:
// 1. Вам дана переменная str, присвойте ей значение 'Привет, Мир!'.
// Выведите значение этой переменной в консоль.
// let str: string = "Привет мир";
// console.log(str);
// 2. Вам даны переменные str1='Привет, ' и str2='Мир!'.
//С помощью этих переменных и операции сложения строк выведите в консоль фразу 'Привет, Мир!'.
// let str1: string = "Привет, ";
// let str2: string = "Мир!";
// console.log(str1 + str2);
// 3. Вам дана переменная name, присвойте ей ваше имя. Выведите в консоль фразу 'Привет, *Имя*!'.
// let nam:string = "Azima"
// console.log(`Привет ${nam}`);
// 4. Вам дана переменная age , присвойте ей ваш возраст. Выведите в консоль 'Мне *Возраст* лет!'.
// let age: number = 18;
// console.log(`Мне ${age} лет`);
// 5. Вам даны четыре переменные.
// Первая - для хранения количества дней. Присвойте ей значение "365".
// Вторая - для хранения названия нашей планеты "Земля".
// Третья - для хранения примерного количества жителей нашей планеты. Присвойте ей значение "7 млрд.".
// Четвертая - для хранения слова "Солнце".
// Далее, используя текст и переменные, нужно вывести в консоль такой абзац:
// "В нашем году 365 дней. Днём у нас светит Солнце.
// Население планеты Земля составляет примерно 7 млрд. человек."
// let days: number = 365;
// let planet: string = "Земля";
// let users: string = "7 млрд.";
// let sun: string = "солнце";
// console.log(`В нашем году ${days} дней. Днём у нас светит ${sun}.
// Население планеты ${planet} составляет примерно ${users} человек.`);
// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно',
// иначе выведите 'Неверно'.
// let a: number = 10;
// if (a === 10) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }
// 3. Вам дана переменная a=-2. Составьте условие, по которому в
// консоль будет выводиться 'positive' - если число больше 0,
// 'равно' если число равно 0, "negative" если число меньше 0.
// let a: number = -2;
// if (a > 0) {
//   console.log("positive");
// } else {
//   console.log("negative");
// }
// 4. Вам дана переменная number=45. Составьте условие,
// по которому будет выводиться в консоль "Четное число", "Нечетное число".
// let number: number = 45;
// if (number % 2 === 0) {
//   console.log("четное");
// } else {
//   console.log("нечетное");
// }
// 5. Вам даны две переменные a=10, b=2. Составьте условие,
// по которому, остаток деления a на b, будет выводиться консоль
// "Четное число", "Нечетное число".
// const a: number = 10;
// const b: number = 2;
// if (a % b === 0) {
//   console.log("четное число");
// } else {
//   console.log("нечетное число");
// }
// 6. Вам дана переменная s. Составьте условие, по которому в
// консоль будет выводится тип этой переменной - "boolean", "number", "string".
// let s:string = "Azima"
// console.log(typeof s);
// 7. Вам дана переменная а. Если переменная a больше
// одного и меньше 9-ти, то выведите 'Верно', иначе выведите 'Неверно'.
// let a: number = 7;
// if (a > 1 || a < 9) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }
// 8. Вам дана переменная а. Если переменная a равна
// трем или равна семи, то прибавьте к ней 7, иначе поделите
// ее на 10. Выведите новое значение переменной в консоль.
// let a: number = 9;
// if (a == 3) {
//   console.log(a + 7);
// } else if (a == 7) {
//   console.log(a + 7);
// } else {
//   console.log(a / 10);
// }
// 9. Вам даны переменные а , b. Если переменная a равна
// или меньше 0, а переменная b больше или равна 5, то
// выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
// let a: number = 0;
// let b: number = 9;
// if (a >= 0 && b >= 5) {
//   console.log(a + b);
// } else {
//   console.log("разные");
// }
// 10. Вам даны переменные a , b. Если переменная a больше
// 4-х и меньше 10-ти, или переменная b больше или равна
// 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
let a = 7;
let b = 10;
if ((a > 4 && a < 10) || (b >= 7 && b < 17)) {
    console.log("верно");
}
else {
    console.log("неверно");
}
// 1  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// 2 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// 3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// 4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// 5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// 6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// 7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// 8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// 9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// 10  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// 11  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// 12  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// 13  Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
// 14 биринчи элемент кайтарып берет
// var array = [1,2,3,4,5,6,7,8,9];
// function getFirst(array) {
//     ваш код
// };
// 15 акыркы элемент кайтарып берет
// var array = [1,2,3,4,5,6,7,8,9];
