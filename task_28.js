const template = document.getElementById("task28-content__item")
const tbody = document.querySelector("tbody")

const dataURL = "https://63fb14da2027a45d8d5fb8bf.mockapi.io/faker"

let resultData = []

// данные для заполнения по шаблону загружаются с mockapi

async function getData() {
    const response = await fetch(dataURL)
    const result = await response.json()
    return resultData = result
}

getData().then(() => {
    resultData.map((element) => {
        const clone = template.content.cloneNode(true)  // декларация и разрешение клонирования строки таблицы (***.content -> атрибут)
        const td = clone.querySelectorAll("td")         // строка таблицы, для добавления данных
        td[0].textContent = element.createdAt
        td[1].textContent = element.name
        td[2].children[0].src = element.avatar  // обращение к первому (и единственному) дочернему элементу <img> и указание адреса изображения
        tbody.appendChild(clone)    // добавление строки в тело таблицы
    })
})
