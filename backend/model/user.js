"use strict";
let bcrypt = require('bcrypt-nodejs');
//M O D E L
let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;
let UserSchema = mongoose.Schema({
    //Username
    username: {
        type: String,
        maxlength: 400,
    },
    //name
    name: {
        firstName: {
            type: String,
            maxlength: 400
        },
        lastName: {
            type: String,
            minlength: 1,
            maxlength: 400
        }
    },
    //age
    age: {
        type: Number,
        max: 1000
    },
    //location
    location: {
        type: String,
        maxLength: 400
    },
    email: {
        type: String,
        maxlength: 400
    },
    password: {
        type: String,
        maxlength: 400
    },
    contactPhone: {
        type: String,
        maxlength: 400
    },
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
//M O D E L  M I D D L E W A R E
UserSchema.pre('save', next => {
    let user = this;
    //if(!user.isModified('password')) return next();
    bcrypt.hash(user.password, null, null, (err, hash) => {
        if (err) next(err);
        user.password = hash;
    });
    next();
});
//M O D E L  M E T H O D S
UserSchema.methods = {
    comparePassword(password) {
        console.log(this);
        let user = this;
        return bcrypt.compare(password, user.password, (err, res) => {
            if (err) console.log('Ошибка в user.comparePassword - ' + err);
            return res;
        });
    }
};

module.exports = mongoose.model('User', UserSchema);
