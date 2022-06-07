var mysql = require('mysql');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
 
//將request進來的 data 轉成 json()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

// 監聽於 8080 端口
app.listen(8080, function () {
    console.log('Node app is running on port 8080');
});

var mc = mysql.createConnection({
    host: "your db",
    user: "your name",
    password: "password",
    insecureAuth : true
});

mc.connect();

app.get('/show', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    mc.query('SELECT times FROM popcat.pop', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results});
    });
});

app.post('/pop', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    var reqData = req.body;
    var newtimes = reqData.times;
    console.log(req.body)

    var url = 'UPDATE popcat.pop SET times = times +' + newtimes + ' WHERE target = \'cat\' '
    
    mc.query(url, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'products update.' });
    });
});
