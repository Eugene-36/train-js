//todo:  Первая задача

// function convert(...array) {
//   const r = array.map((el) => {
//     console.log(typeof el);
//     return typeof el === "string" ? Number(el) : String(el);
//   });

//   console.log(r);
// }

// console.log(convert("1", 2, 3, "4")); // ответ [1, '2', '3', 4]

//console.log(typeof alert);

//todo: Вторая задача
//. Write function, which iterates over array and executes function on each element.

// function executeforEach(el) {
//   const m = el.map((el) => el * 2);
//   return Number(m.join(""));
// }
// console.log(executeforEach([1, 2, 3])); // 246

//todo: Третья задача

// 3. Write function, which returns transformed array based on function,
// which passed as a second parameter(callback).
// If array contains a number as string, it should convert it and return as number.
// You’re allowed to change a body of that callback function if you need.Reuse function from task

// function mapArray(array) {
//   // return el + 3;
//   const solve = array.map((el) => {
//     return typeof el === "string" ? Number(el) + 3 : Number(el) + 3;
//   });
//   console.log(solve);
// }

// console.log(mapArray([2, "5", 8])); // returns [5, 8, 11]

//todo: Четвёртая задача

//4. Write function, which returnsfilteredarray based on function, which passed as a parameter. Reuse function from task 2.

// function filterArray(el) {
//   // return el % 2 === 0;
//   return el.filter((el) => el % 2 === 0);
// }

// console.log(filterArray([2, 5, 8])); // returns [2, 8]

//todo: Пятая задача

// 5. Write a function that takes an array and a value as arguments and returns the value position(not index) in that array.
// If value is not present in passed array – return false.
// function getValuePosition(array, position) {
//   let s = array.indexOf(position) + 1;
//   let res = s === 0 ? false : s;
//   console.log(res);
// }

// getValuePosition([2, 5, 8, 9, 10, 11], 10); //returns 3
// getValuePosition([12, 4, 6], 1); // returns false

//todo: Шестая задача

//6. Write a function that reverses the string value passed into it

// function flipOver(string) {
//   console.log(string.split("").reverse().join(""));
// }

// console.log(flipOver("hey world")); // 'dlrow yeh'

//todo: Седьмая задача
//7. Write a function which creates an array from the given range of numbers

// function makeListFromRange(array) {
//   var lastItem = array[array.length - 1];

//   let i = array[0];
//   while (i < lastItem) {
//     const res = i;
//     console.log(res);
//     i++;
//   }
//   return i;
// }

// console.log(makeListFromRange([2, 7])); // [2, 3, 4, 5, 6, 7]

//todo: Восьмая задача

// 8. Write a function that accepts an array of object and returns new array of values by passed key name.
// That function should not change the original array. Reuse function from task 2.

// const fruits = [
//   { name: "apple", weight: 0.5 },
//   { name: "pineapple", weight: 2 },
// ];

// function getArrayOfKeys(obj) {
//   let m = obj.map((el) => {
//     return el.name;
//   });
//   return m;
// }
// console.log(getArrayOfKeys(fruits, "name")); // returns [‘apple’, ‘pineapple’]

//todo: Девятая задача

//9. Write a function that accepts an array of groceries objects and returns total weight of all items.Reuse function from task 2.

// const basket = [
//   { name: "Bread", weight: 0.3 },
//   { name: "Coca-Cola", weight: 0.5 },
//   { name: "Watermelon", weight: 8 },
// ];
// function getTotalWeight(props) {
//   const s = props.map((el) => {
//     return Object.values(el).pop();
//   });
//   return s.reduce((acc, currentValue) => acc + currentValue);
// }
// console.log(getTotalWeight(basket)); // returns 8.8

//todo: Десятая задача

// 10. Write a function which returns a day number that was some amount of days ago from the passed date.
// It should not change the given source date.

// const date = new Date(2020, 0, 2);
// function getPastDay(date, day) {
//   var todayDate = date,
//     weekDate = new Date();
//   let s = weekDate.setTime(todayDate.getTime() - day * 24 * 3600000);
//   var d = new Date(s);
//   console.log(d);
// }
// console.log(getPastDay(date, 1)); // 1, (1 Jan 2020)
// console.log(getPastDay(date, 2)); // 31, (31 Dec 2019)
// console.log(getPastDay(date, 365)); // 2, (2 Jan 2019)

//todo: Одиннадцатая  задача

//11. Write a function that formats a date in such format "YYYY/MM/DDHH:mm".

function formatDate(str) {
  //   var b = str.reverse().join("-");
  //   return b;

  let date_ob = str;

  // adjust 0 before single digit date
  let date = ("0" + date_ob.getDate()).slice(-2);

  // current month
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

  // current year
  let year = date_ob.getFullYear();

  // current hours
  let hours = date_ob.getHours();

  // current minutes
  let minutes = date_ob.getMinutes();

  // current seconds
  let seconds = date_ob.getSeconds();

  // prints date & time in YYYY-MM-DD HH:MM:SS format
  console.log(
    year +
      "-" +
      month +
      "-" +
      date +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds
  );
}
console.log(formatDate(new Date("6/15/2019 09:15:00"))); // "2018/06/15 09:15"
console.log(formatDate(new Date())); // "2020/04/07 12:56" // gets current local time
