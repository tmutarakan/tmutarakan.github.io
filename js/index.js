document.querySelector('.submityourapplication').onclick = landlordregistrationOpen;
document.querySelector('.buttonlandlordclose').onclick = landlordregistrationClose;

document.querySelector('.buttonhamburger').onclick = buttonHamburgerOpen;
document.querySelector('.buttonhamburgerclose').onclick = buttonHamburgerClose;

document.querySelector('button.q-1').onclick = displayQuestion;


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



nearby1.addEventListener("touchstart", handleTouchStart, false);
nearby1.addEventListener("touchmove", handleTouchMove, false);

nearby2.addEventListener("touchstart", handleTouchStart, false);
nearby2.addEventListener("touchmove", handleTouchMove, false);

nearby3.addEventListener("touchstart", handleTouchStart, false);
nearby3.addEventListener("touchmove", handleTouchMove, false);

nearby4.addEventListener("touchstart", handleTouchStart, false);
nearby4.addEventListener("touchmove", handleTouchMove, false);

nearby5.addEventListener("touchstart", handleTouchStart, false);
nearby5.addEventListener("touchmove", handleTouchMove, false);

let xDown = null, yDown = null;

// Фиксируем изначальные координаты прикосновения
function handleTouchStart(evt) {
    const { clientX, clientY } = evt.touches[0];
    xDown = clientX; yDown = clientY;
}

// Отслеживаем движение пальца и определяем направление свайпа
function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return; // Если изначальные координаты не зафиксированы, прекращаем выполнение
    }

    const { clientX, clientY } = evt.touches[0];

    const xDiff = xDown - clientX;
    const yDiff = yDown - clientY;

    // Вычисляем, был ли свайп выполнен по горизонтали или вертикали
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        this.style.display = 'none';
        switch(this.className) {
            case 'nearby-1':  // if (x === 'value1')
                nearby2.style.display = 'block';
                break;
            case 'nearby-2':  // if (x === 'value1')
                nearby3.style.display = 'block';
                break;
            case 'nearby-3':  // if (x === 'value1')
                nearby4.style.display = 'block';
                break;
            case 'nearby-4':  // if (x === 'value1')
                nearby5.style.display = 'block';
                break;
            case 'nearby-5':  // if (x === 'value1')
                nearby1.style.display = 'block';
                break;
        }
    }

    // Обнуляем координаты после распознавания свайпа
    xDown = yDown = null;
}


 function displayQuestion() {
    content = document.querySelector(`div.${this.classList[1]}`);
    if (content.style.display === 'none')
        content.style.display = 'block';
    else
        content.style.display = 'none';
}
