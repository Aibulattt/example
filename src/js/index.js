import '../css/style.scss'

document.addEventListener('DOMContentLoaded', () => {

    (function mobileMenu() {
        const burgerBtnEl = document.querySelector('.burger-btn');
        const navContainerEl = document.querySelector('.nav-container');
        const closeBtn = document.querySelector('.menu-close');
    
    burgerBtnEl.addEventListener('click', () => {
            navContainerEl.classList.toggle('mobile-menu');
            document.body.classList.add('body-pointer');
    })

    closeBtn.addEventListener('click', () => {
        navContainerEl.classList.remove('mobile-menu');
    })

    navContainerEl.addEventListener('click', (ev) => {
        if (ev.target.tagName === 'A') {
            navContainerEl.classList.remove('mobile-menu');
        }
    })

    document.body.addEventListener('click', (ev) => {
        if (!ev.target.classList.contains('burger-btn') && !ev.target.classList.contains('drop-list') ) {
            navContainerEl.classList.remove('mobile-menu');
        }
    })
    })();

    (function select() {

        const dropBtn = document.querySelector('.drop-list');
        const dropdown = document.querySelector('.dropdown');

        dropBtn.addEventListener('click', () => {
            dropdown.classList.toggle('dropdown-show');
        })

        document.body.addEventListener('click', (ev) => {
            if (!ev.target.classList.contains('drop-list') ) {
                dropdown.classList.remove('dropdown-show');
            }
        })

    })();
    


})