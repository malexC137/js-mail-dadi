var playerScore = 0
var computerScore = 0
var rounds = 10

for (var i = 0; i < rounds; i++) {
    playerScore += Math.floor(Math.random() * (6 - 0) + 1);
    computerScore += Math.floor(Math.random() * (6 - 0) + 1);
}

console.log(playerScore);
document.getElementById("playerScore").innerHTML = playerScore;
console.log(computerScore);
document.getElementById("computerScore").innerHTML = computerScore;

if (playerScore > computerScore) {
    console.log("Il giocatore ha ottenuto un punteggio più alto");
    document.getElementById("winner").innerHTML = "Il giocatore ha ottenuto un punteggio più alto";
} else if (computerScore > playerScore) {
    console.log("Il computer ha ottenuto un punteggio più alto");
    document.getElementById("winner").innerHTML = "Il computer ha ottenuto un punteggio più alto";
} else {
    console.log("Entrambi hanno ottenuto lo stesso punteggio")
    document.getElementById("winner").innerHTML = "Entrambi hanno ottenuto lo stesso punteggio";
}






