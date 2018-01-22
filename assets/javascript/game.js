var mascotArr = ['boilermakers', 'cornhuskers', 'wildcats', 'cardinal', 'gamecocks', 'hoosiers', 'volunteers', 'wolfpack', 'wolverines', 'midshipmen', 'mountaineers', 'hilltoppers', 'commodores', 'terrapins', 'jayhawks', 'buffaloes', 'seminoles', 'longhorns', 'razorbacks', 'argonauts','anteaters','ambassadors','artichokes','hardrockers','highlanders','hurricanes','ichabods','jackrabbits','leathernecks','lemmings','moundbuilders','muleriders','orediggers','platypi','quakers','railsplitters','roadrunners','roughnecks','sasquatch','thunderducks','tornadoes'];
var lives = 6;
var mysteryWord = mascotArr[Math.floor(Math.random() * mascotArr.length)];
var splitWord = mysteryWord.split('');
var splitLength = splitWord.length;

    console.log(mysteryWord, splitLength);

var blankArr = [''];

for (var i = 0; i < splitLength; i++) {
    // console.log(splitWord[i]);
    blankArr[i] = '_ ';
    // console.log(blankArr[i]);
}
var insertSpaces = document.getElementById('hiddenWordSpace');
var blankString = blankArr.toString();
insertSpaces.innerText = blankString;

var userGuessArr = [];


var guess = function(keyChoice) {
    var userGuess = keyChoice.key;
    // console.log(userGuess);
    userGuessArr.push(userGuess);
    // console.log(userGuessArr);
    var checkGuess = splitWord.indexOf(userGuess);
    // console.log(splitWord);
    if (checkGuess < 0) {
        lives -= 1
        // console.log('lives', lives);
    } else {
        for (a = 0; a < splitLength; a++) {
            blankArr[a] = userGuess.substr(a,1);
            console.log(userGuess.substr(a,1));
        }
        for (b = 0; b < splitLength; b++) {
            if (splitWord[b] == userGuess) {
            blankArr[b] = userGuess;
            }
        }
    }        
        
        

    
/*        function FindAll(splitWord, userGuess) {
            var letterMatch = [];
            for (var correctPosition = splitWord.indexOf(userGuess); correctPosition !== -1; correctPosition = splitWord.indexOf((userGuess), correctPosition + 1)) {
                letterMatch.push(correctPosition);
            }
            return letterMatch;
            console.log(letterMatch);
        } 

    }
*/


    var insertGuessed = document.getElementById('lettersGuessed');
    insertGuessed.innerText = userGuessArr;

    var insertLives = document.getElementById('guessRemain');
    insertLives.innerText = "Guesses Remaining : " + lives;

    if (lives <= 5) {
            var manHead = document.getElementById('headImg');
            manHead.style.visibility = 'visible';
    } if (lives <= 4) {
             var manTorso = document.getElementById('torsoImg');
             manTorso.style.visibility = 'visible';
    } if (lives <= 3) {
             var manLLeg = document.getElementById('LLegImg');
            manLLeg.style.visibility = 'visible';
    } if (lives <= 2) {
            var manRLeg = document.getElementById('RLegImg');
             manRLeg.style.visibility = 'visible';
    } if (lives <= 1) {
            var manLArm = document.getElementById('LArmImg');
             manLArm.style.visibility = 'visible';           
    } if (lives <= 0) {
            var manRArm = document.getElementById('RArmImg');
            manRArm.style.visibility = 'visible';
    }


}
   


    



 

document.addEventListener("keyup", guess);


    

