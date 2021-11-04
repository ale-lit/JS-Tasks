/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 * 
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/

function findVowels(str) {
    const vowelArr = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];

    str = str.toLowerCase();

    let count = 0;

    vowelArr.forEach(letter => {
      for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) count++;
      };
    });

    return count;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здравствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3