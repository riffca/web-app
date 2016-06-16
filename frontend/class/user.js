import tokenService from '../service/token';

export default class User {
    constructor({ id, name, password, email, auth = false }) {

        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.auth = auth;

        //Процессы создания
        this.checkAuth().then((res) => {
            alert(res.data.authStatus);
        });
    }
    checkAuth() {
        let token = tokenService.getToken();
        if (!token) {
            return 'No Token Provided!';
        }
        Vue.http('/api/auth/check-user', {
            method: 'POST',
            data: { token: token }
        });
    }
    getUser() {
        
    }

}
