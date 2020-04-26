var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../public", "index.html"));
});

const port = process.env.PORT || 4000;
app.listen(port);

console.log("Server running on http://localhost:"+port);
