"use strict";
let bcrypt = require('bcrypt-nodejs');
//M O D E L
let mongoose = require('mongoose');
let UserSchema = mongoose.Schema({
    name: String,
    email: String,
    contact: String
});
//M O D E L  M I D D L E W A R E
UserSchema.pre('save',(next)=>{
    let user = this;
    if(!user.isModified('password')) return next();
    bcrypt.hash(user.password, null, null, (err, hash)=>{
        if(err) return next(err);
        user.password = hash;
    });
    next();
});
//M O D E L  M E T H O D S
UserSchema.methods.comparePassword = (password)=>{
    let user = this;
    return bcrypt.compare(password, user.password, (err, res)=>{
        if(err) return err;
        return res;
    });
};

let User = mongoose.model('User', UserSchema);

//C R E A T E  T O K E N  F U N C T I O N
let jwt = require('jsonwebtoken');
let sercretKey = require('../config').secretKey;
function  createToken(user){
    return jwt.sign({
        id: user._id,
        name: user.name,
        email: user.email
    }, sercretKey,{
        expiresInMinute: 1440
    },(err, token)=>{
        if(err) return err;
        return token;
    });
} 

//A P I
let authCheck = require('../middleware/auth');

module.exports = function(express) {
    let api = express.Router();
    api.get('/signup',(req,res)=>{



    });

    api.get('/user', authCheck, (req, res) => {
        res.json({
            id: 777,
            name: 'stas',
            email: 'riffca@ya.ru',
            phoneNumber: '',
            login: true,
            basket: {
                users: [
                    {
                        name: 'step'
                    },
                    {
                        name: 'ann'
                    }
                ]
            },
            status: res.authStatus
        });
    });
    return api;
};
