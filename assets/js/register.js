
		const eyeR = document.querySelector(".eyeRegister")
		const eyeoffR = document.querySelector(".eyeoffRegister")
		const passwordField = document.querySelector("input[type='password']")
        const caps = document.querySelector(".arrowRegister")
        var textR = document.querySelector(".registered")
        const input = document.querySelectorAll("input")
        const labelReg = document.querySelectorAll("label")
        console.log(labelReg);

		var isFocused = (document.activeElement === passwordField)
        let b = "rgb(111, 54, 227)"
		eyeR.style.color = ""

            passwordField.addEventListener("focus", e => {
                eyeR.style.color = b
                eyeoffR.style.color = b
                caps.style.color = b
                eyeR.style.transition = "300ms"
                eyeoffR.style.transition = '300ms'
            })
            passwordField.addEventListener("blur", e => {
                eyeR.style.color = ''
                eyeoffR.style.color = ''
                caps.style.color = ""
                eyeR.style.transition = "300ms"
                eyeoffR.style.transition = '300ms'

            })
            passwordField.addEventListener("keydown", (func) => {

                eyeR.style.display = "block"
                eyeR.addEventListener("click", ()=> {
                    eyeR.style.display = "none"
                    eyeoffR.style.display = "block"
                    passwordField.type = "text"
                })
                eyeoffR.addEventListener("click", () => {
                    eyeoffR.style.display = "none"
                    eyeR.style.display = 'block'
                    passwordField.type = 'password'
                })
            })

// Changer l'affichage des logos
		const logo = document.querySelector(".FIGNH")
		const logo2 = document.querySelector(".FIGH")
        console.log(logo);
        console.log(logo2);
		const container = document.querySelector(".blocRegisterForm")

		 function enter() {
			logo.style.display = 'none'
			logo2.style.display = 'block'
		}
		function leave() {
			logo.style.display = 'block'
			logo2.style.display = 'none'
		}
		container.addEventListener("mouseenter", e => {
			enter()
		})
		container.addEventListener("mouseleave", f => {
			leave()
		})


        // Bouton caps lock
            window.addEventListener("keydown", (func) => {
                if(func.getModifierState('CapsLock')) {
                    caps.style.display="block"
                }else {
                    caps.style.display = ""
                }
            })
                input.forEach(inputs => {
                    inputs.addEventListener("input", event => {
                        textR.style.color = "#ccc"
                        if(event.target.value.length < 1) {
                            textR.style.color = ""
                        }
                    })
                })

            input[0].addEventListener('focus', ff => {
                labelReg[0].style.color = b
                input[0].addEventListener('input', i => {
                    if(ff.target.value.length > 0) {
                        labelReg[0].style.top = "5%"
                        labelReg[0].style.fontSize = "13px"
                    }else {
                        labelReg[0].style.top = "50%"
                        labelReg[0].style.fontSize = ""
                    }
                })
                })
                input[1].addEventListener('focus', ff => {
                    labelReg[1].style.color = b
                    input[1].addEventListener('input', i => {
                        if(ff.target.value.length > 0) {
                            labelReg[1].style.top = "5%"
                            labelReg[1].style.fontSize = "13px"
                        }else {
                            labelReg[1].style.top = "50%"
                            labelReg[1].style.fontSize = ""
                        }
                    })
                    })
            input[0].addEventListener("blur", b => {
                labelReg[0].style.color = ""
                if(b.target.value.length > 0) {
                    labelReg[0].style.top = "5%"
                    labelReg[1].style.fontSize = "13px"
                }else {
                    labelReg[0].style.top = "50%"
                }
            })
            input[1].addEventListener("blur", b => {
                labelReg[1].style = ""
                if(b.target.value.length > 0) {
                    labelReg[1].style.top = "5%"
                    labelReg[1].style.fontSize = "13px"
                }else {
                    labelReg[1].style.top = "50%"
                }
            })


            // la checkbox


            // check.checked ? check.classList.add("active") : check.classList.remove("active")


            // document.addEventListener("DOMContentLoaded", e => {
            //     let check = document.getElementById("registration_form_agreeTerms")
            //     if(check.checked) {
            //         alert("checked")
            //     }
            //     console.log(check);

            // })






