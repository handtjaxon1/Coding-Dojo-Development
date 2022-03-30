const express = require("express");
const app = express();
const port = 8000;

// Tell the server to use cors
const cors = require("cors");
app.use(cors());

// Import the routes export
// This is a shorthand version of the next two lines of code: require("./routes/person.routes")(app);
const personRoutes = require("./routes/person.routes");
personRoutes(app);

app.listen(port, () =>
    console.log(`Server loaded on port ${port}`)
);