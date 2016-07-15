'use strict';
let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.ObjectId;

let ProjectSchema = mongoose.Schema({
    title: String,
    description: String
});

let Project = mongoose.model('Project', ProjectSchema);

module.exports = function(express) {

    let api = express.Router();
    
    api.get('/get-project/:id', (req, res) => {
        Project
        .findById(req.params.id)
        .select('title description createdAt updatedAt')
        .then(doc=>{
        	res.json(doc);
        });
    });

    api.get('/get-project/all', (req, res) => {
        Project
        .find()
        .select('title description createdAt updatedAt')
        .skip(10)
        .limit(10)
        .then(doc=>{
        	res.json(doc);
        });
    });

    api.post('/create-project', (req, res) => {
        Project.create({
            title: req.body.title,
            description: req.body.description
        }).then(doc=>{
        	res.json(doc);
        });
    });

    api.put('/update-project/:id', (req, res) => {
        Project.findOneAndUpdate(req.params.id, {
            title: req.body.title,
            description: req.body.description
        }).then(doc => {
            res.json(doc);
        });
    });

    api.delete('/delete-project/:id', (req, res) => {
        Project.remove(req.params.id).then(doc=>{
        	res.json(doc);
        });
    });

    return api;

};
