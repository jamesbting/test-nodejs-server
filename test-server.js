// //use http protocol
// const http = require("http");

// const requestListener = function (req, res) {
//   res.writeHead(200);
// };

// function createServer(serverObject, port) {
//   serverObject.keepAliveTimeout = 0;

//   serverObject.listen(port, () => {
//     const msg = `NLU JavaScript Client listneing on port ${port}`;
//     console.log(msg);
//   });
// }
// const server = http.createServer(requestListener);
// server.listen(8080);

//express version

const express = require("express");

var app = express();

app.get("/", (req, res) => res.send("<b>My</b> first Express http server"));

app.get("/welcome", (req, res) =>
  res.send("<b>Hello</b>, welcome to my HTTP server made with Express")
);

app.use((req, res, next) =>
  res
    .status(404)
    .send(
      "Sorry, that route doesn't exist. Please try again with a valid route"
    )
);

app.listen(8080, () => console.log("Example app listening on port 8080"));
