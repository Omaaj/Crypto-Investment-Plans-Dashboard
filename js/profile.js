
// UPDATE PHONE NUMBER 
const explore = document.querySelector('#explore');
const numbering = document.querySelector('#numbering');
const exporting = document.querySelector('#exporting');


explore.addEventListener('click', digout);

function digout() {
    let display_number = numbering.value;

    exporting.innerHTML = `${display_number}`;
    
    numbering.value = '';
}