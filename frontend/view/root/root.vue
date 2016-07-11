О П И С А Н И Е
В root получаем ссылки на app и user в момент asyncData.
<template>
	  <brand-root></brand-root>
    <router-view :user="user" :app="app"></router-view>
    <!-- <basket-root :basket="basket"></basket-root>
    <user-root :user="user"></user-root> -->
</template>

<script>
//helper
import jsonHelper from '../../helper/json';

//html части
import UserRoot from './user.root';
import BasketRoot from './basket.root';
import BrandRoot from './brand.root';

//классы
import App from '../../class/app';
import User from '../../class/user';

export default {
  replace: false,
  components:{
    BasketRoot,
    BrandRoot,
    UserRoot
  }, 
  data () {
    return {
      name: "Web App",
      basket: '',
      app: '',
      user: ''
    };
  },
  asyncData(resolve, reject){
    //Создаем приложение
    let app = new App();
    //Получаем пользователя
    app.getUser().then(response=>{
        let user = new User(response.data)
        app.user = user;
        resolve({
          user: user,
          app: app,
          basket: user.basket
        });
        //Logger
        logger('(Create app object)App',()=>{
          console.log(jsonHelper(app));
        })
        logger('(Create app object)User',()=>{
          console.log(jsonHelper(user)); 
        });  

    }, err => {logger(err)});
    // Vue.http('/api/user').then(response=>{
    //   //Objects
    //   let user = new User(response.data);
    //   let app = new App({user: user});

    //   //вложенный объект user не логгится как данные
    //   logger('(app object)App',()=>{
    //     console.log(app);
    //   })
    //   logger('(app object)User',()=>{
    //     console.log(user);
    //   });
    //   //Resolve
    //   resolve({
    //     user: user,
    //     app: app,
    //     basket: user.basket
    //   })
    //   //Errors
    // },err=>{console.log(err)});

  }
};
</script>

<style lang="sass">
</style>