// var mascotArr = ['eagls']
var mascotArr = ['boilermakers', 'cornhuskers', 'wildcats', 'cardinal', 'gamecocks', 'hoosiers', 'volunteers', 'wolfpack', 'wolverines', 'midshipmen', 'mountaineers', 'hilltoppers', 'commodores', 'terrapins', 'jayhawks', 'buffaloes', 'seminoles', 'longhorns', 'razorbacks', 'argonauts','anteaters','ambassadors','artichokes','hardrockers','highlanders','hurricanes','ichabods','jackrabbits','leathernecks','lemmings','moundbuilders','muleriders','orediggers','platypi','quakers','railsplitters','roadrunners','roughnecks','sasquatch','thunderducks','tornadoes'];
var lives = 6;
var mysteryWord = mascotArr[Math.floor(Math.random() * mascotArr.length)];
var splitWord = mysteryWord.split('');
var splitLength = splitWord.length;
var winners = 0;

console.log(mysteryWord, splitWord);

var blankArr = [''];

for (var i = 0; i < splitLength; i++) {
    blankArr[i] = '_ ';
}

var insertSpaces = document.getElementById('hiddenWordSpace');
var blankString = blankArr.join("");
insertSpaces.innerText = blankString;

var userGuessArr = [];


var guess = function(keyChoice) {
    var userGuess = keyChoice.key;
    userGuessArr.push(userGuess);
    var checkGuess = splitWord.indexOf(userGuess);
    var spotWhereLetterFound = [];

    for(var i=0; i<splitWord.length;i++) {
        if (splitWord[i] === userGuess) spotWhereLetterFound.push(i);
    }
        if (checkGuess < 0) {
            lives -= 1
        } else {
            for ( i = 0; i < spotWhereLetterFound.length; i++) {
                blankArr.splice(spotWhereLetterFound[i],1,userGuess);
            }
            var fillSpaces = document.getElementById('hiddenWordSpace');
            fillSpaces.innerText = blankArr.join("");
        }
        // console.log('blank arr = ', blankArr.toString, 'split word:', splitWord.toString, 'lives:', lives);
        // console.log('is this true ???', blankArr.toString() === splitWord.toString());
       
        // console.log('these are the spots where we found the letter', spotWhereLetterFound);
        
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
    if ( blankArr.toString() == splitWord.toString() /*&& (lives > 0) */  ){
            winners += 1;
            console.log(blankArr.toString() == splitWord.toString());
    } 
}
var winCounter = document.getElementById('winCount');
winCounter.innerText = winners;



document.addEventListener("keyup", guess)


       
    



/////////// THIS IS ALL CRAP AND JUNK THAT DIDNT WORK;
        // for (a = 0; a < splitLength; a++) {
        //     blankArr[a] = userGuess.substr(a,1);
        //     console.log(userGuess.substr(a,1));
        // }
        // for (b = 0; b < splitLength; b++) {
        //     if (splitWord[b] == userGuess) {
        //     blankArr[b] = userGuess;
        //     }
        // }
            
        ///MORE CRAP
 /*   
      function FindAll(splitWord, userGuess) {
            var letterMatch = [];
            for (var correctPosition = splitWord.indexOf(userGuess); correctPosition !== -1; correctPosition = splitWord.indexOf((userGuess), correctPosition + 1)) {
                letterMatch.push(correctPosition);
            }
            return letterMatch;
            console.log(letterMatch);
        } 

    }
*/

