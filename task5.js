// Разработайте функцию преобразования JSON в связный список. 
// На входе функция должна получать JSON, содержащий список объектов, 
// на выходе объект, представляющий из себя односвязный список.

// примеры строк на вход в функцию
const firstString = JSON.stringify([{
  id: "1",
  name: "John"
},
{
  id: "2",
  name: "Steve"
},
{
  id: "3",
  name: "Zakk"
},
{
  id: "4",
  name: "Ozzy"
},
{
  id: "5",
  name: "Dave"
},
])

const secondString = JSON.stringify([{
  brand: "Volkswagen",
  model: "Tiguan",
  generation: "1 restailing",
  year: 2015
},
{
  brand: "Volkswagen",
  model: "Tiguan",
  generation: "2",
  year: 2017
},
{
  brand: "Volkswagen",
  model: "Tiguan",
  generation: "2 restailing",
  year: 2020
}])
// 1. закинуть в функцию JSON строку и распарсить её
// 2. чтоб сделать односвязный список из массива объектов, лучше пойти с конца массива
//      i - последний элемент массива. берём i-тый элемент массива, добавляем его в новый ключ "next" у i - 1, после чего i удаляем из массива.
//      делаем в цикле, вплоть до нулевого элемента массива

function getSingleList(string) {
  const initList = JSON.parse(string)             // преобразование входящей JSON строки 

  for (let i = initList.length; i > 0; i--) {     // последний элемент массива (i) переносим в новый ключ "next" предыдущего объекта (i - 1)
    initList[i - 1].next = initList[i] || null    // если нечего присваивать (для самого последнего элемента в массиве - то next = null)
    initList.splice(i, 1)
  }
  const result = initList[0]                      // выводим полученый объект из массива, для удобства

  console.log(result)                         // вывод в консоль общего результата
  console.log(JSON.stringify(result))         // вывод в консоль результата, преобразованного в JSON, для наглядности работы функции
}

getSingleList(firstString)
getSingleList(secondString)
