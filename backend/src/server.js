const express = require('express');
const bodyParser = require('body-parser');
const Moment = require('moment');
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 4000
const time = Moment(new Date()).format("YYYY:MM:DD-HH:mm:ss");

app.get('/', (req, res) => {
    console.log(req.body);
    console.log(time)
    res.send('Hello World' + ' ' + time);
})

app.post('/validator', (req, res) => {
    console.log(req.body);
    console.log(time);
    res.send('Validator');
});

app.post('/response_failure', (req, res) => {
    console.log(req.body);
    console.log(req.route);
    console.log(time);
    res.send('Response_Failure');
})

app.post('/response_success', (req, res) => {
    console.log(req.body);
    console.log(req.route);
    console.log(time);
    res.send('Response_Success')
})

app.post('/transaction_notification', (req, res) => {
    console.log(req.body);
    console.log(req.route);
    console.log(time);
    res.send('Transaction_Notification')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
