// Live Clock
setInterval(() => {
    document.getElementById("clock").innerText =
        new Date().toLocaleString();
}, 1000);

// Deployment Time
document.getElementById("deployTime").innerText =
    new Date().toLocaleString();

// Visitor Counter
fetch("https://api.countapi.xyz/hit/ak-devops-dashboard/visits")
    .then(res => res.json())
    .then(data => {
        document.getElementById("visits").innerText = data.value;
    });