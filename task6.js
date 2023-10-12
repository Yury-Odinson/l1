// Задача о сортировке объектов: у вас есть массив объектов вида { name: 'John', age: 25 }. 
// Напишите код, который сортирует этот массив по возрастанию 	возраста, 
// а при равных возрастах сортирует по алфавиту по полю name.

const users = [{
    name: "BJohn",
    age: 25
}, {
    name: "Zakk",
    age: 43
}, {
    name: "ADavid",
    age: 25
}, {
    name: "Nikky",
    age: 27
}, {
    name: "Hartman",
    age: 43
}, {
    name: "Alfred",
    age: 73
}]

// 1. сортировать по возрасту
// 2. с одинаковым возрастом загонять в отдельный массив <- не лучшее решение
// 3. сортировать каждый массив по алфавиту
// 4. конкатенировать массивы

function sort(obj) {
    const ageSoorted = obj.sort((a, b) => a.age - b.age);

    return console.log(ageSoorted)

}

sort(users)
