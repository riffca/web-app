import User from './user';
export default class Admin extends User {

	constructor({isAdmin}){
		this.isAdmin = isAdmin;
		this.name = 'riffca';
		this.email = 'riffca@ya.ru';
	}
	turnOnApplication(){
	}
	turnOffapplication(){
	}
	getUser(id){
	}
	addUser({name, password, email}){
	}
	deleteUser(){
	}
}