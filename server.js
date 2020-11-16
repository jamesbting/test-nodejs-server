const express = require("express");
var server = express();

server.use("/ping", (res) => res.status(200).send("HTTP server is live"));

server.use((res) =>
  res
    .status(404)
    .send(
      "Sorry, that route doesn't exist. Please try again with a valid route"
    )
);

server.listen(8080, () =>
  console.log("NLU JS Client's HTTP server is listening on port 8080")
);
