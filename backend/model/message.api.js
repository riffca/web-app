"use strict";

module.exports = function(express){

	let api = express.Router();

	api.get('/message', (req,res)=>{
		res.json({
			name: 'stas',
			contact: 'riffca@ya.ru',
			login: true,
			status: res.authStatus
		});
	});

	return api;
	
};