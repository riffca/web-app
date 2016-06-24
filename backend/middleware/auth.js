"use strict";

let authToken = 'secret';

module.exports = function(req, res, next) {

    let token = req.headers['x-access-token'];
    if (token != authToken) {
        res.authStatus = 'guest';
        res.json({
            id: 777,
            name: 'guest',
            email: 'riffca@ya.ru',
            phoneNumber: '',
            login: true,
            basket: {},
            status: res.authStatus
        });
    } else {
        res.authStatus = 'user';
        next();
    }

};
