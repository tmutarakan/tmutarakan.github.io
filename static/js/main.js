const checkbox = document.querySelector('.headercheckbox');

const activeButtonBackColor = '#ff8400';
const activeButtonColor = 'white';

const noactiveButtonBackColor = '#dcdcdc';
const noactiveButtonColor = '#b4b4b4';


document.querySelectorAll('[type="tel"]').forEach(function(element) {
    element.required = true;
    element.IMask = IMask(element, {
        mask: '+{7}(000)000-00-00'
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
