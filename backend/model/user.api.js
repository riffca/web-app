"use strict";
//M O D E L
let mongoose = require('mongoose');
let UserSchema = mongoose.Schema({
    name: String,
    contact: String,
});
let User = mongoose.model('User', UserSchema);

//A P I
let authCheck = require('../middleware/auth');
module.exports = function(express) {
    let api = express.Router();
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
