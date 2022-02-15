'use strict';

//Реализовать цикл, который выводит в консоль простые числа

function isPrime(num) {
  for (let i= 2; i< num; i++){
    if (num % i === 0){
      return false;
    } else {
      return true;
    }
  }
}

function primeNumbers(a, b) {
  for (let i = a; i <= b; i++){
    if (isPrime(i)){
      console.log(i);
    }
  }
}
primeNumbers(1, 10);