document.querySelector('.submityourapplication').onclick = sectionOpen;
document.querySelector('.buttonlandlordclose').onclick = sectionClose;

document.querySelector('.buttonlandlordsuccessclose').onclick = sectionClose;

document.querySelector('.buttonexpectacallclose').onclick = sectionClose;

document.querySelector('.buttonstartacallclose').onclick = sectionClose;

document.querySelector('.buttonhamburger').onclick = sectionOpen;
document.querySelector('.buttonhamburgerclose').onclick = sectionClose;

document.querySelector('button.checktenants').onclick = sectionOpen;
document.querySelector('button.checktenantsclose').onclick = sectionClose;

document.querySelector('button.aboutcontract').onclick = sectionOpen;
document.querySelector('button.aboutcontractclose').onclick = sectionClose;

document.querySelector('button.aboutinsurance').onclick = sectionOpen;
document.querySelector('button.aboutinsuranceclose').onclick = sectionClose;

document.querySelector('button.aboutverification').onclick = sectionOpen;
document.querySelector('button.aboutverificationclose').onclick = sectionClose;

document.querySelector('button.prepareanapartment').onclick = sectionOpen;
document.querySelector('button.prepareanapartmentclose').onclick = sectionClose;

document.querySelector('button.inventoryofproperty').onclick = sectionOpen;
document.querySelector('button.inventoryofpropertyclose').onclick = sectionClose;

document.querySelector('button.beforephotographing').onclick = sectionOpen;
document.querySelector('button.beforephotographingclose').onclick = sectionClose;

document.querySelector('button.apartmentrentalagreement').onclick = sectionOpen;
document.querySelector('button.apartmentrentalagreementclose').onclick = sectionClose;


document.querySelector('a.a-header').onclick = sectionClose;
document.querySelector('a.a-works').onclick = sectionClose;
document.querySelector('a.a-nearby').onclick = sectionClose;
document.querySelector('a.a-cost').onclick = sectionClose;
document.querySelector('a.a-compare').onclick = sectionClose;
document.querySelector('a.a-questions').onclick = sectionClose;
document.querySelector('a.a-documents').onclick = sectionClose;

document.querySelector('button.reliable').onclick = phoneOpen;
document.querySelector('button.start').onclick = phoneOpen;

document.querySelector('.submitlandlordcontent').onclick = landlordregistrationsuccessOpen;


function sectionOpen() {
    sessionStorage.setItem('scrollPos', window.scrollY);
    main = document.querySelector('.main');
    section = document.querySelector(this.name);
    main.style.display = 'none';
    section.style.display = 'flex';
    document.documentElement.scrollIntoView(true);
}

function sectionClose() {
    main = document.querySelector('.main');
    section = document.querySelector(this.name);
    main.style.display = 'flex';
    section.style.display = 'none';
    window.scrollTo(0, sessionStorage.getItem('scrollPos') || 0);
}

function phoneOpen() {
    sessionStorage.setItem('scrollPos', window.scrollY);
    main = document.querySelector('.main');
    section = document.querySelector(this.name);
    main.style.display = 'none';
    section.style.display = 'flex';
    document.documentElement.scrollIntoView(true);

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
    /*sessionStorage.setItem('scrollPos', window.scrollY);*/
    curr = document.querySelector('.landlordregistration');
    menu = document.querySelector('.landlordregistrationsuccess');
    curr.style.display = 'none';
    menu.style.display = 'flex';
    /*document.documentElement.scrollIntoView(true);*/

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
