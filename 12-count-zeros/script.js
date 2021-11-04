/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход целое неотрицательное
 * число n. Возвращать функция должна количество нулей, содержащихся в аргументе.
 * 
*/

function countZeros(n) {
    let count = 0;
    let pos = 0;

    for (let i = 1; i <= n; i++) {
      for (let k = 0; k <= String(i).length; k++) {
        if(String(i).includes('0', pos)) {
          count++;
          pos = String(i).indexOf('0', pos) + 1;
        }
      }                
      pos = 0;
    }

    return count;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100