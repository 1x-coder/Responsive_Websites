let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}


$(document).ready(function() {
    $('.count').each(function(){
        $(this).prop('Counter', 0).animate({
            Counter:$(this).text()        
        },{
            duration: 3500,
            easing: 'swing',
            step : function (now){
                $(this).text(Math.ceil(now) + '+')
            }
        })
    });
});