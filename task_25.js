// Задача: Создать и добавить стиль для элемента: 
// Напишите функцию, которая создает новый элемент, добавляет его в DOM 
// и устанавливает для него стиль с помощью CSS.

// на вход функции подаётся 3 параметра: 
//      1. название блока (div, input, label и т.д.)
//      2. массив из классов (потому что классов может быть несколько)
//      3. объект из атрибутов (например id, placeholder, value и т.д.)

export function createElement(block, cssClass = [], attrs = {}) {
    const element = document.createElement(block)       // создание DOM элемента
    element.classList.add(...cssClass)                  // присваение классов элементу
    for (const key in attrs) {                  // нахождение всех ключей в передаваемых атрибутов (например id, placeholder и т.д)
        element.setAttribute(key, attrs[key])   // установка атрибутов и значений 
    }
    return element
}

const mainContainer = document.getElementById("main")   // заранее созданный контейнер, куда будут помещаться созданные элементы

const bodyBlock = createElement("div", ["container-doby"])      // создание блока <div class="container-body"></div>
const bodyLabel = createElement("label", ["someLabel"])
const bodyInput = createElement("input", ["someInput", "inputName"], { id: "firstName", placeholder: "Enter name" })
const bodyButton = createElement("button", ["button", "someButtonStyle"], { id: "buttonBody" })

bodyButton.textContent = "Send"     // присвоение текста на кнопку

// mainContainer.appendChild(bodyBlock)    // добавление созданных элементов в контейнер
bodyBlock.appendChild(bodyLabel)
bodyLabel.appendChild(bodyInput)
bodyLabel.appendChild(bodyButton)
