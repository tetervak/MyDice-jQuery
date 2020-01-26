class Die {
    constructor(number= 1){
        this.number = number;
    }
    rollDie() {
        this.number = Math.floor(1 + 6 * Math.random());
    }
}
export { Die }
