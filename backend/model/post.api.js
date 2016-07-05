"use strict";
//M O D E L
let errorHandler = require('../error/errorHandler');
let mongoose = require('mongoose');
let MessageSchema = mongoose.Schema({
    writtenBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    text: String,
    likes: [{
        
    }]
});

MessageSchema.statics = {
    deleteMessage(req, res) {
        this.find(res.body.id)
            .then(message => {
                message.remove();
            });
    },
    sendMessage(req, res) {
        this.create({
            to: req.body.toId,
            from: req.body.fromId,
            title: req.body.title,
            text: req.body.text,
        }).then(message => {
            res.json({
                success: true,
                message: "message sent",
                messageData: message
            });
        }, errorHandler(res));
    }
};

//A P I
let auth = require('../middleware/auth');
module.exports = function(express) {

    let api = express.Router();
    api.use(auth.checkToken);
    api.get('/getDefaultMessage', (req, res) => {
        res.json({
            title: 'Title',
            text: 'Message',

        });
    });

    return api;
};
