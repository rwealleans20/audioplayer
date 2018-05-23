var music = [{ 
    albumName: "Beerbongs & Bentleys",
    image: "https://consequenceofsound.files.wordpress.com/2018/05/aec-rpblb002821802-2_0.jpg?quality=80&w=380&h=380&crop=1",
    tracks: [ {
        name : "Physcho",
        length: "3:57",
        artist: "Post Malone",
        lyrics: "sound/pyscho.mp3"
        } ]
}];


var audioPyscho = new Audio('sound/pyscho.mp3');

function onClickPlay(){
    music.forEach(function(a, num){
        a[num].tracks[0].lyrics.play(); // set lyrics to audio
        $("img").attr("src", a[0].image);
        $(".playMusic").html(`<div class="stopMusic"><h1 class="pause" onclick="onClickPause()">Pause Music</h1></div>`);
    })
    // audioPyscho.play();
    // $("img").attr("src", music[0].image);
    // $(".playMusic").html(`<div class="stopMusic"><h1 class="pause" onclick="onClickPause()">Pause Music</h1></div>`);
}

function onClickPause(){
    audioPyscho.pause();
    $(".stopMusic").html(`<div class="playMusic"><h1 class="audioPause" onclick="onClickPlay()">Play</h1></div>`);
}
