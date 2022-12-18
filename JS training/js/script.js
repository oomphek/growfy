 

//const a = prompt("Один из последних просмотренных фильмов?", ""),
  //    b = prompt("На сколько оцените его ?", ""),
    //  c = prompt("Один из последних просмотренных фильмов ?", ""),
      //d = prompt("На сколько оцените его ?", "");

//personalMovieDB.movies[a] = b;
//personalMovieDB.movies[c] = d;

//console.log(personalMovieDB);

//const t = 50;
//if (t < 51) {
  //  console.log("ok");
//}
//else  {
  //  console.log("false");
//}
//console.log(t);



//const years = 27;
//if (years > 25) {
  //  console.log("yes");
//} else {
  //  console.log("no");
//}

//console.log( NaN || 2 || undefined );

//console.log( NaN && 2 && undefined);

//console.log( 1 && 2 && 3);

//console.log(25 || null && !3);

//console.log( NaN || null || !3 || undefined || 5);

//console.log( NaN || null & !3 && undefined || 5);

//console.log( 5 === 5 && 3 > 1 || 5);


// *
// **
// ***
// ****
// *****
// ******

// let result = "";
// const length = 7;

//  for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);



// const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "3");
//  console.log(numberOfFilms);

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt("Сколько фильмов ты смотрел ?", ""),
//           b = prompt("Какие любимые актёры ?", "");

//     if (a != null && b != null && a != "" && b != "" && a.length < 50 ) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//     } else {
//         console.log("error");
//         i--;
//     }
// if (personalMovieDB.count < 10) {
//     console.log("маловато");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("нормально")
// } else if (personalMovieDB.count >= 30) {
//     console.log("ВЫ киноман");
// } else {
//     console.log("error");
// }



// console.log(personalMovieDB);

// const baby = "Hello World!";
// console.log(baby.slice(0,5));


// function test() {
//   for (let i = 10; i > 0; i--) {
//     console.log(i);
//     if (i === 5) return
//   }
//   console.log("Done")
// }
//  test();


// function calc() {
//   for (let i = 0; i < 100; i++) {
//     console.log(i);
//     if (i === 77) return
//   }
//   console.log("very well");
// }
// calc();


// function small() {
//   for (let i = -5; i < 3; i++) {
//     console.log(i);
//     if (i === 2) return
//   }
//   console.log("Well Done");

// }
// small();

// const UsdCurr = 40;
// const EurCurr = 42;
// const discount = 0.8;

// function calc(amount, curr) {
//   return amount * curr;
// }


// function promotion(result) {
//   console.log(result * discount);
// }
// promotion(calc(500, EurCurr));




// const eur = 10;
// const disc = 0.9;

// function curs(curr, amount) {
//   return curr * amount;

// }

// function promotion(result) {
//   console.log(disc * result);
// }

// promotion(curs(500, eur));


// тут тут тут

// let numberOfFilms;
// function start() {
//     numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
//     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//       numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
//     }
// }
// start();

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//           b = prompt("На сколько вы его оцените?", "");
  
//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("done");
//   } else {
//     console.log("error");
//     i--;
//   }        
//   }
// }
// rememberMyFilms();

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log("маловато");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("нормально")
// } else if (personalMovieDB.count >= 30) {
//     console.log("ВЫ киноман");
// } else {
//     console.log("error");
// }
// }

//  detectPersonalLevel(); 


// function showMyDB (hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
// }

// }
// writeYourGenres();

// const Vagons = {
//   first: [],
//   second: [],
//   third: [],
//   fourth: []
// };



// function Vagon() {
//   let numberVagon;
// numberVagon = prompt("Какое место выберите ?", "");
//   if (numberVagon <= 4) {
// console.log("Первый Вагон");
//   }
//   else if (numberVagon >= 5 && numberVagon <= 8) {
//     console.log("Второй вагон");
// }
//   else if (numberVagon >= 9 && numberVagon <= 12) {
//     console.log("Третий Вагон");
//   }
//   else if (numberVagon >= 13 && numberVagon <= 16) {
//     console.log("Четвёртый Вагон");
//   }
//   else if (numberVagon > 16) {
//    numberVagon = prompt("Какое место выберите ?", "");
//   }
// }
// Vagon();

// "use strict"
// let showMessage;
// if (2 > 1) {
//   showMessage = function () {
//     console.log("Leha, ti krasava!");
//   };
// }
// showMessage();


