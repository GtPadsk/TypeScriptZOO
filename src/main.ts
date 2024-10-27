import './style.css'
import { addAnimal, addEmployee, addAnimals, addEmployees } from './utils/functions'
import { Logger } from './utils/logger'

document.getElementById("animalForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const type = (document.getElementById("animalType") as HTMLSelectElement).value as "zebra" | "elephant" | "tiger"; // Narrowing type
    const name = (document.getElementById("animalName") as HTMLInputElement).value;
    const age = parseInt((document.getElementById("animalAge") as HTMLInputElement).value, 10);

    if (type) {
        addAnimal(type, name, age, origin);
    } else {
        console.error("Invalid animal type selected");
    }
});


document.getElementById("employeeForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const type = (document.getElementById("employeeType") as HTMLSelectElement).value as "zookeeper"; // Ensure type is narrowed
    const safetyTrainingCompletionDate = new Date();

    if (type === "zookeeper") {
        addEmployees(type, safetyTrainingCompletionDate);
    } else {
        console.error("Invalid employee type selected");
    }
});

document.getElementById("logAnimals")?.addEventListener("click", () => {
    Logger.getInstance().log("All animals:");
    addAnimals.list().forEach(animal => Logger.getInstance().log(`Animal: ${animal.name}, Age: ${animal.age}`));
});

document.getElementById("logEmployees")?.addEventListener("click", () => {
    Logger.getInstance().log("All employees:");
    addEmployee.list().forEach(employee => Logger.getInstance().log(`Employee: ${employee.constructor.name}, Completion Date: ${employee.safetyTrainingCompletionDate.toDateString()}`));
});