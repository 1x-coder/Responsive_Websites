$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .menu, .header__block').toggleClass('active');
        $('body').toggleClass('lock');
        $('.menu').toggleClass('open');
    });

    $('.menu__link').click(function(event){
        $('.header__burger, .menu, .header__block').removeClass('active');
        $('body').removeClass('lock');
    });

    $('.faq__block--title').click(function (event) {
        if ($('.faq__block').hasClass('one')) {
            $('.faq__block--title').not($(this)).removeClass('active');
            $('.faq__block--text').not($(this).next()).slideUp(300);
        }

        $(this).toggleClass('active').next().slideToggle(300);
    });
});

// ==========================================================================================
const tabsBtn = document.querySelectorAll(".faq__tab-btn");
const tabsItems = document.querySelectorAll(".faq__inner");

tabsBtn.forEach(onTabClick);

document.querySelector('.faq__tab-btn').click();

function onTabClick(item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}