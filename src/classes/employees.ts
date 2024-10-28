import { Logger } from "../utils/logger";

export abstract class Employee {

    isEmployeeAtZoo: boolean;
    safetyTrainingCompletionDate: Date;

    constructor(isEmployeeAtZoo: boolean, safetyTrainingCompletionDate: Date) {
        this.isEmployeeAtZoo = isEmployeeAtZoo;
        this.safetyTrainingCompletionDate = safetyTrainingCompletionDate;
    }

    enterZoo(): void { }
    leaveZoo(): void { }
    takeSafetyTrainings(): void { }

}

export class Zookeeper extends Employee {

    private feedLog: { animalName: string; time: Date }[] = [];

    constructor(type: Zookeeper, isEmployeeAtZoo: boolean, safetyTrainingCompletionDate: Date) {
        super(isEmployeeAtZoo, safetyTrainingCompletionDate);
    }

    enterZoo() { Logger.getInstance().log("Zookeeper entered the zoo."); }
    leaveZoo() { Logger.getInstance().log("Zookeeper left the zoo."); }
    takeSafetyTrainings() { Logger.getInstance().log("Zookeeper took safety training."); }

    getFeedLog() {
        return this.feedLog;
    }

}

export class allEmployees {
    private employees: Employee[] = [];
    addEmployee(employee: Employee) { this.employees.push(employee); }
    listEmployees() { return this.employees; }
}

// const allEmployees = new allEmployees();