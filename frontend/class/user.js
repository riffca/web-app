import tokenService from '../service/token';
import Basket from './basket';

export default class User {
    constructor({ id = 1 , 
                  name = "guest" , 
                  password = '', 
                  email = '',
                  basket = '',
                  auth = false }) {

        this.id = id;
        this.name = name;
        this.auth = auth;
        this.password = password;
        this.email = email;
        this.basket = new Basket(basket);

        //Процесс создания
        // this.checkAuth().then((res) => {
        //     logger(res.data.authStatus);
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
