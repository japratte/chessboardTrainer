const numberCoords = ['1','2', '3', '4', '5', '6', '7', '8'];
const letterCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const tiles = document.querySelectorAll('.tile');

var ranNumCoord;
var ranLetCoord;

var ranCoord;

tiles.forEach(tile => {
    tile.addEventListener('click', () => showAnswer(tile))
})




function ranNumberGen(numberCoords) {
    
    var ranNum = numberCoords[Math.floor(Math.random() * numberCoords.length)]
    
    return ranNum;

}

function ranLetterGen(letterCoords) {

    var ranLet = letterCoords[Math.floor(Math.random() * letterCoords.length)]

    return ranLet;
}

function showCoordQuestion() {
    
    ranLetCoord = ranLetterGen(letterCoords);
    ranNumCoord = ranNumberGen(numberCoords);
    
    ranCoord = ranLetCoord + ranNumCoord;

    
    document.getElementById("question").innerHTML = "Please click the " + ranCoord + " tile"

}

function showAnswer(tile) {
    
    if (tile.id != ranCoord) {
        
        document.getElementById("answer").innerHTML = "Incorrect - You clicked the " + tile.id + " tile !"
    }
    
    if (tile.id == ranCoord) {
        showCoordQuestion()
        showCorrectAnswer()
    }

}

function showCorrectAnswer() {
    document.getElementById("answer").innerHTML = "Correct !"
}

function showCoords(className) {
    
    var elements = document.getElementsByClassName(className)
    
    for (var i=0; i<elements.length; i++) {
        
        if (elements[i].style.display === 'none') {
            
                elements[i].style.display = 'block';
        }
        
        else {
            elements[i].style.display = 'none';
        }
                
    }
    
}

showCoordQuestion();