////////////////////////////////////////////////////////////////////// Dark / Light theme
function changeTheme() {
    document.body.classList.toggle('dark')
}

document.querySelector('#theme-btn').addEventListener('click', changeTheme)


////////////////////////////////////////////////////////////////////// Copy to clipboard btn
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.style.display = 'none'
        btn.nextElementSibling.style.display = 'inline'

        setTimeout(() => {
            btn.style.display = 'flex'
            btn.nextElementSibling.style.display = 'none'
        }, 2000)
    })
})

// (in Code Box)
document.querySelectorAll('.copy-code-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.style.display = 'none'
        btn.nextElementSibling.style.display = 'inline'

        setTimeout(() => {
            btn.style.display = 'flex'
            btn.nextElementSibling.style.display = 'none'
        }, 2000)
    })
})


////////////////////////////////////////////////////////////////////// sidebar on mobile
// open
document.querySelector('#open-sidebar-btn').addEventListener('click', () => {
    document.querySelector('#overlay').style.display = 'block'
    document.querySelector('#close-sidebar-btn').style.display = 'block'

    setTimeout(() => {
        document.querySelector('#overlay').style.opacity = '1'
        document.querySelector('#sidebar').style.transform = 'translateX(0)'
        document.querySelector('#close-sidebar-btn').style.opacity = '1'
    }, 0)

    window.onclick = e => {
        if (!document.querySelector('#sidebar').contains(e.target) && !document.querySelector('#open-sidebar-btn').contains(e.target) && window.innerWidth <= 768) {
            closeSidebar()
        }
    }
})

// close
function closeSidebar() {
    document.querySelector('#overlay').style.opacity = '0'
    document.querySelector('#sidebar').style.transform = 'translateX(-100%)'
    document.querySelector('#close-sidebar-btn').style.opacity = '0'

    setTimeout(() => {
        document.querySelector('#overlay').style.display = 'none'
        document.querySelector('#close-sidebar-btn').style.display = 'none'
    }, 300)
}

document.querySelector('#close-sidebar-btn').addEventListener('click', closeSidebar)

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) document.querySelector('#sidebar').style.transform = 'translateX(0)'
    else document.querySelector('#sidebar').style.transform = 'translateX(-100%)'
})