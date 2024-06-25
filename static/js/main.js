submit_landlordcontent = document.querySelector('.submitlandlordcontent')
submit_landlordcontent.onclick = landlordregistrationsuccessOpen;

button_reliable = document.querySelector('button.reliable');
button_reliable.onclick = phoneOpen;

button_start = document.querySelector('button.start')
button_start.onclick = phoneOpen;

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
        mask: /^[а-яА-Я -]+$/
});


function validate_phone() {
    btn = document.querySelector(`button.${this.name}`)
    if (!this.IMask.masked.isComplete) {
        //this.setCustomValidity('Некорректно введённый номер');
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
        /*if (this.classList[1] == 'landlordphone'){
            this.setCustomValidity('Некорректно введённый номер');
        } else {
            this.setCustomValidity('Некорректно введенно ФИО');
        }*/
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
        button.style.boxShadow = '0 0.75em 1em rgba(255, 132, 0, 0.4)';
        button.removeAttribute('disabled');
    }
    else {
        button.style.backgroundColor = noactiveButtonBackColor;
        button.style.color = noactiveButtonColor;
        button.style.boxShadow = 'none';
        button.setAttribute('disabled', true);
    }
});
