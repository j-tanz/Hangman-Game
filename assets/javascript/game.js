var mascotArr = ['boilermakers', 'cornhuskers', 'wildcats', 'cardinal', 'gamecocks', 'hoosiers', 'volunteers', 'wolfpack', 'wolverines', 'midshipmen', 'mountaineers', 'hilltoppers', 'commodores', 'terrapins', 'jayhawks', 'buffaloes', 'seminoles', 'longhorns', 'razorbacks', 'argonauts', 'anteaters', 'ambassadors', 'artichokes', 'hardrockers', 'highlanders', 'hurricanes', 'ichabods', 'jackrabbits', 'leathernecks', 'lemmings', 'moundbuilders', 'muleriders', 'orediggers', 'platypi', 'quakers', 'railsplitters', 'roadrunners', 'roughnecks', 'sasquatch', 'thunderducks', 'tornadoes'];
var lives;
var winners = 0;
var userGuessArr = [];
var mysteryWord;
var splitWord;
var blankArr = [''];

var manHead = document.getElementById('headImg');
var manTorso = document.getElementById('torsoImg');
var manLLeg = document.getElementById('LLegImg');
var manRLeg = document.getElementById('RLegImg');
var manLArm = document.getElementById('LArmImg');
var manRArm = document.getElementById('RArmImg');
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

function newGame() {
    lives = 6;
    mysteryWord = mascotArr[Math.floor(Math.random() * mascotArr.length)];
    splitWord = mysteryWord.split('');
    blankArr = [''];
    userGuessArr = [];
    document.addEventListener('keyup', guess);

    for (var i = 0; i < splitWord.length; i++) {
        blankArr[i] = '_ ';
    }

    (document.getElementById('hiddenWordSpace')).innerText = blankArr.join("");
}

var guess = function (keyChoice) {
    var foundSpot = [];
    if ((keyChoice.keyCode >= 65 && keyChoice.keyCode <= 90)) {
        var userGuess = keyChoice.key;
    (function checkDupe() {
        var dupeGuess = userGuessArr.indexOf(userGuess);
        if (dupeGuess == -1) {
            renderLetter();
        } else { };
    })();
} else { };

    function renderLetter() {
        userGuessArr.push(userGuess);
        var checkGuess = splitWord.indexOf(userGuess);

        for (var i = 0; i < splitWord.length; i++) {
            if (splitWord[i] === userGuess) {
                foundSpot.push(i);
            }
        }
        if (checkGuess < 0) {
            lives -= 1;
        } else {
            for (i = 0; i < foundSpot.length; i++) {
                blankArr.splice(foundSpot[i], 1, userGuess);
            }
            (document.getElementById('hiddenWordSpace')).innerText = blankArr.join("");
        }
        (document.getElementById('lettersGuessed')).innerText = userGuessArr;
    }

    var insertLives = document.getElementById('guessRemain');
    insertLives.innerText = 'Guesses Remaining : ' + lives;

    if (lives <= 5) {
        manHead.style.visibility = 'visible';
    } if (lives <= 4) {
        manTorso.style.visibility = 'visible';
    } if (lives <= 3) {
        manLLeg.style.visibility = 'visible';
    } if (lives <= 2) {
        manRLeg.style.visibility = 'visible';
    } if (lives <= 1) {
        manLArm.style.visibility = 'visible';
    } if (lives <= 0) {
        manRArm.style.visibility = 'visible';
        loseGame();
    }
    if (blankArr.toString() == splitWord.toString() && (lives > 0)) {
        winGame();
    }
}

function loseGame() {
    modal.style.display = "block";
    document.removeEventListener('keyup', guess);
    (document.getElementById('appendMe')).innerHTML = '<p> YOU ARE HANGED.  The correct mascot was : </p>' + '<span>' + mysteryWord + '</span>';
}

function winGame() {
    winners += 1;
    var winCounter = document.getElementById('winCount');
    winCounter.innerText = winners;
    modal.style.display = "block";
    document.removeEventListener('keyup', guess);
    (document.getElementById('appendMe')).innerHTML = "<h2> CONGRATULATIONS, YOU WIN! </h2>"
}

function resetManImg() {
    manHead.style.visibility = 'hidden';
    manTorso.style.visibility = 'hidden';
    manLLeg.style.visibility = 'hidden';
    manRLeg.style.visibility = 'hidden';
    manLArm.style.visibility = 'hidden';
    manRArm.style.visibility = 'hidden';
    (document.getElementById('lettersGuessed')).innerText = [];
}

span.onclick = function() {
    modal.style.display = "none";
    resetManImg();
    newGame();
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        resetManImg();
        newGame();
    }
}

document.getElementById("closeModal").onclick = function () {
    modal.style.display = "none";
    resetManImg();
    newGame();
}

newGame();
