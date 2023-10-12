import { users } from "./store.js"

// Задача о сортировке объектов: у вас есть массив объектов вида { name: 'John', age: 25 }. 
// Напишите код, который сортирует этот массив по возрастанию 	возраста, 
// а при равных возрастах сортирует по алфавиту по полю name.

// функция sort() работает по принципу сравнения a и b. 
// если a > b - то возвращается 1, что означает, что нужна перестановка. если a < b, то возвращается -1, т.е. перестановка не нужна.
// при сортировке по одному критерию - всё очень просто: если число, то делаем a - b. 
// если в результате получается число меньше нуля, то а и b меняются местами
// если сортируем строку, то сравнение происходит путём позиции символа в таблице юникод. a < b - возвращается -1, если a > b - возвращается 1.
// если нужна сортировка по обоим критериям, то логика следующая: 
// сортируем по возрасту, когда a.age = b.age, приступаем к сортировке имён по таблице юникод.
// в случае сортировке имён, сравнение происходит не только по первому символу, но и по следующим т.е. "Бывалый" будет после "Балбес"
// поскольку функция sort() мутирует массив, то лучше создать копию массива [...array] и над ней производить сортировки

function sort(obj) {
    const result = [...obj].sort((a, b) => a.age - b.age || (a.name < b.name ? -1 : 1))
    return console.log(result)
}

sort(users)
