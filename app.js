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


