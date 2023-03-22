const form = document.querySelector("#form")
const firstName = document.querySelector("#first-name")
const lastName = document.querySelector("#last-name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")

const span_name = document.querySelector(".span-name")
const span_last = document.querySelector(".span-last")
const span_email = document.querySelector(".span-email")
const span_password = document.querySelector(".span-password")

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    if(firstName.value == ''){
        firstName.classList.add('input-active')
        span_name.classList.add('span-active')
    } else {
        firstName.classList.remove('input-active')
        span_name.classList.remove('span-active')
    }
    if(lastName.value == ''){
        lastName.classList.add('input-active')
        span_last.classList.add('span-active')
    } else {
        lastName.classList.remove('input-active')
        span_last.classList.remove('span-active')
    }
    if(email.value == ''){
        email.classList.add('input-active')
        span_email.classList.add('span-active')
    } else {
        span_email.classList.remove('span-active')
        email.classList.remove('input-active')
    } 
    if(password.value == ''){
        password.classList.add('input-active')
        span_password.classList.add('span-active')
    } else {
        span_password.classList.remove('span-active')
        password.classList.remove('input-active')
    }
})