import winston from 'winston';

const logForProd = () => new (winston.transports.Console)({
  colorize: true,
  timestamp: true,
  filename: '/logs/server.log',
  handleExceptions: true,
  exitOnError: false,
  level: 'warn',
});

const logForDev = () => new (winston.transports.Console)({
  colorize: true,
  timestamp: true,
  level: 'info'
});

const logger = winston.createLogger({
  transports: [
    process.env.NODE_ENV === 'production' ? logForProd() : logForDev()
  ],
  exitOnError: false, // do not exit on handled exceptions
});

console.log   = (...args) => logger.info.call(logger, ...args);
console.info  = (...args) => logger.info.call(logger, ...args);
console.warn  = (...args) => logger.warn.call(logger, ...args);
console.error = (...args) => logger.error.call(logger, ...args);
console.debug = (...args) => logger.debug.call(logger, ...args);
