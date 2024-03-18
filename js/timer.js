const time1 = new Date(2024, 5, 20).getTime() + 3 * 1000;
const time2 = new Date().getTime() + 3 * 1000;
const time = time1 - time2;

const totalSeconds = Math.floor(time / 1000);

const seconds = Math.floor((totalSeconds / 1000) % 60);
const minutes = Math.floor((totalSeconds / (1000 * 60)) % 60);
const hours = Math.floor((totalSeconds / (1000 * 60 * 60)) % 24);

console.log(`${hours}:${minutes}:${seconds}`);

// 2桁で表示を揃えたい時

const secondsFormatted = String(seconds).padStart(2, "0");
const minutesFormatted = String(minutes).padStart(2, "0");
const hoursFormatted = String(hours).padStart(2, "0");

console.log(`${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`);
