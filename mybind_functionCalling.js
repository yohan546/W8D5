Function.prototype.myBind = function(context) {
    return () => this.apply(context)
}

class Cat {
    constructor(name) {
        this.name = name;
    }

    meow() {
        console.log(`${this.name} says "meow"`)
    }
}

const spots = new Cat("Spots");
setTimeout(spots.meow.myBind(spots), 1000);