const transformer = document.querySelector('.transformer');
const controls = document.querySelector('.controls');

const bodyStyles = window.getComputedStyle(document.body);
let scale = bodyStyles.getPropertyValue('--scale');
let trX = bodyStyles.getPropertyValue('--trX');
let trY = bodyStyles.getPropertyValue('--trY');
let rotation = bodyStyles.getPropertyValue('--rotation');


function makeTransform(e) {
    
    if ( e.target.classList.contains('scale') ) {
     scale *= 1.05;
     transformer.style.setProperty('--scale', scale);
    }

    if ( e.target.classList.contains('rotate') ) {
        rotation = parseInt(rotation) + 20 + 'deg';
        transformer.style.setProperty('--rotation', rotation);
    }

    if ( e.target.classList.contains('movex') ) {
        trX = parseInt(trX) + 20 + 'px';
        transformer.style.setProperty('--trX', trX);
    }

    if ( e.target.classList.contains('movey') ) {
        trY = parseInt(trY) + 20 + 'px';
        transformer.style.setProperty('--trY', trY);
    }
}

controls.addEventListener('click', makeTransform);