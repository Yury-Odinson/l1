const ls__button = document.getElementById("lsSize__button")

localStorage.setItem("test", "")

ls__button.addEventListener("click", () => lsSize())

function lsSize() {
    let data = "data"
    try {
        while (true) {          // бесконечный цикл для записи в ls.
            localStorage.setItem("test", data)
            data += data
        }
    } catch (error) {
        console.log(localStorage.getItem("test").length)   // показало 4.2 Мб
        console.log(data.length)                           // показало 8.4 Мб
    }
}

// данные разошлись.
// https://arty.name/localstorage.html
// вот здесь объём данных показал 5.2 Мб 
