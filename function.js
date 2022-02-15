'use strict';

//Написать функцию, которая принимает два параметра - массив и число и выводит индекс элемента массива равный числу

function showIndex(arr, num) {
    for (let i=0; i< arr.length; i++){
      if (arr[i] === num){
        return i;
      }
    }
    return;
};

let numbers = [1, 3, 5, 7, 8, 9, 5];
console.log(showIndex(numbers, 2));

