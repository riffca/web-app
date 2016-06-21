import User from './user';
export default class Admin extends User {

	constructor({isAdmin}){
		this.isAdmin = isAdmin;

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