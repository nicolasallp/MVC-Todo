const editBtns = document.querySelectorAll(".edit-btn")

editBtns.forEach((element) => {
    element.addEventListener("click", (event) => {
        editBtns.forEach((element1) => {
            let parent1 = element1.parentElement
            let todoTitle1 = parent1.previousElementSibling
            let gParent1 = parent1.parentElement
            let todoIn1 = todoTitle1.firstElementChild

            if (gParent1.style.backgroundColor == "rgb(26, 41, 74)") {
                gParent1.style.backgroundColor = "#253d73"
                element1.nextElementSibling.classList.add("hidden")
                todoTitle1.innerHTML = todoIn1.value
                todoIn1.classList.add("hidden")
            }
        })
        let parent = event.currentTarget.parentElement
        let todoTitle = parent.previousElementSibling
        let gParent = parent.parentElement

        element.nextElementSibling.classList.remove("hidden")

        gParent.style.backgroundColor = "#1a294a"
        todoTitle.childNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE) {
                todoTitle.removeChild(node)
            }
        })

        todoIn = todoTitle.firstElementChild
        todoIn.classList.remove("hidden")
        todoIn.focus();
        todoIn.select();
    })
})