"use strict";
let express = require('express');

// E X P R E S S
let app = new express();

app.use(express.static(__dirname + '/public'));

let userApi = require('./model/user.api')(express);
app.use('/api',userApi);

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

let config = require('./config');
app.listen(config.port, () => {
    console.log('server started at port ' + config.port);
});
