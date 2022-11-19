console.log('ok');

		const eye = document.querySelector(".eye")
		const eyeoff = document.querySelector(".eyeoff")
		const passwordField = document.querySelector("input[type='password']")
        const caps = document.querySelector(".arrow")
        var text = document.querySelector(".notRegistered")
        const input = document.querySelectorAll("input")
		var isFocused = (document.activeElement === passwordField)
		eye.style.color = ""

            passwordField.addEventListener("focus", e => {
                eye.style.color = '#c20f3f'
                eyeoff.style.color = "#c20f3f"
                caps.style.color = "#c20f3f"
                eye.style.transition = "300ms"
                eyeoff.style.transition = '300ms'
            })
            passwordField.addEventListener("blur", e => {
                eye.style.color = ''
                eyeoff.style.color = ''
                caps.style.color = ""
                eye.style.transition = "300ms"
                eyeoff.style.transition = '300ms'

            })
            passwordField.addEventListener("keydown", (func) => {

                eye.style.display = "block"
                eye.addEventListener("click", ()=> {
                    eye.style.display = "none"
                    eyeoff.style.display = "block"
                    passwordField.type = "text"
                })
                eyeoff.addEventListener("click", () => {
                    eyeoff.style.display = "none"
                    eye.style.display = 'block'
                    passwordField.type = 'password'
                })
            })

// Changer l'affichage des logos
		const logo = document.querySelector(".FIG1")
		const logo2 = document.querySelector(".FIG2")
		const container = document.querySelector(".blocConnexionForm")

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
            container.getElementsByTagName.display = "block"
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
                    text.style.color = "#ccc"
                    if(event.target.value.length < 1) {
                        text.style.color = ""
                    }
                })
            })


//             import MagnetMouse from 'magnet-mouse';


// const magnetMouse = require('magnet-mouse');

// let mm = new MagnetMouse({
//     magnet: {
//         element: '.submit', /* Element to magnet */
//         enabled: true, /* Enables the magnet effect */
//         distance: 0, /* Distance (in px) when the magnet effect around element activates */
//         position: 'center' /* Position of mouse relative to the element when magnet effect is active */
//       },
//       follow: {
//         element: '.follow-mouse', /* Element that follows the mouse */
//       },
//       throttle: 10, /* Time (in ms) between each eventListener calls */
//       inCallback: null, /* Callback when mouse enters in the magnet effect */
//       outCallback: null /* Callback when mouse leaves in the magnet effect */
//     });
//   console.log(mm);
//   mm.init();