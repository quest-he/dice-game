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
//
//dice roll phrase for each player
const player1  = document.getElementById('player1-roll');
const computer = document.getElementById('player2-roll');
//section id for hideshow
const hideshow = document.getElementById("hideshow");
//overall results phrase
const output   = document.getElementById("output");

//let output = ''; //prepare an empty string

let images = 6; //dice images

let z = ""; //global variable

let player1dice1score = 0;
let player1dice2score = "";
let compDice1score = "";
let compDice2score = "";

let player1scoreOutput = "";
let compScoreOutput = "";

let player1round1score = "";
let player1round2score = "";

let compRound1Score = "";
let compRound2Score = "";

//keep track of round counter
let counter = 0; 
let counterLimit = 4;
//start value = 0
let startValue = 0;
//player running total
let playerTotal = 0;
//computer running total
let compTotal = 0;

//keep track of Die face number from 1-6
let numberOfDie = 0;


// Part 1
// Die Object
class Die{

    constructor(value){
        this.value = value;
    }
    describeSelf(){
        return `The die landed on a ${this.value}!`;
    }
}

// Part 2
// DiceRoll Object
class DiceRoll{

    constructor(){
        this.values = [1,2,3,4,5,6];
    
    }
}
// Part 2a  
// DiceRoll Object
// roll function
DiceRoll.prototype.roll = function(){

    let i,j,x;
    for( i = this.values.length - 1; i > 0; i-- ){
        //randomly select a die roll value
        j = Math.floor( Math.random() * ( i + 1 ));
        x = this.values[j];
        //return z = output.innerHTML += `<p> ${x}`;
        z = x;
        //return $('#div2Display').text(z);
        return z;
    }
}

// Part 2b
// DiceRoll Object
// describeSelf function
DiceRoll.prototype.describeSelf = function(){

    output.innerHTML += `<p>You rolled a [ ${z} ].`;
    console.log(`${z}`);
    
}

// Part 3
// Player Object
class Player {

    constructor( name ){
        this.name = name;
    }
}//////////////////////////////////////////////////// not yet using Player object?


//Test instantiate Die object and display value
const myDie = new Die(6);

output.innerHTML += `${myDie.describeSelf()}`;
//Test instantiate DiceRoll object
const myDiceRoll      = new DiceRoll();
const myDiceRollDice2 = new DiceRoll();
const compDiceRoll    = new DiceRoll();
const compDiceRoll2   = new DiceRoll();


rollDicebtn.addEventListener('click', function(event){
    //Player1
    myDiceRoll.roll();{
        $('#div2Display').text(z);
        player1dice1score = parseInt(z);
        updateDiceImagesPD1(player1dice1score);//call updateDiceImages Function
    };
    myDiceRollDice2.roll();{
        $('#div3Display').text(z);
        player1dice2score = parseInt(z);
        updateDiceImagesPD2(player1dice2score);//call updateDiceImages Function
    };
    //Computer
    compDiceRoll.roll();{
        $('#div22Display').text(z);
        compDice1score = z;
        updateDiceImagesCD1(compDice1score);//call updateDiceImages Function
    };
    compDiceRoll2.roll();{
        $('#div23Display').text(z);
        compDice2score = z;
        updateDiceImagesCD2(compDice2score);//call updateDiceImages Function
    };

    // calculate Player score output
    player1scoreOutput = parseInt(player1dice1score) + parseInt(player1dice2score);
    //rule set round score to 0 if encounter 1
    if((player1dice1score == 1) || (player1dice2score == 1) ){
        player1scoreOutput = 0;
        player1dice1score  = 0;
        player1dice2score  = 0;
        $('#div4Display').text(player1scoreOutput);
    }//rule set to add total of pairs and times them by 2
    if(player1dice1score % player1dice2score === 0 ){
        player1scoreOutput = ( (player1dice1score + player1dice2score)*2 );
        $('#div4Display').text(player1scoreOutput);
    } else {
        (player1scoreOutput = parseInt(player1dice1score) + parseInt(player1dice2score));
        $('#div4Display').text(player1scoreOutput);
    }

    // calculate Computer score output
    compScoreOutput = parseInt(compDice1score) + parseInt(compDice2score)
    //rule set round score to 0 if encounter 1
    if((compDice1score === 1) || (compDice2score === 1) ){
        compScoreOutput = 0;
        compDice1score  = 0;
        compDice2score  = 0;
        $('#div24Display').text(compScoreOutput);
    }//rule set to add total of pairs and times them by 2
    if( compDice1score % compDice2score === 0 ){
        compScoreOutput = ( (compDice1score + compDice2score)*2 );
        $('#div24Display').text(compScoreOutput);

    } else {
        (compScoreOutput = parseInt(compDice1score) + parseInt(compDice2score));
        $('#div24Display').text(compScoreOutput);
    }
     
    
    //count values for total score
    //player 1 score
    player1round1score = 0 + parseInt( player1scoreOutput );
    playerTotal        = playerTotal + player1round1score;
    $('#div5Display').text(playerTotal);
    //computer score
    compRound1Score = 0 + parseInt( compScoreOutput );
    compTotal       = compTotal + compRound1Score;
    $('#div25Display').text(compTotal);

    //roll counter
    counter = counter + 1;

    if( (playerTotal > compTotal) && (counter === 4) ){
        alert('GAME OVER. Player 1 wins! The game will now reset.');
    } 
    else if ( (compTotal >= playerTotal ) && (counter === 4) ){
        alert('GAME OVER. Computer wins! The game will now reset.');
    }   

//game over = reset to zero for all values
    if( counter == counterLimit ){
        //player 1
        $('#div2Display').text(startValue);
        $('#div3Display').text(startValue);
        $('#div22Display').text(startValue);
        $('#div23Display').text(startValue);
        //computer
        $('#div4Display').text(startValue);
        $('#div24Display').text(startValue);
        $('#div5Display').text(startValue);
        $('#div25Display').text(startValue);
        
        player1scoreOutput = 0;
        compScoreOutput    = 0;
        player1round1score = 0;
        compRound1Score    = 0;
        compTotal          = 0;
        playerTotal        = 0;
        counter            = 0;

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
function updateDiceImagesPD1(player1dice1score){

    let pathToImage = `imgs/Dice${player1dice1score}.PNG`;
    $("#div2").attr("src", pathToImage);
}

/* update the dice image PD2 with correct number */
function  updateDiceImagesPD2(player1dice2score){
    let pathToImage = `imgs/Dice${player1dice2score}.PNG`;
    $("#div3").attr("src", pathToImage);
}

/* update the dice image CD1 with correct number */
function  updateDiceImagesCD1(compDice1score){
    let pathToImage = `imgs/Dice${compDice1score}.PNG`;
    $("#div22").attr("src", pathToImage);
}

/* update the dice image CD2 with correct number */
function  updateDiceImagesCD2(compDice2score){
    let pathToImage = `imgs/Dice${compDice2score}.PNG`;
    $("#div23").attr("src", pathToImage);
}



// call the footer
const footNote = document.getElementById('footNote');
// footer output
footNote.innerHTML = '\u00A9' + '2020 Bruce Wong, David Deda, Heather Tijman'; 