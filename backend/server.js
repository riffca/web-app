"use strict";
let express = require('express');

// D A T A B A S E
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017', err =>{
	if(err) console.log(err);
	console.log('Database connected');
});

// E X P R E S S
let app = new express();

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

let userApi = require('./model/user.api')(express);
app.use('/api/user',userApi);
let messageApi = require('./model/message.api')(express);
app.use('/api/message',messageApi);

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

let config = require('./config');
app.listen(config.port, () => {
    console.log('server started at port ' + config.port);
});
