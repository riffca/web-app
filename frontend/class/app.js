import tokenService from '../service/token';

export default class App {

    constructor(user = {}) {
        this.user = user;
        this.location = this.getLocation();
        this.created = Date.now('M-h');
    }
    //Функции получения
    getImage(path) {
        return this.find(path);
    }
    getUser(id = '') {
        return this.find('/api/user' + id);
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
