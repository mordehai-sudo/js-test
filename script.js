
const SCORE_TEY = 'SCORE';
const formElement = document.getElementById('myForm');
let score = findGetParameter("score");
const h1 = document.getElementsByTagName('h1');
const gameContainerEl = document.querySelector(".game-container");
const errorMessage = document.querySelector('.error-message');
const corseTitle = document.querySelector("#score-title");
const rollEl = document.querySelector("#roll-count");
const rollBtnEl = document.querySelector("#roll-btn");
let ramdomnumber1 = Math.floor(Math.random() * 6);
let ramdomnumber2 = Math.floor(Math.random() * 6);
let countRoll = 5;
const diesImgs = ["../images/one.png", "../images/five.png", "../images/six.png"]
rollEl.textContent = countRoll;

corseTitle.textContent = `The max score is:${score}`;



rollBtnEl.addEventListener('click', () => {
    console.log(countRoll);
    if (countRoll > 0) {

        countRoll -= 1;
        rollEl.textContent = countRoll;
    }

})

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}
console.log(findGetParameter("score"));


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