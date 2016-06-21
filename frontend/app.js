import './style.scss';
//D E P E N D E C I E S
import vueRouter from 'vue-router';
Vue.use(vueRouter);

import vueAsyncData from 'vue-async-data';
Vue.use(vueAsyncData);

import vueResource from 'vue-resource';
Vue.use(vueResource);

//I T E R C E P T O R S
import interceptors from './service/interceptors';
Vue.http.interceptors.push(interceptors);


let rootComponent = Vue.extend(require('./view/root/root.vue'));

let router = new vueRouter({
    history: false
});


import routeMap from './router'; 
router
    .map(routeMap)
    .start(rootComponent, '#application', () => {
        console.log('Приложение работает');
    });
