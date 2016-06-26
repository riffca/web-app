"use strict";
let User = require('./user');

//A P I
let auth = require('../middleware/auth');

module.exports = function(express) {
    let api = express.Router();
    //create user
    api.post('/signup', auth.createNewUser,(req, res) => {
        res.newUser.save((err) => {
            if (err) {
                res.send(err);
                return;
            }
            res.json({
                success: true,
                message: "New user has been created",
                token: res.newToken
            });
        });
    });
    //login user
    api.post('/login', (req, res) => {
        User
        .findOne({
            username: req.body.email
        })
        .select('name password')
        .exec((err, user)=>{
            if (err) throw err;
            if (!user) {
                res.send({ message: "Некорректные данные" });
            } else if (user) {
                var validPassword = user.comparePassword(req.body.password);
                if (!validPassword) {
                    res.send({ message: "Неверный пароль" });
                } else {
                    // token
                    let token = auth.createToken(req,res,user);
                    res.json({
                        success: true,
                        message: "Successfully login",
                        token: token
                    });
                }
            }
        });
    });
    // api.get('/user', authCheck, (req, res) => {
    //     res.json({
    //         id: 777,
    //         name: 'stas',
    //         email: 'riffca@ya.ru',
    //         phoneNumber: '',
    //         login: true,
    //         basket: {
    //             users: [{
    //                 name: 'step'
    //             }, {
    //                 name: 'ann'
    //             }]
    //         },
    //         status: res.authStatus
    //     });
    // });
    return api;
};
