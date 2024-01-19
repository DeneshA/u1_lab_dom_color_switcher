// Write your DOM code here!

//document.addEventListener("DOMContentLoaded", function () {

const redLi =  document.querySelector('.red')
redLi.addEventListener('click',() => {
    document.body.style.background="red"
})

const whiteLi = document.querySelector('.white')
whiteLi.addEventListener('click',() => { 
    //document.body.classList.toggle="white"
    document.body.style.background="white"
})

const blueLi = document.querySelector('.blue')
blueLi.addEventListener('click', () => {
    // if (document.body.classList.contains("blue")){
    //     document.body.classList.remove("blue")
    // }else {
    // document.body.classList.add("blue")

    //document.body.classList.toggle('blue')
    document.body.style.background="blue"
}
)

const yelloLi =  document.querySelector('.yellow')
yelloLi.addEventListener('click',() => {
    document.body.style.background="yellow"
})

//})