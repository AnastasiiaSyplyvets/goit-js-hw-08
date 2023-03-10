
var throttle = require('lodash.throttle');
import Player from  "@vimeo/player";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);



const onPlay = function({seconds}) {
    // data is an object containing properties specific to that event
    const timeDuration = Math.round(seconds);

    localStorage.setItem("videoplayer-current-time", JSON.stringify(timeDuration))
};


player.on('timeupdate', throttle(onPlay, 1000));


player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);




