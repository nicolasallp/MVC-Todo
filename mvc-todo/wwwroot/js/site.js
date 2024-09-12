const editBtns = document.querySelectorAll(".edit-btn")

editBtns.forEach((element) => {
    element.addEventListener("click", (event) => {
        editBtns.forEach((element1) => {
            toggleTodo(element1, false)
        })
        toggleTodo(event.currentTarget, true)
    })
})

function toggleTodo(element, clicked) {
    let buttonsDiv = element.parentElement
    let titleDiv = buttonsDiv.previousElementSibling
    let todoCard = buttonsDiv.parentElement
    let todoInput = titleDiv.firstElementChild
    let todoTitle = todoInput.nextElementSibling

    if (!clicked) {
        todoCard.style.backgroundColor = "#253d73"
        element.classList.remove("hidden")
        element.nextElementSibling.classList.add("hidden")
        todoTitle.innerHTML = todoInput.value
        todoInput.classList.add("hidden")
    }
    else {
        element.classList.add("hidden")
        element.nextElementSibling.classList.remove("hidden")

        todoCard.style.backgroundColor = "#1a294a"
        todoTitle.innerHTML = ""

        todoInput.classList.remove("hidden")
        todoInput.focus();
        todoInput.select();
    }
}