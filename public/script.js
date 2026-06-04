function updateTime() {
    const now = new Date();
    document.getElementById("time").innerText = now.toLocaleString();
}

setInterval(updateTime, 1000);
updateTime();