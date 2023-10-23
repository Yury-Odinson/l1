
const authButton = document.getElementById("auth__button")
const loadButton = document.getElementById("load__button")
const authURL = "https://oauth.vk.com/authorize?client_id=51776929&display=popup&redirect_uri=http://localhost:5500/task_19.html&scope=friends&response_type=token&v=5.131&state=12345"


authButton.addEventListener("click", () => {
    window.open(authURL)
})





// console.log(window.location.hash)

// let hash = window.location.hash

// let token = hash.substr(hash.indexOf('access_token=')).split('&')[0].split('=')[1]
// console.log(token)


// function getRequest() {

//     const url = `https://api.vk.com/method/wall.get?owner_id=tebya_zovyt`

//     fetch(url, {
//         method: "GET",
//         headers: {
//             "Authorization": `Bearer ${token}`
//         }
//     })
// }

// loadButton.addEventListener("click", () => getRequest())




