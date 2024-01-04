// - Lernziel: JavaScript-Eventhandling und Timer-Function.
// - Schreibe eine Function, die beim Klicken des Buttons von 100% bis 0% runterzählt.
// - HTML und CSS ist vorgegeben (siehe Code-Snippet).
// - Nutzen kannst du folgende Befehle und Methoden:  onclick, setInterval(), clearInterval(), if, else if und querySelector().

function countdown() {
    let percent = 100
    const display = document.querySelector(".zeit")
    const button = document.getElementById("btn")

    button.onclick = function() {
        let interval = setInterval(function() {
            if (percent > 0) {
                percent--
                display.textContent = percent + "%"
            } else {
                clearInterval(interval)
            }
        }, 100)
    }
}
countdown()