// - In dieser Aufgabe sollst du drei Funktionen - walk, pause, turn - schreiben, die eine Katze steuern.
// - HTML und CSS ist vorgegeben (siehe Code-Snippet). Und nutze auch die Bilder, die im Ordner "images" liegen.
// - Folgende Befehle sind für die Aufgabe wichtig: setInterval(), clearInterval(), window.innerWidth und Boolean true/false.

// # ✨ Bonus
// - Erstelle eine vierte Funktion speed, in der du die Millisekunden von deinem erstellten Intervall änderst

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