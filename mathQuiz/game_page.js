player1Name = localStorage.getItem("player1Name");
player2Name = localStorage.getItem("player2Name");

player1Score = 0;
player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + ": ";
document.getElementById("player2Name").innerHTML = player2Name + ": ";

document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;

document.getElementById("playerQuestion").innerHTML = "Question Turn -  " + player1Name;
document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2Name;

function send() {
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    actualAnswer = parseInt(n1) * parseInt(n2);

    questionNumber = "<h4>" + n1 + " * " + n2 + "</h4>";
    inputBox = "<br>Answer : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check();'>Check</button>";
    row = questionNumber + inputBox + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}

questionTurn = "player1";
answerTurn = "player2";

function check() {
    getAnswer = document.getElementById("inputCheckBox").value;
    if (getAnswer == actualAnswer) {
        if (answerTurn == "player1") {
            player1Score += 1;
            document.getElementById("player1Score").innerHTML = player1Score;
        } else {
            player2Score += 1;
            document.getElementById("player2Score").innerHTML = player2Score;
        }
    }
    if (questionTurn == "player1") {
        questionTurn = "player2";
        document.getElementById("playerQuestion").innerHTML = "Question turn - " + player2Name;
    } else {
        questionTurn = "player1";
        document.getElementById("playerQuestion").innerHTML = "Question turn - " + player1Name;
    }
    if (answerTurn == "player1") {
        answerTurn = "player2";
        document.getElementById("playerAnswer").innerHTML = "Answer turn - " + player2Name;
    } else {
        answerTurn = "player1";
        document.getElementById("playerAnswer").innerHTML = "Answer turn - " + player1Name;
    }
    document.getElementById("output").innerHTML = "";
}