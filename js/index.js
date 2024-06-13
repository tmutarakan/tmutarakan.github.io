submit_landlordcontent = document.querySelector('.submitlandlordcontent')
submit_landlordcontent.onclick = landlordregistrationsuccessOpen;

button_reliable = document.querySelector('button.reliable');
button_reliable.onclick = sectionOpen;

button_start = document.querySelector('button.start')
button_start.onclick = sectionOpen;

document.querySelector('.submityourapplication').onclick = sectionOpen;
document.querySelector('.buttonlandlordclose').onclick = sectionClose;

document.querySelector('.buttonlandlordsuccessclose').onclick = sectionClose;

document.querySelector('.buttonexpectacallclose').onclick = sectionClose;

document.querySelector('.buttonstartacallclose').onclick = sectionClose;

document.querySelector('.buttonhamburger').onclick = sectionOpen;
document.querySelector('.buttonhamburgerclose').onclick = sectionClose;

document.querySelector('a.a-header').onclick = sectionClose;
document.querySelector('a.a-works').onclick = sectionClose;
document.querySelector('a.a-nearby').onclick = sectionClose;
document.querySelector('a.a-cost').onclick = sectionClose;
document.querySelector('a.a-compare').onclick = sectionClose;
document.querySelector('a.a-questions').onclick = sectionClose;
document.querySelector('a.a-documents').onclick = sectionClose;

document.querySelector('button.q-1').onclick = displayQuestion;
document.querySelector('button.q-2').onclick = displayQuestion;
document.querySelector('button.q-3').onclick = displayQuestion;
document.querySelector('button.q-4').onclick = displayQuestion;
document.querySelector('button.q-5').onclick = displayQuestion;
document.querySelector('button.q-6').onclick = displayQuestion;
document.querySelector('button.q-7').onclick = displayQuestion;


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


document.querySelectorAll('[type="tel"]').forEach(function(element) {
    element.required = true;
    element.IMask = IMask(element, {
        mask: '+{7}(900)000-00-00'
    });
});

 
function validate_phone() {
    btn = document.querySelector(`button.${this.name}`)
    if (!this.IMask.masked.isComplete) {
        this.setCustomValidity('Некорректно введённый номер');
        this.reportValidity();
        btn.setAttribute('disabled', true);
    } else {
        this.setCustomValidity('');
        btn.removeAttribute('disabled');
    }
}


document.querySelector('input.landlordphone').addEventListener('input', validate_phone);
document.querySelector('input.reliablephone').addEventListener('input', validate_phone);
document.querySelector('input.startphone').addEventListener('input', validate_phone);


function setEventListener(element, type, handler) {
    if (element.addEventListener) {
        element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + type, handler);
    }
}

function sectionOpen() {
    main = document.querySelector('.main');
    section = document.querySelector(this.name);
    main.style.display = 'none';
    section.style.display = 'flex';
}

function sectionClose() {
    main = document.querySelector('.main');
    section = document.querySelector(this.name);
    main.style.display = 'flex';
    section.style.display = 'none';
}


function landlordregistrationsuccessOpen() {
    curr = document.querySelector('.landlordregistration');
    menu = document.querySelector('.landlordregistrationsuccess');
    curr.style.display = 'none';
    menu.style.display = 'flex';
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
    if (Math.abs(xDiff) > Math.abs(yDiff) && xDiff > 0) {
        console.log(xDiff);
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
    const el_class = this.classList[1];
    content = document.querySelector(`div.${this.classList[1]}`);
    let num = el_class.slice(-1);
    head = document.querySelector(`div.qr-${num}`);
    button = document.querySelector(`button.q-${num}`);
    if (content.style.display == 'none' || content.style.display == '') {
        content.style.display = 'block';
        head.style.backgroundColor = '#306fff';
        head.style.color = 'white';
        head.style.borderRadius = '10rem';
        button.textContent = '✖';
    }
    else {
        content.style.display = 'none';
        head.style.backgroundColor = 'white';
        head.style.color = 'black';
        button.textContent = '+';
    }
}
