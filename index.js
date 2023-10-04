




let son = ""
let url = "http://149.202.40.232:8080/api/info"
let obj = {}


fetch(url)
    .then(response => response.json())
    .then(json => {
        obj = json
        son = obj.blindTest.son

        fetchAndPlay(son)

    })
    .catch(err => {
        console.error("Erreur lors de la récupération du son:", err);
    });



function fetchAndPlay(urlSon) {

    const apiUrl = urlSon;

    fetch(apiUrl)
        .then(response => response.blob())
        .then(blob => {
            const audioPlayer = document.getElementById('audioPlayer');
            audioPlayer.src = URL.createObjectURL(blob);
            audioPlayer.play
        })
        .catch(err => {
            console.error("Erreur lors de la récupération du son:", err);
        });
}


document.getElementById("input").addEventListener("change", readInputValue)

function readInputValue() {
    let input = document.getElementById("input").value

    xdd = obj.blindTest.reponse

    let [artist, song] = xdd.split(" - ");

    input = input.toLowerCase()
    artist = artist.toLowerCase()
    song = song.toLowerCase()
    xdd = xdd.toLowerCase()

    if (xdd == input) {
        console.log("Bonne réponse")
    } else if (artist == input) {
        console.log("Artiste trouvé")
    } else if (song == input) {
        console.log("Titre trouvé")
    } else {
        console.log("Erreur")
    }
}



class musicPlayer {
    constructor() {
        this.play = this.play.bind(this);
        this.playBtn = document.getElementById('play');
        this.playBtn.addEventListener('click', this.play);
        this.controlPanel = document.getElementById('control-panel');
        this.infoBar = document.getElementById('info');
    }

    play() {
        let controlPanelObj = this.controlPanel,
            infoBarObj = this.infoBar
        Array.from(controlPanelObj.classList).find(function (element) {
            return element !== "active" ? controlPanelObj.classList.add('active') : controlPanelObj.classList.remove('active');
        });

        Array.from(infoBarObj.classList).find(function (element) {
            return element !== "active" ? infoBarObj.classList.add('active') : infoBarObj.classList.remove('active');
        });

        let btn = document.getElementById('play')

        if (controlPanelObj.classList.contains('active')) {
            console.log("play")
            btn.classList.remove('play')
            btn.classList.add('pause')

            let audioPlayer = document.getElementById('audioPlayer')
            audioPlayer.play()


        } else {
            console.log("pause")
            btn.classList.remove("pause")
            btn.classList.add("play")

            let audioPlayer = document.getElementById('audioPlayer')
            audioPlayer.pause()
        }

    }
}

const newMusicplayer = new musicPlayer();