// SIDE-BAR
const wrapper = document.querySelector('#wrapper');

wrapper.addEventListener('click', good);

function good() {
    wrapper.classList.toggle('active');
    console.log('click')
}

// MENU-BAR
const menu = document.querySelector('.menu-icon');

menu.addEventListener('click', goodder);

function goodder() {
    document.querySelector('body').classList.toggle('active');
}

// DEPOSIT PAYMENT
const button = document.querySelector('.buttonss');
const shadow = document.querySelector('.shadow');
const payment = document.querySelector('.payment');
const closer = document.querySelector('.closer');
const btn2 = document.querySelector('.btn2');
const shallow = document.querySelector('#shallow');
const input5 = document.querySelector('#input5');
const depositss = document.querySelector('.transaction');
const depositTotal = document.querySelector('#deposit-total');
const copy = document.querySelector('.white-file #copy');
const blance = document.querySelector('#blanket');
const example = document.querySelector('.example');


button.addEventListener('click', blad);
closer.addEventListener('click', bladd);
btn2.addEventListener('click', bladder);
copy.addEventListener('click', bitcoin);
input5.addEventListener('keyup', bladdee);

function blad() {
    payment.classList.add('show');
    shadow.style.display = 'block';
}

function bladd() {
    payment.classList.remove('show');
    shadow.style.display = 'none';
}

function bladdee() {
    if(input5.value.length >= 4) {
        btn2.removeAttribute('disabled', '');
        btn2.classList.add('appear')
    }else {
        btn2.setAttribute('disabled', '');
        btn2.classList.remove('appear')
    }
}

function bladder() {
    let depositAmount = input5.value
    shallow.style.display = 'none';
    payment.classList.remove('show');
    shadow.style.display = 'none';
    depositss.style.display = 'block';
    depositTotal.innerText = ` $${depositAmount} BTC `;
    input5.value = '';
}

function bitcoin() {
    // console.log('working');
    example.select();
    copy.style.color = '#f7921a';
    if(document.execCommand('copy')) {

        setTimeout(() => {
            copy.style.color = '#8a8d93';
            window.getSelection().removeAllRanges();
        }, 2000);
    }
}

// UPLOAD OF IMAGES
const buttona = document.getElementById('button');
const img = document.getElementById('display');
const display_imag = document.querySelector('.display_imag');

buttona.addEventListener('change', punch);

function punch() {
    if(this.files[0].type!='image/jpeg' && this.files[0].type!='image/png' && this.files[0].type!='image/gif') {
        alert('Not an Image')
    } else {
        img.style.display = 'block';
        display_imag.style.display = 'block';
        img.src = URL.createObjectURL(this.files[0]);
    }
}

