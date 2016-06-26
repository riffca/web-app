"use strict";
let User = require('../model/user');

let jwt = require('jsonwebtoken');
let sercretKey = require('../config').secretKey;

class Auth {
    constructor(){
        console.log('Class Auth created');
    }
    createToken(req,res,next,user){
        jwt.sign({
            id: user._id,
            name: user.name,
            email: user.email
        }, sercretKey, {
            expiresIn: '10h'
        }, (err, token) => {
            if (err) return err;
            res.newToken = token;
            res.newUser = user;
            next();
        });
    }
    createNewUser(req, res, next) {
        let user = new User({
            email: req.body.email,
            password: req.body.password
        });
        this.createToken(req,res, next, user);  
    }
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
}




   

module.exports = new Auth();
