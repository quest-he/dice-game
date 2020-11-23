//-------------------------------------------
// COMP 2132 - Final Project - Nov 19. 2020 |
//-------------------------------------------
//   ⚀⚁⚂⚃⚄⚅      click to roll dice
//  🎲🎲  🎲🎲    2 players 2 dice each   
//

// call the footer
const footNote = document.getElementById('footNote');
// footer output
footNote.innerHTML = '\u00A9' + '2020 Bruce Wong, David Deda, Heather Tijman'; 

//
// (all following code is cloned from assignment 7)
//
// BOOLEAN track if the user has started the animation
// DO NOT show the popup if they have
let userHasNotStartedAnimationYet = true;

//HTML elements
const popUp         = document.getElementById('pop-up');
const closePopUp    = document.getElementById('btn-close');

/*
show a pop-up if the user does nothing
    setTimeout( function(){}, delayInMilliseconds );
*/
//current time
const startTime = Date.now();
//delay in milliseconds
const delay = 3000; //

//this function runs after a 3 second delay
setTimeout( showPopUp, delay );
//run the function
function showPopUp(){
    //determine the actual time elapsed
    console.log( `${Date.now() - startTime} = actual time elapsed from page load to run of showPopUp()` );
        // alert(popUp.textContent); /* alert works! but cannot be styled */
    
    //control show / hide #pop-up with opacity animation
    for (opacity = 0; opacity < 1.1; opacity = opacity + 0.1){
        //setTimeout to fadeIn the opacity in .1 seconds            
        setTimeout( function(){
            popUp.style.opacity = opacity;
        },  100)                       
    }
}
/*
allow user to close and hide the pop-up after they have seen it
*/
//close the popUp with the close button
$("#btn-close").click(function(){
    $("#pop-up").hide();
});


/*
-------------------------------------
spinning bike start and stop
-------------------------------------
*/

//HTML elements
const mainPictureInHTML = document.getElementById("main-image");
const startAnimation    = document.getElementById("btn-start");
const stopAnimation     = document.getElementById("btn-stop");

//we need an animation handler 
let bikeAnimationHandler;
//boolean flag to track if user has chosen to start or stop
let keepSpinning = false;
//the first image # in the group
let currentImageNumber = 1;
//the last image # in the group 
const maxImageNumber = 34;

//start button is clicked
$('#btn-start').click(function(){
    console.log("Start");
    //
    userHasNotStartedAnimationYet = false;
    keepSpinning = true;
    //start spin animation
    bikeAnimationHandler = requestAnimationFrame(spin);

});

//stop button is clicked, stop the animation
//stop button is clicked
stopAnimation.addEventListener("click", function(){
    keepSpinning=false;
});

/*
run this with each frame of animation
*/
function spin(){
    //countup by 1
    currentImageNumber++;
    //if end of images, start again
    if(currentImageNumber > maxImageNumber ){
        currentImageNumber = 1;
    }
    //update img
    mainPictureInHTML.src = `images/bike-${currentImageNumber}.jpg`;

    //determine if we should keep spinning
    //or if the user has clicked the stop button,
    //stop the spin animation
    if(keepSpinning === true){
        setTimeout(function(){
            requestAnimationFrame( spin );
        }, 100);
    }  
    
}


