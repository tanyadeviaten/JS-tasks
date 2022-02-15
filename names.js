'use strict';

//Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello

let names = ['Вася', 'Петя', 'Ира', 'Оля', 'Ваня', 'Света'];
let result = names.map(name => 'hello '+ name);
console.log(result);