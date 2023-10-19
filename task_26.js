const container = document.getElementById("main-task26")

const firstElement = document.getElementById("first")               // первый элемент для рекурсии
const fifthElement = document.getElementById("fifth")               // второй элемент для рекурсии
const blocks = document.querySelectorAll(".block")                  // все элементы, подвергающиеся рекурсии для обнуления стилей
const buttonStart1 = document.getElementById("button__recursion1")  // кнопка запуска первого варианта рекурсии
const buttonStart2 = document.getElementById("button__recursion2")  // кнопка запуска второго варианта рекурсии

function recursion(element) {

    let currentElement = element

    console.log(currentElement)

    while (currentElement) {
        currentElement.style.color = "red"
        children = [...currentElement.children] // деструктуризация дочерних элементов, для осуществления рекурсии по всех дочерним элементам
        console.log(children)
        if (children.length > 1) {              // если дочерних элементов больше одного, то проход осуществляется по всем элементам
            children.map(element => {
                console.log(element)
                element.style.color = "red"
            })
        }
        currentElement = children[0]
    }
}

buttonStart1.addEventListener("click", () => {
    blocks.forEach(element => element.style.color = "black")    // обнуление стилей, для визуализации рекурсии
    document.body.style.color = "black"
    recursion(firstElement)
})
buttonStart2.addEventListener("click", () => {
    blocks.forEach(element => element.style.color = "black")
    recursion(fifthElement)
})
