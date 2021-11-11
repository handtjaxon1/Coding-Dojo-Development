console.log("page loaded...");

function toggleVideoPlayback(value) {
    var video = document.getElementById("video-content");
    if (value) {
        video.play();
        console.log("Play video");
    } else {
        video.pause();
        console.log("Pause video");
    }
}