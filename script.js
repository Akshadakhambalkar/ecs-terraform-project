let count = 15;

function updateTime(){
    document.getElementById("time").innerText = new Date().toLocaleString();
}

function updateDeploys(){
    count++;
    document.getElementById("deploys").innerText = count;
}

setInterval(updateTime,1000);
setInterval(updateDeploys,5000);

updateTime();
updateDeploys();