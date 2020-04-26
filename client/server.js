var express = require("express");
var path = require("path");

var app = express();
const port = process.env.PORT || 4000;
app.use(express.static(path.join(__dirname, "../public")));

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../public", "index.html"));
});

app.listen(port);

console.log("Server running on http://localhost:"+port);
