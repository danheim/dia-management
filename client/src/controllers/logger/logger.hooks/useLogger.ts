import { LoggerOptions } from '@/controllers/logger/logger.typedefs';
import { LoggerFactory } from '@/controllers/logger/logger.factory';

export const useLogger = (options: LoggerOptions) => {
  const loggerFactory = new LoggerFactory();

  return loggerFactory.create(options);
};
