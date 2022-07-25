const burger = document.getElementById("burger")
const headerInner = document.getElementById("headerInner")

const openNav = (event) => {
    if (event.currentTarget.classList.contains("active")) {
        event.currentTarget.classList.remove("active")
        headerInner.classList.remove("active")
    } else {
        event.currentTarget.classList.add("active")
        headerInner.classList.add("active")
    }
}