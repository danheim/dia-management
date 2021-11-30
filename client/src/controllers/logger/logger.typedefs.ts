export enum LoggerTypes {
  Console = 'console',
  Cloudwatch = 'cloudwatch'
}

export enum LogTypes {
  Info = 'INFO',
  Warning = 'WARNING',
  Error = 'ERROR',
}

export interface LoggerOptions {
  name: string;
  type?: LoggerTypes;
}
