// KYC_VERIFICATION
const country = document.querySelector('#country');
const usa = document.querySelector('#usa');
const usa4 = document.querySelector('#usa4');
const usa2 = document.querySelector('#usa2');
const usa3 = document.querySelector('#usa3');
const american = document.querySelector('.american');
const germany = document.querySelector('.germany');
const europe = document.querySelector('.europe');
const france = document.querySelector('.france');
const select_para = document.querySelector('#select');

country.addEventListener('change', flager);

function flager() {
    var figuress = country.value;

    if(figuress === 'english') {
        usa.style.display = 'block';
        american.style.display = 'block';
        select_para.style.display = 'none';
        germany.style.display = 'none';
        usa4.style.display = 'none';
        europe.style.display = 'none';
        usa2.style.display = 'none';
        france.style.display = 'none';
        usa3.style.display = 'none';
    }else if(figuress === 'select') {
        select_para.style.display = 'block';
        usa.style.display = 'none';
        usa4.style.display = 'none';
        american.style.display = 'none';
        germany.style.display = 'none';
        europe.style.display = 'none';
        usa2.style.display = 'none';
        france.style.display = 'none';
        usa3.style.display = 'none';
    }else if(figuress === 'germany') {
        select_para.style.display = 'none';
        usa.style.display = 'none';
        usa4.style.display = 'block';
        american.style.display = 'none';
        germany.style.display = 'block';
        europe.style.display = 'none';
        usa2.style.display = 'none';
        france.style.display = 'none';
        usa3.style.display = 'none';
    }else if(figuress === 'europe') {
        select_para.style.display = 'none';
        usa.style.display = 'none';
        usa4.style.display = 'none';
        american.style.display = 'none';
        germany.style.display = 'none';
        europe.style.display = 'block';
        usa2.style.display = 'block';
        france.style.display = 'none';
        usa3.style.display = 'none';
    }else if(figuress === 'france') {
        select_para.style.display = 'none';
        usa.style.display = 'none';
        usa4.style.display = 'none';
        american.style.display = 'none';
        germany.style.display = 'none';
        europe.style.display = 'none';
        usa2.style.display = 'none';
        france.style.display = 'block';
        usa3.style.display = 'block';
    }

}

// UPLOAD OF VERIFICATION USA ID
const buttonas = document.getElementById('button');
const imgs = document.getElementById('display');
const display1 = document.querySelector('.display1');
const display_imags = document.querySelector('.display_imag');
const display_imag1 = document.querySelector('#display_imag1');
const buton1 = document.querySelector('.buton1');

buttonas.addEventListener('change', punch);
buton1.addEventListener('change', punchers);

function punch() {
    if(this.files[0].type!='image/jpeg' && this.files[0].type!='image/png' && this.files[0].type!='image/gif') {
        alert('Not an Image')
    } else {
        imgs.style.display = 'block';
        display_imags.style.display = 'block';
        imgs.src = URL.createObjectURL(this.files[0]);
    }
}

function punchers() {
    if(this.files[0].type!='image/jpeg' && this.files[0].type!='image/png' && this.files[0].type!='image/gif') {
        alert('Not an Image')
    } else {
        display1.style.display = 'block';
        display_imag1.style.display = 'block';
        display1.src = URL.createObjectURL(this.files[0]);
    }
}


// UPLOAD OF VERIFICATION GERMANY ID
const solid = document.querySelector('.solid');
const basicss = document.querySelector('#basicss');
const pitch = document.querySelector('.pitch');
const placers = document.querySelector('.placers');
const disputter = document.querySelector('#disputter');
const pointer = document.querySelector('.pointer');

solid.addEventListener('change', ident);
placers.addEventListener('change', identity);

function ident() {
    if(this.files[0].type!='image/jpeg' && this.files[0].type!='image/png' && this.files[0].type!='image/gif') {
        alert('Not an Image')
    } else {
        pitch.style.display = 'block';
        basicss.style.display = 'block';
        pitch.src = URL.createObjectURL(this.files[0]);
    }
}
function identity() {
    if(this.files[0].type!='image/jpeg' && this.files[0].type!='image/png' && this.files[0].type!='image/gif') {
        alert('Not an Image')
    } else {
        pointer.style.display = 'block';
        disputter.style.display = 'block';
        pointer.src = URL.createObjectURL(this.files[0]);
    }
}


// UPLOAD OF VERIFICATION EUROPE ID
const solid1 = document.querySelector('.solid1');
const basicss1 = document.querySelector('#basicss1');
const pitch1 = document.querySelector('.pitch1');
const placers1 = document.querySelector('.placers1');
const disputter1 = document.querySelector('#disputter1');
const pointer1 = document.querySelector('.pointer1');

solid1.addEventListener('change', disla);
placers1.addEventListener('change', dsilayer);

function disla() {
    if(this.files[0].type!='image/jpeg' && this.files[0].type!='image/png' && this.files[0].type!='image/gif') {
        alert('Not an Image')
    } else {
        pitch1.style.display = 'block';
        basicss1.style.display = 'block';
        pitch1.src = URL.createObjectURL(this.files[0]);
    }
}
function dsilayer() {
    if(this.files[0].type!='image/jpeg' && this.files[0].type!='image/png' && this.files[0].type!='image/gif') {
        alert('Not an Image')
    } else {
        pointer1.style.display = 'block';
        disputter1.style.display = 'block';
        pointer1.src = URL.createObjectURL(this.files[0]);
    }
}


// UPLOAD OF VERIFICATION FRANCE ID
const solid2 = document.querySelector('.solid2');
const basicss2 = document.querySelector('#basicss2');
const pitch2 = document.querySelector('.pitch2');
const placers2 = document.querySelector('.placers2');
const disputter2 = document.querySelector('#disputter2');
const pointer2 = document.querySelector('.pointer2');
const solid3 = document.querySelector('.solid3');
const basicss3 = document.querySelector('#basicss3');
const pitch3 = document.querySelector('.pitch3');
const placers3 = document.querySelector('.placers3');
const disputter3 = document.querySelector('#disputter3');
const pointer3 = document.querySelector('.pointer3');

solid2.addEventListener('change', parista);
placers2.addEventListener('change', placcera);
solid3.addEventListener('change', disployerss);
placers3.addEventListener('change', employe);

function parista() {
    if(this.files[0].type!='image/jpeg' && this.files[0].type!='image/png' && this.files[0].type!='image/gif') {
        alert('Not an Image')
    } else {
        pitch2.style.display = 'block';
        basicss2.style.display = 'block';
        pitch2.src = URL.createObjectURL(this.files[0]);
    }
}
function placcera() {
    if(this.files[0].type!='image/jpeg' && this.files[0].type!='image/png' && this.files[0].type!='image/gif') {
        alert('Not an Image')
    } else {
        pointer2.style.display = 'block';
        disputter2.style.display = 'block';
        pointer2.src = URL.createObjectURL(this.files[0]);
    }
}

function disployerss() {
    if(this.files[0].type!='image/jpeg' && this.files[0].type!='image/png' && this.files[0].type!='image/gif') {
        alert('Not an Image')
    } else {
        pitch3.style.display = 'block';
        basicss3.style.display = 'block';
        pitch3.src = URL.createObjectURL(this.files[0]);
    }
}
function employe() {
    if(this.files[0].type!='image/jpeg' && this.files[0].type!='image/png' && this.files[0].type!='image/gif') {
        alert('Not an Image')
    } else {
        pointer3.style.display = 'block';
        disputter3.style.display = 'block';
        pointer3.src = URL.createObjectURL(this.files[0]);
    }
}