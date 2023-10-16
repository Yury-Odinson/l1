// Задача на промисы: напишите функцию, которая принимает URL изображения и возвращает промис, 
// который разрешается с данными об изображении, когда оно загружено. 
// Когда говорится "промис разрешается с данными об изображении", это означает, 
// что промис должен быть успешно выполнен (resolved) с данными об изображении после того,
//  как изображение будет загружено.

const loadButton = document.getElementById("load__img")
const loadButton2 = document.getElementById("load__img2")
const inputURL = document.getElementById("task14-input")
const containerImage = document.getElementById("container-image")     // блок, в которое загружается изображение


// 1-й вариант
function loadImage(url) {
    const promise = new Promise((resolve, reject) => {
        const img = new Image()                             // создание нового объекта
        img.src = url                                       // присвоение адреса изображения
        img.onload = () => resolve(img)                     // в случае успешной загрузки 
        img.onerror = () => reject(containerImage.innerHTML = "Не удалось загрузить изображение")    // в случае неудачной загрузки
    })
    return promise
}

loadButton.addEventListener("click", () => {
    if (inputURL.value != "") {
        loadImage(inputURL.value)
            .then(img => {
                img.classList.add("loaded-image")     // присвоение класса изображению для стилизации
                containerImage.innerHTML = ""         // при успешной загрузке сперва очистка содержимого
                containerImage.appendChild(img)       // добавление загруженного изображения
            })
    } else containerImage.innerHTML = "Введите запрос!"
})

// 2-й вариант с вариантом async/await
async function loadImage2(url) {
    const response = await fetch(url)   // url запрос с методом "GET" по умолчанию
    const loadedImage = document.createElement("img")
    loadedImage.classList.add("loaded-image")
    if (response.status === 200) {          // проверка запроса. если код запроса пришёл со статусом 200, то присваиваем url в src изображения
        containerImage.innerHTML = ""       // очищение содержимого блока
        loadedImage.src = url
        return containerImage.appendChild(loadedImage)
    } else {
        containerImage.innerHTML = ""
        loadedImage.src = "./img/error-img.jpg"
        return containerImage.appendChild(loadedImage)
    }
}

loadButton2.addEventListener("click", () => {
    if (inputURL.value != "") {     // проверка на пустую строку
        loadImage2(inputURL.value)   // если в строке что-то есть, то идёт выполнение функции загрузки
    } else containerImage.innerHTML = "Введите запрос!"
})
