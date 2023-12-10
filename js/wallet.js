// WALLET
const keyss = document.querySelector('#keyss');
const stones = document.querySelector('#stones');
const keysstone = document.querySelector('#keysstone');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

keyss.addEventListener('click', phase);
stones.addEventListener('click', blacket);
keysstone.addEventListener('click', private);

function phase() {
    first.style.display = 'block';
    second.style.display = 'none';
    third.style.display = 'none';
    keyss.classList.add('phrase1');
    stones.classList.remove('keystone1');
    keysstone.classList.remove('private1');
}
function blacket() {
    first.style.display = 'none';
    second.style.display = 'block';
    third.style.display = 'none';
    keyss.classList.remove('phrase1');
    stones.classList.add('keystone1');
    keysstone.classList.remove('private1');
}
function private() {
    first.style.display = 'none';
    second.style.display = 'none';
    third.style.display = 'block';
    keyss.classList.remove('phrase1');
    stones.classList.remove('keystone1');
    keysstone.classList.add('private1');
}

// PASSWORD
const input3 = document.querySelector('#password3');
const showbtn3 = document.querySelector('#showbtn3');

input3.addEventListener('keyup', create);

function create() {

    if(input3.value !== '') {
        showbtn3.style.display = 'block';
        showbtn3.onclick = function() {
            if(input3.type === 'password') {
                input3.type = 'text';
                showbtn3.textContent = 'HIDE';
            }else {
                input3.type = 'password';
                showbtn3.textContent = 'SHOW'
            }
        }
    }else {
        showbtn3.style.display = 'none';
    }
}

// PHASE KEY
const input1 = document.querySelector('#input1');
const btnsone = document.querySelector('.btnsone');
const input2 = document.querySelector('#input2');
const btnstwo = document.querySelector('.btnstwo');
const input4 = document.querySelector('#input3');
const btnsthree = document.querySelector('.btnsthree');


input1.addEventListener('keyup', popup);
input2.addEventListener('keyup', popups);
input4.addEventListener('keyup', dashpop);



function popup() {
    if(input1.value.length >= 60) {
        btnsone.removeAttribute('disabled', '');
        btnsone.classList.add('appear')
    }else {
        btnsone.setAttribute('disabled', '');
        btnsone.classList.remove('appear')
    }
}

function popups() {
    if(input2.value.length === 64) {
        btnstwo.removeAttribute('disabled', '');
        btnstwo.classList.add('appear');

    }else {
        btnstwo.setAttribute('disabled', '');
        btnstwo.classList.remove('appear');
    }
}

function dashpop() {
    if(input4.value.length === 64) {
        btnsthree.removeAttribute('disabled', '');
        btnsthree.classList.add('appear');

    }else {
        btnsthree.setAttribute('disabled', '');
        btnsthree.classList.remove('appear');
    }
}
