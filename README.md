##Table of contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Introduction](#introdction)
* [Outline](#outline)
* [Closer Look](#closer-look)
* [Closing Notes](#closing-notes)

## General Info
This project is a DICE GAME simulator.
	
## Technologies
Project created with:
* Visual Studio Code Version 1.51
* jQuery 3.4.1
* JavaScript 1.8
* SCSS / CSS 3
* HTML5
* 'Gif Maker-Gif Editor' app
	
## Setup
To run this project, upload it locally to any web browser.

## Introduction
This project aims to entertain the user with click scripts that run simple math (in JavaScript) between two players. 
Each player's aim is to score the most points, thereby winning the game.

## Outline
* HTML
```
Structure: David + Bruce
Merge + Semantics: Heather
```
* JavaScript
```
Logic: Bruce + David
Merge + Operation Updates: Heather

* instructions how to play: Heather
* hideshow rules: David + Heather
* dice values & rolling: Bruce
* object creation: Bruce
* rollDicebtn: Bruce
* rollTheDice: David
* score outputs: Heather + Bruce
* classList +/-: Heather
* footer: Heather
```
* SCSS
```
Structure: Heather
Grid setup: David
div and d tags: Bruce
Merge: Heather
Colour: Heather
Semantics: Heather
```
* Other
```
* gif creation: Heather
* README.md: Heather
```

## Closer Look
We ran into issues and did some troubleshooting of the following portions together:

* The player and computer output strings were stacking because we missed including this code:
```
if( counter == counterLimit ){
    player1.innerHTML  ='';
    computer.innerHTML ='';
}
```
* h1 changes also stayed when resetting the game after 3 rolls and a successive click, so we added this:
```
if( counter == counterLimit ){
	document.querySelector("h1").innerHTML = ( 'DICE GAME' );
}
```
* Our game totals were not caluculating correctly. In this case for example, a roll of 6 and 3 gave a score of 18.
```
if( comp1dice1score % comp1dice2score === 0 ){
	compScoreOutput = ( (comp1dice1score + comp1dice2score)*2 );
	$('#div24Display').text(compScoreOutput);
}
```
* Before taking a closer look, our winner alert was calculated on the fourth roll.
```
if( (playerTotal > compTotal) && (counter === 4) ){
    alert(`GAME OVER. Player 1 wins! The game will now reset.`);
} 
else if ( (compTotal >= playerTotal ) && (counter === 4) ){
    alert(`GAME OVER. Computer wins! The game will now reset.`);
}  
```
* Upon validation, the following SCSS had a couple errors in it. As such, we updated to the contemporary method of using the css 'linear-gradient()' function.
```
@mixin gradient( $from, $to ) {
    background-color: $from;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,$from), color-stop(100%,$to)); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top,     $from 0%, $to 100%); /* Chrome10+,Safari5.1+ */
    background:    -moz-linear-gradient(top,     $from 0%, $to 100%); /* FF3.6+ */
    background:     -ms-linear-gradient(top,     $from 0%, $to 100%); /* IE10+ */
    background:      -o-linear-gradient(top,     $from 0%, $to 100%); /* Opera 11.10+ */
    background:       linear-gradient(to bottom, $from 0%, $to 100%); /* W3C */
}
.d11{
    @include gradient ( $blue 0%, $green 100%);
}
```

## Closing Notes
Due to the structure of this project, our team felt it unnecessary to include @media and @print screens in the SCSS. 

Final grade received for this project: 100%
