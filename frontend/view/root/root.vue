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
import jsonHelper from '../../help/json';

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
      brand: "Web App",
      basket: '',
      app: '',
      user: ''
    };
  },
  asyncData(resolve, reject){
    //Создаем приложение
    let app = new App();
/*    app.authCheck().then(data=>{

    });*/
    logger('(Create app object)App',()=>{
      console.log(jsonHelper(app));
    })
    resolve({
      app: app
    })
    //Получаем пользователя
    app.getUser().then(response=>{
        let user = new User(response.data)
        app.user = user;
        resolve({
          user: user,
          app: app
        });
        //Logger
        logger('(Create app object)User',()=>{
          console.log(jsonHelper(user)); 
        });  

    }, err => {logger(err)});
  }
};
</script>

<style lang="sass">
</style>