"use strict";
let bcrypt = require('bcrypt-nodejs');
//M O D E L
let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;
let UserSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true
    },
    password: String,
    contact: String,
    messages: {
        type: ObjectId,
        ref: 'Message'
    },
    posts: {
        type: ObjectId,
        ref: 'Post'
    }
});
//M O D E L  M I D D L E W A R E
UserSchema.pre('save', next => {
    let user = this;
    //if(!user.isModified('password')) return next();
    bcrypt.hash(user.password, null, null, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
    });
    next();
});
//M O D E L  M E T H O D S
UserSchema.methods = {
    comparePassword(password) {
        return bcrypt.compare(password, this.password, (err, res) => {
            if (err) return err;
            return res;
        });
    }
};

module.exports = mongoose.model('User', UserSchema);
