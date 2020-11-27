//-------------------------------------------
// COMP 2132 - Final Project - Nov 19. 2020 |
//-------------------------------------------
// AUTHORED BY: 
//    BRUCE WONG + DAVID DEDA + HEATHER TIJMAN
//-------------------------------------------
//                 DICE GAME
//   ⚀⚁⚂⚃⚄⚅      click to roll dice
//  🎲🎲  🎲🎲    2 players 2 dice each   
//

// HTML ELEMENTS
const player1  = document.getElementById('player1-roll');
const player2  = document.getElementById('player2-roll');
const output   = document.getElementById("output");
//section id for hideshow
const hideshow = document.getElementById("hideshow");

let images = 6;

let z = ""; //global variable
let Player1Dice1score = 0;
let Player1Dice2score = "";
let CompDice1score = "";
let CompDice2score = "";

let Player1ScoreOutput = "";
let CompScoreOutput = "";

let Player1Round1Score = "";
let Player1Round2Score = "";

let CompRound1Score = "";
let CompRound2Score = "";

//keep track of round counter
let counter = 0; 
let counterlimit = 4;
//start value = 0
let startValue = 0;
//player running total
let playerTotal = 0;
//computer running total
let compTotal = 0;

//keep track of Die face number from 1-6
let numberOfDie = 0;


// Part 1a
// Die Object
class Die{

    constructor(value){
        this.value=value;
    }
    describeSelf(){
        return `Die  is number:${this.value} `;
    }
}

// Part 2
// Die Object
class DiceRoll{

    constructor(){
        this.values = [1,2,3,4,5,6];
    
    
    }
}
// Part 2a  DiceRoll object Roll function
DiceRoll.prototype.roll = function(){

    let i,j,x;
    for( i=this.values.length-1; i>0; i-- ){
        //randomly select a die roll value
        j = Math.floor(Math.random() * (i+1));
        x=this.values[j];
        //return z= output.innerHTML += `<p> ${x}`;
        z=x;
        //return $('#div2Display').text(z);
        return z;
    }
}

// Part 2b DiceRoll object describeSelf function
DiceRoll.prototype.describeSelf = function(){
    //let output = "";
    output.innerHTML += `<p>Dice rolled a number ${z}`;
    console.log`${z}`;
    
}
// Part 3 Players objects

class Player {
    constructor(name){
        this.name = name;
    }

}

//Test instantiate Die object and display value
const myDie = new Die(6);

output.innerHTML += `${myDie.describeSelf()}`;
//Test instantiate DiceRoll object
const myDiceRoll = new DiceRoll();
const myDiceRollDice2 = new DiceRoll();
const compDiceRoll = new DiceRoll();
const compDiceRoll2 = new DiceRoll();


rollDicebtn.addEventListener('click', function(event){
    //Player1
    myDiceRoll.roll();{
        $('#div2Display').text(z);
        Player1Dice1score = parseInt(z);
        updateDiceImagesPD1(Player1Dice1score);//call updateDiceImages Function
    };
    myDiceRollDice2.roll();{
        $('#div3Display').text(z);
        Player1Dice2score = parseInt(z);
        updateDiceImagesPD2(Player1Dice2score);//call updateDiceImages Function
    };
    //computer
    compDiceRoll.roll();{
        $('#div22Display').text(z);
        CompDice1score = z;
        updateDiceImagesCD1(CompDice1score);//call updateDiceImages Function
    };
    compDiceRoll2.roll();{
        $('#div23Display').text(z);
        CompDice2score = z;
        updateDiceImagesCD2(CompDice2score);//call updateDiceImages Function
    };
    // Calculate Player Dice output
    Player1ScoreOutput = parseInt(Player1Dice1score) + parseInt(Player1Dice2score);
    //rule set round score to 0 if encounter 1
    if((Player1Dice1score == 1) || (Player1Dice2score == 1)){
        Player1ScoreOutput = 0;
        Player1Dice1score  = 0;
        Player1Dice2score  = 0;
        $('#div4Display').text(Player1ScoreOutput);
    }
    
    //rule set if roll a double number then Add total then times 2
    if(Player1Dice1score % Player1Dice2score === 0 ){
        Player1ScoreOutput = ((Player1Dice1score + Player1Dice2score)*2);
    }
    $('#div4Display').text(Player1ScoreOutput);

    // Calculate Computer Dice output
    CompScoreOutput = parseInt(CompDice1score) + parseInt(CompDice2score)
    //rule set round score to 0 if encounter 1
    if((CompDice1score === 1) || (CompDice2score === 1)){
        CompScoreOutput = 0;
        CompDice1score  = 0;
        CompDice2score  = 0;
        $('#div24Display').text(CompScoreOutput);
    } else {
        (CompScoreOutput = parseInt(CompDice1score) + parseInt(CompDice2score));
        $('#div24Display').text(CompScoreOutput);
    }
    
    //rule set if roll a double number then Add total then times 2
    if(CompDice1score % CompDice2score === 0 ){
        CompScoreOutput = ((CompDice1score + CompDice2score)*2);
    }
    $('#div24Display').text(CompScoreOutput);

    //Keep value for round
    Player1Round1Score = 0 + parseInt(Player1ScoreOutput);
    playerTotal = playerTotal + Player1Round1Score;
    $('#div5Display').text(playerTotal);

    CompRound1Score = 0 + parseInt(CompScoreOutput);
    compTotal = compTotal + CompRound1Score;
    $('#div25Display').text(compTotal);

    

    //round counter
    counter = counter + 1;

    if((playerTotal > compTotal) && (counter === 4)){
        alert('player1 wins');
    } else if ((compTotal >= playerTotal ) && (counter === 4)) 
        {
            alert('computer wins');
        }   

    if( counter == counterlimit)
    {
        //give alert and reset to zero for all values
        alert('Game over. Resetting game.');
        $('#div2Display').text(startValue);
        $('#div3Display').text(startValue);
        $('#div22Display').text(startValue);
        $('#div23Display').text(startValue);

        $('#div4Display').text(startValue);
        $('#div24Display').text(startValue);
        $('#div5Display').text(startValue);
        $('#div25Display').text(startValue);
        Player1ScoreOutput = 0;
        CompScoreOutput    = 0;
        Player1Round1Score = 0;
        CompRound1Score = 0;
        compTotal = 0;
        playerTotal = 0;
        counter = 0;

    }
    //myDiceRoll.describeSelf();
});

// hide rules by default
$('.hideshow').hide();
//get button class as const $btnShow
const $btnShow = $('.btn_show');

//button click for HIDE SHOW Rules
$btnShow.click(function(){

    const $btn = $(this); //shows this element Class = button
    const $rulesText = $(this).next(); //Next element image and text

    if($rulesText.is(':visible')){
        $btn.text('Show Rules');
    }else{
        $btn.text('Hide Rules');
    };
    $rulesText.slideToggle(500);
    $btn.parent().toggleClass('highlight');
});

/* update the dice image PD1 with correct number */
function updateDiceImagesPD1(Player1Dice1score){

    let pathToImage = `imgs/Dice${Player1Dice1score}.PNG`;
    $("#div2").attr("src", pathToImage);
}

/* update the dice image PD2 with correct number */
function  updateDiceImagesPD2(Player1Dice2score){
    let pathToImage = `imgs/Dice${Player1Dice2score}.PNG`;
    $("#div3").attr("src", pathToImage);
}

/* update the dice image CD1 with correct number */
function  updateDiceImagesCD1(CompDice1score){
    let pathToImage = `imgs/Dice${CompDice1score}.PNG`;
    $("#div22").attr("src", pathToImage);
}

/* update the dice image CD2 with correct number */
function  updateDiceImagesCD2(CompDice2score){
    let pathToImage = `imgs/Dice${CompDice2score}.PNG`;
    $("#div23").attr("src", pathToImage);
}



// call the footer
const footNote = document.getElementById('footNote');
// footer output
footNote.innerHTML = '\u00A9' + '2020 Bruce Wong, David Deda, Heather Tijman'; 