// Задача о коллекции функций: у вас есть массив функций, напишите код, 
// который вызовет каждую функцию в этом массиве и выведет их порядковый номер. 
// Однако, вызов каждой функции должен происходить только после вызова предыдущей функции.
// Другими словами, нужно выполнить следующие шаги:

// Вызвать первую функцию из массива.
// После завершения работы первой функции вызвать вторую функцию.
// После завершения работы второй функции вызвать третью функцию.
// И так далее, пока все функции в массиве не будут вызваны по порядку.



// составить массив из функций
// вызвать первую функицю, следующую запустить после выполнения первой.
// сделать цикл, который по setTimeout вызывает i-тую функцию
// по сути здесь вызов функций не последовательный. здесь фукнкции запускаются одновременно
// но результат их выполнения происходит с разной задержкой
// delay * i означает, что для каждой функции в цикле вывод результата будет с задержкой примерно в i секунд
// т.е. 1-я функция выполнится через 1000 мс, 2-я функция через 2000 мс, 3-я через 3000 мс, и т.д.

const arr = [
    () => console.log("function № 1"),
    () => console.log("function № 2"),
    () => console.log("function № 3"),
    () => console.log("function № 4"),
    () => console.log("function № 5")
]

const executor = () => {
    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {
            arr[i]();
        }, 1000 * i);
    }
}

executor();
