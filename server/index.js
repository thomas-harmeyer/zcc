const axios = require("axios");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { config } = require("process");

fs = require("fs");

const app = express();
const port = 3001;

//cors options
const options = {
  origin: "http://localhost:3000",
};

app.use(cors(options));

const jsonParser = bodyParser.json();

app.post("/", jsonParser, (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const body = req.body;
  console.log(req.body);
  const response = getAllTickets(body.type, body.data);
  response.then((data) => {
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const getAllTickets = (type, data) => {
  var config = {
    method: "get",
    url: "https://" + data.subdomain + ".zendesk.com/api/v2/requests",
    headers: {},
  };

  const username = data.username;

  if (type === "basicAuth") {
    const password = data.password;
    config.headers = {
      Authorization:
        "Basic " + Buffer.from(username + ":" + password).toString("base64"),
    };
  } else if (type === "apiToken") {
    const apiToken = data.password;
    config.headers = {
      Authorization:
        "Basic " +
        Buffer.from(username + "/token:" + apiToken).toString("base64"),
    };
  }

  console.log(config);

  return axios(config)
    .then((response) => {
      const data = JSON.stringify(response.data);
      console.log(data);
      //fs.writeFile("response.json", data, (error) => { if (error) console.log(error) });
      return data;
    })
    .catch((error) => {
      console.log("error\n" + error);
      return undefined;
    });
};
