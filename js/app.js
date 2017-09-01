console.log("Start the typescript game");
function startGame() {
    var messageElement = document.getElementById('messages');
    messageElement.innerText = "Game Started!! lets dive in";
    var playerName = "Chandio";
    logPlayerName(playerName);
}
function logPlayerName(name) {
    console.log(name + " is starting a new game");
}
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map