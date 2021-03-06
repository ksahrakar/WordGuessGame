// Global variables while playing game
var wordArray = ["cortex", "ventricle", "cerebellum", "amygdala", "hippocampus", "splenium", "chiasm", "fornix", "commissure", "hypothalamus"]
var hintImage = ["assets/images/C.jpg", "assets/images/V.jpg", "assets/images/Cebe.jpg", "assets/images/y.jpg", "assets/images/pp.jpg", "assets/images/pi.jpg", "assets/images/sm.jpg", "assets/images/F.jpg", "assets/images/AC.jpg", "assets/images/po.jpg"];
var gameNumber = 1;
var wins = 0;
var losses = 0;
var answer = true;


function playGame() {
    // Initialize variables
    var currentWord = wordArray[(gameNumber - 1)];
    var currentHintPic = hintImage[(gameNumber - 1)];
    var coverArray = [];
    var splitWordArray = [];
    var guessesLeft = 10;
    var lettersGuessed = [];
    var choice;

    //Show hintImage for current game
    document.getElementById("hintImageH").src = currentHintPic;

    // Split the mystery word into an array
    for (i = 0; i < currentWord.length; i++) {
        splitWordArray[i] = currentWord.charAt(i);
        coverArray[i] = "|_|";
    };

    //Show blank array so that player knows number of letters
    document.getElementById("currentWordH").innerHTML = coverArray.join(" ");
    document.getElementById("lettersGuessedH").innerHTML = lettersGuessed;
    document.getElementById("guessesLeftH").innerHTML = "GUESSES LEFT: " + guessesLeft;

    // Game starts once any key is pressed

    document.onkeyup = function (el) {

        //Make sure have guesses left
        if (guessesLeft > 0) {

            //get key choice
            choice = el.key.toLowerCase();

            if (currentWord.includes(choice)) {

                // Compare each array item to guessed letters
                for (j = 0; j < currentWord.length; j++) {
                    if (splitWordArray[j] == choice) {

                        //Show letters in array that match guessed letter
                        coverArray[j] = splitWordArray[j];
                        var joinedWorking = coverArray.join(" ");
                        document.getElementById("currentWordH").innerHTML = joinedWorking.toUpperCase();
                    }
                };

                //End game if all letters are guessed
                var joinedCover = coverArray.join("");
                var joinedCurrent = splitWordArray.join("");
                if (joinedCover == joinedCurrent) {
                    wins++;
                    document.getElementById("currentWordH").innerHTML = currentWord.toUpperCase();
                    document.getElementById("winsH").innerHTML = "WINS: " + wins;
                    
                    alert("You guessed the part!\nYou win!!");
                   
                    // Check if another game desired and available
                    answer = confirm("Play another?");
                    if (answer) {
                        gameNumber++;
                        if (gameNumber < 11) {
                            playGame();
                        } else {
                            alert("You've finished the game");
                        return;
                        }
                    } else {
                        alert("Thanks for playing!");
                        return; 
                    };
                }

            } else {

            //Add letter to list of guessed letters if not already there
            if (!lettersGuessed.includes(choice)){
                lettersGuessed.push(choice);
                guessesLeft--;
            }
            document.getElementById("lettersGuessedH").innerHTML = lettersGuessed;
            document.getElementById("guessesLeftH").innerHTML = "GUESSES LEFT: " + guessesLeft;
            }

        } else {   // Game lost - run out of guesses
            
            losses++;
            document.getElementById("currentWordH").innerHTML = currentWord.toUpperCase();
            document.getElementById("lossesH").innerHTML = "LOSSES: " + losses;
            
            alert("No more guesses left.\nYou LOSE this game.");

            // Check if another game desired and available
            answer = confirm("Play another?");
            if (answer) {
                gameNumber++;
                if (gameNumber < 11) {
                    playGame();
                } else {
                    alert("You've finished the game");
                    return; 
                }
            } else {
                alert("Thanks for playing!");
                return; 
            };
        };
    };
}


playGame();


