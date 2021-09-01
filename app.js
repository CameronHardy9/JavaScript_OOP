console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this. residence = residence;
        this. hobbies = hobbies;
    }
    info() {
        console.log(`Hi! My name is ${this.name} and I'm from ${this.residence}. I have ${this.pets} pet(s) and one of my hobbies is ${this.hobbies[Math.floor(Math.random() * (this.hobbies.length))]}.`);
    }
    greeting() {
        let input = prompt("What is your name?");
        console.log(`Well, hi there ${input}!`);
    }
}


class Coder extends Person {
    constructor(name, pets, residence, hobbies) {
        super(name, pets, residence, hobbies);
        this.occupation = "Full Stack Web Developer";
    }
    greeting() {
        console.log("01010111 01100101 01101100 01101100 00101100 00100000 01101000 01101001 00100000 01110100 01101000 01100101 01110010 01100101 00100001");
    }
}


let cameron = new Person("Cameron", 1, "Chelsea, AL", ["Coffee", "Woodworking", "Coding", "Music", "Biking"]);

let cam_jam = new Coder("cam_jam", 1, "Redacted", ["Coffee", "Coding"]);

console.log("\nPERSON\n");
cameron.info();
cameron.greeting();

console.log("\nCODER\n");
cam_jam.info();
cam_jam.greeting();