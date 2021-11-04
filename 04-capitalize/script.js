/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    let arrStr = str.split(' ');
    let newArr = [];
    arrStr.forEach((word) => {
      newArr.push(word.charAt(0).toUpperCase() + word.slice(1));
    });

    let newStr = newArr.join(' ');

    return newStr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"