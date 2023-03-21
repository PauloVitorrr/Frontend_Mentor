const form = document.querySelector("#form")
const firstName = document.querySelector("#first-name")
const lastName = document.querySelector("#lastName")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const span = document.querySelectorAll(".span-erro")


form.addEventListener('submit', function(event){
    event.preventDefault();

//     const teste = []
//     span.forEach(function(i){
//     const teste = [i]
//     console.log(teste)
// })

    console.log(span)

    if(firstName.value == ''){
        span.classList.remove('span-erro')
        span.classList.add('span-active')
    } else if(lastName.value == ''){
        span.classList.remove('span-erro')
        span.classList.add('span-active')
    } else if(email.value == ''){
        span.classList.remove('span-erro')
        span.classList.add('span-active')
    } else if(password.value == ''){
        span.classList.remove('span-erro')
        span.classList.add('span-active')
    }
})