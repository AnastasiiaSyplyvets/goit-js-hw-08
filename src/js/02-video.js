
var throttle = require('lodash.throttle');


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);



const onPlay = function({seconds}) {
    // data is an object containing properties specific to that event
    const timeDuration = Math.round(seconds);

    console.log(timeDuration)

    localStorage.setItem("videoplayer-current-time", JSON.stringify(timeDuration))
};

player.on('play', function() {
    console.log('played the video!');
});

player.on('timeupdate', throttle(onPlay, 1000));



player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});



function currentTime() {
//  return   localStorage.getItem("videoplayer-current-time")?currentTime = localStorage.getItem("videoplayer-current-time"):0;
 if(localStorage.getItem("videoplayer-current-time")) {
    currentTime = localStorage.getItem("videoplayer-current-time")
 }
 else{
    currentTime = 0;
 }
 return currentTime;
}

console.log(currentTime())
// etCurrentTime() по дефолту

player.setCurrentTime(currentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});




