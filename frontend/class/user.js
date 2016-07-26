import tokenService from '../service/token';
//import Basket from './basket';

import Post from './post';
import Project from './project';
import Message from './message';

export default class User {
    constructor({
        id,
        username,
        email,
        auth = true,
    }) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.auth = auth;
    }

    checkAuth() {
        let token = tokenService.getToken();
        if (!token) {
            this.auth = false;
            return false;
        }
        return Vue.http.post('/api/user/check-auth', {
            token: token
        }).then(res => {
            if (res.data.success === false) {
                return false;
            }
            return true;
        });
    }

    /**
    /*
    /*A P I
    /*
    */

    // M E S S A G E api

    getMessageAll() {
        return Message
            .getAll()
            .then(res => {
                return res.data;
            });
    }
    getMessage(messageId) {
        return Message
            .getOne(messageId)
            .then(res => {
                return res.data;
            });
    }
    sendMessage({ toUser, fromUser = this.id, title, text }) {
        let message = new Message({
            toUser: toUser,
            fromUser: fromUser,
            title: title,
            text: text
        });
        return Message
            .create(message)
            .then(res => {
                return res.data.message;
            });
    }

    // P O S T api
    getAllPosts() {
        return Post
            .getAllUserPosts(this.id)
            .then(res => {
                return res.data;
            });
    }
    getPost(postId) {
        return Post
            .getOne(postId)
            .then(res => {
                return res.data;
            });
    }
    writePost({ title, text }) {
        return Post
            .create({
                title: title,
                text: text, 
                authorId: this.id})
            .then(res => {
                return res.data.post;
            });
    }
    // P R O J E C T api
    getAllProjects() {
        return Project
            .getAllUserProjects(this.id)
            .then(res => {
                return res.data;
            });
    }

    getProject(projectId) {
        return Project
            .getOne(projectId)
            .then(res => {
                return res.data.message;
            });
    }
    createProject({ title, description}) {
        return Project
            .create({
                title: title,
                description: description,
                creatorId: this.id
            })
            .then(res => {
                return res.data.project;
            });
    }
}
