"use strict";

let authToken = 'secret';

module.exports = function(req, res, next) {

    let token = req.headers['x-access-token'];
    if (token != authToken) {
        res.json({
            name: 'new guest',
            contact: '',
            auth: false,
            status: 'guest'
        });
    } else {
        res.authStatus = 'user';
        next();
    }

};
