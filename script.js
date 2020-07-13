function check(player1, player2){
    try{
        if (player1.toLowerCase() == 'rock' && player2.toLowerCase() == 'papers'){
            return "Player 2 has won.";
        }else if (player1.toLowerCase() == 'scissors' && player2.toLowerCase() == 'papers'){
            return "Player 2 has won.";
        }else if (player1.toLowerCase() == player2.toLowerCase()){
            return "Draw.";
        }else{
            return "Player 1 has won.";
        }
    }catch(err){
        throw "Error: " + err.message;
    }
}

function PlayGame(){

    let computer = "";

    randN = Math.floor(Math.random() * 3) + 1;
    switch(randN){
        case 1:
            computer = "rock";
            break;
        case 2:
            computer = "papers";
            break;
        case 3:
            computer = "scissors";
            break;
    }

    let player = prompt("What you want to be?: 'Rock', 'Papers', 'Scissors'");

    if (player == null || player == "" || (player != "rock" && player.toLowerCase() != "papers" && player.toLowerCase() != "scissors")) {

        console.log("Write something.");

    }else{

        console.log("PLAYER 1 (you): " + player.toUpperCase());
        console.log("PLAYER 2 (pc): " + computer.toUpperCase());
        console.log(check(player, computer));

    }

}
