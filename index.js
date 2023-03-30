const express = require('express')
const axios = require('axios');
const cron = require('node-cron');
const facade = require('./externalFacade.js');
var bodyParser = require('body-parser')

const urlData = "http://193.124.117.158/api/tabledata/tablestructure";
const postConfig = {
    headers: {
        'AuthToken': 'f374fb8a9abf42678cb7835c8d19996aqj0m8j0z5lj7vw25v9wt'
    }
}
const postData = { "TableId": 10011, "IsAdminMode": false, "ViewModeId": null, "DataRequest": { "TableId": 10011, "StartIndex": 0, "EndIndex": 0, "Filter": null, "Sortings": [] } }


cron.schedule('*/30 * * * * *', () => {
    console.log("refresh data");
    axios.post(urlData, postData, postConfig)
        .then((response) => {
            return response.data
        }).then((data) => {
            facade.setData("server", data.InitialData);
        })
});

const app = express();
app.use(bodyParser.json());

app.get('/get-data', function (req, res) {
    res.json(facade.getData());
    // if (!cashData['data']) {
    //     res.send("Пусто!");
    //     return;
    // }
    // res.json(cashData['data']);
})


app.post('/set-data', function (req, res) {
    facade.setData('manual', req.body);
    res.send("succes");
})

app.listen(3000)