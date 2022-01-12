'use strict';

//Напишите функцию вычисления типа аргумента и вывод типа в консоль

function showTypeOfArgument(arg) {
  const argType = typeof arg;
  console.log(argType);
  return argType;
}

showTypeOfArgument(123);
showTypeOfArgument('cat');
showTypeOfArgument(true);
showTypeOfArgument([1, 2, 3]);
showTypeOfArgument({w: 400, h: 600});
