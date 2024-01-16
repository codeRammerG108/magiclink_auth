// node_modules/amazon-cognito-passwordless-auth/dist/cdk/custom-auth/common.js
import { ConditionalCheckFailedException } from "@aws-sdk/client-dynamodb";
var LogLevel;
(function(LogLevel2) {
  LogLevel2[LogLevel2["none"] = 0] = "none";
  LogLevel2[LogLevel2["error"] = 10] = "error";
  LogLevel2[LogLevel2["info"] = 20] = "info";
  LogLevel2[LogLevel2["debug"] = 30] = "debug";
})(LogLevel || (LogLevel = {}));
var Logger = class {
  logLevel;
  constructor(logLevel2) {
    this.logLevel = logLevel2;
  }
  error(...args) {
    if (this.logLevel >= LogLevel.error) {
      console.error(...args);
    }
  }
  info(...args) {
    if (this.logLevel >= LogLevel.info) {
      console.log(...args);
    }
  }
  debug(...args) {
    if (this.logLevel >= LogLevel.debug) {
      console.trace(...args);
    }
  }
};
var logLevel = {
  ERROR: LogLevel.error,
  INFO: LogLevel.info,
  DEBUG: LogLevel.debug
}[process.env.LOG_LEVEL ?? "NONE"] ?? LogLevel.none;
var logger = new Logger(logLevel);
var allowedOrigins = process.env.CORS_ALLOWED_ORIGINS;
var allowedMethods = process.env.CORS_ALLOWED_METHODS;
var allowedHeaders = process.env.CORS_ALLOWED_HEADERS;
var maxAge = process.env.CORS_MAX_AGE;

// node_modules/amazon-cognito-passwordless-auth/dist/cdk/custom-auth/pre-signup.js
var handler = async (event) => {
  console.log("FMAN Test", event);
  logger.info("Pre-signup: auto confirming user ...");
  logger.debug(JSON.stringify(event, null, 2));
  event.response.autoConfirmUser = true;
  logger.debug(JSON.stringify(event, null, 2));
  return event;
};
export {
  handler
};
