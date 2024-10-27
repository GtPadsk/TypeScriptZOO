import { Logger } from "../utils/logger";

export abstract class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    abstract makeSound(): void;
}

interface SleepWalk { sleep(): void, walk(): void }
interface JumpRun { jump(): void; run(): void }
interface SwimHunt { swim(): void; hunt(): void }

export class Zebra extends Animal implements JumpRun {

    maxSpeed: number;
    origin: "Africa" | "India" | "China";

    constructor(name: string, age: number, maxSpeed: number, origin: "Africa" | "India" | "China") {
        super(name, age);
        this.maxSpeed = maxSpeed;
        this.origin = origin;
    }

    makeSound() { Logger.getInstance().log(`${this.name} the Zebra neighs.`); }
    jump() { Logger.getInstance().log(`${this.name} the Zebra jumps.`); }
    run() { Logger.getInstance().log(`${this.name} the Zebra runs.`); }
}

console.log(Zebra)

export class Elephant extends Animal implements SleepWalk {

    weight: number;

    constructor(name: string, age: number, weight: number) {
        super(name, age);
        this.weight = weight;
    }

    makeSound() { Logger.getInstance().log(`${this.name} the Elephant trumpets.`); }
    sleep() { Logger.getInstance().log(`${this.name} the Elephant sleeps.`); }
    walk() { Logger.getInstance().log(`${this.name} the Elephant walks.`); }
}

console.log(Elephant)


export class Tiger extends Animal implements SwimHunt {

    wasOutsideOfCageInPast8Hours: boolean;

    constructor(name: string, age: number, wasOutsideOfCageInPast8Hours: boolean) {
        super(name, age);
        this.wasOutsideOfCageInPast8Hours = wasOutsideOfCageInPast8Hours;
    }

    makeSound() { Logger.getInstance().log(`${this.name} the Tiger roars.`); }
    swim() { Logger.getInstance().log(`${this.name} the Tiger swims.`); }
    hunt() { Logger.getInstance().log(`${this.name} the Tiger hunts.`); }
}

console.log(Tiger)

export class allAnimals {
    private animals: Animal[] = [];
    addAnimal(animal: Animal) { this.animals.push(animal); }
    listAnimals() { return this.animals; }
}

// const allAnimals = new allAnimals();

