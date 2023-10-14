// Реализовать функцию конвертации JSON в строку

const jsonExample = '{"name":"Иван","age":37,"mother":{"name":"Ольга","age":58},"children":["Маша","Игорь","Таня"],"married": true,"dog":null}';

const result = {
    name: 'Иван',
    age: 37,
    mother: { name: 'Ольга', age: 58 },
    children: ['Маша', 'Игорь', 'Таня'],
    married: true,
    dog: null
}

function getString(jsonString) {

}

console.log(eval(jsonExample))
