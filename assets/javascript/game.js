// Global variables while playing game
var wordArray = ["cortex", "ventricle", "cerebellum", "amygdala", "hippocampus", "splenium", "chiasm", "fornix", "commissure", "hypothalamus"]
var gameNumber = 8;
var wins = 0;
var losses = 0;
var wannaPlay = false;


wannaPlay=confirm("Ready to Play?");
if (wannaPlay) {
    //Variables that exist for each game
    var currentWord = wordArray[(gameNumber-1)];
    var coverArray = [];
    var splitWordArray = [];
    var guessesLeft = 10;
    var lettersGuessed = [];
    var choice;

    // Split the mystery word into an array and show blank array so that player knows number of letters NOT WORKING
    for (i = 0; i < currentWord.length; i++) {
        splitWordArray[i] = currentWord.charAt(i);
        coverArray[i] = "|_|";
    }

    // Game starts once any key is pressed
    document.onkeypress = function (el) {
        //Make sure have guesses left
        if (guessesLeft > 0) {
            choice = el.key.toLowerCase();
            if (currentWord.includes(choice)) {

                // Compare each array item to guessed letter
                for (j = 0; j < currentWord.length; j++) {
                    if (splitWordArray[j] == choice) {

                        //Show letters in array that match guessed letter
                        coverArray[j] = splitWordArray[j];
                        var joinedWorking = coverArray.join(" ");
                        document.getElementById("currentWordH").innerHTML = joinedWorking.toUpperCase();
                    }
                }

                //End game if all letters are guessed
                var joinedCover = coverArray.join("");
                var joinedCurrent = splitWordArray.join("");
                if (joinedCover==joinedCurrent) {
                    wins++;
                    document.getElementById("winsH").innerHTML = "WINS: "+wins;
                    alert("You WIN!");
                }

            } else {
                        lettersGuessed.push(choice);
                        document.getElementById("lettersGuessedH").innerHTML = lettersGuessed;
                        guessesLeft--;
                        document.getElementById("guessesLeftH").innerHTML = "GUESSES LEFT: " + guessesLeft;
            }

        } else {
            losses++;
            document.getElementById("lossesH").innerHTML = "LOSSES: "+ losses;
            alert("No more guesses left.\nYou LOSE this game.");
            document.getElementById("currentWordH").innerHTML = splitWordArray.toUpperCase();
        }
    }
    
    if ((gameNumber > 1 && gameNumber < 11) && wannaplay) {
        wannaPlay = confirm("Play another game?");
        gameNumber++;
    } else {
        alert("Thanks for playing");
        // NOT WORKING  end the game
    }
} else {
    alert("Bye!");
    // NOT WORKING  end the game
};