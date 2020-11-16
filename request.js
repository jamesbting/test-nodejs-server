const request = require("request");
const express = require("express");

var app = express();

var req = request
  .post(
    {
      url: "https://auth.crt.nuance.com/oauth2/token",
      form: { grant_type: "client_credentials", scope: "asr nlu tts dlg" },
    },
    function (err, httpResponse, body) {
      console.log(body);
    }
  )
  .auth(
    "appID%3ANMDPTRIAL_chenna_lian_nuance_com_20200824T211145480568%3Ageo%3Aus%3AclientName%3Adefault",
    "TUK2BAaCtBJ7qTJi847al-l9-CNELPnQTNp0mKlY4ZQ"
  );

app.listen(4040, () =>
  console.log("Example request app listening on port 4040")
);
