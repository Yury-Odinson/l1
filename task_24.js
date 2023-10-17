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

const sortFNameA = document.getElementById("sortFnameA")
const sortFNameD = document.getElementById("sortFnameD")
const sortLNameA = document.getElementById("sortLnameA")
const sortLNameD = document.getElementById("sortLnameD")
const sortPhoneA = document.getElementById("sortPhoneA")
const sortPhoneD = document.getElementById("sortPhoneD")
const sortAddressA = document.getElementById("sortAddressA")
const sortAddressD = document.getElementById("sortAddressD")
const sortCityA = document.getElementById("sortCityA")
const sortCityD = document.getElementById("sortCityD")
const sortStateA = document.getElementById("sortStateA")
const sortStateD = document.getElementById("sortStateD")
const sortZipA = document.getElementById("sortZipA")
const sortZipD = document.getElementById("sortZipD")

const test = [sortFNameA, sortFNameD, sortLNameA, sortLNameD, sortPhoneA, sortPhoneD, sortAddressA, sortAddressD, sortCityA, sortCityD, sortStateA, sortStateD, sortZipA, sortZipD]

let resultData = []     // декларация массива, для общего списка
let resultDataPage = [] // декларация массива, для подмассива (для пагинации)
// let 

async function getData(url) {
    const response = await fetch(url).then(response => {
        return response.json()
    })
    return resultData = response
}

function drawData(arr) {
    bloclData.innerHTML = ""
    arr.map(element => {
        const item = createElement("tr")
        const firstName = createElement("td")
        firstName.textContent = element.fname
        const lastName = createElement("td")
        lastName.textContent = element.lname
        const phone = createElement("td")
        phone.textContent = element.tel
        const address = createElement("td")
        address.textContent = element.address
        const city = createElement("td")
        city.textContent = element.city
        const state = createElement("td")
        state.textContent = element.state
        const zip = createElement("td")
        zip.textContent = element.zip
        item.append(firstName, lastName, phone, address, city, state, zip)
        bloclData.append(item)
    })
}

function pagination(arr) {
    const dataPages = []
    let thisPage = []
    for (let i = 0; i < arr.length; i += 50) {     // разбиение результата на подмассивы для пагинации
        dataPages.push(arr.slice(i, i + 50))
    }
    for (let i = 0; i < dataPages.length; i++) {
        const button = createElement("button", ["pagination__item"])
        button.textContent = i + 1
        bloclPagination.append(button)
        button.addEventListener("click", () => {
            drawData(dataPages[button.textContent - 1])
        })
        thisPage = dataPages[i]
    }
    return resultDataPage = thisPage
}


function sort(arr) {
    let result = []

    let sortMethod = ""

    test.map(element => {
        element.addEventListener("click", () => {
            // console.log(element.id)
            sortMethod = element.id;
            console.log(sortMethod)
            // sort(arr, sortMethod)
        })
    })
    console.log(sortMethod)
    switch (sortMethod) {
        // case "sortFnameA": result = arr.sort((a, b) => a.fname > b.fname ? 1 : -1);
        case "sortFnameA": console.log("sg");
            break;
        case "sortFnameD": result = arr.sort((a, b) => a.fname < b.fname ? 1 : -1);
            break;
        case "sortLnameA": result = arr.sort((a, b) => a.lname > b.lname ? 1 : -1);
            break;
        case "sortLnameD": result = arr.sort((a, b) => a.lname < b.lname ? 1 : -1);
            break;
        case "sortPhoneA": result = arr.sort((a, b) => a.tel > b.tel ? 1 : -1);
            break;
        case "sortPhoneD": result = arr.sort((a, b) => a.tel < b.tel ? 1 : -1);
            break;
        case "sortAddressA": result = arr.sort((a, b) => a.address > b.address ? 1 : -1);
            break;
        case "sortAddressD": result = arr.sort((a, b) => a.address < b.address ? 1 : -1);
            break;
        case "sortCityA": result = arr.sort((a, b) => a.city > b.city ? 1 : -1);
            break;
        case "sortCityD": result = arr.sort((a, b) => a.city < b.city ? 1 : -1);
            break;
        case "sortStateA": result = arr.sort((a, b) => a.state > b.state ? 1 : -1);
            break;
        case "sortStateD": result = arr.sort((a, b) => a.state < b.state ? 1 : -1);
            break;
        case "sortZipA": result = arr.sort((a, b) => a.zip > b.zip ? 1 : -1);
            break;
        case "sortZipD": result = arr.sort((a, b) => a.zip < b.zip ? 1 : -1);
            break;
        default: return arr     // при других вариантах сортировка не происходит
        // default: return console.log("asdfg")     // при других вариантах сортировка не происходит
    }
    // console.log(result)
    return drawData(result)
}
getData(dataURL).then(() => {
    pagination(resultData)
    drawData(resultDataPage)    // отрисовка первых значений по умолчанию, после загрузки всех данных
    sort(resultDataPage)
})
