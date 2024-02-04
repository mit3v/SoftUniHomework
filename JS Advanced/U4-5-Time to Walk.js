function timeToWalk(steps, length, speed) {
    let distance = steps * length;
    let speedms = speed / 3.6;
    let timeInSeconds = Math.round(distance / speedms);
    let breaks = Math.floor(distance / 500);
    timeInSeconds += breaks * 60;
    let seconds = timeInSeconds % 60;
    timeInSeconds -= seconds;
    let hours = Math.floor(timeInSeconds / 3600);
    timeInSeconds -= hours * 3600;
    let minutes = timeInSeconds / 60;
    console.log(`${(hours < 10) ? "0" : ""}${hours}:${(minutes < 10) ? '0' : ''}${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`);

}

timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);
