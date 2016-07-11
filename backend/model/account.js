let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.ObjectId;
let AccountSchema = mongoose.Schema({
	active: {
		type: Boolean,
		default: false
	},
	owner: {type: ObjectId, ref: 'User'},
    basket: {
        type: String
    },
    messages: [{
        type: ObjectId,
        ref: 'Message'
    }],
    posts: [{
        type: ObjectId,
        ref: 'Post'
    }] 
});
let Account = mongoose.model('Account',AccountSchema);