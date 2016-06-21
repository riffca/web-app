export default class App {

    constructor({user}) {
        this.user = user;
        this.location = this.getLocation();
        this.created = Date.now;
    }
    //Функции получения
    getImage(path) {
        this.find(path);
    }
    getUser(path) {
        this.find(path);
    }
    getPost(path) {
        this.find(path);
    }
    getMessage(path) {
        this.find(path);
    }
    getGroup(path) {
        this.find(path);
    }

    //Функции поиска
    findImage(path) {
        this.find(path);
    }
    findUser(path) {
        this.find(path);
    }
    findPost(path) {
        this.find(path);
    }
    findMessage(path) {
        this.find(path);
    }
    findGroup(path) {
        this.find(path);
    }
    //Внутренний интерфейс
    find(string) {
    	return Vue.http(string);
    }
    getLocation(){
    	return 'Russia';
    }
}
