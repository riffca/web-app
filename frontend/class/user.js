import tokenService from '../service/token';
import Basket from './basket';

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
    createProject({brandName,}){
        let Project = new Project({
            brandName: brandName
        });  
    }
    sendMessage({ to, from, title, text }) {
        let message = new Message({
            to: to,
            from: from,
            title: title,
            text: text
        });
        return Vue.http
            .post('/api/user/send-message', message)
            .then(res => {
                return res.data.message;
            });
    }
    writePost({ title, text }) {
        let post = new Post({
            title: title,
            text: text
        });
        return Vue.http
            .post('/api/user/send-post', post)
            .then(res => {
                return res.data.post;
            });
    }
}
