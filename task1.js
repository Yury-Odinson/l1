// инлайновый метод: удаление пробелов из строки. преобразование входящей строки в массив, реверсирование, преобразование обратно в строку и сравнение  входящей строки с полученной
const inlinePalindrome = (str) => str.replaceAll(" ", "") === (str.split("").reverse().join("").replaceAll(" ", "")) ? console.log(true) : console.log(false)

function palindrome(str) {
    const reverseString = str.split("").reverse().join("").replaceAll(" ", "") // преобразование входящей строки в массив/реверсирование/преобразование в троку/удаление всех пробелов
    str = str.split(/\s+/).join("") // удаление пробелов во входящей строке путём регулярного выражения
    if (str === reverseString) {
        console.log("строка является палиндромом")
    } else {
        console.log("строка не является палиндромом")
    }
}

inlinePalindrome("1234321")         // результат +
inlinePalindrome("12343q21")        // результат -

palindrome("аргентина манит негра") // результат +
palindrome("аргентин манит негра")  // результат -
