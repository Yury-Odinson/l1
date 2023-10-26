// Реализовать функцию конвертации JSON в строку

const jsonExample = '[{"name":"Valeria","login":"qwerty","age":27,"children":false},{"name":"Yury","login":"alice","age":28,"children":false}]'
const result = [
    {
        name: 'Valeria',
        password: 'qwerty',
        age: 27,
        children: false,
    },
    {
        name: 'Yury',
        login: 'alice',
        age: 28,
        children: false,
    },
];

const jsonExample2 = '{"name":"Иван","age":37,"mother":{"name":"Ольга","age":58},"children":["Маша","Игорь","Таня"],"married": true,"dog":null}';
const result2 = {
    name: "Иван",
    age: 37,
    mother: { name: "Ольга", age: 58 },
    children: ["Маша", "Игорь", "Таня"],
    married: true,
    dog: null
}

function getString(jsonString) {
    // (?<=\{)  - убрать кавычки после знака {
    // (?<=,)"  - убрать кавычки после знака ,
    // "(?=:)   - убрать кавычки перед знаком :
    // "(?=\})  - убрать кавычки перед знаком }
    // преобразование в строку без лишних символов
    const convert = jsonString.replace(/(?<=[{}])"|(?<=,)"|"(?=:)|"(?=\})/g, "")
    // преобразование строки в объект
    
    const result = eval("(" + convert + ")")

    const parse = JSON.parse(jsonString)

    console.log(parse)
    console.log(result)

    return result
}

getString(jsonExample)
