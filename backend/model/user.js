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
        if (err) return next(err);
        user.password = hash;
    });
    next();
});
//M O D E L  M E T H O D S
UserSchema.methods = {
    comparePassword(password) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, this.password, (err, res) => {
                if (err) return reject(err);
                resolve(res);
            });
        });
    }
};

module.exports = mongoose.model('User', UserSchema);
