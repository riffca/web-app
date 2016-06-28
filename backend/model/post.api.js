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
    likes: Number
});

MessageSchema.methods = {
    delete(req, res) {
        this.find(res.body.id)
            .then(message => {
                message.remove();
            });
    },
    update(req, res) {
        this.find(req.body.messageId)
            .then(message => {
                message.update({
                    to: req.body.toId,
                    from: req.body.fromId,
                    title: req.body.title,
                    text: req.body.text
                });
                res.json({
                    success: true,
                    messageData: message
                });
            }, errorHandler(res));
    },
    create(req, res) {
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
module.exports = function(express) {

    let api = express.Router();
    api.get('/message', (req, res) => {
        res.json({
            title: 'Title',
            text: 'Message',
            to: 'Stas',
            from: 'Ann',
        });
    });

    return api;
};
