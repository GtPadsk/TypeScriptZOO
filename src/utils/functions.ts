import { Animal, Zebra, Elephant, Tiger } from "../classes/animals";
import { Employee, Zookeeper } from "../classes/employees";
import { Logger } from "./logger";

class Add<T> {
    private items: T[] = [];
    add(item: T) { this.items.push(item); }
    list() { return this.items; }
}

export const addAnimals = new Add<Animal>();
export const addEmployee = new Add<Employee>();

export const addAnimal = (
    type: "zebra" | "elephant" | "tiger",
    name: string,
    age: number,
    origin: "Africa" | "India" | "China",
) => {
    const animalClasses = { zebra: Zebra, elephant: Elephant, tiger: Tiger };
    const AnimalClass = animalClasses[type];
    if (AnimalClass) {
        const animal = new AnimalClass(name, age, origin, type);
        addAnimals.add(animal);
        Logger.getInstance().log(`Added ${type}: ${name}, Age: ${age}, Origin: ${origin}`);
    }
};

// export const addAnimal = (type: "zebra" | "elephant" | "tiger", name: string, age: number) => {
//     const animalClasses = { zebra: Zebra, elephant: Elephant, tiger: Tiger };
//     const AnimalClass = animalClasses[type];
//     if (AnimalClass) {
//         const animal = new AnimalClass(name, age);
//         addAnimals.add(animal);
//         Logger.getInstance().log(`Added ${type}: ${name}, Age: ${age}`);
//     }
// }

export const addEmployees = (type: "zookeeper", safetyTrainingCompletionDate: Date) => {
    if (type.toLowerCase() === "zookeeper") {
        const employee = new Zookeeper(type, safetyTrainingCompletionDate);
        addEmployees.add(employee);
        Logger.getInstance().log(
            `Added ${type} Safety training completion date ${safetyTrainingCompletionDate.toDateString()}`
        );
    }
}