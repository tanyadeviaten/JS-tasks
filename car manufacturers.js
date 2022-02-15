'use strict';

//Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив
 let cars = ['Audi', 'Ford', 'Ferrari', 'BMW', 'Mazda'];
 let str = cars.join(', ');
 console.log(str);
 let arr = str.split(', ');
 console.log(arr);

 //это задание одной строкой
 let newArr = cars.join(', ').split(', ');
 console.log(newArr);