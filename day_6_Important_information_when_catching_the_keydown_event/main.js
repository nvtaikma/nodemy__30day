var ekey =document.querySelector('.card.key p:last-child')
var elocation =document.querySelector('.card.location p:last-child')
var ewhich =document.querySelector('.card.which p:last-child')
var ecode =document.querySelector('.card.code p:last-child')
var alerts = document.querySelector('.alerts')
var box = document.querySelector('.box')
var result = document.querySelector('.result')

document.addEventListener('keydown', e =>{
    ekey.innerText = e.key;
    elocation.innerText = e.location
    ewhich.innerText = e.which
    ecode.innerText = e.code
    result.innerText = e.code
    alerts.classList.add('hide')
    box.classList.remove('hide')
    
})