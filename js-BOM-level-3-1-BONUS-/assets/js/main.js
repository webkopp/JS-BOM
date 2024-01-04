// - In dieser Aufgabe sollst du drei Funktionen - walk, pause, turn - schreiben, die eine Katze steuern.
// - HTML und CSS ist vorgegeben (siehe Code-Snippet). Und nutze auch die Bilder, die im Ordner "images" liegen.
// - Folgende Befehle sind für die Aufgabe wichtig: setInterval(), clearInterval(), window.innerWidth und Boolean true/false.

// # ✨ Bonus
// - Erstelle eine vierte Funktion speed, in der du die Millisekunden von deinem erstellten Intervall änderst

let catInterval
let direction = "right"
let speed = 100

// cat go
function catWalk() {
    catInterval = setInterval(function() {
        const cat = document.getElementById("cat")
        const currentPos = cat.offsetLeft
        if (direction === "right") {
            cat.style.left = (currentPos + 10) + "px"
        } else {
            cat.style.left = (currentPos - 10) + "px"
        }
        if (currentPos >= window.innerWidth - cat.width && direction === "right") {
            direction = "left"
            cat.style.transform = "scaleX(-1)"
        } else if (currentPos <= 0 && direction === "left") {
            direction = "right"
            cat.style.transform = "scaleX(1)"
        }
    }, speed)
}

// cat stopp
function pause() {
    clearInterval(catInterval)
}

// cat turn
function turn() {
    const cat = document.getElementById("cat")
    if (direction === "right") {
        direction = "left"
        cat.style.transform = "scaleX(-1)"
    } else {
        direction = "right"
        cat.style.transform = "scaleX(1)"
    }
}

// cat speed
function catSpeed() {
    speed -= 10
    if (speed <= 0) {
        speed = 10
    }
    clearInterval(catInterval)
    catWalk()
}