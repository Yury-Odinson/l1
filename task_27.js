const backgroundBlock = document.querySelector(".container-body27")     // декларация фонового изображения для анимации фликера
const lampAnimation = document.getElementById("task27__img1")           // декларация изображения лампы
const imageLoader = document.getElementById("task27__img2")             // декларация изображения штурвала

const buttonSetAnimation1 = document.getElementById("setAnimation1")    // декларация кнопки запуска анимации фликера
const buttonSetAnimation2 = document.getElementById("setAnimation2")    // декларация кнопки запуска анимации лоадера

function startLoader(image) {
    return image.animate([
        {
            transform: "rotate(0deg)",
            opacity: 1
        },
        {
            opacity: 0.3
        },
        {
            transform: "rotate(360deg)",
            opacity: 1
        }
    ], {
        duration: 3500,         // скорость анимации
        iterations: Infinity    // бесконечный цикл анимации
    })
}

buttonSetAnimation2.addEventListener("click", () => startLoader(imageLoader))

function startFlicker(element) {
    return element.animate([
        {
            backgroundColor: "#e7e7e765"
        },
        {
            backgroundColor: "#daeb91a2"
        },
        {
            backgroundColor: "#e7e7e765"
        }
    ], {
        duration: 2000,
        iterations: Infinity
    })
}

function startLamp(image) {
    return image.animate([
        {
            transform: "scale(1)"
        },
        {
            transform: "scale(1.1)"
        },
        {
            transform: "scale(1)"
        }
    ], {
        duration: 2000,
        iterations: Infinity
    })
}

buttonSetAnimation1.addEventListener("click", () => {
    startFlicker(backgroundBlock);
    startLamp(lampAnimation);
})
