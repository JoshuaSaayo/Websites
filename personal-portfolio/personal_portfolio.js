let text = document.getElementById('text');
let sakura = document.getElementById('sakura');
let petals = document.getElementById('petals');
let raiden = document.getElementById('raiden');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    sakura.style.left = value * 1.5 + 'px';
    raiden.style.left = value * -1.5 + 'px';
    petals.style.top = value * -1.5 + 'px';
    petals.style.left = value * -1.5 + 'px';
});

