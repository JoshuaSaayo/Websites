const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const iconMenu = document.querySelector('.icon-menu');
const headerClose = document.querySelector('.close-header');
const wrapperHead = document.querySelector('.wrapper-header');

iconMenu.addEventListener('click', ()=> {
    wrapperHead.classList.add('active');
});

headerClose.addEventListener('click', ()=> {
    wrapperHead.classList.remove('active');
});

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});