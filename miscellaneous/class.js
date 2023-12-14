class Animal {
    constructor(name, legCount, speaks) {
        this.name = name
        this.legCount = legCount
        this.speaks = speaks
    }
    //Below method can be called on an object of a class, not directly on the class
    speak() {
        console.log("Hi, there " + this.speaks);
    }
    //static methods are associated with class itself not with an instance of class
    static classType(x) {
        return `Animal`;
    }
}

let deer = new Animal("Hiran", 4, "hin hin");
console.log(deer.name);
deer.speak();
console.log(Animal.classType()); 
