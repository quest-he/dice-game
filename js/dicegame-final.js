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
//instructions output
const howToPlay  = document.getElementById('howtoplay');
//section id for hideshow
const hideshow   = document.getElementById("hideshow");
//dice roll phrase output for each player
const player1    = document.getElementById('player1-roll');
const computer   = document.getElementById('computer-roll');
//score outputs
const playScore  = document.getElementById('div4Display');
const compScore  = document.getElementById('div24Display');
//new game button
const newGamebtn = document.getElementById('btnNewGame');

//How to Play Dice Game instructions
const instructions = [`Click on any dice to stop its roll, or`,
                    `click the 'Roll All Dice' button below.`,
                    `After three turns, the game is over.`,
                    `Play as many rounds as you wish!`];
const ul = document.createElement('ul'); //create ul element
//set attributes
ul.setAttribute('style', 'padding: .5em; margin: 0;');
ul.setAttribute('id', 'instructions');
//for new ul element create li elements with these attributes and append it to the HTML
for (i = 0; i <= instructions.length - 1; i++) {
    const li = document.createElement('li'); // create li element
    li.innerHTML = instructions[i]; // assign text to li using array value
    li.setAttribute('style', 'display: block; padding:.5em;'); // remove bullets
    //append the li we just created to the ul
    ul.appendChild(li); 
}
//append our new list to the id / div
howToPlay.appendChild( ul ); 

//Rules/instructions section
$('.hideshow').hide(); // hide rules by default
const $btnShow = $('.btn_show'); //get button class as const $btnShow
//button click for HIDE SHOW Rules
$btnShow.click(function(){

    const $btn = $(this); //shows this element Class = button
    const $rulesText = $(this).next(); //next element image and text

    if($rulesText.is(':visible')){
        $btn.text('Show');
    }else{
        $btn.text('Hide');
    };
    $rulesText.slideToggle(500); //speed of slide
    $btn.parent().toggleClass('highlight');
});

///////////////////////////////////////
// DICE VALUES AND ROLLING
//
let images = 6; //dice images

let z = ""; //global variable

let player1dice1score = 0;
let player1dice2score = 0;
let comp1dice1score = 0;
let comp1dice2score = 0;

let player1scoreOutput = 0;
let compScoreOutput = 0;

let player1round1score = 0;
let player1round2score = 0;
let compRound1Score = 0;
let compRound2Score = 0;

//keep track rolls / turns / rounds counter
let counter = 0; 
let counterLimit = 4;
//start value = 0
let startValue = 0;
//player running total
let playerTotal = 0;
//computer running total
let compTotal = 0;

///////////////////////////////////////
// Part 1
// Die Object
class Die{

    constructor(value){
        this.value = value;
    }
    describeSelf(){
        return `The dice in this game have ${this.value} possible values.`;
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

// CREATE 6 DIE
//
//Test instantiate Die object and display value
const myDie = new Die(6);

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
    //Player1
    myDiceRoll.roll();{
        $('#div2Display').text(z);
        player1dice1score = parseInt(z);
        updateDiceImagesPD1(player1dice1score);//call updateDiceImages Function
        player1.innerHTML += `<span style="font-size:24px;">Player rolled a <span style="color:blue">${player1dice1score}</span></span>`;
    };
    myDiceRollDice2.roll();{
        $('#div3Display').text(z);
        player1dice2score = parseInt(z);
        updateDiceImagesPD2(player1dice2score);//call updateDiceImages Function
        player1.innerHTML += `<span style="font-size:24px;"> and a <span style="color:blue">${player1dice2score}</span></span><br />`;
    };
    //Computer
    compDiceRoll.roll();{
        $('#div22Display').text(z);
        comp1dice1score = z;
        updateDiceImagesCD1(comp1dice1score);//call updateDiceImages Function
        computer.innerHTML += `<span style="color:darkgreen;font-size:24px;">Computer rolled a <span style="color:chartreuse">${comp1dice1score}</span></span>`;

    };
    compDiceRoll2.roll();{
        $('#div23Display').text(z);
        comp1dice2score = z;
        updateDiceImagesCD2(comp1dice2score);//call updateDiceImages Function
        computer.innerHTML += `<span style="color:darkgreen;font-size:24px;"> and a <span style="color:chartreuse">${comp1dice2score}</span></span><br />`;
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
    if( player1dice1score === player1dice2score ){
        player1scoreOutput = ( (player1dice1score + player1dice2score)*2 );
        $('#div4Display').text(player1scoreOutput);
    } else {
        (player1scoreOutput = parseInt(player1dice1score) + parseInt(player1dice2score));
        $('#div4Display').text(player1scoreOutput);
    }

    //add .glowText css to the score output
    playScore.classList.add('glowText');
    compScore.classList.add('glowText');

    // calculate Computer score output
    compScoreOutput = parseInt(comp1dice1score) + parseInt(comp1dice2score)
    //rule set round score to 0 if encounter 1
    if((comp1dice1score === 1) || (comp1dice2score === 1) ){
        compScoreOutput = 0;
        comp1dice1score  = 0;
        comp1dice2score  = 0;
        $('#div24Display').text(compScoreOutput);
    }//rule set to add total of pairs and times them by 2
    if( comp1dice1score === comp1dice2score ){
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

    //roll counter
    counter = counter + 1;

    //after three turns alert results
    if((counter == 4) && ((playerTotal-player1round1score) > (compTotal-compRound1Score))){
        alert(`GAME OVER. Player 1 wins! The game will now reset.`);
    } //NOTE that we are minusing a fourth turn from the total score
    else if((counter == 4) && ((compTotal-compRound1Score) >= (playerTotal-player1round1score))){
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
        //reset values
        player1scoreOutput = 0;
        compScoreOutput    = 0;
        player1round1score = 0;
        compRound1Score    = 0;
        compTotal          = 0;
        playerTotal        = 0;
        counter            = 0;
        //reset strings
        player1.innerHTML  ='';
        computer.innerHTML ='';
        //reset heading
        document.querySelector("h1").innerHTML = ( 'DICE GAME' ); 
    }
}

//on click ' Roll All Dice ' button
rollDicebtn.addEventListener('click', function(event){
    //Player1
    myDiceRoll.roll();{
        $('#div2Display').text(z);
        player1dice1score = parseInt(z);
        updateDiceImagesPD1(player1dice1score);//call updateDiceImages Function
        player1.innerHTML += `<span style="font-size:24px;">Player rolled a <span style="color:blue">${player1dice1score}</span></span>`;
    };
    myDiceRollDice2.roll();{
        $('#div3Display').text(z);
        player1dice2score = parseInt(z);
        updateDiceImagesPD2(player1dice2score);//call updateDiceImages Function
        player1.innerHTML += `<span style="font-size:24px;"> and a <span style="color:blue">${player1dice2score}</span></span><br />`;
    };
    //Computer
    compDiceRoll.roll();{
        $('#div22Display').text(z);
        comp1dice1score = z;
        updateDiceImagesCD1(comp1dice1score);//call updateDiceImages Function
        computer.innerHTML += `<span style="color:darkgreen;font-size:24px;">Computer rolled a <span style="color:chartreuse">${comp1dice1score}</span></span>`;

    };
    compDiceRoll2.roll();{
        $('#div23Display').text(z);
        comp1dice2score = z;
        updateDiceImagesCD2(comp1dice2score);//call updateDiceImages Function
        computer.innerHTML += `<span style="color:darkgreen;font-size:24px;"> and a <span style="color:chartreuse">${comp1dice2score}</span></span><br />`;
    };

    // calculate Player score output
    player1scoreOutput = parseInt(player1dice1score) + parseInt(player1dice2score);
    //rule set round score to 0 if encounter 1
    if((player1dice1score === 1) || (player1dice2score === 1) ){
        player1scoreOutput = 0;
        player1dice1score  = 0;
        player1dice2score  = 0;
        $('#div4Display').html(`<span style="color:red">${player1scoreOutput}</style>`);
    }//rule set to add total of pairs and times them by 2
    if(player1dice1score === player1dice2score ){
        player1scoreOutput = ( (player1dice1score + player1dice2score)*2 );
        $('#div4Display').text( player1scoreOutput );
    } else {
        (player1scoreOutput = parseInt(player1dice1score) + parseInt(player1dice2score));
        $('#div4Display').html(`<span style="color:darkred">${player1scoreOutput}</style>`);
    }

    //add .glowText css to the score output
    playScore.classList.add('glowText');
    compScore.classList.add('glowText');

    // calculate Computer score output
    compScoreOutput = parseInt(comp1dice1score) + parseInt(comp1dice2score)
    //rule set round score to 0 if encounter 1
    if((comp1dice1score === 1) || (comp1dice2score === 1) ){
        compScoreOutput  = 0;
        comp1dice1score  = 0;
        comp1dice2score  = 0;
        $('#div24Display').text(compScoreOutput);
    }//rule set to add total of pairs and times them by 2
    if( comp1dice1score === comp1dice2score ){
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
    
    //after three turns alert results
    if((counter == 4) && ((playerTotal-player1round1score) > (compTotal-compRound1Score))){
        alert(`GAME OVER. Player 1 wins! The game will now reset.`);
    } //NOTE that we are minusing a fourth turn from the total score
    else if((counter == 4) && ((compTotal-compRound1Score) >= (playerTotal-player1round1score))){
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
        //reset values
        player1scoreOutput = 0;
        compScoreOutput    = 0;
        player1round1score = 0;
        compRound1Score    = 0;
        compTotal          = 0;
        playerTotal        = 0;
        counter            = 0;
        //reset strings
        player1.innerHTML  ='';
        computer.innerHTML ='';
        //reset heading
        document.querySelector("h1").innerHTML = ( 'DICE GAME' ); 
    }
});

/////////////////////////////////////////
// REPLACE DICE IMAGE to match the value rolled
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
//////////////////////////////////////////


//remove .glowText css from the new game button
newGamebtn.classList.remove('glowText');


// call the footer
const footNote = document.getElementById('footNote');
//change footNote colour and formatting
footNote.style.color = 'magenta';
footNote.style.letterSpacing = '.6em';
// footer output
footNote.innerHTML = '\u00A9' + '2020 David Deda, Heather Tijman, Bruce Wong'; 