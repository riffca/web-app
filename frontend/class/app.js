import tokenService from '../service/token';
/**
/*
/*О П И С А Н И Е  П Р И Л О Ж Е Н И Я
/*
*/
export default class App {

    constructor(user = {}) {
        this.user = user;
        //this.location = this.getLocation();
        this.created = Date.now('M-h');
        this.serverStatic = '';
        this.serverDynamic = '';
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
        return Vue.http.post(this.serverDynamic + '/api/user/create-account',{
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
        return Vue.http.post(this.serverDynamic + '/api/user/login-account',{
                email: email,
                password: password
            }).then(res=>{
                tokenService.setToken(res.data.token);
                return res.data;
            });
    }
    /**
    /*
    /*JWT token пользователя only
    /*
    */
    getAuthUser(){
        return Vue.http
        .get(this.serverDynamic + '/api/user/get-auth-user')
        .then(res=>{
            return res.data;
        });
    }
}
