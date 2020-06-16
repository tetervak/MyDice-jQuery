class Die {
    constructor(side= 1){
        console.log("constructor() is called");
        this.side = side;
    }
    rollDie() {
        console.log("rollDie() is called");
        this.side = Math.floor(1 + 6 * Math.random());
    }
    get side(){
        console.log("get side() is called");
        return this.n;
    }
    set side(side){
        console.log("set side() is called");
        console.log(`side = ${side}`);
        console.assert(side > 0, "side must be > 0");
        console.assert(side <= 6, "side must be <= 6");
        this.n = side;
    }
}
export { Die }
