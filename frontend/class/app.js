import tokenService from 'service/token';
import authService from 'service/auth';

import User from './user';
/**
/*
/*О П И С А Н И Е  П Р И Л О Ж Е Н И Я
/*
*/
export default class App {

    constructor(callback) {
        this.user = new User(callback);
        this.created = Date.now();
        this.hostPath = '';
    }
    checkAuth(){
        return authService.checkAuth();
    }
    /**
    /*
    /*Создание аккаунта
    /*
    */ 
    createAccount({
        username,
        email,
        password
    }){
        return Vue.http.post(this.hostPath + '/api/user/create-account',{
                username: username,
                email: email,
                password: password
            });
    }
    /**
    /*
    /*Вход в аккаунт
    /*
    */
    loginAccount({
        email,
        password
    }){
        return Vue.http.post(this.hostPath + '/api/user/login-account',{
                email: email,
                password: password
            }).then(res=>{
                tokenService.setToken(res.data.token);
                return res.data;
            });
    }
    logOut(){
        tokenService.deleteToken();
    }
    /**
    /*
    /*JWT token пользователя only
    /*
    */
    getAuthUser(){
        return Vue.http
        .get(this.hostPath + '/api/user/get-auth-user')
        .then(res=>{
            return res.data;
        });
    }
}
