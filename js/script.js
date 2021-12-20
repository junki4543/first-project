let curPos = 0;
let positionValue =  0;
const IMAGE_WIDTH = 600;

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const images = document.querySelector('.images');

function next() {
    if(curPos < 3) {
        prevBtn.removeAttribute('disabled');
        positionValue -= IMAGE_WIDTH;
        images.style.transform = `translateX(${positionValue}px)`;
        curPos += 1;
    }
    if(curPos === 3) {
        nextBtn.setAttribute('disabled','true');
    }
}

function prev() {
    if(curPos > 0) {
        nextBtn.removeAttribute('disabled');
        positionValue += IMAGE_WIDTH;
        images.style.transform = `translateX(${positionValue}px)`;
        curPos -= 1;
    }
    if(curPos === 0) {
        prevBtn.setAttribute('disabled','true');
    }
}

function init() {
    prevBtn.setAttribute('disabled','true');
    prevBtn.addEventListener('click',prev);
    nextBtn.addEventListener('click',next);
}

init();