// Разработайте страницу, отображающую таблицу с данными. 
// Данные необходимо подгружать из этого источника.

import { createElement } from "./task_25.js"

// Требования:
// данные должны загружаться при загрузке страницы
// необходимо реализовать сортировку по убыванию и по возрастания для всех колонок
// необходимо реализовать клиентскую пагинацию (50 элементов на странице)

const dataURL = "http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true"
const bloclData = document.getElementById("users-data")
const bloclPagination = document.getElementById("pagination")
const data = []     // декларация конечного массива результатов, разделённого на части (для пагинации)

async function getData(url) {
    const response = await fetch(url).then(response => {
        return response.json()
    })
    for (let i = 0; i < response.length; i += 50) {
        data.push(response.slice(i, i + 50))
    }
    pagination(data)
    drawData(data[0])
}

function drawData(arr) {
    bloclData.innerHTML = ""
    arr.map(element => {
        const item = createElement("tr")
        const firstName = createElement("td")
        firstName.textContent = element.fname
        const lastName = createElement("td")
        lastName.textContent = element.lastName
        const phone = createElement("td")
        phone.textContent = element.phone
        const address = createElement("td")
        address.textContent = element.address
        const city = createElement("td")
        city.textContent = element.city
        const state = createElement("td")
        state.textContent = element.state
        const zip = createElement("td")
        zip.textContent = element.zip
        item.append(firstName, lastName, phone, address, city, state, zip)
        bloclData.appendChild(item)
    })
}

function pagination(arr) {
    for (let i = 0; i < arr.length; i++) {
        const button = createElement("button", ["pagination__item"])
        button.textContent = i + 1
        bloclPagination.append(button)
        button.addEventListener("click", () => {
            drawData(arr[button.textContent - 1])
        })
    }
}

// getData(dataURL)
