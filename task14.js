// Задача на промисы: напишите функцию, которая принимает URL изображения и возвращает промис, 
// который разрешается с данными об изображении, когда оно загружено. 
// Когда говорится "промис разрешается с данными об изображении", это означает, 
// что промис должен быть успешно выполнен (resolved) с данными об изображении после того,
//  как изображение будет загружено.

const loadButton = document.getElementById("load__img")
const inputURL = document.getElementById("task14-input")
const image = document.getElementById("uploaded-image")


// 1-й вариант

// function loadImage(url) {
//     const promise = new Promise((resolve, reject) => {
//         const img = new Image()                             // создание 
//         img.onload = () => resolve(img)
//         img.onerror = () => reject()
//         img.src = url
//     })
//     return promise
// }

// loadButton.addEventListener("click", () => {
//     loadImage(inputURL.value)
//         .then(() =>  document.body.appendChild(img))
//         .catch(() => image.src = "./img/error-img.jpg")
// })

// 2-й вариант
async function loadImage(url) {
    const response = await fetch(url)
    if (response.status === 200) {
        return image.src = url
    } else image.src = "./img/error-img.jpg"
}

loadButton.addEventListener("click", () => loadImage(inputURL.value))
