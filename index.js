const express = require("express");
const i18n = require("i18n");

var app = express();

i18n.configure({
  // setup some locales - other locales default to en silently
  locales: ["en", "es"],

  // where to store json files - defaults to './locales' relative to modules directory
  directory: __dirname + "/locales",

  defaultLocale: "en",

  // sets a custom cookie name to parse locale settings from  - defaults to NULL
  cookie: "lang"
});

// default: using 'accept-language' header to guess language settings
app.use(i18n.init);

app.get("/ping", function(req, res) {
  var greeting = res.__("Hello");
  res.send(greeting);
  res.end();
});

app.set("views", __dirname + "/views");

app.get("/", function(req, res) {
  console.log("Hello i18n");
  res.render("index.ejs");
});

app.listen("3000");
