const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

function dynamicNavbar() {
    if ($(this).scrollTop() > (vh * 0.95)) {
        $('nav').removeClass('navbar-dark')
        $('nav').addClass('navbar-light')
        $('nav').addClass('scrolled')
    } else {
        $('nav').removeClass('navbar-light')
        $('nav').removeClass('scrolled')
        $('nav').addClass('navbar-dark')
    }
}

$(document).ready(() => {
    dynamicNavbar()

    $(window).scroll(() => {
        dynamicNavbar()
    })
})