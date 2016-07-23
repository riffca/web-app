import tokenService from './token';

export default class {
	checkAuth(router){
		let token = tokenService.getToken();
		if(!token){
			return false;
		} 
		return true;
	}
}