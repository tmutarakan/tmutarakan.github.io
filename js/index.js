document.querySelector('.submityourapplication').onclick = landlordregistrationOpen;
document.querySelector('.buttonlandlordclose').onclick = landlordregistrationClose;

document.querySelector('.buttonhamburger').onclick = buttonHamburgerOpen;
document.querySelector('.buttonhamburgerclose').onclick = buttonHamburgerClose;


const checkbox = document.querySelector('.headercheckbox');
const nearby1 = document.querySelector('.nearby-1');
const nearby2 = document.querySelector('.nearby-2');
const nearby3 = document.querySelector('.nearby-3');
const nearby4 = document.querySelector('.nearby-4');
const nearby5 = document.querySelector('.nearby-5');

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


function landlordregistrationOpen() {
    header = document.querySelector('.header');
    menu = document.querySelector('.landlordregistration');
    header.style.display = 'none';
    menu.style.display = 'flex';
}


function landlordregistrationClose() {
    header = document.querySelector('.header');
    menu = document.querySelector('.landlordregistration');
    header.style.display = 'flex';
    menu.style.display = 'none';
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

nearby1.addEventListener('touchmove', () => { 
    nearby2.style.display = 'block';
    nearby1.style.display = 'none';
 });

 nearby2.addEventListener('touchmove', () => { 
    nearby3.style.display = 'block';
    nearby2.style.display = 'none';
 });

 nearby3.addEventListener('touchmove', () => { 
    nearby4.style.display = 'block';
    nearby3.style.display = 'none';
 });

 nearby4.addEventListener('touchmove', () => { 
    nearby5.style.display = 'block';
    nearby4.style.display = 'none';
 });

 nearby5.addEventListener('touchmove', () => { 
    nearby1.style.display = 'block';
    nearby5.style.display = 'none';
 });
