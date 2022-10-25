window.addEventListener('load', e => {
    const containerNav = document.querySelector(".containerNav")
    const navBar =document.querySelector(".nav")
    const links = document.querySelectorAll(".link")
    const burger = document.querySelector("#burger")
    const bar1 = document.querySelector(".burgerBar:first-child")
    const bar2 = document.querySelector(".burgerBar:nth-child(2)")
    const bar3 = document.querySelector(".burgerBar:last-child")
    const burgerMenu = document.querySelector("#burgerMenu")
    console.log(body);
    console.log(links);

    function burgerBarWhite() {
        for(const list of burger.children) {
            console.log(list.tagName)
            list.style.backgroundColor = "white"
        }
    }
    function burgerBarGrey() {
        for(const list of burger.children) {
            console.log(list.tagName)
            list.style.backgroundColor = "#3f4041"
        }
    }

    let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    let h = window.innerHeight || document.documentElement.clientHeight ||  document.body.clientHeight


    console.log(window.pageYOffset);
    document.addEventListener("scroll", e => {
        if( window.pageYOffset > 700) {
            for(var i = 0; i <links.length; i++) {
                links[i].style.color = "#3f4041"
                links[links.length - 1].style.color = "rgb(215, 7, 7)"
            }
            burgerBarGrey()
            containerNav.style.backgroundColor = "white"
        }else {
            if(window.pageYOffset < 700 || window.pageYOffset) {
                burgerBarWhite()
                if(!containerNav.classList.contains("open-menu")) {
                    containerNav.style.backgroundColor = "transparent"
                }else {
                    containerNav.backgroundColor = ""
                }
                containerNav.style.transition = "200ms"
                for(var i = 0; i <links.length; i++) {
                    links[i].style.transition = "300ms"
                    links[i].style.color = ""
                }
            }
        }
    })

            burgerMenu.style.transition= (".6s")
            burger.addEventListener('click', function() {
            bar1.style.transform= ("rotate(45deg)"+"translate(5px, 6px)")
            bar1.style.transition = (".4s"), bar3.style.transition = (".4s")
            bar3.style.transform= ("rotate(-45deg)"+"translate(4px, -4px)")
            bar2.style.transform = ('translateX(40px)'), bar2.style.transition = ".6s"
            this.classList.toggle('open')
            burgerMenu.classList.toggle("open-menu")

            if(burgerMenu.classList.contains("open-menu")) {
                burgerMenu.style.left = 0;
                burgerMenu.style.borderTop = "1px solid #cecece  "
                containerNav.style.backgroundColor = "#fff"
                burgerBarGrey()
                document.body.style.overflowY = "hidden"
            }else {
                burgerMenu.style.left = ("100%")
                containerNav.style.background =""
                burgerBarWhite()
                document.body.style.overflowY = ""
            }
            if(!burger.classList.contains("open")){
            burger.style = ""
            bar1.style.transform = ""
            bar2.style.transform = ''
            bar3.style.transform = ""
        }
    })
})


const body = document.body;


let lastScroll = 0


window.addEventListener("scroll", ()=> {
    const currentScroll = window.pageYOffset
    if(currentScroll <=0) {
        body.classList.remove("scroll-up")
    }
    if(currentScroll  > lastScroll && !body.classList.contains("scroll-down") && !burger.classList.contains("open")) {
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }
    if(currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
    }
    lastScroll = currentScroll
})




// let touchStart, touchEnd

// burgerMenu.addEventListener("touchstart", e=> {
//     touchStart = e.targetTouches[0].clientX
//     console.log(touchStart);
// })
// burgerMenu.addEventListener("touchmove", x => {
//     touchMove = x.targetTouches[0].clientX
//     console.log(touchMove);
// })

// burgerMenu.addEventListener("touchend", f => {
//     if(touchStart - touchEnd < -10) {
//         burger.classList.toggle('open')
//         burgerMenu.classList.toggle("open-menu")
//     }
// })
