var mascotArr = ['boilermakers', 'cornhuskers', 'wildcats', 'cardinal', 'gamecocks', 'hoosiers', 'volunteers', 'wolfpack', 'wolverines', 'midshipmen', 'mountaineers', 'hilltoppers', 'commodores', 'terrapins', 'jayhawks', 'buffaloes', 'seminoles', 'longhorns', 'razorbacks', 'argonauts'];
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


var guess = function(keyChoice) {
    var userGuess = keyChoice.key;
    // console.log(userGuess);
    var checkGuess = splitWord.indexOf(userGuess);
    // console.log(checkGuess);
    if (checkGuess < 0) {
        lives -= 1
        console.log('lives', lives);
    } else {
/*        function FindAll(splitWord, userGuess) {
            var letterMatch = [];
            for (var correctPosition = splitWord.indexOf(userGuess); correctPosition !== -1; correctPosition = splitWord.indexOf((userGuess), correctPosition + 1)) {
                letterMatch.push(correctPosition);
            }
            return letterMatch;
            console.log(letterMatch);
        } 
*/
    }





    var insertLives = document.getElementById('guessRemain');
    insertLives.innerText = "Guesses Remaining : " + lives;
    
}
   


    



 

document.addEventListener("keyup", guess);


    

