//navbar toggle
const hamburguer = document.querySelector('.nav__dropdown')

hamburguer.addEventListener('click', () => {
    const list = document.querySelector('.nav__menulist')
    list.classList.toggle('toggle')
    const background = document.querySelector('.nav__dropdown--background')
    background.classList.toggle('toggle')
})

//change logo color
const logo = document.querySelector('.footer__box-1--logo')

logo.addEventListener('load', () => {
    const logopath = logo.contentDocument.querySelector('path')
    logopath.setAttribute('fill', '#fff')
})

//social media hover effect

const icons = document.querySelectorAll('.footer__box--icons')

icons.forEach(icons => {
    icons.addEventListener('mouseover', () => {
        let path = icons.querySelector('object').contentDocument.querySelector('path')
        path.setAttribute('fill', '#31d35c')
    })
    icons.addEventListener('mouseout', () => {
        let path = icons.querySelector('object').contentDocument.querySelector('path')
        path.setAttribute('fill', "#fff")
    })
})
