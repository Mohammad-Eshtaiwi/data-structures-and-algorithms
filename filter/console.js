/* eslint-disable quotes */
const createServer = () => {
  const express = require("express");
  const app = express();
  app.get("/hello", sayHello);

  var server = app.listen(3301, function () {
    var port = server.address().port;
    console.log("Example app listening at port", port);
  });
  return server;
};

function sayHello(request, response) {
  // Solution code here...
  response.send("'Hello from the back-end'");
}

createServer();

// server.close();
