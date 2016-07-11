import tokenService from '../service/token';

export default class App {

    constructor(user = {}) {
        this.user = user;
        this.location = this.getLocation();
        this.created = Date.now('M-h');
        this.serverStatic = '';
        this.serverDynamic = '';
    }
    //A U T H 
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
    getUser(){
        return Vue.http
        .get(this.serverDynamic + '/api/user/get-current-user')
        .then(res=>{
            return res.data;
        });
    }

    getLocation(){
    	return 'Russia';
    }
}
