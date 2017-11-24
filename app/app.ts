console.log("Start the typescript game");
function startGame() {
    // Game will Start
    // use of type assertion
    let messageElement =  (<HTMLElement>document.getElementById('messages'));
    messageElement.innerText = "Game Started!! lets dive in";

    let playerName : string;
    playerName = "Chandio";
    logPlayerName(playerName); 

    // another example for type assertion
    let n: number = 5;
    let s: string = (<number> n).toFixed(4);
}

function logPlayerName(name)  {
    console.log(`${name} is starting a new game`);
}
// use of non null assertion operator
document.getElementById('startGame')!.addEventListener('click',startGame);
