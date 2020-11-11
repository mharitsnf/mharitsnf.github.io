const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

$(document).ready(() => {
    $(window).scroll(() => {
        if ($(this).scrollTop() > (vh * 0.9)) {
            $('nav').removeClass('navbar-dark')
            $('nav').addClass('navbar-light')
        } else {
            $('nav').removeClass('navbar-light')
            $('nav').addClass('navbar-dark')
        }

        $('nav').toggleClass('scrolled', $(this).scrollTop() > vh * 0.9)
    })
})