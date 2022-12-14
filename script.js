const navToggle = document.getElementById("nav-toggle")
const listItems = document.getElementById("list-items")

navToggle.addEventListener("click", ()=>{
    listItems.classList.toggle("list-items")
})