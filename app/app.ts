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
    /* 
        declare a variable as function type
        we can assing a function to this variable which takes:
        string as a parameter and the return type of it is void
    */
    let logger: (value: string) => void;
    if(score < 0) {
        // assing logger to logError() since logError accepts same parameters
        // and has the same return type
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    let scoreElement: HTMLElement = (<HTMLElement>document.getElementById('postedScores'));
    scoreElement.innerText = `${playerName} : ${score}`; 
    logger(`${score}`); 
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
    if the parameters to the arrow function is zero or more then one add the ()
    if there is only one parameter then no need of (). Exception: if the type of the single parameters
    is specified use the ()
*/
let logMessage = (message: string) => console.log(message);
let logError = (message: string) => {
    console.error(message);
}