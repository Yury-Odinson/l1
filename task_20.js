window.addEventListener("storage", () => {
    const pageData = window.localStorage.getItem("page").length
    const postData = window.localStorage.getItem("viewPost").length
    const posts = window.localStorage.getItem("posts").length
    console.log(`объём занимаемой памяти localStorage - ${pageData + postData + posts} байт`)
})

// отображение будет в http://localhost:5500/task_19.html
// после авторизации в вк меняется адресная строка и в консоль не сыпется лог
