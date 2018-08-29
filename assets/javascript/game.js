// Global variables
var wordArray=["commissure","hippocampus","ventricle","amygdala","cerebellum","splenium","chiasm","fornix","cortex","hypothalamus"]
var gameNumber = 0;
var wins = 0;
var losses = 0;


//Variables that exist for each game
var currentWord = wordArray[gameNumber];
var coverArray = [];
var splitWordArray = [];
var guessesLeft = 11;
var lettersGuessed = [];

// Split the mystery word into an array
for (i=0;i<currentWord.length;i++){
    splitWordArray[i] = currentWord.charAt(i);
    coverArray[i]= "-";    
}

// Game starts once any key is pressed
document.onkeypress= function(el){
    //Make sure have guesses left
    if (guessesLeft>0){
        var choice = el.key.toLowerCase();
        var inThere = currentWord.indexOf(choice);            
        if (inThere>=0){

            // Compare each array item to guessed letter
            for (j=0;j<currentWord.length;j++){
                if (splitWordArray[j]==choice){

                    //Show letters in array that match guessed letter
                    coverArray[j] = splitWordArray[j];
                    console.log(coverArray);
                }   
            }
        } else {

            // Add letter to array of guessed letters
                    lettersGuessed.push(choice);
                    console.log(lettersGuessed);
                    guessesLeft--;    
        }
    }else{
        losses++;
        alert("No more guesses left.\nYOU LOSE this game.");
        confirm("Play again?")
    }    
}  