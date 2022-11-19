const F3 = document.querySelector('.FIG3')
const Info = document.querySelector('.Info')
const modal = document.querySelector(".modal")
const span = document.getElementsByClassName("close")[0];
const body = document.body
const hDesc = document.querySelector('.hDesc')

F3.style.display = "none"
Info.style.display = "flex"


const read = document.getElementById('r')
console.log(str);
if(length > 20) {
    read.style.display = "block"
    hDesc.style.setProperty('text-overflow', "ellipsis")
    hDesc.style.overflow = "hidden"
}else {
    read.style.display = ""
}

read.onclick = function() {
    modal.style.display = 'block'
    body.classList.add('modal-open')
    if (body.classList.contains('modal-open')) {
        body.style.overflow= 'hidden'
    }
}


  span.onclick = function() {
    modal.style.display = "none";
    body.classList.remove('modal-open')
        if (!body.classList.contains('modal-open')) {
        body.style.overflow= 'auto'
    }
  }
  body.style.overflow = "auto"


