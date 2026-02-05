
let scoreMax = findGetParameter("score");
const gameContainerEl = document.querySelector(".game-container");
const errorMessageEl = document.querySelector('.error-message');
const corseTitleEl = document.querySelector("#score-title");
const rollEl = document.querySelector("#roll-count");
const rollBtnEl = document.querySelector("#roll-btn");
const plyerOneEl = document.querySelector(".right-container");
const plyerTowEl = document.querySelector(".left-container");
const p1ScoreEl = document.querySelector(".p1-score");
const p2ScoreEl = document.querySelector(".p2-score");
const p1CurrentScoreEl = document.querySelector(".p1-current-score");
const p2CurrentScoreEl = document.querySelector(".p2-current-score");
const dies1El = document.querySelector(".dies-1")
const dies2El = document.querySelector(".dies-2")
const newGameBtn = document.querySelector(".new-game");
const holdBtn = document.querySelector(".hold");

let playre1Score = 0;
let playre2Score = 0;
let playre1CurrentScore = 0;
let playre2CurrentScore = 0;
let countRoll = 5;
let turn = 0;



const diesImgs = ["../images/one.png", "../images/two.png", "../images/three.png", "../images/four.png", "../images/five.png", "../images/six.png"]
rollEl.textContent = countRoll;




corseTitleEl.textContent = `The max score is:${scoreMax}`;

function getRandomIndex() {
    return Math.floor(Math.random() * 5);
}

newGameBtn.addEventListener("click", () => {
    window.location.reload()
})

holdBtn.addEventListener("click", () => {
    console.log("hold clickd");
    countRoll = 5;
    if (turn === 1) {
        playre1Score = playre1CurrentScore;
        turn = 2;
        console.log(p1CurrentScoreEl.classList);

        p1CurrentScoreEl.classList.remove("turn")
        p2CurrentScoreEl.classList.add("turn")
    } else {
        playre2Score = playre2CurrentScore;
        turn = 1;
        p2CurrentScoreEl.classList.remove("turn")
        p1CurrentScoreEl.classList.add("turn")
    }
})

function startGame() {
    turn = getRamdomPlyaer();
    if (turn === 1) {
        plyerOneEl.classList.add("turn");


    } else if (turn === 2) {
        plyerTowEl.classList.add("turn")

    }
}
startGame();
rollBtnEl.addEventListener('click', () => {
    console.log("roll btn clicked");

    if (countRoll > 0 && playre1Score < scoreMax && playre2Score < scoreMax) {
        if (turn === 1) {
            let ranInx1 = getRandomIndex();
            let ranInx2 = getRandomIndex();

            dies1El.src = diesImgs[ranInx1 === 0 ? 0 : ranInx1 - 1];
            dies2El.src = diesImgs[ranInx2 === 0 ? 0 : ranInx2 - 1];

            if (ranInx1 !== ranInx2) {

                playre1CurrentScore += ranInx1;
                playre1CurrentScore += ranInx2;
                p1CurrentScoreEl.textContent = playre1CurrentScore

            } else {
                turn = 2;
            }
        } else {
            let ranInx1 = getRandomIndex();
            let ranInx2 = getRandomIndex();

            dies1El.src = diesImgs[ranInx1 === 0 ? 0 : ranInx1 - 1];
            dies2El.src = diesImgs[ranInx2 === 0 ? 0 : ranInx2 - 1];
            if (ranInx1 !== ranInx2) {

                playre2CurrentScore += ranInx1;
                playre2CurrentScore += ranInx2;
                p2CurrentScoreEl.textContent = playre2CurrentScore
            } else {
                turn = 1;
            }
        }
        countRoll -= 1;
        rollEl.textContent = countRoll;
    }
    if (playre1Score > scoreMax) {
        plyerOneEl.classList.remove('turn')
        plyerOneEl.classList.add('winner')
    } else if (playre2Score > scoreMax) {
        plyerTowEl.classList.remove('turn')
        plyerTowEl.classList.add('winner')
    }

})


function getRamdomPlyaer() {
    return Math.floor(Math.random() * 10) % 2 == 0 ? 1 : 2;
}

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







