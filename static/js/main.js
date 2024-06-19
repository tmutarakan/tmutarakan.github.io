submit_landlordcontent = document.querySelector('.submitlandlordcontent')
submit_landlordcontent.onclick = landlordregistrationsuccessOpen;

button_reliable = document.querySelector('button.reliable');
button_reliable.onclick = phoneOpen;

button_start = document.querySelector('button.start')
button_start.onclick = phoneOpen;

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


const landlordname = document.querySelector('.landlordname');
const landlordphone = document.querySelector('.landlordphone');

landlordname.IMask = IMask(landlordname, {
        mask: /^[a-zA-Z -]+$/
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


function validate_landlord() {
    btn = document.querySelector(`button.${this.name}`)
    if (landlordname.value.length == 0 || !landlordphone.IMask.masked.isComplete) {
        if (this.classList[1] == 'landlordphone'){
            this.setCustomValidity('Некорректно введённый номер');
        } else {
            this.setCustomValidity('Некорректно введенно ФИО');
        }
        this.reportValidity();
        btn.setAttribute('disabled', true);
    } else {
        this.setCustomValidity('');
        btn.removeAttribute('disabled');
    }
}


document.querySelector('.landlordname').addEventListener('input', validate_landlord);
document.querySelector('input.landlordphone').addEventListener('input', validate_landlord);

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

function phoneOpen() {
    main = document.querySelector('.main');
    section = document.querySelector(this.name);
    main.style.display = 'none';
    section.style.display = 'flex';

    const url = document.URL;
    const div = document.querySelector(`div.${this.className}`);
    const phone = div.querySelector('input').value;
    const user = {
        "name": '',
        "phone": phone,
    };

    axios.post(url, user)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
}


function landlordregistrationsuccessOpen() {
    curr = document.querySelector('.landlordregistration');
    menu = document.querySelector('.landlordregistrationsuccess');
    curr.style.display = 'none';
    menu.style.display = 'flex';

    const url = document.URL;
    const name = document.querySelector('.landlordname').value;
    const phone = document.querySelector('.landlordphone').value;
    console.log(name);
    console.log(phone);
    const user = {
        "name": name,
        "phone": phone,
    };

    axios.post(url, user)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
}


setEventListener(checkbox, 'change', function() {
    button = document.querySelector('.submityourapplication')
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
