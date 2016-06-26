"use strict";

let jwt = require('jsonwebtoken');
let sercretKey = require('../config').secretKey;

module.exports = {
    createToken(user, message) {
        return new Promise((resolve, reject) => {
            jwt.sign({
                id: user._id,
                name: user.name,
                email: user.email
            }, sercretKey, {
                expiresIn: '10h'
            }, (err, token) => {
                if (err) reject(err);
                resolve(token);
            });
        });

    },
    authCheck(req, res, next) {
        let authToken = 'secret';
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
    }
};
