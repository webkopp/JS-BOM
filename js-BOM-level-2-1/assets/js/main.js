// - Schreibe eine Funktion, die beim Auslösen die Zahlen runter zählt. Schau dir dazu die Ergebnisvorschau an.
// - HTML und CSS ist vorgegeben (siehe Code-Snippet).
// - Nutzen kannst du: setInterval(), clearInterval(), getElementsByClassName() oder getElementById() und if/else if.

function countdown() {
    let count = 10
    const display = document.getElementById("count")

    let interval = setInterval(function() {
        if(count > 0) {
            count--
            display.textContent = count
        } else {
            clearInterval(interval)
            document.querySelector(".message").style.display = "none"
        }
    }, 1000)
}
countdown()