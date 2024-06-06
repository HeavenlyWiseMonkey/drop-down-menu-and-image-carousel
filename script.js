const dropDownMenu = document.querySelector('.dropDownMenu');

dropDownMenu.addEventListener('click', () => {
    const dropDown = document.querySelector('.dropDown');
    if (dropDown.classList.contains('hidden')) {
        dropDown.classList.replace('hidden', 'visible');
    }
    else {
        dropDown.classList.replace('visible', 'hidden');
    }
});

const slide = document.querySelector('.slide');
const slideNodeList = slide.children;
let slideChildren = Array.from(slideNodeList);

function forward() {
    const Active = document.querySelector('.Active');
    const index = slideChildren.indexOf(Active);
    slideChildren[index].classList.replace('Active', 'Inactive');
    if (index < 4) {
        slideChildren[index+1].classList.replace('Inactive', 'Active');
        darken(index+1);
    }
    else {
        slideChildren[0].classList.replace('Inactive', 'Active');
        darken(0);
    }
}

function reverse() {
    const Active = document.querySelector('.Active');
    const index = slideChildren.indexOf(Active);
    slideChildren[index].classList.replace('Active', 'Inactive');
    if (index > 0) {
        slideChildren[index-1].classList.replace('Inactive', 'Active');
        darken(index-1);
    }
    else {
        slideChildren[4].classList.replace('Inactive', 'Active');
        darken(4);
    }
}

function darken(index) {
    for (let i=0; i<dots.length; i++) {
        dots[i].classList.remove('dark');
    }
    dots[index].classList.add('dark');
}

function goToSlide(index) {
    slideChildren[index].classList.replace('Inactive', 'Active');
}

const forwardButton = document.querySelector('.forwardButton');
forwardButton.addEventListener('click', () => {
    forward();
    clearInterval(forwardInterval);
    forwardInterval = setInterval(forward, 5000);
});

const reverseButton = document.querySelector('.reverseButton');
reverseButton.addEventListener('click', () => {
    reverse();
    clearInterval(forwardInterval);
    forwardInterval = setInterval(forward, 5000);
});

const dots = document.querySelectorAll('.dot');
for (let i=0; i<dots.length; i++) {
    dots[i].addEventListener('click', () => {
        const Active = document.querySelector('.Active');
        Active.classList.replace('Active', 'Inactive');
        darken(i);
        goToSlide(i);
        clearInterval(forwardInterval);
        forwardInterval = setInterval(forward, 5000);
    });
}

let forwardInterval = setInterval(forward, 5000);
