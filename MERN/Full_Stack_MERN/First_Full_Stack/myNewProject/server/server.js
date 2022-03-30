// Import and setup the express server
const express = require("express");
const app = express();
const port = 8000;

// Tell the server to use cors to allow communicating between the client and server since they're on different origins
const cors = require("cors");
app.use(cors());

// Allows using JSON objects to be POSTED
app.use(express.json());
// Allows using JSON objects with strings and arrays
app.use(express.urlencoded({extended: true}));

// Import the config file for starting up our database
require("./config/mongoose.config");
// Import the routes export

// This is a shorthand version of the next two lines of code: require("./routes/person.routes")(app);
const personRoutes = require("./routes/person.routes");
personRoutes(app);

// Import the config file for starting up our database
const database = require("./config/mongoose.config");

// Start the server on the designated port
app.listen(port, () =>
    console.log(`Server loaded on port ${port}`)
);