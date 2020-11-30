//-------------------------------------------
// COMP 2132 - Final Project - Nov 19. 2020 |
//-------------------------------------------
// AUTHORED BY: 
//    DAVID DEDA + HEATHER TIJMAN + BRUCE WONG 
//-------------------------------------------
//                 DICE GAME
//   ⚀⚁⚂⚃⚄⚅      click to roll 
//  🎲🎲  🎲🎲    2 players 2 dice each   
//

// HTML ELEMENTS
//
const howToPlay = document.getElementById('howtoplay');
//dice roll phrase for each player
const player1   = document.getElementById('player1-roll');
const computer  = document.getElementById('player2-roll');
//section id for hideshow
const hideshow  = document.getElementById("hideshow");

//How to Play Dice Game
var instructions = [`Click on any dice to stop its roll, or`,
                    `click the 'Roll All Dice' button below.`,
                    `After three turns, the game is over.`,
                    `Play as many rounds as you wish!`];
var ul = document.createElement('ul'); //create ul element
//set attributes
ul.setAttribute('style', 'padding: .5em; margin: 0;');
ul.setAttribute('id', 'instructions');

//for this length of list create element with these attributes and append it to HTML
for (i = 0; i <= instructions.length - 1; i++) {
    var li = document.createElement('li'); // create li element
    li.innerHTML = instructions[i]; // assign text to li using array value
    li.setAttribute('style', 'display: block; padding:.5em;'); // remove bullets
    //append the li we just created to the ul
    ul.appendChild(li); 
}
//append list to the id / div
howToPlay.appendChild( ul ); 

//Rules/instructions section
// hide rules by default
$('.hideshow').hide();
//get button class as const $btnShow
const $btnShow = $('.btn_show');
//button click for HIDE SHOW Rules
$btnShow.click(function(){

    const $btn = $(this); //shows this element Class = button
    const $rulesText = $(this).next(); //next element image and text

    if($rulesText.is(':visible')){
        $btn.text('Show');
    }else{
        $btn.text('Hide');
    };
    $rulesText.slideToggle(500);
    $btn.parent().toggleClass('highlight');
});


///////////////////////////////////////
// DICE VALUES AND ROLLING
//
let images = 6; //dice images

let z = ""; //global variable

let player1dice1score = 0;
let player1dice2score = "";
let comp1dice1score = "";
let comp1dice2score = "";

let player1scoreOutput = "";
let compScoreOutput = "";

let player1round1score = "";
let player1round2score = "";

let compRound1Score = "";
let compRound2Score = "";

//keep track rolls / turns / rounds counter
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

///////////////////////////////////////
// CYCLE DICE ANIMATION
//
//HTML Elements
const faceOfDie = document.getElementsByClassName("die");

// REPLACE dice image to match the value rolled 
//
/* update the dice image PD1 with correct number */
function updateDiceImagesPD1(player1dice1score){

    let pathToImage = `./imgs/dice${player1dice1score}.png`;
    $("#div2").attr("src", pathToImage);
}

/* update the dice image PD2 with correct number */
function  updateDiceImagesPD2(player1dice2score){
    let pathToImage = `./imgs/dice${player1dice2score}.png`;
    $("#div3").attr("src", pathToImage);
}

/* update the dice image CD1 with correct number */
function  updateDiceImagesCD1(comp1dice1score){
    let pathToImage = `./imgs/dice${comp1dice1score}.png`;
    $("#div22").attr("src", pathToImage);
}

/* update the dice image CD2 with correct number */
function  updateDiceImagesCD2(comp1dice2score){
    let pathToImage = `./imgs/dice${comp1dice2score}.png`;
    $("#div23").attr("src", pathToImage);
}

////////////////////////////////////////////////////////////////////
// Part 1
// Die Object
class Die{

    constructor(value){
        this.value = value;
    }
    describeSelf(){
        return `The die is showing a value of ${this.value}.`;
    }
}

// Part 2
// DiceRoll Object
class DiceRoll{

    constructor(){
        this.values = [ 1, 2, 3, 4, 5, 6 ];
    
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

//CREATE 6 DIE
//Test instantiate Die object and display value
const myDie = new Die(6);

console.log(`${myDie.describeSelf()}`); //////////////////console logging 'myDie'
//Test instantiate DiceRoll object
const myDiceRoll      = new DiceRoll();
const myDiceRollDice2 = new DiceRoll();
const compDiceRoll    = new DiceRoll();
const compDiceRoll2   = new DiceRoll();


//function call from HTML
//
//CLICK ANY DICE to roll all dice
let play1 = "PLAYER 1"; 
let play2 = "COMPUTER"; 

function rollTheDice() { 
    setTimeout(function () { 
        var rand1 = Math.floor(Math.random() * 6) + 1; 
        var rand2 = Math.floor(Math.random() * 6) + 1; 
        var rand3 = Math.floor(Math.random() * 6) + 1; 
        var rand4 = Math.floor(Math.random() * 6) + 1;
          
        player = rand1 + rand2 + 2;
        comp1 = rand3 + rand4 + 2;

    }, 2500);

    //Player1
    myDiceRoll.roll();{
        $('#div2Display').text(z);
        player1dice1score = parseInt(z);
        updateDiceImagesPD1(player1dice1score);//call updateDiceImages Function
        player1.innerHTML += `<span style="color:blue;font-size:24px;">Player rolled a ${player1dice1score}</style>`;
    };
    myDiceRollDice2.roll();{
        $('#div3Display').text(z);
        player1dice2score = parseInt(z);
        updateDiceImagesPD2(player1dice2score);//call updateDiceImages Function
        player1.innerHTML += `<span style="color:blue;font-size:24px;"> and a ${player1dice2score}.</style><br />`;
    };
    //Computer
    compDiceRoll.roll();{
        $('#div22Display').text(z);
        comp1dice1score = z;
        updateDiceImagesCD1(comp1dice1score);//call updateDiceImages Function
        computer.innerHTML += `<span style="color:chartreuse;font-size:24px;">Computer rolled a ${comp1dice1score}</style>`;

    };
    compDiceRoll2.roll();{
        $('#div23Display').text(z);
        comp1dice2score = z;
        updateDiceImagesCD2(comp1dice2score);//call updateDiceImages Function
        computer.innerHTML += `<span style="color:chartreuse;font-size:24px;"> and a ${comp1dice2score}.</style><br />`;
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
    compScoreOutput = parseInt(comp1dice1score) + parseInt(comp1dice2score)
    //rule set round score to 0 if encounter 1
    if((comp1dice1score === 1) || (comp1dice2score === 1) ){
        compScoreOutput = 0;
        comp1dice1score  = 0;
        comp1dice2score  = 0;
        $('#div24Display').text(compScoreOutput);
    }//rule set to add total of pairs and times them by 2
    if( comp1dice1score % comp1dice2score === 0 ){
        compScoreOutput = ( (comp1dice1score + comp1dice2score)*2 );
        $('#div24Display').text(compScoreOutput);

    } else {
        (compScoreOutput = parseInt(comp1dice1score) + parseInt(comp1dice2score));
        $('#div24Display').text(compScoreOutput);
    }
    
    //count values for total score
    //
    //player 1 score
    player1round1score = 0 + parseInt( player1scoreOutput );
    playerTotal        = playerTotal + player1round1score;
    $('#div5Display').text(playerTotal);

    //computer score
    compRound1Score = 0 + parseInt( compScoreOutput );
    compTotal       = compTotal + compRound1Score;
    $('#div25Display').text(compTotal);

    //notify user of winner in the header
    if (playerTotal === compTotal) { 
        document.querySelector("h1").innerHTML = "Draw!"; 
    } 
    else if (playerTotal < compTotal) { 
        document.querySelector("h1").innerHTML = ( play2 + " WINS!" ); 
    } 
    else { 
        document.querySelector("h1").innerHTML = ( play1 + " WINS!" ); 
    } 
    
    //roll counter
    counter = counter + 1;

    if( (playerTotal > compTotal) && (counter === 4) ){
        alert(`GAME OVER. Player 1 wins! The game will now reset.`);
    } 
    else if ( (compTotal >= playerTotal ) && (counter === 4) ){
        alert(`GAME OVER. Computer wins! The game will now reset.`);
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
        player1.innerHTML  ='';
        computer.innerHTML ='';

    }
}

//on click ' Roll All Dice ' button
rollDicebtn.addEventListener('click', function(event){
    //Player1
    myDiceRoll.roll();{
        $('#div2Display').text(z);
        player1dice1score = parseInt(z);
        updateDiceImagesPD1(player1dice1score);//call updateDiceImages Function
        player1.innerHTML += `<span style="color:blue;font-size:24px;">Player rolled a ${player1dice1score}</style>`;
    };
    myDiceRollDice2.roll();{
        $('#div3Display').text(z);
        player1dice2score = parseInt(z);
        updateDiceImagesPD2(player1dice2score);//call updateDiceImages Function
        player1.innerHTML += `<span style="color:blue;font-size:24px;"> and a ${player1dice2score}.</style><br />`;
    };
    //Computer
    compDiceRoll.roll();{
        $('#div22Display').text(z);
        comp1dice1score = z;
        updateDiceImagesCD1(comp1dice1score);//call updateDiceImages Function
        computer.innerHTML += `<span style="color:chartreuse;font-size:24px;">Computer rolled a ${comp1dice1score}</style>`;

    };
    compDiceRoll2.roll();{
        $('#div23Display').text(z);
        comp1dice2score = z;
        updateDiceImagesCD2(comp1dice2score);//call updateDiceImages Function
        computer.innerHTML += `<span style="color:chartreuse;font-size:24px;"> and a ${comp1dice2score}.</style><br />`;
    };

    // calculate Player score output
    player1scoreOutput = parseInt(player1dice1score) + parseInt(player1dice2score);
    //rule set round score to 0 if encounter 1
    if((player1dice1score == 1) || (player1dice2score == 1) ){
        player1scoreOutput = 0;
        player1dice1score  = 0;
        player1dice2score  = 0;
        $('#div4Display').html(`<span style="color:red">${player1scoreOutput}</style>`);
    }//rule set to add total of pairs and times them by 2
    if(player1dice1score % player1dice2score === 0 ){
        player1scoreOutput = ( (player1dice1score + player1dice2score)*2 );
        $('#div4Display').text( player1scoreOutput );
    } else {
        (player1scoreOutput = parseInt(player1dice1score) + parseInt(player1dice2score));
        $('#div4Display').html(`<span style="color:darkred">${player1scoreOutput}</style>`);
    }

    // calculate Computer score output
    compScoreOutput = parseInt(comp1dice1score) + parseInt(comp1dice2score)
    //rule set round score to 0 if encounter 1
    if((comp1dice1score === 1) || (comp1dice2score === 1) ){
        compScoreOutput = 0;
        comp1dice1score  = 0;
        comp1dice2score  = 0;
        $('#div24Display').text(compScoreOutput);
    }//rule set to add total of pairs and times them by 2
    if( comp1dice1score % comp1dice2score === 0 ){
        compScoreOutput = ( (comp1dice1score + comp1dice2score)*2 );
        $('#div24Display').text(compScoreOutput);

    } else {
        (compScoreOutput = parseInt(comp1dice1score) + parseInt(comp1dice2score));
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
        alert(`GAME OVER. Player 1 wins! The game will now reset.`);
    } 
    else if ( (compTotal >= playerTotal ) && (counter === 4) ){
        alert(`GAME OVER. Computer wins! The game will now reset.`);
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
        player1.innerHTML  ='';
        computer.innerHTML ='';

    }
});


// call the footer
const footNote = document.getElementById('footNote');
// footer output
footNote.innerHTML = '\u00A9' + '2020 David Deda, Heather Tijman, Bruce Wong'; 