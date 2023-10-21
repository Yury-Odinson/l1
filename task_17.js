const inputAddress = document.getElementById("input__address")
const resultBlock = document.getElementById("addresses__data")

const modal = document.querySelector(".modal")
const modalButtonN = document.getElementById("modal__buttonNo")
const modalButtonY = document.getElementById("modal__buttonYes")

$("#input__address").suggestions({
    token: "2dc81470dfe652184312627240e20f53ea58b1f3",
    type: "ADDRESS",
    /* Вызывается, когда пользователь выбирает одну из подсказок */
    onSelect: function (suggestion) {
        console.log(suggestion);
        openModal(suggestion.value);
    }
});

function openModal(address) {
    modal.style.display = "flex"
    const modalAddress = document.getElementById("modal__addressName")
    modalAddress.textContent = address
    modalButtonN.addEventListener("click", () => {
        modal.style.display = "none"
    })

    modalButtonY.addEventListener("click", () => {
        if (modalAddress.textContent != "") {
            addAddress(modalAddress.textContent)
            modalAddress.textContent = ""
            modal.style.display = "none"
        } else return
    })
}

function addAddress(data) {
    const option = document.createElement("option")
    option.textContent = data
    resultBlock.appendChild(option)
}

// function debounce(fn, ms) {
//     let timeout;
//     return function () {
//         const fnCall = () => { fn.apply(this, arguments) }
//         clearTimeout(timeout);
//         timeout = setTimeout(fnCall, ms);
//     }
// }

// onChange = debounce(onChange, 500)
