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