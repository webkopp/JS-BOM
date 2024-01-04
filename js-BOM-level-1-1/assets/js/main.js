// - Schreibe zuerst eine Funktion, die nach x Sekunden einen Text anzeigt. Dafür kannst du die setTimeout()-Methode nutzen.
// - Schreibe anschließend eine Funktion, die das Ergebnis der Vorschau ausgibt. Nutze hierfür: setInterval(), clearInterval() und if/else.


function displayText(text, seconds) {
    setTimeout(function() {
        console.log(text)
    }, seconds * 1000)
}

function previewResult() {
    let counter = 0
    const interval = setInterval(function() {
        counter++
        if (counter === 5) {
            clearInterval(interval)
            displayText("Start: Warte für 5 Sekunden", 5)
        } else {
            console.log("Erledigt. Aber du hast 5 Sekunden Lebenszeit verschwendet.", 5)
        }
    }, 1000)
}

previewResult()


// let showCountdown = 11

// const countdown = setInterval(() => {
//     showCountdown--
//     console.log(showCountdown)
//     if (showCountdown == 0) {
//         clearInterval(countdown)
//         console.log("Feierabend!")
//     } else if (showCountdown == 7){
//         console.log("Erledigt. Aber du hast 3 Sekunden Lebenszeit verschwendet")
//     }
// }, 1000)