// Задача на асинхронность: напишите асинхронную функцию, которая использует ключевое слово await 
// для ожидания выполнения других асинхронных операций, и возвращает результат выполнения.

const someURL = "https://sun9-67.userapi.com/impf/c849532/v849532919/e576f/8G2NyBvtr70.jpg?size=640x480&quality=96&sign=4f67212 333d6a0b9f141c33556f29cab&type=album"

// первая функция, после её запуска выведет в консоль сообщение через 2 секунды
function firstFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("firsFunc is finished!"))
        }, 3000);
    })
}

// вторая функция выполнится после успешной загрузки изображения
async function secondFunc(url) {
    const response = await fetch(url)
    if (response.status === 200) {
        return console.log("secondFunc if finished")
    } else console.log("Загрузка не удалась")
}

// функция, которая ждёт результатов выполнения предыдущих функций.
// при запуске их вне этой функции - первой выполнится вторая функция, за счёт быстроты загрузки fetch запроса
async function mainFunc() {
    return await firstFunc(), await secondFunc(someURL)
}

mainFunc()
