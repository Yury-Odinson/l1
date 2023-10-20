const inputName = document.getElementById("task29-input__name")
const inputPass = document.getElementById("task29-input__password")
const inputConfirmPass = document.getElementById("task29-input__confirmPassword")

const allInputs = [inputName, inputPass, inputConfirmPass]

const buttonClear = document.getElementById("button__clear")
const buttonSend = document.getElementById("button__send")

const dataUsername = document.getElementById("data__uerName")

buttonClear.addEventListener("click", () => {
    allInputs.map(input => input.value = "")
})

buttonSend.addEventListener("click", () => {
    checkInputs()
})

// проверка на заполнение инпутов
function checkInputs() {
    allInputs.map(input => {
        if (input.value === "") {
            input.style.border = "1px solid red"
        } else {
            input.style.border = "none"
            // проверка пароля на соответствие
            checkUserData(inputPass.value, inputConfirmPass.value)
        }
    })
}

function checkUserData(pass, confirm) {
    if (pass === confirm && pass != "") {
        showUserData()  // отрисовка блока данных, в случае соответствия пароля
    } else return
}

// отображение блока пользовтеля, в случае успешной авторизации
// в dataUsername присваивается имя, введённое в инпут 
function showUserData() {
    const containerInputs = document.querySelector(".container-inputs")
    const userData = document.querySelector(".container-body-data")
    containerInputs.style.display = "none"
    userData.style.display = "block"
    dataUsername.textContent = inputName.value
}
