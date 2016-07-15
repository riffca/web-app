'use strict';
let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.ObjectId;

let PostSchema = mongoose.Schema({
    author: {type: ObjectId, ref: 'User'},
    title: String,
    text: String
});

let Post = mongoose.model('Post', PostSchema);

module.exports = function(express) {

    let api = express.Router();

    api.post('/create-post', (req, res) => {
        Post.create({
            author: req.body.authorId,
            title: req.body.title,
            text: req.body.text
        }).then(doc=>{
            res.send(doc);
        });
    });
    

    api.get('/get-post/:id', (req, res) => {
        Post
        .findById(req.params.id)
        .populate('author')
        .select('title text createdAt updatedAt')
        .then(doc=>{
            res.json(doc);
        });
    });

    api.get('/get-post/all', (req, res) => {
        Post
        .find()
        .skip(10)
        .limit(10)
        .select('title text createdAt updatedAt')
        .then(doc=>{
            res.json(doc);
        });
    });

    api.put('/update-post/:id', (req, res) => {
        Post.findOneAndUpdate(req.params.id, {
            title: req.body.title,
            text: req.body.text
        }).then(doc => {
            res.json(doc);
        });
    });

    api.delete('/delete-post/:id', (req, res) => {
        Post.remove(req.params.id).then(doc=>{
            res.json(doc);
        });
    });

    return api; 
};
