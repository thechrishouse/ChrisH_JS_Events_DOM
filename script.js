// When the dom is fully loaded, this will be fired
document.addEventListener('DOMContentLoaded', function() {

    // Get the element with an id of onload
    let onLoadEl = documentgetElementById('onload');
    
    // Add some HTML within the element we grabbed
    onLoadEl.innerHTML = "<h1> I loaded cause the DOM was fully loaded"

})

// Get the element that will show our key code
let directionEl = document.getElementById('direction');

document.addEventListener("keydown", function(e) {

    // When a key is pressed, the element with the id of direction will show the message
    directionEl.innerText = `The key you pressed is ${e.code}`;
})

// Exercise: Click Event
let buttonEl = document.getElementById('clickMe');
buttonEl.addEventListener('click', function(e) {

    buttonEl.innerText = "You clicked me!"
})