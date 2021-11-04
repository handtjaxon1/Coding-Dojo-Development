// Defines what each cell should be in the world
var world = [
    [1,1,1,1,1],
    [1,0,2,2,1],
    [1,2,1,2,1],
    [1,2,2,2,1],
    [1,1,0,1,1],
    [1,0,2,2,1],
    [1,2,1,2,1],
    [1,2,2,2,1],
    [1,1,1,1,1],
]

// A key-map pair that tells how each tile should be mapped
var worldDict = {
    0: 'blank',
    1: 'wall',
    2: 'sushi'
}

function drawWorld()
{
    var output = "";

    for (var row = 0; row < world.length; row++)
    {
        output += "<div class = 'row'>";
        for (var col = 0; col < world[row].length; col++)
        {
            output += "<div class = '" + worldDict[world[row][col]] + "'></div>";
        }
        output += "</div>";
    }

    document.getElementById('world').innerHTML = output;
}

var ninjaMan = {
    x: 1,
    y: 1
}

function drawNinjaMan()
{
    document.getElementById('ninja-man').style.top = ninjaMan.y * 40 + 'px';
    document.getElementById('ninja-man').style.left = ninjaMan.x * 40 + 'px';
}

function canMove(newX = 0, newY = 0)
{
    return world[ninjaMan.y + newY][ninjaMan.x + newX] != 1
}

document.onkeydown = function(e)
{
    if (e.keyCode == 37) // Left
    {
        if (canMove(-1,0))
        {
            ninjaMan.x--;
        }
    } 
    else if (e.keyCode == 39) // Right
    {
        if (canMove(1,0))
        {
            ninjaMan.x++;
        }
    }
    else if (e.keyCode == 38) // Up
    {
        if (canMove(0,-1))
        {
            ninjaMan.y--;
        }
    }
    else if (e.keyCode == 40) // Down
    {
        if (canMove(0,1))
        {
            ninjaMan.y++;
        }
    }

    world[ninjaMan.y][ninjaMan.x] = 0;
    drawWorld();
    drawNinjaMan();
}

// Called to draw the world immediately when the document is created
drawWorld();
drawNinjaMan();
