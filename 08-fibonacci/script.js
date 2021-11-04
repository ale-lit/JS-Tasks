/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {
    let arr = [0];
    let firstNum = 0;
    let secondNum = 1;

    for (let i = 0; i <= n; i++) {
        (!arr[i-1]) ? firstNum = 0 : firstNum = arr[i-1];
        (!arr[i]) ? secondNum = 1 : secondNum = arr[i];

        arr.push(firstNum + secondNum);
    }

    return arr[n-1];
}

// Протестируйте решение, вызывая функцию с разными аргументами:

//console.log(fibonacci(0));

console.log(fibonacci(1));

console.log(fibonacci(2));

console.log(fibonacci(3));

console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)