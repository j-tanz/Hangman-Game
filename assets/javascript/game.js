var mascotArr = ['boilermakers', 'cornhuskers', 'wildcats', 'cardinal', 'gamecocks', 'hoosiers', 'volunteers', 'wolfpack', 'wolverines', 'midshipmen', 'mountaineers', 'hilltoppers', 'commodores', 'terrapins', 'jayhawks', 'buffaloes', 'seminoles', 'longhorns', 'razorbacks', 'argonauts','anteaters','ambassadors','artichokes','hardrockers','highlanders','hurricanes','ichabods','jackrabbits','leathernecks','lemmings','moundbuilders','muleriders','orediggers','platypi','quakers','railsplitters','roadrunners','roughnecks','sasquatch','thunderducks','tornadoes'];
var lives = 6;
var mysteryWord = mascotArr[Math.floor(Math.random() * mascotArr.length)];
var splitWord = mysteryWord.split('');
var winners = 0;
var blankArr = [''];

// Removed all Console.logs except this mysteryWord log so that Word can be easily discerned from console;
console.log(mysteryWord);

for (var i = 0; i < splitWord.length; i++) {
    blankArr[i] = '_ ';
}
/*Pseudo code: 

Need a function newgame() to choose new word and start new game; however
trying to implement this broke my variables scope.  Then a callback to "newGame" could be
called after my win and loss conditions.

*/
var insertSpaces = document.getElementById('hiddenWordSpace');
var blankString = blankArr.join("");
insertSpaces.innerText = blankString;

var userGuessArr = [];

var guess = function(keyChoice) {
    var userGuess = keyChoice.key;
    userGuessArr.push(userGuess);
    var checkGuess = splitWord.indexOf(userGuess);
    var foundSpot = [];

    for(var i=0; i<splitWord.length;i++) {
        if (splitWord[i] === userGuess) foundSpot.push(i);
    }
        if (checkGuess < 0) {
            lives -= 1
        } else {
            for ( i = 0; i < foundSpot.length; i++) {
                blankArr.splice(foundSpot[i],1,userGuess);
            }
            var fillSpaces = document.getElementById('hiddenWordSpace');
            fillSpaces.innerText = blankArr.join("");
        }
/*
Need Dupe check test.  something like:
// var dupeGuess = userGuessArr.indexOf(userGuess);
// if (dupeGuess = -1){  etc }
couldnt get to work.  guessed letter array either broke or would be delayed by 1 input which made no sence.   
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
                // NEEDS loss designation,  and then call "newGame" function 
        }
    if ( blankArr.toString() == splitWord.toString() && (lives > 0)) {
        winners +=1;
        console.log("did player win game?", blankArr.toString() == splitWord.toString());
        var winCounter = document.getElementById('winCount');
        winCounter.innerText = winners;
    }     
}
/*
Needs check to see if key is letter only
*/
document.addEventListener("keyup", guess)




