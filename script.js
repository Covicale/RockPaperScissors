
window.onload = () => {
    let gameStarted = false;

    let options = document.getElementsByClassName("optBtn");
    let playerChose = document.getElementById("playerIcon");
    let pcChose = document.getElementById("pcIcon");
    let resultadoTexto = document.getElementById("resText");

    let playerPoints = 0;
    let pcPoints = 0;

    addEventListener("mousedown", (e) =>{

        if (e.target.className == "optBtn" && gameStarted == false){

            e.target.classList.toggle("options-pressed");
            animGames();
            gameStarted = true;
            PlayGame(e.target.textContent);
            resetText()
        }else if(e.target.className == "optBtn" || e.target.className == "optBtn options-pressed"){
            animGames();
            gameStarted = false;
            resetText();
            
        }

    })

    function PlayGame(chose){

        let computer = "";
        playerChose.src = `./icons/${chose.toLowerCase()}.svg`;

        randN = Math.floor(Math.random() * 3) + 1;
        switch(randN){
            case 1:
                computer = "rock";
                pcChose.src = "./icons/rock.svg";
                break;
            case 2:
                computer = "paper";
                pcChose.src = "./icons/paper.svg";
                break;
            case 3:
                computer = "scissors";
                pcChose.src = "./icons/scissors.svg";
                break;

        }

        playerChose.style.visibility = "visible";
        pcChose.style.visibility = "visible";

        resultado = check(chose.toLowerCase(), computer.toLowerCase());


        switch(resultado){

            case 1:
                resultadoTexto.innerHTML = "You won.";
                playerPoints++;
                document.getElementById("playerText").innerHTML = `PLAYER (${playerPoints})`;
                break;

            case 2:
                resultadoTexto.innerHTML = "The PC won.";
                pcPoints++;
                document.getElementById("pcText").innerHTML = `PC (${pcPoints})`;
                break;

            case 0:
                resultadoTexto.innerHTML = "Draw";
                break;

        }

        resultadoTexto.style.visibility = "visible";

    }

    function check(player1, player2){

        if (player1.toLowerCase() == 'rock' && player2.toLowerCase() == 'paper'){
            return 2;
        }else if (player1.toLowerCase() == 'scissors' && player2.toLowerCase() == 'rock'){
            return 2;
        }else if (player1.toLowerCase() == 'paper' && player2.toLowerCase() == 'scissors'){
            return 2;
        }else if (player1.toLowerCase() == player2.toLowerCase()){
            return 0;
        }else{
            return 1;
        }
    }

    function animGames(){
        playerChose.classList.toggle("animGames");
        pcChose.classList.toggle("animGames");
    }

    function resetText(){

        if (gameStarted){
            for (let i = 0; i < options.length; i++){
                options[i].innerHTML = "RESET";
            }
        }else{
            let arr = ['ROCK', 'PAPER', 'SCISSORS'];
            for (let i = 0; i < options.length; i++){
                options[i].innerHTML = arr[i];
                options[i].className = "optBtn"
                resultadoTexto.style.visibility = "hidden";
            }
        }
        
    }

}