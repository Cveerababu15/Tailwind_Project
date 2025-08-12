const hamburger=document.querySelector("#hamburger")
let menu=document.querySelector("#menu")
let close=document.querySelector("#wrong")
console.log(menu)
hamburger.addEventListener('click',()=>{
    menu.classList.toggle('active')
})