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

document.querySelector('a.a-header').onclick = sectionClose;
document.querySelector('a.a-works').onclick = sectionClose;
document.querySelector('a.a-nearby').onclick = sectionClose;
document.querySelector('a.a-cost').onclick = sectionClose;
document.querySelector('a.a-compare').onclick = sectionClose;
document.querySelector('a.a-questions').onclick = sectionClose;
document.querySelector('a.a-documents').onclick = sectionClose;


function sectionOpen() {
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
    window.location.hash = "#" + this.getAttribute('anchor_hash');
}
