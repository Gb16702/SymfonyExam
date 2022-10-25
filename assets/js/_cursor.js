const cursor = document.querySelector(".cardsCursor")
const container = document.querySelector(".containerHome")

container.addEventListener("mousemove", e=> {
    let x = e.clientX
    let y = e.clientY
    cursor.style.top = y + "px"
    cursor.style.left = x + "px"
    cursor.style.display = "block"
})

container.addEventListener("mouseout", x => {

    cursor.style.display = "none"
})