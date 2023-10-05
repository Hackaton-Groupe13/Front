var count = 0;
var correctAnswer = "";
var input;
var emojiArray = [];

window.onload = function() {
    const emojiElement = document.getElementById('emoji0');
    input = document.getElementById('answerInput');

    fetch("http://149.202.40.232:8080/api/info")
        .then(response => response.json())
        .then(data => {
            // Utilisez la réponse de l'API pour définir correctAnswer
            correctAnswer = data.emoji.reponse;
            console.log(correctAnswer)

            // Obtenez les emojis de la réponse de l'API et stockez-les dans le tableau
            emojiArray = data.emoji.emoji.split(',');
            emojiElement.innerHTML = emojiArray[0];
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
        incrementCount()
    }
}

// function incrementCount() {
//     count += 1
//     if (count == 1) {
//         const emojiElement = document.getElementById('emoji2');
//         emojiElement.innerHTML = "✅";
//     } else if (count == 2) {
//         const emojiElement = document.getElementById('emoji3');
//         emojiElement.innerHTML = "✅";
//     } else if (count == 3) {
//         const emojiElement = document.getElementById('emoji4');
//         emojiElement.innerHTML = "✅";
//     } else {
//         lost()
//     }
// }

function incrementCount() {
    count += 1;
    if (count <= emojiArray.length-1) {
        const emojiElement = document.getElementById('emoji' + count);
        emojiElement.innerHTML = emojiArray[count];
    } else {
        lost();
    }
}

function win() {
    input.classList.add("hidden");
    alert("Gagné")
}

function lost() {
    input.classList.add("hidden");
    alert("Perdu")
}