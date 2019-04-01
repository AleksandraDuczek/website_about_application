var music;

function initAudioPlayer () {
    music = new Audio();
    music.src = "audio.mp3";
    music.loop = true;
    music.play();
    //Set object references
    const play_button = document.getElementById("play_pause");
    //Add Event Handling
    play_button.addEventListener("click", playPause);
    // Function
    function playPause () {
    if(music.paused){
        music.play();
        play_button.style.background = "url(/src/css/pause.png)";
    }
    else {
        music.pause();
        play_button.style.background =  "url(/src/css/play.png)";
    }
    }

}
window.addEventListener("load", initAudioPlayer);