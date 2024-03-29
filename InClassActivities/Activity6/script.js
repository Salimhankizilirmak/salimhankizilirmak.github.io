var button = document.getElementById("button");
var level = 1;
var clicks = 0;
var timeout = 500;
var interval = setInterval(positionChan, timeout);

function positionChan() {
    var marginTop = Math.random() * 750 + "px";
    var marginLeft = Math.random() * 1400 + "px";
    button.style.marginTop = marginTop;
    button.style.marginLeft = marginLeft;
}

function buttonClick(event) {
    if (event.type === "click") {
        clicks++;
    }

    if (clicks == 3) {
        alert("Congratulations!\nYou passed level " + level + "!");
        level++;
        clicks = 0;
        timeout -= 100;
        if (timeout < 0) {
            timeout = 0;
        }
        clearInterval(interval);
        interval = setInterval(positionChan, timeout);
    }
    positionChan();
}

button.addEventListener("click", buttonClick);