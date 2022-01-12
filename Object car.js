'use strict';

//Создать объект car, добавить к нему свойство color со значением 'черный'

const car ={
  color : 'черный',
};

//Изменить свойство color объекта car на 'зеленый'

car.color = 'зеленый';

//В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя

car.power = 1200;
car.showPower = function () {
  console.log(this.power);
};
car.showPower();