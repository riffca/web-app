О П И С А Н И Е
В root получаем ссылки на app и user в момент asyncData.
<template>
	  <part-brand></part-brand>
    <router-view :user="user"></router-view>
    <user-basket :basket="userBasket"></user-basket>
    {{ user | json }}
</template>

<script>
//html части
import userBasket from './view/user-basket';
import partBrand from './view/part-brand';

//классы
import App from './class/app';
import User from './class/user';
import Basket from './class/basket';


export default {
  components:{
    userBasket,
  	partBrand
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
    Vue.http('/api/user').then(data=>{
      let user = new User(data.user);
      let app = new App({user: user});
      resolve({
        user: data.user,
        userBasket:new Basket()
      })
    });
  }
};
</script>

<style lang="sass">
#main-logo {
	display: inline-block;
}
</style>