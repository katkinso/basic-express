//init express
const express = require("express");
const app = express();

const appConfig = require("./config/main-config.js");
const routeConfig = require("./config/route-config.js");
module.exports = app;

appConfig.init();
routeConfig.init(app);