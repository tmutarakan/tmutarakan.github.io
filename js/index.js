document.querySelector('.submityourapplication').onclick = myFunction;
document.querySelector('.buttonhamburger').onclick = buttonHamburgerOpen;
document.querySelector('.buttonhamburgerclose').onclick = buttonHamburgerClose;


const checkbox = document.querySelector('.headercheckbox');

const activeButtonBackColor = '#ff8400';
const activeButtonColor = 'white';

const noactiveButtonBackColor = '#dcdcdc';
const noactiveButtonColor = '#b4b4b4';


function setEventListener(element, type, handler) {
    if (element.addEventListener) {
        element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + type, handler);
    }
}


function buttonHamburgerOpen() {
    header = document.querySelector('.header');
    menu = document.querySelector('.menu');
    header.style.display = 'none';
    menu.style.display = 'flex';
}


function buttonHamburgerClose() {
    header = document.querySelector('.header');
    menu = document.querySelector('.menu');
    header.style.display = 'flex';
    menu.style.display = 'none';
}


function myFunction() {
    alert('Вы нажали на кнопку!');
}


setEventListener(checkbox, 'change', function() {
    button = document.querySelector('.submityourapplication')
    console.log(button.style.backgroundColor);
    if (this.checked) {
        button.style.backgroundColor  = activeButtonBackColor;
        button.style.color = activeButtonColor;
        button.style.boxShadow = '0 0.5em 0.1em rgba(255, 132, 0, 0.4)';
        button.removeAttribute('disabled');
    }
    else {
        button.style.backgroundColor = noactiveButtonBackColor;
        button.style.color = noactiveButtonColor;
        button.style.boxShadow = 'none';
        button.setAttribute('disabled', true);
    }
});
