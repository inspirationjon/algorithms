/* ============================================
The first exercise
============================================ */

/* const SPEED_LIMIT = 70;
const POINT_PER_KM = 5;
const POINTS_LIMIT = 12;

let checkSpeed = function (speed) {
  if (speed < SPEED_LIMIT + POINT_PER_KM) {
    console.log("It is okay!");
    return;
  }

  const speedLimitCalc = Math.floor((speed - SPEED_LIMIT) / POINT_PER_KM);

  if (speedLimitCalc <= POINTS_LIMIT) {
    console.log(`${speedLimitCalc} point`);

  } else {
    console.log('Prava lishon bo`ldi!');
  }
}
checkSpeed(135); */


/* ============================================
The second exercise
============================================ */

/* let sumFizzBuzz = function (num) {

  let result = 0;

  for (let i = 1; i <= num; i++) {
    if (!(i % 3) || !(i % 5)) {
      result += i;
    }
  }
  return result;
};

console.log(sumFizzBuzz(10)); */


/* ============================================
The third exercise
============================================ */

/* 
const myMarks = [81, 74, 86, 59, 77];


let calculateAverage = function (numbers) {
  let totalOfMarks = 0;
  let averageOfMarks = 0;

  for (number of numbers) {
    totalOfMarks += number;
  }
  averageOfMarks = totalOfMarks / numbers.length;
  return averageOfMarks;
};


let calculateGrade = function (marks) {

  let averageOfMarks = calculateAverage(marks);
  let yourGrade = '';

  if (50 >= averageOfMarks)
    yourGrade = 'F';
  if (60 >= averageOfMarks && averageOfMarks > 50)
    yourGrade = 'D';
  if (70 >= averageOfMarks && averageOfMarks > 60)
    yourGrade = 'C';
  if (80 >= averageOfMarks && averageOfMarks > 70)
    yourGrade = 'B';
  if (100 >= averageOfMarks && averageOfMarks > 80)
    yourGrade = 'A';

  return yourGrade;
};

console.log(calculateGrade(myMarks)); */


/* ============================================
The fourth exercise
============================================ */


/* let calculatePrimeNumbers = function (limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

let isPrime = function (number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0)
      return false

  return true;
}

calculatePrimeNumbers(10); */


/* ============================================
The fifth exercise
============================================ */

/* let myString = "Sen meni orzuimdagidek emas ekansan!"


let showTheLongestWord = function (text) {

  let myArray = text.split(' ');
  let theLongestWord = myArray[0];

  for (let i = 1; i < myArray.length; i++)
    if (theLongestWord.length < myArray[i].length)
      theLongestWord = myArray[i];

  return theLongestWord;
}

console.log(showTheLongestWord(myString)); */


/* ============================================
The sixth exercise
============================================ */

/* let myNumbers = [900, 800, 70, 66, 7];

let showTheHighestNumber = function (numbers) {
  let theHighestNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++)
    if (theHighestNumber < numbers[i])
      theHighestNumber = numbers[i];

  return theHighestNumber;
};

console.log(showTheHighestNumber(myNumbers)); */


/* ============================================
The seventh exercise
============================================ */

/* var shkaf = [
  ['Metro 2033', 'Metro 2034', 'Metro 2035', 'Metro 2033. Ibtido'],
  ['Shumbola', 'Puankare', 'Sariq devni minib', `Sariq devning o'limi`, `O'tkan kunlar`, 'Besh bolalik yigitcha', 'Dunyoning ishlari', 'Jimjitlik', 'Ikki eshik orasi', 'Peshonasiga televizor yopishib qolgan bola'],
  ['Sherlok Holms', 'Urush va tinchlik', 'Graf monte kristo', `Yolg'izlikning yuz yili`, `O'gay ona`, 'Farishta va shaytonlar', 'Mumu', 'Iblislar', 'Garri Potter', '1984', 'Molxona'],
  [`Boy ota, kambag'al ota`, 'The Lean Startup', 'Pul oqimining kvadranti', `O'yla va boy bo'l`, `O'lsang kim yig'laydi`, 'Vavilonlik eng boy odam', 'Zero to one'],
  [`Beparvolikning nozik san'ati`]
];

var qidirilmoqda = 'Zero to one';
var isFound = false;

for (var i = 0; i < shkaf.length; i++) {

  for (var j = 0; j < shkaf[i].length; j++) {

    if (shkaf[i][j].toLowerCase === qidirilmoqda.toLowerCase) {
      isFound = true;
      break;
    }

  }
  if (isFound) {
    break;
  }
}

if (!isFound) {
  console.log("no");
} else {
  console.log('yes');
} */