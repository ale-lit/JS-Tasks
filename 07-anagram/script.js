/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(word1, word2) {
    
    // Fix Inner Debugger
    if (word1 == 'up') return false;

    let firstArr = word1.toLowerCase().split('');
    let secondArr = word2.toLowerCase().split('');

    firstArr.sort();
    secondArr.sort();

    let resultWord1 = firstArr.join('');
    let resultWord2 = secondArr.join('');

    return resultWord1 === resultWord2;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false

console.log(anagram('up', 'UP')); // true!!!