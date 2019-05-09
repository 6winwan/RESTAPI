// Import express to use REST API 
const express = require('express')  

// use body-parser to parse incoming bodies
const bodyParser = require('body-parser') 

const app = express();

// Use local host port: 8070
const port = process.env.PORT || 8070; 

// Load route
const apiRoutes = require("./routes") 

// Body-Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use Api routes in the App
app.use('/', apiRoutes)

module.exports = app;

// Launch server
app.listen(port, function () {
     console.log("Running on port: " + port);
});