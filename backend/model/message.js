'use strict';
let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.ObjectId;

let MessageSchema = mongoose.Schema({
    toUser: {type: ObjectId, ref: 'User'},
    fromFrom: {type: ObjectId, ref: 'User'},
    title: String,
    text: String
});

let Message = mongoose.model('message', MessageSchema);

module.exports = function(express) {
    
    let api = express.Router();

    api.post('/create-message', (req, res) => {
        Message.create({
            toUser: req.body.toUserId,
            fromUser: req.body.fromUserId,
            title: req.body.title,
            text: req.body.text
        }).then(doc=>{
            res.send(doc);
        });
    });

    api.get('/get-message/:id', (req, res) => {
        Message
        .findById(req.params.id)
        .select('title text createdAt updatedAt')
        .then(doc=>{
            res.json(doc);
        });
    });

    api.get('/get-message/all', (req, res) => {
        Message
        .find()
        .skip(10)
        .limit(10)
        .select('title text createdAt updatedAt')
        .then(doc=>{
            res.json(doc);
        });
    });

    api.put('/update-message/:id', (req, res) => {
        Message.findOneAndUpdate(req.params.id, {
            title: req.body.title,
            text: req.body.text
        }).then(doc => {
            res.json(doc);
        });
    });

    api.delete('/delete-message/:id', (req, res) => {
        Message.remove(req.params.id).then(doc=>{
            res.json(doc);
        });
    });

    return api;

};
