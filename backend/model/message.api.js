"use strict";
//M O D E L
let mongoose = require('mongoose');
let MessageSchema = mongoose.schema({
	name: String,
	contact: String,
	login: Boolean
});

MessageSchema.methods.checkPassword = (req, res)=>{
	
	
};

//A P I
module.exports = function(express){

	let api = express.Router();
	api.get('/message', (req,res)=>{
		res.json({
			title: 'Title',
			text: 'Message',
			to: 'Stas',
			from: 'Ann',
		});
	});

	return api;
};