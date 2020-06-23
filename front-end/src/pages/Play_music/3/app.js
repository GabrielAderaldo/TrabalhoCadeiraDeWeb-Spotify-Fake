var musicaOn = false;
var lastId = '';
var som = 0.1;

export function playmusic(id) {
    var musica = document.getElementById(id)
    if (!musicaOn) {
        musica.volume = som;
        transition(id)
        musica.play();
        musicaOn = true;
        lastId = id;
    } else {
        if (id == lastId) {
            transition(id)
            musica.pause();
            musicaOn = false;
        } else {
            var musicaAntiga = document.getElementById(lastId);
            transition(lastId)
            musicaAntiga.pause();
            musicaAntiga.currentTime = 0;
            musica.volume = som;
            transition(id)
            musica.play();
            musicaOn = true;
            lastId = id;
        }
    }

}

export function rangeSlider() {
        var rangeBar = document.getElementById("rangerBar");
        var valor = parseFloat(rangeBar.value)
    if (musicaOn) {
        var musicaAtual = document.getElementById(lastId);
        musicaAtual.volume = valor / 100;
        som = valor / 100;
        rangeBar.value = valor;
        console.log(valor)

    }
        som = valor / 100;
        console.log(som)  
}
var idAux = "audio";

export function off(){
    for(var i=0; i<4; i++){
        var pauseIcon = document.getElementById(idAux.concat((i+1)+"idpause"))
        console.log(idAux.concat(i+"id"))
        console.log(pauseIcon)
        pauseIcon.classList.toggle('off');
    }
}

export function transition(id){
    var aux = document.getElementById(id.concat("idpause"));
    var aux2 = document.getElementById(id.concat("idplay"));
    aux.classList.toggle('off');
    aux2.classList.toggle('off');
}

