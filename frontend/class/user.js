import tokenService from '../service/token';
import Basket from './basket';

import Post from './post';
import Project from './project';
import Message from './message';

export default class User {
    constructor({
        id = 1,
        name = "guest",
        password = '',
        email = '',
        basket = '',
        auth = false
    }) {
        this.id = id;
        this.name = name;
        this.auth = auth;
        this.password = password;
        this.email = email;
        //this.basket = new Basket(basket);
    }

    selfGet() {
        return Vue.http('api/user/self-get');
    }

    isAuth() {
        let token = tokenService.getToken();
        return Vue.http
            .post('api/user/is-auth')
            .then(res => {
                if (!res.data.success) {
                    return false;
                }
                return true;
            });
    }

    // M E S S A G E api

    getMessageAll(){
        return Message
            .getAll()
            .then(res => {
                return res.data;
            });
    }
    getMessage(messageId){
        return Vue.http
            .get('/api/message/get-message/'+ messageId)
            .then(res => {
                return res.data;
            });
    }
    sendMessage({ to, from, title, text }) {
        let message = new Message({
            toUser: toUser,
            fromUser: fromUser,
            title: title,
            text: text
        });
        return Vue.http
            .post('/api/message/create-message', message)
            .then(res => {
                return res.data.message;
            });
    }

    // P O S T api

    getPostAll(){
        return Vue.http
            .get('/api/post/get-post/all')
            .then(res => {
                return res.data;
            });
    }
    getPost(postId){
        return Vue.http
            .get('/api/post/get-post/'+postId)
            .then(res => {
                return res.data;
            });
    }
    writePost({ title, text, author}) {
        let post = new Post({
            title: title,
            text: text,
            author: author
        });
        return Vue.http
            .post('/api/post/create-post', post)
            .then(res => {
                return res.data.post;
            });
    }

    // P R O J E C T api

    getProjectAll(){
        return Vue.http
            .get('/api/project/get-project/all')
            .then(res => {
                return res.data.message;
            });
    }

    getProject(projectId){
        return Vue.http
            .get('/api/project/get-project/'+projectId)
            .then(res => {
                return res.data.message;
            });
    }
    createProject({ title, description }) {
        let post = new Project({
            title: title,
            description: description
        });
        return Vue.http
            .post('/api/project/create-project', Project)
            .then(res => {
                return res.data.project;
            });
    }
}
