// Реализовать функцию конвертации строки в JSON со всеми необходимыми проверками и валидациями.
const example = { name: 'Valeria', login: 'qwerty', age: 27, children: false }
const example2 = { name: "John", age: 30, city: "New York" }

function getJson(input) {

    let str = "{"
    const obj = new Object(input)
    for (const key in obj) {
        const value = (typeof obj[key] === "string") ? `"${obj[key]}"` : obj[key]
        str += `"${key}": ${value},`
    }
    str += "}"

    // удаление лишних пробелов
    const removeSpace = str.replace(/:\s/g, ":")
    // удаление последней запятой
    const result = removeSpace.replace(/,\}/g, '}')

    console.log(result)
    console.log(JSON.stringify(input))
}

getJson(example)
