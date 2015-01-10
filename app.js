var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');

// Use 'views' as the directory for HTML views.
app.set('views', __dirname + '/views');

GLOBAL.CONNECTIONS = require('./lib/connections');
GLOBAL.GAME = require('./lib/game');

// Render static files from the 'public' directory.
app.use(express.static(__dirname + '/public/app/'));

// Parse POST application/json data
app.use(bodyParser.json());

// Parse POST application/x-www-form-urlencoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Parse POST multipart/form-data
app.use(multer());

// Use the routes.js script to point requests to the appropriate rendering script.
require('./lib/routes')(app);

// Notify Jake Robers that it is running
console.log("Hey Jake, I'm listening on port 7175.");

// List on port 7175;
app.listen(7175);