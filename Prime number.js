'use strict';

//Напишите функцию, которая определяет является ли число простым или нет

function isPrime(num) {
  for (let i= 2; i< num; i++){
    if (num % i === 0){
      console.log(`${num} - не простое число`);
      return false;
    } else {
      console.log(`${num} - простое число`);
      return true;
    }
  }
}
 isPrime(10);
isPrime(5);
isPrime(32);
isPrime(37);