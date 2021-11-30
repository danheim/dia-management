import { ConsoleLogger } from './logger.clients/consoleLogger.client';
import { LoggerOptions, LoggerTypes } from './logger.typedefs';

type Loggers = {
  [key in LoggerTypes]: typeof ConsoleLogger | null;
}

export class LoggerFactory {
  static readonly loggers: Loggers = {
    [LoggerTypes.Console]: ConsoleLogger,
    [LoggerTypes.Cloudwatch]: null,
  };

  create(options: LoggerOptions) {
    const { name, type = LoggerTypes.Console } = options;

    const Logger = LoggerFactory.loggers[type];

    if (!Logger) {
      throw Error(`LOGGER ${type} NOT IMPLEMENTED`);
    }

    return new Logger(name);
  }
}
