"use strict";
let User = require('./user');
let auth = require('../middleware/auth');
//A P I
module.exports = function(express) {
    let api = express.Router();
    //create user
    api.post('/signup', (req, res) => {
        let user = new User({
            email: req.body.email,
            password: req.body.password
        });
        auth.createToken(user, 'New user has been created')
            .then(token => {
                user.save(err => {
                    if (err) {
                        res.send(err);
                        return;
                    }
                    res.json({
                        success: true,
                        message: "New user has been created",
                        token: token
                    });
                });
            });
    });
    //login user
    api.post('/login', (req, res) => {
        User
            .findOne({
                username: req.body.email
            })
            .select('name username email')
            .exec((err, user) => {
                if (err) throw err;
                if (!user) {
                    res.send({ message: "Некорректные данные" });
                    return;
                } else if (user) {
                    var validPassword = user.comparePassword(req.body.password);
                    if (!validPassword) {
                        res.send({ message: "Неверный пароль" });
                        return;
                    } else {
                        auth.createToken(user).then(token => {
                            res.json({
                                success: true,
                                message: "Successfully login",
                                token: token
                            });
                        });
                    }
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
    api.get('/getCurrentUser',(req, res) => {
        res.json(res.decodedToken);
    });
    api.post('/updateCurrentUser',(req,res)=>{
        User.findOne(req.body.userId)
        .then(user =>{
            user.update({
                contactPhone: req.body.contactPhone,
                username: req.body.username,
                age: req.body.age,
            }).then(modefiedUser=>{
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
