class Die {
    constructor(num= 1){
        this.num = num;
    }
    rollDie() {
        this.num = Math.floor(1 + 6 * Math.random());
    }
    get num(){
        console.log("get num() is called");
        return this.n;
    }
    set num(num){
        console.log("set num() is called");
        this.n = num;
    }
}
export { Die }
