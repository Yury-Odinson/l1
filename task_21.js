const callStackSizeData = document.getElementById("callstackSize")
const buttonCSSize = document.getElementById("callstackSize__button")

let i = 1   // декларация переменной, для записи порядкового номера вызова функции
function callStackSize() {
    i++
    while (callStackSize()) { }     // зацикливание вызова функции до бесконечности
}

// 17-23 строка - обработчик ошибок. если код внутри блока try выполняется успешно,
// то блок catch игнорируется. если возникла ошибка в блоке try,
// то выполнение прерывается и выполняется действие внутри catch.
// поскольку с каждым вызовом функции происходила итерация i,
// то в консоли отобразится число, сколько раз вызывалась функция

buttonCSSize.addEventListener("click", () => {
    try {
        callStackSize()
    } catch (error) {
        console.log(i)
        callStackSizeData.textContent = i
        buttonCSSize.setAttribute("disabled", "")
    }
})

// Chrome 13883
// Opera 13883
