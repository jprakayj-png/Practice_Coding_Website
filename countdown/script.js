const newYear = new Date("January 1, 2026 00:00:00").getTime();

function updateTime() {
    const now = new Date().getTime();
    const diff = newYear - now;

    if (diff >= 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }
}

setInterval(updateTime, 1000);
updateTime