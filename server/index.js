// initiate express and routes
const express = require("express");
const routes = require("./routes");
const path = require("path");
const cors = require("cors");

// init app -- returns object
const app = express();
// declare middleware, accept json format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// serve static assets from build folder
app.use(express.static(path.resolve(__dirname, "../build")));
app.use(routes);
// whenever a get call is made that doesn't match anything in routes
// default to this request handler (sends back html file in build folder)
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build", "index.html"));
});
// runs server on this port
app.listen(3100);
