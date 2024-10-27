export class Logger {
    private static instance: Logger;
    private logHistory: string[] = [];

    private constructor() { }

    static getInstance(): Logger {
        return Logger.instance || (Logger.instance = new Logger());
    }

    log(message: string) {
        this.logHistory.push(message);
        console.log(message);
    }
}