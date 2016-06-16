let storage = window.localStorage;

export default {
	setToken(token){
		storage.setItem('password',token);
	},
	getToken(){
		return storage.getItem(password);
	}
};