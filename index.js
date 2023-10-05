function toggleMenu() {
    var menu = document.querySelector(".menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

var imgToGuess = "";
var correctAnswer = "";
var img = document.getElementById("cover");
var p = document.getElementById("failWinText");
var input = document.getElementById('answerInput');

window.onload = function() {
    fetch("http://149.202.40.232:8080/api/info")
        .then(response => response.json())
        .then(data => {
            // Utilisez la réponse de l'API pour définir correctAnswer
            correctAnswer = data.photo.reponse;
            imgToGuess = data.photo.photo;
            img.src = imgToGuess;
            console.log(correctAnswer)
        })
        .catch(error => console.error(error));

}

function checkEnter(event) {
    if (event.key === 'Enter') {
        getAnswer();
    }
}

function getAnswer() {
    const answer = document.querySelector('input').value;
    checkAnswer(answer);
}

function checkAnswer(answer) {
    if (answer.toLowerCase() == correctAnswer.toLowerCase()) {
        win()
    } else {
        tryAgain()
    }
}

function win() {
    input.classList.add("hidden");
    p.classList.remove("red");
    p.classList.add("green");
    p.innerHTML = "Gagné"
}

function tryAgain() {
    p.classList.add("red");
    p.innerHTML = "Mauvaise réponse, essaye encore"
}