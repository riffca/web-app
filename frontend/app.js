import './style.scss';
//D E P E N D E C I E S
import vueRouter from 'vue-router';
Vue.use(vueRouter);

import vueAsyncData from 'vue-async-data';
Vue.use(vueAsyncData);

import vueResource from 'vue-resource';
Vue.use(vueResource);

// import vueMoment from 'vue-moment';
// Vue.use(vueMoment);

//I T E R C E P T O R S
import interceptors from './service/interceptors';
Vue.http.interceptors.push(interceptors);

let rootComponent = Vue.extend(require('./view/root/root.vue'));

let router = new vueRouter({
    history: false
});

import routeMap from './view/router'; 
import authService from 'service/auth';

router.beforeEach(({to, next, redirect})=>{
	let isAuthUser = authService.checkAuth();
	if(!isAuthUser && to.auth){
		redirect('/auth/login');
		return;
	}
	if(isAuthUser && !to.auth){
		redirect('/profile');
	    return;
	}
	next();
});

router
    .map(routeMap)
    .start(rootComponent, '#application', () => {
        console.log('Приложение работает');
    });
