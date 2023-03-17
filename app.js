const path = require("path");
const express = require("express");
const favicon = require("serve-favicon");
const mustacheExpress = require("mustache-express");
const expressUserAgent = require('express-useragent');

const app = express();

const resources = "resources";
const faviconPath = path.join(__dirname, "/resources/images/favicon.jpg");

const expressJSON = express.json();
const serveFAVICON = favicon(faviconPath);
const expressSTATIC = express.static(resources);

app.use(expressJSON);
app.use(serveFAVICON);
app.use(expressSTATIC);
app.use(expressUserAgent.express());

app.set("view engine", "html");
app.engine("html", mustacheExpress());
app.set("views", path.join(__dirname, "views"));

// https://freepngimg.com/
const appLogger = require('./system/logger/appLogger');
const categories = require('./system/resources/categories.json');

app.get("/", (req, res) => {
  appLogger.logDeviceInfo(req.useragent);
  res.render("index", { title: "Kids Mania", data: categories  });
});

app.get("/*", (req, res) => {
  res.sendStatus(404)
});

// HTTP Server PORT = ENABLED
const httpPORT = 8080;
app.listen(httpPORT, () => {
  console.log(`Server is running on HTTP port # ${httpPORT}`);
});
