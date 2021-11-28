const axios = require('axios');
fs = require('fs');


const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello World!');
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

    axios(config).then((response) => {
        const data = JSON.stringify(response.data);
        console.log(data);
        fs.writeFile("response.json", data, (error) => { if (error) console.log(error) });
        return data;

    }).catch((error) => {
        console.log("error\n" + error);
        return undefined;
    });
}
