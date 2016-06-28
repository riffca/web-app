"use strict";
//M O D E L
let errorHandler = require('../error/errorHandler');
let mongoose = require('mongoose');
let MessageSchema = mongoose.Schema({
    to: String,
    from: String,
    title: String,
    text: String
});

MessageSchema.statics = {
    deleteMessage(req, res) {
        this.findOne(req.body.messageId)
        	.select('text title')
            .then(message => {
                message.remove();
                res.json({
                	success: true,
                	data: message,
                	message: 'Message deleted'
                });
            });
    },
    updateMessage(req, res) {
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
};

let Message = mongoose.model('Message', MessageSchema);

//A P I
module.exports = function(express) {

    let api = express.Router();
    //api.use(auth.checkUserAuth);
    api.post('/create', (req, res) => {
        Message.create({
            to: req.body.toId,
            from: req.body.fromId,
            title: req.body.title,
            text: req.body.text,
        }).then(message => {
            res.json({
                message: "new Message created!",
                succes: true,
                data: message
            });
        });
    });
    api.post('/delete', (req, res) => {
        Message.deleteMessage(req, res);
    });
    api.get('/update', (req, res) => {
        Message.update(req, res);
    });
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
