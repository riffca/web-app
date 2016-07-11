"use strict";
let User = require('./user');
let auth = require('../middleware/auth');
//A P I
module.exports = function(express) {
    let api = express.Router();
    //create user
    api.post('/create-account', (req, res) => {
        let user = new User({
            email: req.body.email,
            password: req.body.password,
            username: req.body.username
        });
        auth.createToken(user, 'New user has been created')
            .then(token => {
                user.save(err => {
                    if (err) {
                        res.json({
                            error: err,
                            message: "Ошибка валидации",
                            success: false
                        });
                        return;
                    }
                    res.json({
                        success: true,
                        message: "Новый аккаут успешно создан",
                        token: token
                    });
                });
            });
    });
    //login user
    api.post('/login-account', (req, res) => {
        User
            .findOne({
                email: req.body.email
            })
            .select('name username email')
            .exec((err, user) => {
                if (err) throw err;
                if (!user) {
                    res.send({
                        message: "Ошибка! Некорректные данные.",
                        user: user,
                        success: false
                    });
                    return;
                } else if (user) {
                    user.comparePassword(req.body.password)
                        .then(answer => {
                            if (!answer) {
                                res.send({
                                    message: "Ошибка! Неверный пароль.",
                                    success: false,
                                    password: req.body.password
                                });
                                return;
                            } else {
                                auth.createToken(user).then(token => {
                                    res.json({
                                        success: true,
                                        message: "Успешный вход в приложение",
                                        token: token
                                    });
                                });
                            }
                        });
                }
            });
    });
    api.get('/getDefaultUser', auth.authCheck, (req, res) => {
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
    api.use(auth.verifyToken);
    api.get('/getCurrentUser', (req, res) => {
        res.json(res.decodedToken);
    });
    api.post('/updateCurrentUser', (req, res) => {
        User.findOne(req.body.userId)
            .then(user => {
                user.update({
                    contactPhone: req.body.contactPhone,
                    username: req.body.username,
                    age: req.body.age,
                }).then(modefiedUser => {
                    res.json({
                        success: true,
                        message: 'User has been modefied',
                        modefiedUser: modefiedUser
                    });
                });
            });
    });
    return api;
};
