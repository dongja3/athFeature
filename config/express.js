var express = require('express');

// Define the Express configuration method
module.exports = function() {
	// Create a new Express application instance
	var app = express();
  // Set the application view engine and 'views' folder
  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  // Load the routing files
  require('../app/routes/index.server.routes.js')(app);

  // Configure static file serving
  app.use(express.static('./public'));

  // Return the Express application instance
  return app;
};
