"use strict";
let express = require('express');
//bodyParser = require('body-parser');


// E X P R E S S
let app = new express();

app.use(express.static(__dirname + '/public'));


app.get('/api/user',
    (req, res, next) => {
    	let token = req.headers['x-access-token'];
    	if(!token){
    		res.tokenStatus = false;
    		next();
    	}
    	if(token !== 'secret'){
    		res.tokenStatus = false;
    		next();
    	}
    	res.tokenStatus = true;
        next();
    },
    (req, res) => {
        res.json({
            name: 'stas',
            contact: '8 950 031 82 28',
            tokenStatus: res.tokenStatus
        });
    });

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
    console.log('server started at port 3000');
});
