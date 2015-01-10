module.exports = function(){

  var express = require('express');
  var app = express();

  // Use 'views' as the directory for HTML views.
  app.set('views', __dirname + '/views');

  // Render static files from the 'public' directory.
  app.use(express.static(__dirname + '/public/app/'));

  // Use the routes.js script to point requests to the appropriate rendering script.
  require('./lib/routes')(app);

  // Return the app
  return app;

}
