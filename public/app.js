module.exports = function(){

  var express = require('express');
  var stylus = require('stylus');
  
  var app = express();

  // Use 'views' as the directory for HTML views.
  app.set('views', __dirname + '/views');

  // Use Jade as the HTML view rendering engine.
  app.set('view engine', 'jade');

  // Use Stylus as the CSS middleware.
  app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: function(str, path){
      return stylus(str).set('filename', path);
    }
  }));

  // Render static files from the 'public' directory.
  app.use(express.static(__dirname + '/public'));

  // Use the routes.js script to point requests to the appropriate rendering script.
  require('./lib/routes')(app);

  // Return the app
  return app;

}
