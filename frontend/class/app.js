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
            });
    }
    getUser(){
        return Vue.http.post(this.serverDynamic + '/api/user/get-current-user');
    }
    deleteAccout({email}){
        
    }

    //Функции получения
    getImage(path) {
        return this.find(path);
    }
    getDefaultUser(id = '') {
        return this.find('/api/user/getDefaultUser' + id);
    }
    getPost(path) {
        return this.find(path);
    }
    getMessage(path) {
        return this.find(path);
    }
    getGroup(path) {
        return this.find(path);
    }

    //Функции поиска
    findImage(path) {
        return this.find(path);
    }
    findUser(path) {
        return this.find(path);
    }
    findPost(path) {
        return this.find(path);
    }
    findMessage(path) {
        return this.find(path);
    }
    findGroup(path) {
        return this.find(path);
    }
    //Внутренний интерфейс
    find(string) {
    	return Vue.http(string);
    }
    getLocation(){
    	return 'Russia';
    }
}
