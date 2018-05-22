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
    $("img").attr("src", "https://consequenceofsound.files.wordpress.com/2018/05/aec-rpblb002821802-2_0.jpg?quality=80&w=380&h=380&crop=1");
    $(".playMusic").html(`<div class="stopMusic"><h1 class="pause" onclick="onClickPause()">Pause Music</h1></div>`);
}

function onClickPause(){
    audioPyscho.pause();
    $(".stopMusic").html(`<div class="playMusic"><h1 class="audioPause" onclick="onClickPlay()">Play</h1></div>`);
}
