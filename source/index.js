import getYesOrNo from '../source/get-yes-or-no.js';
//DOM elements
const flipButton = document.getElementById('flip-button');
const coinImage = document.getElementById('coin-image');
//Event listener
flipButton.addEventListener('click', () => {
    const randomNumber = Math.random();
    const flip = getYesOrNo (randomNumber);

    const imageSource = './assets/' + flip + '.jpg';
    coinImage.src = imageSource;
});





