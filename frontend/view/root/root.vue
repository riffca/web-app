О П И С А Н И Е
В root получаем ссылки на app и user в момент asyncData.
<template>
	  <brand-root></brand-root>
    <router-view :user="user"></router-view>
    <basket-root :basket="basket"></basket-root>
    <user-root :user="user"></user-root>
</template>

<script>
//html части
import UserRoot from './user.root';
import BasketRoot from './basket.root';
import BrandRoot from './brand.root';

//классы
import App from '../../class/app';
import User from '../../class/user';

export default {
  components:{
    BasketRoot,
  	BrandRoot,
    UserRoot
  }, 
  replace: false,
  data () {
    return {
      name: "Web App",
      basket: '',
      app: '',
      user: ''
    };
  },
  asyncData(resolve, reject){
    Vue.http('/api/user').then(response=>{
      //Objects
      let user = new User(response.data);
      let app = new App({user: user});

      //вложенный объект user не логгится как данные
      logger('(app object)App',()=>{
        console.log(app);
      })
      logger('(app object)User',()=>{
        console.log(user);
      });
      //Resolve
      resolve({
        user: user,
        app: app,
        basket: user.basket
      })
      //Errors
    },err=>{console.log(err)});
  }
};
</script>

<style lang="sass">
</style>