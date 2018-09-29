/**
 * Built-in Log Configuration
 * (sails.config.log)
 *
 * Configure the log level for your app, as well as the transport
 * (Underneath the covers, Sails uses Winston for logging, which
 * allows for some pretty neat custom transports/adapters for log messages)
 *
 * For more information on the Sails logger, check out:
 * https://sailsjs.com/docs/concepts/logging
 */

var winston = require('winston');

var { createLogger, format, transport } = require('winston');
var { combine, timestamp, label, printf, prettyPrint } = format;

var logFormat = printf(function(info) {
  return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});

var customLogger = winston.createLogger({
  format: combine(
    label({label: ''}),
    timestamp(),
    prettyPrint(),
    logFormat
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: './sails-log.log',
      handleExceptions: true,
      level: 'error',
      json: false,
      colorize: false
    })
  ]
});

module.exports.log = {

  /***************************************************************************
  *                                                                          *
  * Valid `level` configs: i.e. the minimum log level to capture with        *
  * sails.log.*()                                                            *
  *                                                                          *
  * The order of precedence for log levels from lowest to highest is:        *
  * silly, verbose, info, debug, warn, error                                 *
  *                                                                          *
  * You may also set the level to "silent" to suppress all logs.             *
  *                                                                          *
  ***************************************************************************/

  level: 'info', // default level: 'info'
  custom: customLogger

};
