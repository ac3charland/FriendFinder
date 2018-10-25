var express = require("express");
var bodyParser = require("body-parser");
var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// console.log(typeof apiRoutes)
apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});