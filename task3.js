// Реализовать аналог библиотеки Math (можно назвать MathX) с базовым набором функций, используя замыкания:
// вычисление N-го числа в ряду Фибоначчи 
// вычисление всех чисел в ряду Фибоначчи до числа N
// вычисление N-го просто числа
// вычисление всех простых чисел до числа N

// 	Будет плюсом, если задумаетесь и об оптимизации.

//  1. декларируем переменные для вычисления чисел Фибоначчи (a, b, c);
//  2. устанавливаем флаг является ли N из ряда Фибоначчи;
//  3. декларируем массив, для хранения всего ряда чисел до N;
//  4. вычисляем ряд Фибоначчи, путём сложения переменных, где a: 1-е число, b: 2-е число, с: сумма а + b
//  5. каждое число из ряда сохраняем в массив.
//  6. на каждое число из ряда Фибоначчи делаем проверку, равно ли оно числу N
//  7. если равно, выводим в консоль вместе с массивом из ряда чисел
//  8. если число попадает в ряд Фибоначчи - выводим сообщение в консоль и обнуляем массив из ряда

var MathX = (function () {

    return {
        isFib: function (num) {
            let a = 0                                   // начальное первое число Фибоначчи
            let b = 1                                   // начальное второе число Фибоначчи
            let c = 0                                   // начальное число, для суммирования первых двух чисел
            let result = null                                // переменная для сохранения результата порядкового номера или уведомления, что введённое число не из ряда Фибоначчи
            let isFibonacci = false                     // переменная, в которой храним состояние является ли N числом из ряда Фиббоначи

            for (let i = 1; i <= num; i++) {            // запуск цикла подсчёта чисел Фибоначчи вплоть до заданного числа (num)
                a = b;
                b = c;
                c = a + b;
                if (c === num) {
                    result = `N-ое число в ряду Фибоначчи - ${i}`
                    isFibonacci = true                  // установка флага true, если число из ряда Фибоначчи
                    break                               // остановка цикла, если дошли до искомого числа
                } else {
                    result = `число ${num} не из ряда Фибоначчи`
                }
            }
            return console.log(result)                  // вывод результа N-го числа в ряду Фибоначчи
        },

        allFib: function (num) {
            let a = 0;
            let b = 1;
            let c = 0;
            let result = null;
            const allFibonacci = [];                    // массив, содержащий все числа Фибоначчи, до заданного на вход функции числа включительно

            for (let i = 1; i <= num; i++) {            // запуск цикла подсчёта чисел Фибоначчи вплоть до заданного числа (num)
                a = b;
                b = c;
                c = a + b;
                allFibonacci.push(c)
                if (c === num) {
                    result = allFibonacci               // в случае успешной последовательности, присваиваем полученый ряд чисел
                    break                               // остановка цикла, если дошли до введённого числа
                } else {
                    result = `число ${num} не из ряда Фибоначчи`
                }
            }
            return console.log(result)
        },

        primeNum: function (num) {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {                    // проверка, есть ли у введённого числа делители
                    return console.log("Не простое");   // 
                }
            }
            return console.log("Простое");
        }
    }
}());


// MathX.isFib(55)
// MathX.allFib(55)
MathX.primeNum(73)
