"use strict";

let jwt = require('jsonwebtoken');
let secretKey = require('../config').secretKey;

module.exports = {
    verifyToken(req, res, next) {
        let token = req.headers['x-access-token'];
        if (!token) {
            res.json({
                success: false,
                message: 'Ошибка! No Token Provided'
            });
            return;
        }
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                res.json({
                    message: 'Ошибка! Bad Token Provided',
                    success: false,
                    error: err
                });
                console.log(err);
            }
            res.decodedToken = decoded;
            next();
        });
    },
    createToken(user) {
        return new Promise((resolve, reject) => {
            jwt.sign({
                id: user._id,
                username: user.username,
                email: user.email
            }, secretKey, {
                expiresIn: '10h'
            }, (err, token) => {
                if (err) reject(err);
                resolve(token);
            });
        });

    },

    //Тестовая функция
    authCheck(req, res, next) {
        let authToken = 'secret';
        let token = req.headers['x-access-token'];
        if (token != authToken) {
            res.authStatus = 'guest';
            res.json({
                id: 0,
                name: 'guest',
                email: '',
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
