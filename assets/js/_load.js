const t = document.querySelector(".containerHomeTitle")
const b = document.querySelector(".containerHomeBody")
const h = document.querySelector(".containerHome")
const body = document.body
const html = document.documentElement
let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
let height = window.innerHeight || document.documentElement.clientHeight ||  document.body.clientHeight


// console.log(footer);

h.style.position="relative"
window.onload = function(){
    var executed = false
    if(!window.pageYOffset || window.pageYOffset) {
        if(!executed) {
            executed = true
            t.style.opacity = 0
            t.style.top= "105%"
            t.style.display = "flex"

            // console.log(window.pageYoffset);
            setTimeout(() => {
                t.style.transition = "opacity 700ms, top 800ms"
                t.style.position="absolute"
                t.style.opacity = 1
                if(window.pageYOffset > 2000) {
                    t.style.top = "70%"
                    t.style.backgroundColor = "red"
                }else {
                    t.style.top = "90%"
                }
                t.style.height = "fit-content"
                t.style.background = "transparent"
                t.style.boxShadow = "none"
            }, 200)
            t.style.position = ""
            b.style.overflowX="visible"
        }
    }else {
        executed = false
    }
    const height = Math.max(document.body.getBoundingClientRect().height, html.getBoundingClientRect().height);
    var calc = height - 390
    // console.log(calc)


}

AOS.init();