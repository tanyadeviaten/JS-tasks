'use strict';

let a = 12;
let b = 'cat';
let c = true;

//1.Выполнить сложение различных типов(string+boolean, string+number, number+boolean)

console.log(`Результат сложения (string+boolean) равен ${b+c}`);
console.log(`Результат сложения (string+number) равен ${b+a}`);
console.log(`Результат сложения (number+boolean) равен ${a+c}`);

//2.Выполнить умножение различных типов(string * boolean, string * number, number * boolean)

console.log(`Результат умножения (string*boolean) равен ${b*c}`);
console.log(`Результат умножения (string*number) равен ${b*a}`);
console.log(`Результат умножения (number*boolean) равен ${a*c}`);

//3.Выполнить деление различных типов(string/boolean, string/number, number/Boolean)

console.log(`Результат деления (string/boolean) равен ${b/c}`);
console.log(`Результат деления (string/number) равен ${b/a}`);
console.log(`Результат деления (number/boolean) равен ${a/c}`);

//4.Выполнить явное преобразование(number, string, boolean)

console.log(`Результат явного преобразования number в string ${String(a)}`);
console.log(`Результат явного преобразования number в boolean ${Boolean(a)}`);
console.log(`Результат явного преобразования string в number ${Number(b)}`);
console.log(`Результат явного преобразования string в boolean ${Boolean(a)}`);
console.log(`Результат явного преобразования boolean в string ${String(c)}`);
console.log(`Результат явного преобразования boolean в number ${Number(c)}`);



