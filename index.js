const calc = require('./calc.js');
const readline = require('readline');

// Используем readline для создания интерфейса
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Добро пожаловать в Калькулятор!\nНачнем вводить числа для операций с ними...\n");

rl.question('Введите первое число: ', (a) => {
    rl.question('Введите второе число: ', (b) => {
        rl.question('Введите одну из операций (+,-,*,/):', (choice) => {
            if (!calc.isNumeric(a, b)) {
                console.error('Ошибка! Для операций калькулятора необходимо ввести числа!');
            } else {
                switch (choice) {
                case '+':
                    console.log(`${a} + ${b} = ${calc.add(a, b)}.`);
                    break;
                case '-':
                    console.log(`${a} - ${b} = ${calc.subtract(a, b)}.`);
                    break;
                case '*':
                    console.log(`${a} * ${b} = ${calc.multiply(a, b)}.`);
                    break;
                case '/':
                    try { 
                        console.log(`${a} / ${b} = ${calc.divide(a, b)}.`);
                    } catch (err) {
                        console.error('Ошибка! Деление на ноль запрещено!');
                    }
                    break;
                default:
                    console.error('Ошибка! Необходимо ввести одну из допустимых операций (+,-,*,/)!');
                    break;
                }
            }
            rl.close();
        });
    });
});