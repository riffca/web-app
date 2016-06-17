"use strict";

let authCheck = require('../middleware/auth');

module.exports = function(express){

	let api = express.Router();

	api.get('/user',authCheck,(req,res)=>{
		res.json({
			name: 'stas',
			contact: 'riffca@ya.ru',
			login: true,
			status: res.authStatus
		});
	});

	return api;
	
};