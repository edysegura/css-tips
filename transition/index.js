'use strict'

const node = document.querySelector('.hello')

node.addEventListener('click', (event) => {
    event.target.classList.add('hello-active')
})

node.addEventListener('transitionend', (event) => {
    event.target.classList.remove('hello-active')
})
