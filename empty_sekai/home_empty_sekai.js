const niigoImg = document.querySelector('.niigo-logo');
const vsingerImg = document.querySelector('.v-singer-logo');
const leoneedImg = document.querySelector('.leoneed-logo');
const mmjImg = document.querySelector('.mmj-logo');
const vbsImg = document.querySelector('.vbs-logo');
const wxsImg = document.querySelector('.wxs-logo');
const iconMenu = document.querySelector('.icon-menu');
const iconClose = document.querySelector('.icon-close');
const wrapper = document.querySelector('.wrapper');

iconMenu.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});


niigoImg.addEventListener('click', ()=> {
    niigoImg.classList.add('active');
    vsingerImg.classList.remove('active');
    leoneedImg.classList.remove('active');
    mmjImg.classList.remove('active');
    vbsImg.classList.remove('active');
    wxsImg.classList.remove('active');
});

vsingerImg.addEventListener('click', ()=> {
    vsingerImg.classList.add('active');
    niigoImg.classList.remove('active');
    leoneedImg.classList.remove('active');
    mmjImg.classList.remove('active');
    vbsImg.classList.remove('active');
    wxsImg.classList.remove('active');
});

leoneedImg.addEventListener('click', ()=> {
    leoneedImg.classList.add('active');
    niigoImg.classList.remove('active');
    vsingerImg.classList.remove('active');
    mmjImg.classList.remove('active');
    vbsImg.classList.remove('active');
    wxsImg.classList.remove('active');
});

mmjImg.addEventListener('click', ()=> {
    mmjImg.classList.add('active');
    leoneedImg.classList.remove('active');
    niigoImg.classList.remove('active');
    vsingerImg.classList.remove('active');
    vbsImg.classList.remove('active');
    wxsImg.classList.remove('active');
});

vbsImg.addEventListener('click', ()=> {
    vbsImg.classList.add('active');
    niigoImg.classList.remove('active');
    vsingerImg.classList.remove('active');
    leoneedImg.classList.remove('active');
    mmjImg.classList.remove('active');
    wxsImg.classList.remove('active');
});

wxsImg.addEventListener('click', ()=> {
    wxsImg.classList.add('active');
    vbsImg.classList.remove('active');
    niigoImg.classList.remove('active');
    vsingerImg.classList.remove('active');
    leoneedImg.classList.remove('active');
    mmjImg.classList.remove('active');
});