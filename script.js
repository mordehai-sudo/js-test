
const SCORE_TEY = 'SCORE';
const formElement = document.getElementById('myForm');
let score = document.querySelector("#score");
const h1 = document.getElementsByTagName('h1');
const gameContainerEl = document.querySelector(".game-container");
const errorMessage = document.querySelector('.error-message');
// errorMessage.textContent = "Max score is required"


formElement.addEventListener('submit', function (event) {
    event.preventDefault();
    if (event.target.score.value === "") {
        // alert("Max score is required")
        errorMessage.textContent = "Max score is required"
    }
    console.log(event.target.score.value);
    localStorage.setItem(SCORE_TEY, event.target.score.value)
    window.location.href = "/game/game.html"


});

window.location.



gameContainerEl.textContent = localStorage.getItem(SCORE_TEY) || "empty";