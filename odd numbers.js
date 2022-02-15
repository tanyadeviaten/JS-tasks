'use strict';

//Реализовать цикл, который выводит в консоль нечетные числа

function oddNumbers(a, b) {
  for (let i=a; i <= b; i++){
    if (i % 2){
      console.log(i);
    }
  }
}
oddNumbers(1, 10);
oddNumbers(5, 15);