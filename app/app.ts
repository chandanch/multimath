console.log("Start the typescript game");
function startGame() {
    // Game will Start
    // use of type assertion
    let messageElement =  (<HTMLElement>document.getElementById('messages'));
    messageElement.innerText = "Game Started!! lets dive in";

    let playerName : string;
    playerName = getPlayerName();
    postScore(playerName, 300);
    //postScore(playerName, -3);
    logMessage(`${playerName}`);
}

/**
 * @desc function annotation
 * this function returns string
 */
function getPlayerName(): string {
    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById('playername');
    return inputElement.value;
}

// use of (optional and default intial value parameter)
function postScore(playerName?: string, score: number = 0): void {
    if(playerName == null) {
        playerName = 'Multimath App'
    }
    let scoreElement: HTMLElement = (<HTMLElement>document.getElementById('postedScores'));
    scoreElement.innerText = `${playerName} : ${score}`; 
}

function logPlayerName(name: string)  {
    console.log(`${name} is starting a new game`);
}
// use of non null assertion operator
document.getElementById('startGame')!.addEventListener('click',startGame);

/*  Arrow Functions:
    use of arrow functions to log messages
    statement to the right of the = of the log message represents the arrow function
    right of the => represents the function body of the arrow function
    if the parameters to the arrow function is zero or more then add the ()
    if there is only one parameter then no need of (). Exception: if the type of the single parameters
    is specified use the ()
*/
let logMessage = (message: string) => console.log(message);
let logError = (message: string) => {
    console.error(message);
}