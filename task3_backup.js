// Реализовать аналог библиотеки Math (можно назвать MathX) с базовым набором функций, используя замыкания:
// вычисление N-го числа в ряду Фибоначчи 
// вычисление всех чисел в ряду Фибоначчи до числа N
// вычисление N-го просто числа
// вычисление всех простых чисел до числа N

// 	Будет плюсом, если задумаетесь и об оптимизации.

//  1. декларируем переменные для вычисления чисел Фибоначчи (a, b, c);
//  2. устанавливаем флаг является ли N из ряда Фибоначчи;
//  3. декларируем массив, для хранения всего ряда чисел до N;
//  4. вычисляем ряд Фибоначчи, путём сложения переменных, где a: 1-е число, b: 2-е число, с: сумма а+b
//  5. каждое число из ряда сохраняем в массив.
//  6. на каждое число из ряда Фибоначчи делаем проверку, равно ли оно числу N
//  7. если равно, выводим в консоль вместе с массивом из ряда чисел
//  8. если число попадает в ряд Фибоначчи - выводим сообщение в консоль и обнуляем массив из ряда


function MathX(num) {

    let a = 0                                   // начальное первое число Фибоначчи
    let b = 1                                   // начальное второе число Фибоначчи
    let c = 0                                   // начальное число, для суммирования первых двух чисел
    let n = null                                // переменная для сохранения результата порядкового номера или уведомления, что введённое число не из ряда Фибоначчи
    let isFibonacci = false                     // переменная, в которой храним состояние является ли N числом из ряда Фиббоначи
    const allFibonacci = []                     // массив, содержащий все числа Фибоначчи, до заданного на вход функции числа включительно

    function fibonacci() {
        for (let i = 1; i <= num; i++) {            // запуск цикла подсчёта чисел Фибоначчи вплоть до заданного числа (num)
            a = b
            b = c
            c = a + b
            allFibonacci.push(c)    // добавление в массив чисел Фибоначчи до заданного на вход в функцию числа
            if (c === num) {
                n = `N-ое число в ряду Фибоначчи - ${i}`
                isFibonacci = true                 // установка флага true, если число из ряда Фибоначчи
                break                              // остановка цикла, если дошли до искомого числа
            } else {
                n = `число ${num} не из ряда Фибоначчи`
            }
        }
        if (!isFibonacci) {                 // проверка, если число не из ряда Фибоначчи, то обнуляем массив из ряда чисел.
            allFibonacci.length = 0
        }
    }
    fibonacci()



    console.log(n)  // результат вычисления N-го числа в ряду Фибоначчи 
    console.log(allFibonacci)
}

MathX(55)
