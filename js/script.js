const nav = document.querySelector('nav');
const headerLogo = document.querySelector('.figure__header');
const menu = document.getElementById('menu');
const close = document.querySelector('.menu__img');
const grid = document.querySelector('.main__container');




menu.addEventListener('click', () =>{

    nav.classList.toggle('nav__list--active');

    if(nav.classList.contains('nav__list--active')){
        close.setAttribute('src', './assets/images/icon-menu-close.svg');
        headerLogo.style.filter = 'blur(2px)';
        grid.style.filter = 'blur(2px)';
    }else{
        close.setAttribute('src', './assets/images/icon-menu.svg');
        headerLogo.style.filter = 'blur(0px)';
        grid.style.filter = 'blur(0px)';
    }
});



