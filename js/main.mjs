import { Game } from "./modules/game.mjs"
let numberOfDice = 3; // the current number of dice
let maxNumberOfDice = 5; // the max number in the select (can be changed here)
let game = new Game(numberOfDice);
game.rollDice();
let $select; // select tag to input the number of dice
let $dice; // tag to contain the image tags
let $total; // tag for the displayed number
let images = []; // for image preloading

// preload dice image files to reduce flickering
for (let i = 1; i <= 6; i++) {
    let image = new Image();
    image.src = dieImageSrc(i);
    images.push(image);
}

$(document).ready(function(){
    $select = $("select");
    $dice = $("#dice");
    $total = $("#total");
    insertSelectOptions();
    insertImages();
    updateTotal();
    handleSelectionChanges();
    handleRollButtonClicks();
});

function dieImageSrc(number) {
    return `images/dice/side_${number}.png`;
}

function insertImages() {
    for (let die of game.dice) {
        let number = die.number;
        let src = dieImageSrc(number);
        $dice.append(`<img src="${src}" alt="side ${number}">`);
    }
}

function insertSelectOptions() {
    for (let i = 1; i <= maxNumberOfDice; i++) {
        $select.append(`<option value="${i}" ${(i === numberOfDice)?'selected':''}>${i}</option>`);
    }
}

function handleSelectionChanges() {
    $select.change(function () {
        let count = parseInt($select.val());
        if (count !== numberOfDice) {
            numberOfDice = count;
            game = new Game(count);
            game.rollDice();
            $dice.html("");
            insertImages();
            updateTotal();
        }
    });
}

function updateTotal() {
    $total.text(game.total);
}

function handleRollButtonClicks() {
    $("#roll_button").click(function () {
        game.rollDice();
        $dice.find("img").each(function(index){
            let number = game.dice[index].number;
            let src = dieImageSrc(number);
            $(this).attr("src", src).attr("alt", `side ${number}`);
        });
        updateTotal();
    });
}



