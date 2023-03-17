const pino = require('pino');

const loggingOptions = {
    level: "info",
    timestamp: () => {
        return `, "time":"${new Date().toJSON()}"`;
    },
    formatters: {
        level: (label) => {
            return { level: label };
        },
        bindings(bindings) {
            return { pid: undefined, hostname: bindings.hostname };
        }
    }
};

const logFilename = function () {
    let date = null;
    date = new Date();
    date = date.toISOString();
    date = date.substring(0, 10);
    date = date.replace(/-/g, '');
    return `logs/app${date}.log`;
}

const appLogger = {};

const getLogger = function() {
    if (appLogger.intance) {
        return appLogger.intance;
    }
    appLogger.intance = pino(loggingOptions, pino.destination(logFilename()));
    return appLogger.intance;
};

const logDeviceInfo = function (reqAgent) {
    let type = null;
    if (reqAgent.isMobile) {
        type = "mobile";
    } else if (reqAgent.isTablet) {
        type = "tablet";
    } else if (reqAgent.isDesktop) {
        type = "desktop";
    } else {
        type = "unknown";
    }

    const deviceInfo = {
        type: type,
        browser: {
            name: reqAgent.browser,
            version: reqAgent.version,
        },
        os: reqAgent.os,
        platform: reqAgent.platform
    }

    getLogger().info({ deviceInfo: deviceInfo });
}

module.exports = {
    logDeviceInfo
}