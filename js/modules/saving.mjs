function saveSides(game, key="diceSides"){
    localStorage[key] = JSON.stringify(game.sides);
}

function loadSides(game, key="diceSides"){
    game.sides = JSON.parse(localStorage[key]);
}

function isGameSaved(key = "diceSides"){
    return localStorage.getItem(key) != null;
}
export {saveSides, loadSides, isGameSaved}
