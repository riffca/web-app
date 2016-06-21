О П И С А Н И Е
В root получаем ссылки на app и user в момент asyncData.
<template>
	  <brand-root></brand-root>
    <router-view :user="user"></router-view>
    <basket-root :basket="userBasket"></basket-root>
    {{ user | json }}
</template>

<script>
//html части
import BasketRoot from './basket.root';
import BrandRoot from './brand.root';

//классы

import App from '../../class/app';
import User from '../../class/user';
import Basket from '../../class/basket';

export default {
  components:{
    BasketRoot,
  	BrandRoot
  }, 
  replace: false,
  data () {
    return {
      name: "Web App",
      app: '',
      user: '',
      userBasket:''
    };
  },
  asyncData(resolve, reject){
    Vue.http('/api/user').then(response=>{
      //Objects
      let user = new User(response.data);
      let app = new App({user: user});
      //Logging
      //вложенный объект user не логгится как данные
      showdev('(app object)App',()=>{
        console.log(app);
      })
      showdev('(app object)User',()=>{
        console.log(user);
      });
      //Resolve
      resolve({
        user: user,
        userBasket:new Basket({
          items: []
        })
      })
      //Errors
    },err=>{console.log(err)});
  }
};
</script>

<style lang="sass">
#main-logo {
	display: inline-block;
}
</style>