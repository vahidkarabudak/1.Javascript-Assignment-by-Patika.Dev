let username = prompt("Adınızı yazınız:")
document.querySelector("#myName").innerHTML = username

let timeDisplay = document.querySelector("#myClock")
function showTime() {
    let dateString = new Date().toLocaleString()
    let formattedString = dateString.replace(", ", " - ");
    timeDisplay.innerHTML = formattedString;
}

setInterval(showTime, 1000);