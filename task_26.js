const container = document.getElementById("main-task26")

// const allElements = [...container.childNodes]

const firstElement = document.getElementById("first")
const lastElement = document.getElementById("last")

// console.log(allElements)

function recursion(element) {

    let currentElement = element

    while (currentElement.children) {
        // console.log(currentElement)
        const children = [...currentElement.children]
        // console.log(children.length)
        console.log(children)
        if (children.length > 0) {
            for (let i = 0; i < children.length; i++) {
                currentElement = children[i]
                // console.log(children[i])
            }
        } else {
            currentElement = children[0]
        }
    }




    // currentElement.style.color = "red";
    // while (currentElement) {
    //     const children = [...currentElement.children]
    //     currentElement = children[0]
    //     console.log(currentElement)

    // for (let i = 0; i < children.length; i++) {
    //     setTimeout(() => {
    //         // currentElement.style.color = "red";
    //         // children[i].classList.add("recursion-current");
    //         children[i].style.color = "red";
    //     }, 1000 * i);
    // }
    // }


}

recursion(firstElement)
// recursion(lastElement)