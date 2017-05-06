//Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.

//DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


//EXPRESS SETUP
var app = express();
var PORT = 3000;


//BODY PARSER SETUP
app.use(express.static(path.join(__dirname, 'app/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


//ROUTES
var htmlRoutes = require('./app/routing/apiRoutes.js');
var apiRoutes = require('./app/routing/htmlRoutes.js');
apiRoutes(app);
htmlRoutes(app);


//LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
