// Global variables while playing game
var wordArray = ["cortex", "ventricle", "cerebellum", "amygdala", "hippocampus", "splenium", "chiasm", "fornix", "commissure", "hypothalamus"]
var hintImage = ["assets/images/C.jpg", "assets/images/V.jpg", "assets/images/Cebe.jpg","assets/images/AC.jpg", "assets/images/pi.jpg", "assets/images/F.jpg", "assets/images/SI.jpg"];
var gameNumber = 1;
var wins = 0;
var losses = 0;
var wannaPlay = true;
var stopPlaying = false;

function playGame() {
    //Variables that exist for each game
    var currentWord = wordArray[(gameNumber - 1)];
    var currentHintPic = hintImage[(gameNumber - 1)];
    var coverArray = [];
    var splitWordArray = [];
    var guessesLeft = 10;
    var lettersGuessed = [];
    var choice;
    // function resetGame(){
    //     coverArray = [];
    //     guessesLeft = 10;
    //     lettersGuessed = [];
    //     choice = "";
    // }

    //Show hintImage for current game NOT WORKING
    console.log(currentHintPic);
    //document.getElementById("hintImageH").src = currentHintPic;

    // Split the mystery word into an array and show blank array so that player knows number of letters and show hint image WORKING
    for (i = 0; i < currentWord.length; i++) {
        splitWordArray[i] = currentWord.charAt(i);
        coverArray[i] = "|_|";
    };
    console.log(coverArray);
    //document.getElementById("currentWordH").innerHTML = coverArray.join(" ");
    //
    
    //}
    // Game starts once any key is pressed
    document.onkeypress = function (el) {
        
        //Make sure have guesses left
        if (guessesLeft > 0) {
            choice = el.key.toLowerCase();
            console.log(choice);
            if (currentWord.includes(choice)) {

                // Compare each array item to guessed letters
                for (j = 0; j < currentWord.length; j++) {
                    if (splitWordArray[j] == choice) {

                        //Show letters in array that match guessed letter
                        coverArray[j] = splitWordArray[j];
                        var joinedWorking = coverArray.join(" ");
                        document.getElementById("currentWordH").innerHTML = joinedWorking.toUpperCase();
                    };
                };

                //End game if all letters are guessed
                var joinedCover = coverArray.join("");
                var joinedCurrent = splitWordArray.join("");
                if (joinedCover == joinedCurrent) {
                    wins++;
                    document.getElementById("winsH").innerHTML = "WINS: " + wins;
                    alert("You WIN!");
                    wannaPlay = confirm("Play another game?");
                    if (wannaPlay) {
                        gameNumber++;
                        //currentWord = wordArray[(gameNumber - 1)];
                        // coverArray = [];
                        // guessesLeft = 10;
                        // lettersGuessed = [];
                        // choice = "";
                    } else {
                        stopPlaying = true;
                    };
                };

            } else {
                lettersGuessed.push(choice);
                document.getElementById("lettersGuessedH").innerHTML = lettersGuessed;
                guessesLeft--;
                document.getElementById("guessesLeftH").innerHTML = "GUESSES LEFT: " + guessesLeft;
            };

        } else {
            losses++;
            document.getElementById("lossesH").innerHTML = "LOSSES: " + losses;
            alert("No more guesses left.\nYou LOSE this game.");
            document.getElementById("currentWordH").innerHTML = splitWordArray.join(" ").toUpperCase();
            wannaPlay = confirm("Play another game?");
            if (wannaPlay) {
                gameNumber++;
                //currentWord = wordArray[(gameNumber - 1)];
                // coverArray = [];
                // guessesLeft = 10;
                // lettersGuessed = [];
                // choice = "";
            } else {
                stopPlaying = true;
            };
        };
    };
};

// Repeat game as indicated NOT WORKING PROPERLY

if(!stopPlaying){
    playGame();
} else {
    alert("We're done here!");
}