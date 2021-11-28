const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const cors  = require('cors');

fs = require('fs');

const app = express();
const port = 3001;

//cors options
const options = {
origin: 'http://localhost:3000',
}
    
app.use(cors(options));

const jsonParser = bodyParser.json();

app.post('/', jsonParser, (req, res) => {
    res.set('Access-Control-Allow-Origin', '*'); 
    const body = req.body;
    console.log(req.body);
    const data = body.username + " " + body.password + " " + body.subdomain;
    const response = getAllTickets(body.username, body.password, body.subdomain);
    response.then((data) => {
        res.send(data);
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

const getAllTickets = (username, password, subdomain) => {
    const config = {
        method: 'get',
        url: 'https://' + subdomain + '.zendesk.com/api/v2/requests',
        auth: {
            username: username,
            password: password
        }
    };

   return axios(config).then((response) => {
        const data = JSON.stringify(response.data);
        console.log(data);
        //fs.writeFile("response.json", data, (error) => { if (error) console.log(error) });
        return data;

    }).catch((error) => {
        console.log("error\n" + error);
        return undefined;
    });
}
