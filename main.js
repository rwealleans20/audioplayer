var music = [{ 
    albumName: "Beerbongs & Bentleys",
    image: "https://consequenceofsound.files.wordpress.com/2018/05/aec-rpblb002821802-2_0.jpg?quality=80&w=380&h=380&crop=1",
    tracks: [ {
        name : "Physcho",
        length: "3:57",
        artist: "Post Malone",
        lyrics: "sound/pyscho.mp3"
    },{
        name : "Rockstar",
        length: "3:57",
        artist: "Post Malone",
        lyrics: "sound/rockstar.mp3"
    }, {
        name : "Hello",
        length: "3:57",
        artist: "Post Malone",
        lyrics: "sound/pyscho.mp3"
    } ]
}];

var audio;

function buildPlaylist(){
    
    
    music[0].tracks.forEach(function(a, num){
        var str = "";
        
        str += `<div class="songPlaylist" onclick="onClickPlay(${num})">${a.name}</div>`;

        $(".playlist").append(str);
    })
}

function onClickPlay(num){

    $(".srcAudio").attr("src", music[0].tracks[num].lyrics);
    console.log(music[0].tracks[num].lyrics);
    // audio = new Audio(`${music[0].tracks[num].lyrics}`);
    // console.log(num)
    // audio.play();
    //console.log(audio)
}

buildPlaylist();

// var audioPyscho = new Audio('sound/pyscho.mp3');

// function onClickPlay(){


//     // audioPyscho.play();
//     // $("img").attr("src", music[0].image);
//     // $(".playMusic").html(`<div class="stopMusic"><h1 class="pause" onclick="onClickPause()">Pause Music</h1></div>`);
// }

// function onClickPause(){
//     audioPyscho.pause();
//     $(".stopMusic").html(`<div class="playMusic"><h1 class="audioPause" onclick="onClickPlay()">Play</h1></div>`);
// }


