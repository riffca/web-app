"use strict";
let User = require('./user');

//C R E A T E  T O K E N  F U N C T I O N
let jwt = require('jsonwebtoken');
let sercretKey = require('../config').secretKey;
let getToken = '';
function createToken(user) {
    jwt.sign({
        id: user._id,
        name: user.name,
        email: user.email
    }, sercretKey, {
        expiresIn: '10h'
    }, (err, token) => {
        if (err) return err;
        getToken = token;
    });
}

//A P I
let authCheck = require('../middleware/auth');

module.exports = function(express) {
    let api = express.Router();
    api.post('/signup', (req, res) => {
        let user = new User({
            email: req.body.email,
            password: req.body.password
        });
        createToken(user);
        user.save((err) => {
            if(err) {
                res.send(err);
                return;
            }
            res.json({
                success: true,
                message: "User has been created",
                token: getToken
            });
        });
    });
    api.post('/name',(req,res)=>{
        res.json(req.body);
    });
    // api.post('/login', (req, res) => {
    //     User
    //         .findOne(req.body.email)
    //         .exec(() => {
    //         });
    // });
    api.get('/user', authCheck, (req, res) => {
        res.json({
            id: 777,
            name: 'stas',
            email: 'riffca@ya.ru',
            phoneNumber: '',
            login: true,
            basket: {
                users: [{
                    name: 'step'
                }, {
                    name: 'ann'
                }]
            },
            status: res.authStatus
        });
    });
    return api;
};
