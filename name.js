'use strict';

/*В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в
терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)*/

const myName = 'Таня';

function showMessage(name) {
  (name === myName) ? console.log(`Привет, ${name}`) :
    console.log('Нет такого имени');
}

showMessage('Катя');
showMessage('Таня');