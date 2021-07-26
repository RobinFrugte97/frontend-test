const fixedImage = document.querySelector('#fixed-image')
const box = document.querySelector('#box')
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            fixedImage.style.position = 'fixed'
            fixedImage.style.marginTop = '0'
            box.style.marginTop = '1292px'
        } else {
            fixedImage.style.position = 'static'
            fixedImage.style.marginTop = '30em'
            box.style.marginTop = '0'
        }
        
    })
})

observer.observe(box)

const draggable = document.querySelector('.scrollContainer')
let clicked = false
let startX
let scrollLeft

draggable.addEventListener('mousedown', e => {
    clicked = true
    startX = e.pageX - draggable.offsetLeft
    scrollLeft = draggable.scrollLeft
})
draggable.addEventListener('mousemove', e => {
    if (!clicked) return
    const x = e.pageX - draggable.offsetLeft
    const moveX = (x - startX)
    draggable.scrollLeft = scrollLeft - moveX
})
draggable.addEventListener('mouseleave', () => {
    clicked = false
})
draggable.addEventListener('mouseup', () => {
    clicked = false
})

const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove',  e => {
    const x = e.clientX
    const y = e.clientY
    cursor.style.left = x + 'px'
    cursor.style.top = y + 'px'
})

const bigText = document.querySelector('.bigText')
const group = document.querySelector('.group')
const darkArea = document.querySelector('.scrollBar')
const asideImage = document.querySelector('.asideImage')
const header = document.querySelector("header")

bigText.addEventListener('mouseenter', e => {
    cursor.style.transform = 'scale(5)'
    cursor.style.opacity = '.2'
})

bigText.addEventListener('mouseleave', e => {
    cursor.style.transform = 'scale(1)'
    cursor.style.opacity = '1'
})

darkArea.addEventListener('mouseenter', e => {
    cursor.style.backgroundColor = '#fff'
    cursor.style.opacity = '1'
    cursor.style.mixBlendMode = "difference"
})

darkArea.addEventListener('mouseleave', e => {
    cursor.style.backgroundColor = '#000'
    cursor.style.opacity = '1'
    cursor.style.mixBlendMode = "normal"
})

header.addEventListener('mouseenter', e => {
    cursor.style.backgroundColor = '#fff'
    cursor.style.opacity = '1'
    cursor.style.mixBlendMode = "difference"
})

header.addEventListener('mouseleave', e => {
    cursor.style.backgroundColor = '#000'
    cursor.style.opacity = '1'
    cursor.style.mixBlendMode = "normal"
})

group.addEventListener('mouseenter', e => {
    cursor.style.backgroundColor = '#fff'
    cursor.style.opacity = '1'
    cursor.style.mixBlendMode = "difference"
    cursor.style.transform = 'scale(5)'
})

group.addEventListener('mouseleave', e => {
    cursor.style.backgroundColor = '#000'
    cursor.style.opacity = '1'
    cursor.style.mixBlendMode = "normal"
    cursor.style.transform = 'scale(1)'
})

draggable.addEventListener('mouseenter', e => {
    cursor.style.animation = "draggable 1s ease"
    cursor.style.transform = 'scale(5)'
    cursor.style.mixBlendMode = "difference"
})

draggable.addEventListener('mouseleave', e => {
    cursor.style.animation = "none"
    cursor.style.mixBlendMode = "normal"
    cursor.style.transform = 'scale(1)'
})

asideImage.addEventListener('mouseenter', e => {
    cursor.style.backgroundColor = '#fff'
    cursor.style.opacity = '1'
    cursor.style.mixBlendMode = "difference"
    cursor.style.transform = 'scale(5)'
})

asideImage.addEventListener('mouseleave', e => {
    cursor.style.backgroundColor = '#000'
    cursor.style.opacity = '1'
    cursor.style.mixBlendMode = "normal"
    cursor.style.transform = 'scale(1)'
})