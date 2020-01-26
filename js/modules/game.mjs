import { Die } from "./die.mjs";
class Game {
    constructor(numberOfDice = 3) {
        this.dice = [];
        for(let i = 0; i < numberOfDice; i++){
            this.dice.push(new Die());
        }
    }
    rollDice(){
        this.dice.forEach(die => die.rollDie());
    }
    get total(){
        let sum = 0;
        for(let die of this.dice){
            sum += die.number;
        }
        return sum;
    }
}
export { Game }
