console.log("Start the typescript game");
function startGame() {
    // Game will Start
    var messageElement = document.getElementById('messages');
    messageElement.innerText = "Game Started!! lets dive in";

    let playerName : string = "Chandio";
    logPlayerName(playerName);
    
}

function logPlayerName(name)  {
    console.log(`${name} is starting a new game`);
}

document.getElementById('startGame').addEventListener('click',startGame);
