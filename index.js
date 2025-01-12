// Function to play the sound based on the given key
function Playsound(key) {
    // Use a switch statement to determine which sound to play
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3"); // Create a new audio object 
            crash.play(); // Play the crash sound
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3"); 
            kick.play(); 
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3"); 
            snare.play(); 
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3"); 
            tom1.play(); 
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play(); 
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3"); 
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3"); 
            tom4.play(); 
            break;
        default:
            console.log("Key not mapped to a sound."); // Log a message if the key is not mapped to a sound
    }
}



// Function to handle button clicks
function handleletter() {
    // `this` refers to the button that was clicked
    var letter = this.innerHTML; // Get the innerHTML of the clicked button (the letter it represents)
    Playsound(letter); // Call the Playsound function with the letter
}





// Add event listeners to all buttons with the class "drum"
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    // Select each button and add a click event listener
    document.querySelectorAll(".drum")[i].addEventListener("click", handleletter);
}

// Add a keydown event listener to the entire document
document.addEventListener("keydown", function(event) {
    // Pass the key that was pressed (event.key) to the Playsound function
    Playsound(event.key);
    
    
});








