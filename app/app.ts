console.log("Start the typescript game");
function startGame() {
    // Game will Start
    var messageElement = document.getElementById('messages');
    messageElement.innerText = "Game Started!! lets dive in";
}
document.getElementById('startGame').addEventListener('click',startGame);
