document.querySelector('button.q-1').onclick = displayQuestion;
document.querySelector('button.q-2').onclick = displayQuestion;
document.querySelector('button.q-3').onclick = displayQuestion;
document.querySelector('button.q-4').onclick = displayQuestion;
document.querySelector('button.q-5').onclick = displayQuestion;
document.querySelector('button.q-6').onclick = displayQuestion;
document.querySelector('button.q-7').onclick = displayQuestion;


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
