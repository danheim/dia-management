import { LoggerFactory } from '../logger.factory';
import { LoggerOptions } from '../logger.typedefs';

export const useLogger = (options: LoggerOptions) => {
  const loggerFactory = new LoggerFactory();

  return loggerFactory.create(options);
};
