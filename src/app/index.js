import '../css/style.css'
import 'flickity/dist/flickity.min.css';
import "external-svg-loader";
import Flickity from 'flickity'

//Images
import '../static/images/favicon-32x32.png'
import '../static/images/avatar-ali.png'
import '../static/images/avatar-anisha.png'
import '../static/images/avatar-richard.png'
import '../static/images/avatar-shanai.png'

//Icons
import '../static/icons/bg-simplify-section-desktop.svg'
import '../static/icons/bg-simplify-section-mobile.svg'
import '../static/icons/bg-tablet-pattern.svg'
import '../static/icons/icon-close.svg'
import '../static/icons/icon-facebook.svg'
import '../static/icons/icon-hamburger.svg'
import '../static/icons/icon-instagram.svg'
import '../static/icons/icon-pinterest.svg'
import '../static/icons/icon-twitter.svg'
import '../static/icons/icon-youtube.svg'
import '../static/icons/illustration-intro.svg'
import '../static/icons/logo.svg'


//Form Event

const form = document.getElementById("formEmail")
const field = form["email"]
field.addEventListener("input",(e)=>{
	field.classList.remove("wrong-input")
})

form.addEventListener("submit",(e)=>{
	
    e.preventDefault()
	
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	
    const warning = form.querySelector('.warning')

    if(!field.value){
        warning.innerText = 'The field cannot be empty!'
        warning.classList.add("active-warning")
        setTimeout(()=>{
            warning.classList.remove("active-warning")
        }, 5000)
        return
    }

	if(!regexEmail.test(field.value)){
		field.classList.add("wrong-input")
		warning.classList.add("active-warning")
        warning.innerText = 'Please insert a valid email'
        setTimeout(()=>{
            warning.classList.remove("active-warning")
        }, 5000)
        return
	}
		warning.classList.remove("active-warning")
		alert("Email sent")
})

// nav state mobile
const showBar = (state) => {
    const header = document.getElementById("header")
    if (state){ 
        document.body.style.overflow = 'hidden' 
        header.classList.add('active')
        return
      }
    header.classList.remove('active')
    document.body.style.overflow = 'auto'
}


//Flickity

var flky = new Flickity( '.container-slider', {
    accessibility: true,
    adaptiveHeight: true,
    freeScroll: false,
    wrapAround: true,
    initialIndex:1,
    lazyLoad: false,
    draggable: true,
    prevNextButtons: false,
    pageDots: true,
    resize: true

});



window.showBar = showBar