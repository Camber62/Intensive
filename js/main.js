const buttonAuth = document.querySelector('.button-auth')
const modalAuth = document.querySelector('.modal-auth')
const closeAuth = document.querySelector('.close-auth')
const logInForm = document.getElementById('logInForm')




buttonAuth.addEventListener('click',()=>
    modalAuth.style.display = 'flex'
)

closeAuth.addEventListener('click',()=>
    modalAuth.style.display = 'none'
)
logInForm.addEventListener('s',()=>
    modalAuth.style.display = 'none'
)