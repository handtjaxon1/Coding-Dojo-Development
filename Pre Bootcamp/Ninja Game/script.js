// Variables that determine the character's starting position, and movement related info
var leftValue = 100;
var topValue = 100;
var increment = 10;
var direction = 'down';
var altStep = 1;

// Define variables to control how far left/right and up/down the character can move on the screen
var screenX = 750;
var screenY = 600;

// Updates the character's position on the screen based on our input
function update()
{
    document.getElementById("character").style.left = leftValue+"px";
    document.getElementById("character").style.top = topValue+"px";
    document.getElementById("character").style.backgroundImage = "url('images/"+direction+altStep+".png')";
}

// Changes which "step" the character is on
function alternateStep()
{
    // 1 is left, 2 is right
    altStep = altStep == 1 ? 2 : 1;
}

/**
 * Like the previous challenge, I tried out my own implementation as practice.
 * The main difference is just that I a) made a function for alternating the step
 * and b) I only make the character "step" if they haven't hit the edge of the screen
 * I liked the look of that better.
 */

document.onkeydown = function(e)
{
    console.log(e);

    // Compare the value of the pressed down key with the keys we're looking for to determine input
    if (e.keyCode == 37) // Left
    {
        direction = 'left';
        // Check if at the edge of the screen
        if (leftValue - increment < 0)
        {
            // Prevent moving too far left
            leftValue = 0;
            // Note: alternateStep() is intentionally not called when the edge is reached
        }
        else
        {
            // Move and alternate the step
            leftValue -= increment;
            alternateStep();
        }
    } 
    else if (e.keyCode == 39) // Right
    {
        direction = 'right';
        if (leftValue + increment > screenX)
        {
            // Prevent moving too far right
            leftValue = screenX;
        }
        else
        {
            leftValue += increment;
            alternateStep();
        }
    }
    else if (e.keyCode == 38) // Up
    { 
        direction = 'up';
        if (topValue - increment < 0)
        {
            // Prevent moving too far up
            topValue = 0;
        }
        else
        {
            topValue -= increment;
            alternateStep();
        }
    }
    else if (e.keyCode == 40) // Down
    { 
        direction = 'down';
        if (topValue + increment > screenY)
        {
            // Prevent moving too far down
            topValue = screenY;
        }
        else
        {
            topValue += increment;
            alternateStep();
        }
    }

    // Update position
    update();
}
