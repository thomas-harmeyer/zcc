const axios = require('axios');
fs = require('fs');


const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

const getAllTickets = (username, passwrod, subdomain) => {

    const config = {
        method: 'get',
        url: 'https://zccthomasharmeyer.zendesk.com/api/v2/requests',
        headers: {
           
        }
    };

    axios(config).then(function (response) {
        const data = JSON.stringify(response.data);
        console.log(data);
        fs.writeFile("response.json", data, (error) => { if (error) console.log(error) });
        return data;

    }).catch(function (error) {
        console.log(error);
        return undefined;
    });
}
