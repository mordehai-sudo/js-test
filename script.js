
const SCORE_TEY = 'SCORE';
const formElement = document.getElementById('myForm');
let score = document.querySelector("#score");
const h1 = document.getElementsByTagName('h1');
const gameContainerEl = document.querySelector(".game-container");
const errorMessage = document.querySelector('.error-message');
const corseTitle = document.querySelector("#score-title");

corseTitle.textContent = `The max score is:${score.value}`;



formElement.addEventListener('submit', function (event) {
    event.preventDefault();
    if (event.target.score.value === "") {
        errorMessage.textContent = "Max score is required"
    }
    console.log(event.target.score.value);
    localStorage.setItem(SCORE_TEY, event.target.score.value)
    window.location.href = "/game/game.html"
});





gameContainerEl.textContent = localStorage.getItem(SCORE_TEY) || "empty";