import tokenService from '../service/token';

export default class User {
    constructor({ id = 1 , 
                  name = "guest" , 
                  password = '', 
                  email = '', 
                  auth = false }) {

        this.id = id;
        this.name = name;
        this.auth = auth;
        this.password = password;
        this.email = email;

        //Процесс создания
        // this.checkAuth().then((res) => {
        //     showdev(res.data.authStatus);
        // });
    }
    checkAuth() {
        let token = tokenService.getToken();
        if (!token) {
            return 'No Token Provided!';
        }
        return Vue.http('/api/auth/check-user', {
            method: 'POST',
            data: { token: token }
        });
    }

    getUser() {
        return Vue.http('api/user');
    }
}
