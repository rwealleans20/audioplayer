var music = [{ 
    albumName: "",
    image: "",
    tracks: [ {
        name : "",
        length: "",
        artist: "",
        lyrics: ""
        } ]
}];

var audioPyscho = new Audio('sound/pyscho.mp3');

function onClickPlay(){
    audioPyscho.play();
    $("h1").append(`<p onclick="onClickPause()">Pause Music</p>`);
}

function onClickPause(){
    this.audioPyscho.pause();
}