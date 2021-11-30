export class ConsoleLogger {
  constructor(protected readonly name: string) {}

  info(...logs: any[]) {
    console.log(`[${this.name}]:`, ...logs);
  }

  warn(...logs: any[]) {
    console.warn(`[${this.name}]:`, ...logs);
  }

  error(...logs: any[]) {
    console.error(`[${this.name}]:`, ...logs);
  }
}
