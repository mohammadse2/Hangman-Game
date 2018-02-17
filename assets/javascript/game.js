var wincounter=0 ;
var lossCounter = 0;
// Start key beginner
document.onkeyup=function(event){
    var startKey = event.key ; 
    console.log(startKey);  
    start()
}


    
 function start(){
// Global Variables and Arrays
var underScores = [];
var correctLetter = [];
var wrongLetter = [];
var test1 = []
var GuessesLeft=9 ;
document.getElementById("wrong-guesses").innerHTML = wrongLetter ;




// =============================================================================================//

// choose Random Word from the set of word
var wordSet = ["mango","apple","pineapple","orange","strawberry","banana"]
var randomNumber = Math.floor(Math.random() * Math.floor(wordSet.length));
var randomWord=[wordSet[randomNumber]] ;
randomWord = randomWord.join()
console.log( randomWord);

// push underscore
for(var i= 0 ; i<randomWord.length ; i++){
    underScores.push("-") ;
    document.getElementById("word-blanks").innerHTML = underScores.join("  ") ;
    console.log(underScores);}
// =============================================================================================//

document.onkeyup=function(event){
            var letter = event.key ; 
            console.log(letter);

    for(var j= 0 ; j<randomWord.length ; j++){
        if(letter === randomWord[j]){
            console.log(randomWord[j]);
            underScores.splice(j,1,randomWord[j]);
            correctLetter = document.getElementById("word-blanks").innerHTML = underScores;
            var pop = letter ;   
        }  
        
    }// end of for loop- Var J=0 
// ==========================================================================================================//
    for(var q=0 ; q<randomWord.length;q++){
    test1[q] = randomWord[q]
    }
  
    if ( JSON.stringify(test1) == JSON.stringify(underScores) ){
        document.getElementById("win-counter").innerHTML = wincounter+=1
        start() ; 
    }
   
  
// ========================================================================================================== //
   if(randomWord.indexOf(letter) === -1){
    wrongLetter.push(letter) ;
   console.log(wrongLetter)
    document.getElementById("wrong-guesses").innerHTML = wrongLetter ;
   } 
// ===========================================================================================================//
var hh = randomWord.indexOf(letter);
console.log(hh)  ;

                if (randomWord.indexOf(letter) == -1  & GuessesLeft>0){
                    console.log("yes")
                    GuessesLeft -=1
                    document.getElementById("guesses-left").innerHTML = GuessesLeft ;
                if(GuessesLeft === 0){
                    GuessesLeft = 9 ;
                    document.getElementById("guesses-left").innerHTML = GuessesLeft ;
                    document.getElementById("loss-counter").innerHTML = lossCounter+=1 ;

                    start()
                 }
                }

}// end of onkeyup function

}// end function start