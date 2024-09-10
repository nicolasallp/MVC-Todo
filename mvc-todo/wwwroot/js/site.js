const editBtns = document.querySelectorAll(".edit-btn")
const todoTitle = 

editBtns.forEach((element) => {
    element.addEventListener("click", (event) => {
        let parent = event.currentTarget.parentElement
        let todoTitle = parent.previousElementSibling
        let gParent = parent.parentElement

        element.classList.remove("hover:bg-opacity-10")
        element.classList.add("bg-white")
        element.innerHTML = `<img src="icons/check.png" class="size-6" />`


        gParent.style.backgroundColor = "#1a294a"
        todoTitle.innerHTML = `<input value=${todoTitle.textContent} class="bg-[#1a294a] border-0 outline-0 rounded w-full text-[18px] text-gray-200 placeholder-opacity-50 font-segoe" type="text" />`
        let input = todoTitle.firstElementChild
        input.focus();
        input.select();
    })
})